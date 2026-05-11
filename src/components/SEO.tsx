import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    tags?: string[];
  };
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_URL = 'https://reachnationals.org';
const DEFAULT_OG_IMAGE = 'https://reachnationals.org/reachlog.png';

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  article,
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    const fullCanonical = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;

    document.title = title;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    setLink('canonical', fullCanonical);

    if (article) {
      setMeta(
        'meta[property="article:published_time"]',
        'property',
        'article:published_time',
        article.publishedTime,
      );
      if (article.modifiedTime) {
        setMeta(
          'meta[property="article:modified_time"]',
          'property',
          'article:modified_time',
          article.modifiedTime,
        );
      }
      setMeta('meta[property="article:author"]', 'property', 'article:author', article.author);
    }

    const scriptId = 'page-jsonld';
    document.querySelectorAll(`script[data-seo="${scriptId}"]`).forEach((n) => n.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', scriptId);
        script.text = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll(`script[data-seo="${scriptId}"]`).forEach((n) => n.remove());
    };
  }, [title, description, canonical, ogImage, ogType, article, jsonLd]);

  return null;
};

export default SEO;
