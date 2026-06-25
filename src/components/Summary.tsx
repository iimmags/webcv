import { profile } from "../data/cv";
import Section from "./Section";

export default function Summary() {
  return (
    <Section id="about" title="About">
      <p className="text-lg leading-relaxed text-slate-700">
        {profile.summary}
      </p>
    </Section>
  );
}
