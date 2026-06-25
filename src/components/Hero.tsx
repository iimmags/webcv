import { Link } from "react-aria-components";
import { profile } from "../data/cv";

export default function Hero() {
  return (
    <header className="pt-16 pb-8 sm:pt-24 sm:pb-12">
      <p className="mb-3 text-sm font-medium text-slate-500">Hi, I'm</p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        {profile.name}.
      </h1>
      <p className="mt-4 text-xl text-slate-600 sm:text-2xl">
        {profile.title} · {profile.location}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
        I build scalable, fast, accessible web apps across multi-market
        platforms. Currently at <span className="font-semibold">OLX Group</span>.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-900 data-[focus-visible]:ring-offset-2"
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
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-900 data-[focus-visible]:ring-offset-2"
        >
          LinkedIn
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-900 data-[focus-visible]:ring-offset-2"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
