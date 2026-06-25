import { profile } from "../data/cv";
import Section from "./Section";

export default function Summary() {
  return (
    <Section id="about" eyebrow="01 · About" title="A bit about me">
      <p className="text-lg leading-relaxed text-slate-700">
        {profile.summary}
      </p>
    </Section>
  );
}
