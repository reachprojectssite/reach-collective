import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE =
  'REACH Nationals | National Collegiate Creator Economy Organization';
const DEFAULT_DESCRIPTION =
  'REACH Nationals is the national collegiate creator economy organization, with student-led chapters at dozens of universities training the next generation of creators, brand marketers, and creator-economy operators.';

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  '/about': {
    title: 'Our Story | REACH Nationals',
    description:
      'How REACH Nationals was built. The mission, the principles, the people behind the national collegiate creator economy organization.',
  },
  '/members': {
    title: 'Our Members | REACH Nationals',
    description:
      'The college creators, filmmakers, strategists, editors, designers, and founders building inside REACH chapters at universities across the country.',
  },
  '/chapters': {
    title: 'Our Chapters | REACH Nationals',
    description:
      'REACH chapters at universities across the country. Find a chapter near you, start one on your campus, or pioneer the network in a new city.',
  },
  '/summit': {
    title: 'REACH Summit 2026 | Los Angeles, December',
    description:
      'The REACH Summit is the flagship national gathering for the collegiate creator economy. Los Angeles, first week of December 2026.',
  },
  '/join': {
    title: 'Apply | REACH Nationals',
    description:
      'Join an existing REACH chapter, start a new chapter on your campus, or pioneer the network in a new city.',
  },
  '/contact': {
    title: 'Contact | REACH Nationals',
    description:
      'Get in touch with REACH Nationals. Chapter support, brand partnerships, press, and general inquiries.',
  },
  '/privacy': {
    title: 'Privacy Policy | REACH Nationals',
    description:
      'How REACH Nationals collects, uses, and protects information about visitors, applicants, members, and event attendees.',
  },
  '/terms': {
    title: 'Terms of Use | REACH Nationals',
    description: 'Terms of use for the REACH Nationals website, chapters, programs, and events.',
  },
  '/code-of-conduct': {
    title: 'Code of Conduct | REACH Nationals',
    description:
      'The standards of behavior expected of all REACH members, chapter leaders, advisors, sponsors, and event participants.',
  },
};

const RouteTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Blog routes manage their own title and meta via the <SEO /> component.
    if (location.pathname.startsWith('/blog')) return;

    const meta = PAGE_META[location.pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };

    document.title = meta.title;

    const desc = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);

    const ogTitle = document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.head.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const twTitle = document.head.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    const twDesc = document.head.querySelector<HTMLMetaElement>(
      'meta[name="twitter:description"]',
    );
    if (twDesc) twDesc.setAttribute('content', meta.description);
  }, [location.pathname]);

  return null;
};

export default RouteTitle;
