import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Button,
  Heading,
} from "react-aria-components";
import { experience } from "../data/cv";
import Section from "./Section";

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-data-[expanded]:rotate-90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Where I've worked">
      <DisclosureGroup
        allowsMultipleExpanded
        defaultExpandedKeys={["OLX Group"]}
        className="space-y-3"
      >
        {experience.map((job) => (
          <Disclosure
            key={job.company}
            id={job.company}
            className="group rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm data-[expanded]:border-accent-500 data-[expanded]:shadow-sm"
          >
            <Heading>
              <Button
                slot="trigger"
                className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent-600"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-base font-semibold text-slate-900">
                      {job.company}
                    </span>
                    <span className="text-sm text-slate-600">{job.title}</span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-slate-500">
                    {job.period}
                  </p>
                </div>
                <ChevronIcon />
              </Button>
            </Heading>
            <DisclosurePanel className="border-t border-slate-100 px-5 pb-5 pt-4">
              {job.blurb && (
                <p className="text-sm leading-relaxed text-slate-700">
                  {job.blurb}
                </p>
              )}
              {job.roles && (
                <div className="space-y-5">
                  {job.roles.map((role) => (
                    <div key={role.team} className="border-l-2 border-accent-400 pl-4">
                      <div className="mb-2 flex flex-wrap items-baseline gap-x-3">
                        <h4 className="text-sm font-semibold text-slate-900">
                          {role.team}
                        </h4>
                        <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                          {role.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700">
                        {role.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {job.extras && (
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Additional contributions
                  </p>
                  <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700">
                    {job.extras.map((e) => (
                      <li key={e} className="flex gap-2">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </DisclosureGroup>
    </Section>
  );
}
