import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';

const SITE_URL = 'https://reachnationals.org';

const formatLongDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const formatShortDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

const ALL = 'All topics';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Blog = () => {
  const sorted = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
      ),
    [],
  );

  const categories = useMemo(
    () => Array.from(new Set(sorted.map((p) => p.category))),
    [sorted],
  );

  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return sorted;
    return sorted.filter((p) => p.category === activeCategory);
  }, [activeCategory, sorted]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  const latestDate = sorted[0]?.publishedDate;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The REACH Journal',
    description:
      'Practical playbooks and educational guides on the collegiate creator economy, written by REACH Nationals.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'REACH Nationals',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/reachlog.png` },
    },
    blogPost: sorted.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.publishedDate,
      author: { '@type': 'Organization', name: p.author },
    })),
  };

  return (
    <>
      <SEO
        title="The REACH Journal | Creator Economy Guides for College Creators"
        description="Practical playbooks and educational guides on the collegiate creator economy. Written by REACH Nationals for the next generation of creators."
        canonical="/blog"
        jsonLd={jsonLd}
      />

      {/* Masthead */}
      <section className="bg-white border-b border-reach-border">
        <div className="container mx-auto px-6 pt-14 md:pt-20 pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            {/* Masthead bar */}
            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 mb-10 pb-5 border-b border-reach-border">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-reach-goldDark">
                  The REACH Journal
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-reach-ink/30">
                  Vol. 01
                </span>
              </div>
              <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-reach-ink/40 font-medium">
                <span>{sorted.length} articles</span>
                <span className="w-px h-3 bg-reach-border" />
                <span>
                  Updated{' '}
                  {latestDate
                    ? new Date(latestDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                      })
                    : ''}
                </span>
              </div>
            </div>

            <h1 className="font-grotesk text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-reach-ink tracking-[-0.02em] leading-[0.95]">
              Honest writing
              <br />
              on the business of
              <br />
              <span className="text-reach-goldDark italic font-serif font-normal">being a creator.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-reach-ink/55 leading-relaxed max-w-2xl">
              Educational guides from REACH Nationals. No gurus, no growth hacks, no fabricated
              case studies. The things college creators actually have to figure out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Topic filter */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-reach-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 py-4 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-reach-ink/40 shrink-0">
              Topics
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              {[ALL, ...categories].map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 text-xs font-bold uppercase tracking-[0.14em] px-3.5 py-2 transition-colors ${
                      active
                        ? 'bg-reach-ink text-white'
                        : 'text-reach-ink/55 hover:text-reach-ink hover:bg-reach-cream/60'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-reach-offwhite border-b border-reach-border">
          <div className="container mx-auto px-6 py-14 md:py-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-reach-goldDark">
                Latest Article
              </span>
              <span className="flex-1 h-px bg-reach-border" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/35">
                {formatLongDate(featured.publishedDate)}
              </span>
            </div>

            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left rail */}
                <div className="lg:col-span-3 lg:sticky lg:top-32">
                  <div className="flex lg:flex-col gap-6 lg:gap-8">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/35 mb-2">
                        Category
                      </span>
                      <span className="text-sm font-bold text-reach-goldDark uppercase tracking-wider">
                        {featured.category}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/35 mb-2">
                        Read time
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-reach-ink">
                        <Clock className="w-3.5 h-3.5 text-reach-goldDark" />
                        {featured.readingMinutes} min
                      </span>
                    </div>
                    <div className="hidden lg:block">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/35 mb-2">
                        By
                      </span>
                      <span className="text-sm font-bold text-reach-ink">{featured.author}</span>
                    </div>
                  </div>
                </div>

                {/* Article */}
                <div className="lg:col-span-9">
                  <h2 className="font-grotesk text-[2rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-reach-ink tracking-[-0.02em] leading-[1.02] group-hover:text-reach-goldDark transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-7 text-lg md:text-xl text-reach-ink/55 leading-relaxed max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <div className="mt-10 inline-flex items-center gap-3 text-reach-ink font-bold text-sm uppercase tracking-[0.14em]">
                    <span className="border-b-2 border-reach-gold pb-1 group-hover:border-reach-ink transition-colors">
                      Read the article
                    </span>
                    <ArrowRight className="w-4 h-4 text-reach-goldDark group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="bg-white py-14 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex items-end justify-between gap-6 mb-12 pb-6 border-b border-reach-border">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-reach-goldDark block mb-3">
                  In this issue
                </span>
                <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-reach-ink tracking-tight">
                  {activeCategory === ALL ? 'More from the Journal' : activeCategory}
                </h2>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-reach-ink/35 pb-2">
                {String(rest.length).padStart(2, '0')} {rest.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            <motion.div
              key={activeCategory}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-reach-border border border-reach-border"
            >
              {rest.map((post, idx) => (
                <motion.article key={post.slug} variants={item}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-white hover:bg-reach-cream/40 transition-colors p-7 md:p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-grotesk text-2xl font-bold text-reach-ink/15 tabular-nums leading-none">
                        {String(idx + 2).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-reach-goldDark">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="font-grotesk text-xl md:text-2xl font-bold text-reach-ink leading-[1.18] tracking-tight group-hover:text-reach-goldDark transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[15px] text-reach-ink/55 leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-7 pt-5 border-t border-reach-border flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-reach-ink/40 font-medium">
                        <span>{formatShortDate(post.publishedDate)}</span>
                        <span className="w-px h-2.5 bg-reach-border" />
                        <span>{post.readingMinutes} min</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-reach-ink/25 group-hover:text-reach-goldDark group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Empty state when filter has no rest */}
      {filtered.length === 1 && featured && (
        <section className="bg-white py-14">
          <div className="container mx-auto px-6 text-center text-reach-ink/50 text-sm">
            Only one article in this topic so far. More are on the way.
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-reach-navy text-white py-16 md:py-24 border-t border-reach-navy">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.28em] text-reach-gold mb-5">
                Join the network
              </span>
              <h2 className="font-grotesk text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] text-white">
                The conversations behind these articles happen in our chapters.
              </h2>
              <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-xl">
                REACH chapters meet on dozens of campuses to practice the work. Brand deals,
                contracts, production, and the business side of being a creator.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/chapters"
                className="inline-flex items-center gap-2 bg-reach-gold text-reach-navy px-6 py-3.5 font-bold text-sm hover:bg-white transition-colors"
              >
                Find your chapter <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 font-bold text-sm hover:bg-white hover:text-reach-navy transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
