import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-6 sm:py-8">
      <div className="mb-4 flex items-baseline gap-1">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-600" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-700">
          {eyebrow}
        </p>
      </div>
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
