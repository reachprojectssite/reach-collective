import { ArrowUpRight, Plus } from "lucide-react";

const RSVP_URL = "https://luma.com/4dnkhnh5";
const SUMMIT_EMAIL = "summit@reachnationals.org";
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;700&display=swap";

const TAPE_ITEMS = ["Los Angeles", "1 PM - 6 PM PT", "Dec 5"];

const DETAILS = [
  { label: "Date", value: "December 5" },
  { label: "Time", value: "1 - 6 PM PT" },
  { label: "City", value: "Los Angeles" },
];

const SCHEDULE = [
  { time: "1:00", title: "Doors open" },
  {
    time: "1:45",
    title: "Panels begin",
    panels: [
      {
        title: "Entertainment Meets the Creator Economy",
        body: "What changes when Hollywood and creators chase the same audience.",
      },
      {
        title: "How Brands Are Targeting Gen Z",
        body: "How brands decide which creators to work with, and why.",
      },
    ],
  },
  { time: "3:30", title: "Break and networking", social: true },
  {
    time: "4:00",
    title: "Panels continue",
    panels: [
      {
        title: "Leadership & Entrepreneurship in the Digital Age",
        body: "Turning content into a career, a company, or both.",
      },
      {
        title: "Where Platforms Are Headed",
        body: "What's changing on the platforms creators depend on.",
      },
    ],
  },
  { time: "5:30", title: "Networking", social: true },
  { time: "6:00", title: "Close" },
];

const GUESTS = [
  { name: "REACH Nationals members", body: "Current chapter members. Register with your .edu email so we can confirm your school." },
  { name: "REACH Talent creators", body: "Creators signed to REACH Talent." },
  { name: "Creators", body: "Creators outside REACH Nationals and REACH Talent." },
  { name: "Brands", body: "Brand and agency marketers who work with creators." },
  { name: "Industry", body: "Managers, agents, platform staff, and others who work in the creator economy." },
];

const STEPS = [
  { title: "RSVP on Luma", body: "Choose the guest type that fits you." },
  { title: "We review it", body: "Spots are limited, and we read every RSVP." },
  { title: "Get the address", body: "Approved guests receive an email with the venue." },
];

const PHOTOS = [
  { src: "/images/Summit/24a1ea0a-5c36-4b54-b2b0-9b54e04028e5.webp", span: "col-span-2 row-span-2" },
  { src: "/images/Summit/original%20(4).webp", span: "" },
  { src: "/images/Summit/4ce0c3c4-4903-4b55-b6cc-070344dfcf1b.webp", span: "" },
  { src: "/images/Summit/5c62a245-e947-4191-ad85-c8e832ce609d.webp", span: "col-span-2 object-[center_15%]" },
];

