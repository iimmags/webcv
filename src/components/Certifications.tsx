import { certifications } from "../data/cv";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 · Certifications"
      title="What I've learned"
    >
      <ul className="space-y-3">
        {certifications.map((c) => (
          <li
            key={`${c.name}-${c.year}`}
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-slate-300 hover:shadow-sm"
          >
            <p className="text-base font-semibold text-slate-900">{c.name}</p>
            <p className="mt-1 text-sm text-slate-600">{c.issuer}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-slate-500">
              {c.year}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
