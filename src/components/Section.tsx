import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-6 sm:py-8">
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