const FAQS = [
  { q: "Where is it?", a: "In Los Angeles. We send the venue address to approved guests before the event." },
  { q: "Who's speaking?", a: "We're confirming the lineup now and will announce it on the RSVP page." },
  { q: "Does an RSVP guarantee a spot?", a: "No. Spots are limited and we review every RSVP. If you're approved, we'll email you." },
  { q: "I'm in a REACH chapter. How do I register?", a: "Choose REACH Nationals Member and use your .edu email so we can confirm your school." },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-summit-lime";

const Tape = () => {
  const run = [...TAPE_ITEMS, ...TAPE_ITEMS, ...TAPE_ITEMS, ...TAPE_ITEMS];
  return (
    <div aria-hidden="true" className="relative z-10 -mx-[5vw] w-[110vw] -rotate-[2.5deg] overflow-hidden bg-summit-lime py-2.5 text-summit-ink md:py-4">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[...run, ...run].map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap font-anton text-2xl uppercase tracking-wide md:text-4xl">
            <span className="px-5 md:px-8">/</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const RsvpBar = () => (
  <a
    href={RSVP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-between gap-4 bg-summit-lime px-6 py-5 text-summit-ink transition-colors hover:bg-white md:px-8 md:py-6 ${focusRing}`}
  >
    <span className="font-anton text-3xl uppercase tracking-wide md:text-5xl">Save your spot</span>
    <span className="flex items-center gap-1.5 whitespace-nowrap text-sm font-bold md:text-base">
      <span className="hidden sm:inline">RSVP on Luma</span>
      <ArrowUpRight aria-hidden="true" className="h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  </a>
);

const Summit = () => (
  <div className="bg-summit-ink font-space text-white">
    <link rel="stylesheet" href={FONTS_URL} />

    <section className="relative overflow-hidden bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[18vw] top-[16%] h-[62vw] w-[62vw] rounded-full border border-white/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-[6vw] top-[26%] h-[40vw] w-[40vw] rounded-full border border-white/10" />

      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 pb-6 pt-6 md:px-10 md:pb-8 md:pt-7">
        <p className="whitespace-nowrap text-xs font-bold tracking-[0.1em] text-white/75 md:text-sm md:tracking-[0.2em]">THE FIRST EVER / 2026</p>
        <a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 whitespace-nowrap bg-summit-lime px-4 py-2.5 text-sm font-bold text-summit-ink transition-colors hover:bg-white md:px-5 md:text-base ${focusRing}`}
        >
          RSVP on Luma
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>

      <Tape />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-14">
        <h1 className="font-anton uppercase text-white">
          <span className="block text-[calc((100vw-3rem)/6.56)] leading-[1.04] md:text-[calc((100vw-5rem)/6.56)] xl:text-[11.4rem]">REACH Nationals</span>
          <span className="block text-[calc((100vw-3rem)/3.06)] leading-[1.04] text-summit-lime md:text-[calc((100vw-5rem)/3.06)] xl:text-[24.5rem]">Summit</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl md:leading-snug">
          An afternoon of panels and networking for the next generation of creators, industry leaders, and students.
        </p>

        <dl className="mt-9 grid border-t-2 border-white sm:grid-cols-3">
          {DETAILS.map((d, i) => (
            <div
              key={d.label}
              className={`flex items-baseline justify-between gap-4 border-b border-white/25 py-3 sm:block sm:border-b-0 sm:py-5 ${i > 0 ? "sm:border-l sm:pl-6" : ""}`}
            >
              <dt className="text-xs font-bold tracking-[0.2em] text-summit-lime">{d.label.toUpperCase()}</dt>
              <dd className="font-anton text-4xl uppercase md:mt-1 lg:text-6xl">{d.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 sm:mt-2">
          <RsvpBar />
        </div>
      </div>
    </section>

    <section className="bg-summit-lime text-summit-ink">
      <div className="mx-auto grid max-w-[1280px] gap-6 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:items-end">
        <h2 className="whitespace-nowrap font-anton text-[13vw] uppercase leading-[1.08] text-summit-ink md:text-8xl lg:col-span-8 lg:text-[7.5rem]">
          One room.
          <br />
          One afternoon.
        </h2>
        <p className="max-w-md text-lg font-medium leading-relaxed md:text-xl lg:col-span-4 lg:justify-self-end">
          We're keeping the first Summit small on purpose. We review the guest list by hand, so you can talk to the people on stage after they step off it.
        </p>
      </div>
    </section>

    <section id="schedule" className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
        <h2 className="font-anton text-5xl uppercase text-white md:text-7xl">The afternoon</h2>
        <p className="max-w-sm text-white/70">Four panels with time to meet people between them. Speakers will be announced soon.</p>
      </div>

      <ol className="border-t-2 border-white">
        {SCHEDULE.map((item) => (
          <li key={item.time} className="grid grid-cols-[5.25rem_1fr] gap-x-4 border-b border-white/20 py-5 md:grid-cols-[12rem_1fr] md:gap-x-8 md:py-7">
            <p className={`font-anton text-4xl md:text-6xl ${item.social ? "text-summit-lime" : "text-white"}`}>
              {item.time}
              <span className="ml-1 font-space text-xs font-bold md:text-sm">PM</span>
            </p>
            <div className="self-center">
              <h3 className={`text-xl font-bold md:text-2xl ${item.social ? "text-summit-lime" : "text-white"}`}>{item.title}</h3>
              {item.panels && (
                <ul className="mt-5 grid gap-6 md:grid-cols-2 md:gap-8">
                  {item.panels.map((panel) => (
                    <li key={panel.title} className="border-l-2 border-summit-lime pl-4">
                      <p className="font-anton text-2xl uppercase leading-tight tracking-wide md:text-3xl">{panel.title}</p>
                      <p className="mt-2 text-white/70">{panel.body}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section className="border-t border-white/15">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-anton text-5xl uppercase text-white md:text-7xl">Who's in the room</h2>
          <dl className="mt-8">
            {GUESTS.map((g) => (
              <div key={g.name} className="border-t border-white/20 py-4">
                <dt className="text-lg font-bold">{g.name}</dt>
                <dd className="mt-1 text-white/70">{g.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-anton text-5xl uppercase text-white md:text-7xl">How to get in</h2>
          <ol className="mt-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5 border-t border-white/20 py-5">
                <span className="font-anton text-5xl leading-none text-summit-lime">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-white/70">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-3 inline-flex items-center gap-2 bg-summit-lime px-6 py-3.5 font-bold text-summit-ink transition-colors hover:bg-white ${focusRing}`}
          >
            RSVP on Luma
            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>

    <section className="border-t border-white/15">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-20">
          <h2 className="font-anton text-5xl uppercase leading-[1.08] text-white md:text-7xl">Built by REACH Nationals</h2>
          <p className="max-w-xl text-lg leading-relaxed text-white/75">
            We're a nonprofit network of 7,500 students at more than 200 universities. Our team has produced Pre-Coachella, Lollapalooza Creator House, and HiitHaus #NUFFSAID.
          </p>
        </div>
        <div className="grid auto-rows-[38vw] grid-cols-2 gap-2 md:auto-rows-[15rem] md:grid-cols-4 md:gap-3">
          {PHOTOS.map((photo) => (
            <img key={photo.src} src={photo.src} alt="Guests at a past REACH event" loading="lazy" decoding="async" className={`h-full w-full object-cover ${photo.span}`} />
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-white/15">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-anton text-5xl uppercase text-white md:text-7xl">Questions</h2>
          <p className="mt-4 max-w-sm text-white/70">
            Want to speak or partner with us? Email{" "}
            <a href={`mailto:${SUMMIT_EMAIL}`} className={`break-words font-medium text-summit-lime underline underline-offset-4 ${focusRing}`}>
              {SUMMIT_EMAIL}
            </a>
          </p>
        </div>
        <div className="border-b border-white/20 lg:col-span-7">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group border-t border-white/20">
              <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden ${focusRing}`}>
                {faq.q}
                <Plus aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-summit-lime transition-transform group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <p className="max-w-xl pb-5 text-white/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-summit-lime text-summit-ink">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10 md:py-20">
        <h2 className="font-anton text-6xl uppercase leading-[1.08] text-summit-ink md:text-8xl">
          See you
          <br />
          December 5
        </h2>
        <a
          href={RSVP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-summit-ink px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-summit-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-summit-ink"
        >
          RSVP on Luma
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    </section>
  </div>
);

export default Summit;
