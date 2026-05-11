import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import { renderMarkdown } from '@/lib/markdown';

const SITE_URL = 'https://reachnationals.org';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-16 left-0 right-0 h-[2px] bg-reach-gold origin-left z-40"
    />
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  const handleShare = async () => {
    const url = `${SITE_URL}/blog/${slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title, url });
        return;
      } catch {
        // fall through to copy
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!post) {
    return (
      <>
        <SEO
          title="Article not found | REACH Nationals Journal"
          description="The article you are looking for could not be found."
          canonical={`/blog/${slug ?? ''}`}
        />
        <section className="container mx-auto px-6 py-24 md:py-40 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-reach-goldDark">
            404
          </span>
          <h1 className="mt-4 font-grotesk text-4xl md:text-5xl font-bold text-reach-ink tracking-tight">
            Article not found
          </h1>
          <p className="mt-4 text-reach-ink/60">
            That article does not exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-reach-navy font-bold border-b-2 border-reach-gold pb-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to the journal
          </Link>
        </section>
      </>
    );
  }

  const canonical = `/blog/${post.slug}`;
  const ogImage = post.ogImage ?? `${SITE_URL}/reachlog.png`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [ogImage],
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate ?? post.publishedDate,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'REACH Nationals',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/reachlog.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${canonical}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${SITE_URL}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}${canonical}`,
      },
    ],
  };

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)) || p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | REACH Nationals Journal`}
        description={post.description}
        canonical={canonical}
        ogImage={ogImage}
        ogType="article"
        article={{
          publishedTime: post.publishedDate,
          modifiedTime: post.modifiedDate,
          author: post.author,
          tags: post.tags,
        }}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <ReadingProgress />

      <article className="bg-white">
        {/* Header */}
        <header className="bg-reach-offwhite border-b border-reach-border">
          <div className="container mx-auto px-6 py-10 md:py-16">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-ink/40 hover:text-reach-goldDark transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> The Journal
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-reach-goldDark">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-reach-ink/20" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-reach-ink/40">
                    {post.readingMinutes} min read
                  </span>
                </div>

                <h1 className="font-grotesk text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-reach-ink tracking-tight leading-[1.08]">
                  {post.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-reach-ink/55 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-10 pt-6 border-t border-reach-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-reach-navy text-white flex items-center justify-center font-grotesk font-bold text-sm">
                      RN
                    </div>
                    <div>
                      <div className="text-sm font-bold text-reach-ink">{post.author}</div>
                      <div className="text-xs text-reach-ink/40 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedDate)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-reach-ink/50 hover:text-reach-navy border border-reach-border bg-white px-4 py-2.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" /> Share
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-blog">{renderMarkdown(post.body)}</div>

            {/* Tags */}
            <div className="mt-16 pt-10 border-t border-reach-border">
              <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-reach-ink/30 mb-4">
                Filed under
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-reach-ink/60 bg-reach-cream/60 border border-reach-border px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div className="mt-10 p-7 md:p-8 border border-reach-border bg-reach-offwhite">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-reach-navy text-white flex items-center justify-center font-grotesk font-bold text-base shrink-0">
                  RN
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-1.5">
                    Written by
                  </div>
                  <div className="font-grotesk text-lg font-bold text-reach-ink">
                    {post.author}
                  </div>
                  <p className="mt-2 text-sm text-reach-ink/60 leading-relaxed">
                    The national chapter network for college creators. We publish playbooks and
                    educational guides on the business of being a creator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-reach-navy text-white py-16 md:py-20 border-t border-reach-navy">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.24em] text-reach-gold mb-5">
              Build with us
            </span>
            <h2 className="font-grotesk text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              Practice the work in person.
            </h2>
            <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              REACH chapters turn articles like this into reps. Contracts reviewed, brand pitches
              practiced, the business side of creating learned in a room with other creators.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/chapters"
                className="inline-flex items-center gap-2 bg-reach-gold text-reach-navy px-7 py-3.5 font-bold text-sm hover:bg-white hover:text-reach-navy transition-colors"
              >
                Explore chapters <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 font-bold text-sm hover:bg-white hover:text-reach-navy transition-colors"
              >
                Apply to REACH
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-14 md:py-20 bg-reach-offwhite border-t border-reach-border">
            <div className="container mx-auto px-6">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-reach-goldDark block mb-3">
                    Keep reading
                  </span>
                  <h2 className="font-grotesk text-2xl md:text-3xl font-bold text-reach-ink tracking-tight">
                    More from the Journal
                  </h2>
                </div>
                <Link
                  to="/blog"
                  className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-reach-ink hover:text-reach-goldDark transition-colors"
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-reach-border border border-reach-border">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group flex flex-col bg-white hover:bg-reach-cream/50 transition-colors p-6 md:p-7"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-goldDark">
                        {p.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-reach-ink/25">
                        {p.readingMinutes} min
                      </span>
                    </div>
                    <h3 className="font-grotesk text-lg md:text-xl font-bold text-reach-ink leading-snug tracking-tight group-hover:text-reach-goldDark transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-reach-ink/55 leading-relaxed line-clamp-3 flex-grow">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 text-xs text-reach-ink/40">
                      {formatDate(p.publishedDate)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default BlogPost;
