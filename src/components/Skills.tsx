import { skills } from "../data/cv";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title="What I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-white px-2.5 py-1 font-mono text-xs text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-accent-50 hover:text-accent-800 hover:ring-accent-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
