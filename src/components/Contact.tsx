import { Link } from "react-aria-components";
import { profile } from "../data/cv";
import Section from "./Section";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "inesmmagalhaes", href: profile.linkedin },
  { label: "GitHub", value: "iimmags", href: profile.github },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06 · Contact" title="Get in touch">
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-baseline justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-accent-300 hover:bg-accent-50/40 data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-600"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wide text-slate-500 group-hover:text-accent-700">
                {item.label}
              </span>
              <span className="text-sm font-medium text-slate-900">
                {item.value}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
