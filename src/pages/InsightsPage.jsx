import React from "react";

export default function InsightsPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[.2em] text-violet-300">
          Insights
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">
          Ideas for the systems we're building next.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          A future-ready editorial space for practical thinking about AI,
          software engineering, automation and digital products.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">AI</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Designing AI agents that actually execute work
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              A practical framework for connecting LLM reasoning with tools,
              permissions and business workflows.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">ENGINEERING</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Architecture for software that keeps changing
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              How modular boundaries and clear contracts help products evolve
              without constant rewrites.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">AUTOMATION</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Finding the highest-value automation opportunities
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              A simple way to identify repetitive workflows where automation can
              create real leverage.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">PRODUCT</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              From idea to production system
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Why the path from prototype to reliable product requires more than
              writing code.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a>
        </div>
      </section>
    </main>
    
  );
}
