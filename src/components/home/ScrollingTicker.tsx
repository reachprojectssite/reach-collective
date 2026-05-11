const items = [
  'TikTokers', 'Filmmakers', 'Founders', 'Photographers',
  'Athletes', 'Podcasters', 'Designers', 'DJs',
  'Marketers', 'Editors', 'Campus Leaders', 'Visionaries',
  'Storytellers', 'Brand Builders',
];

const dot = (
  <span className="mx-5 text-reach-gold/60 select-none" aria-hidden>✦</span>
);

const ScrollingTicker = () => {
  const doubled = [...items, ...items];
  return (
    <div className="bg-reach-navy border-y border-reach-navy overflow-hidden py-3.5 select-none">
      <div className="flex whitespace-nowrap">
        <div className="flex flex-shrink-0 animate-marquee">
          {[...doubled, ...doubled].map((item, i) => (
            <span key={i} className="inline-flex items-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              {item}{dot}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
