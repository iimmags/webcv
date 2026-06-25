import { Link } from "react-aria-components";
import { profile } from "../data/cv";

export default function Hero() {
  return (
    <header className="pt-16 pb-4 sm:pt-24 sm:pb-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <img
          src="https://github.com/iimmags.png?size=400"
          alt={profile.name}
          width={112}
          height={112}
          loading="eager"
          className="h-24 w-24 shrink-0 rounded-2xl object-cover shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5 sm:h-28 sm:w-28"
        />
        <div>
          <p className="font-mono text-sm font-medium text-accent-700">
            Hi, I'm
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            {profile.name}.
          </h1>
          <p className="mt-3 text-lg text-slate-600 sm:text-xl">
            {profile.title} · {profile.location}
          </p>
        </div>
      </div>

      <p className="relative mt-8 text-base leading-relaxed text-slate-700 sm:text-lg">
        I build scalable, fast, accessible web apps across multi-market
        platforms.
        <br />
        Currently at <span className="font-semibold text-slate-900">OLX Group</span>.
      </p>

      <div className="relative mt-8 flex flex-wrap gap-3">
        <Link
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent-600/20 transition hover:bg-accent-700 data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-600 data-[focus-visible]:ring-offset-2"
        >
          Download CV
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-600 data-[focus-visible]:ring-offset-2"
        >
          LinkedIn
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-600 data-[focus-visible]:ring-offset-2"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
