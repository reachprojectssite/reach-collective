import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalPage = ({ eyebrow, title, lastUpdated, children }: LegalPageProps) => (
  <div className="bg-white">
    <section className="pt-10 pb-8 md:pt-16 md:pb-10 bg-reach-offwhite border-b border-reach-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-reach-goldDark mb-6">
            <span className="w-5 h-px bg-reach-gold" />
            {eyebrow}
          </span>
          <h1 className="font-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-reach-ink leading-[1.05] mb-4">
            {title}
          </h1>
          <p className="text-reach-ink/45 text-sm">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-8 text-reach-ink/75 leading-relaxed"
        >
          {children}
        </motion.div>
      </div>
    </section>
  </div>
);

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h2 className="font-grotesk text-xl md:text-2xl font-bold text-reach-ink mb-3">
      {title}
    </h2>
    <div className="space-y-3 text-base">{children}</div>
  </div>
);

export const LegalList = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-1.5">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default LegalPage;
