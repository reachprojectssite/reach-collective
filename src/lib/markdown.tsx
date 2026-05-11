import { Link } from 'react-router-dom';
import { Fragment, type ReactNode } from 'react';

const renderInline = (text: string, keyPrefix: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let i = 0;

  const tokenRegex =
    /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/;

  while (remaining.length > 0) {
    const match = tokenRegex.exec(remaining);
    if (!match) {
      nodes.push(remaining);
      break;
    }
    if (match.index > 0) {
      nodes.push(remaining.slice(0, match.index));
    }
    const [whole, , bold, italic, code, linkText, linkHref] = match;
    if (bold !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`} className="font-semibold text-reach-ink">
          {bold}
        </strong>,
      );
    } else if (italic !== undefined) {
      nodes.push(
        <em key={`${keyPrefix}-i-${i}`} className="italic text-reach-ink/80">
          {italic}
        </em>,
      );
    } else if (code !== undefined) {
      nodes.push(
        <code
          key={`${keyPrefix}-c-${i}`}
          className="px-1.5 py-0.5 bg-reach-cream/70 text-reach-navy rounded text-[0.9em] font-mono"
        >
          {code}
        </code>,
      );
    } else if (linkText !== undefined && linkHref !== undefined) {
      const isExternal = /^https?:\/\//.test(linkHref);
      if (isExternal) {
        nodes.push(
          <a
            key={`${keyPrefix}-a-${i}`}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-reach-navy underline decoration-reach-gold decoration-2 underline-offset-[3px] hover:decoration-reach-navy transition-colors"
          >
            {linkText}
          </a>,
        );
      } else {
        nodes.push(
          <Link
            key={`${keyPrefix}-a-${i}`}
            to={linkHref}
            className="text-reach-navy underline decoration-reach-gold decoration-2 underline-offset-[3px] hover:decoration-reach-navy transition-colors"
          >
            {linkText}
          </Link>,
        );
      }
    }
    remaining = remaining.slice(match.index + whole.length);
    i++;
  }
  return nodes;
};

export const renderMarkdown = (markdown: string): ReactNode => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];

  let i = 0;
  let blockKey = 0;
  let firstH1Seen = false;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith('# ')) {
      if (!firstH1Seen) {
        firstH1Seen = true;
        i++;
        continue;
      }
      blocks.push(
        <h1
          key={`h1-${blockKey++}`}
          className="font-grotesk text-3xl md:text-4xl font-bold text-reach-ink mt-16 mb-6 tracking-tight"
        >
          {renderInline(line.slice(2), `h1-${blockKey}`)}
        </h1>,
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push(
        <h2
          key={`h2-${blockKey++}`}
          className="font-grotesk text-2xl md:text-3xl font-bold text-reach-ink mt-14 mb-4 tracking-tight leading-tight"
        >
          {renderInline(line.slice(3), `h2-${blockKey}`)}
        </h2>,
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(
        <h3
          key={`h3-${blockKey++}`}
          className="font-grotesk text-xl md:text-2xl font-semibold text-reach-ink mt-10 mb-3 tracking-tight"
        >
          {renderInline(line.slice(4), `h3-${blockKey}`)}
        </h3>,
      );
      i++;
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push(
        <ul
          key={`ul-${blockKey++}`}
          className="my-7 space-y-3 text-reach-ink/75 text-[1.0625rem] md:text-[1.125rem] leading-[1.75]"
        >
          {items.map((item, idx) => (
            <li key={idx} className="pl-6 relative">
              <span className="absolute left-0 top-[0.85em] w-2 h-px bg-reach-gold" />
              {renderInline(item, `li-${blockKey}-${idx}`)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(
        <ol
          key={`ol-${blockKey++}`}
          className="my-7 space-y-3 text-reach-ink/75 text-[1.0625rem] md:text-[1.125rem] leading-[1.75] list-decimal pl-6 marker:text-reach-gold marker:font-bold"
        >
          {items.map((item, idx) => (
            <li key={idx} className="pl-2">
              {renderInline(item, `oli-${blockKey}-${idx}`)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={`bq-${blockKey++}`}
          className="my-8 pl-6 border-l-2 border-reach-gold text-reach-ink/70 italic text-[1.0625rem] md:text-[1.125rem] leading-[1.75]"
        >
          {quoteLines.map((q, idx) => (
            <Fragment key={idx}>
              {renderInline(q, `bq-${blockKey}-${idx}`)}
              {idx < quoteLines.length - 1 && <br />}
            </Fragment>
          ))}
        </blockquote>,
      );
      continue;
    }

    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('#') &&
      !/^[-*]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].startsWith('> ')
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p
        key={`p-${blockKey++}`}
        className="my-6 text-reach-ink/75 text-[1.0625rem] md:text-[1.125rem] leading-[1.75]"
      >
        {renderInline(paraLines.join(' '), `p-${blockKey}`)}
      </p>,
    );
  }

  return <>{blocks}</>;
};
