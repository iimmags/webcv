import { education } from "../data/cv";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        {education.map((e) => (
          <li
            key={e.school}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-base font-semibold text-slate-900">{e.school}</p>
            <p className="mt-1 text-sm text-slate-700">{e.degree}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
              {e.period}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
