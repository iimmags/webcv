import { certifications } from "../data/cv";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-3 sm:grid-cols-2">
        {certifications.map((c) => (
          <li
            key={`${c.name}-${c.year}`}
            className="flex items-baseline justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">{c.name}</p>
              <p className="text-xs text-slate-600">{c.issuer}</p>
            </div>
            <span className="text-xs uppercase tracking-wide text-slate-500">
              {c.year}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
