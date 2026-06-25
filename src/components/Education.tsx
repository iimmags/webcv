import { education } from "../data/cv";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 · Education" title="Where I studied">
      <ul className="space-y-3">
        {education.map((e) => (
          <li
            key={e.school}
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-slate-300 hover:shadow-sm"
          >
            <p className="text-base font-semibold text-slate-900">
              {e.school}
            </p>
            <p className="mt-1 text-sm text-slate-600">{e.degree}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-slate-500">
              {e.period}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
