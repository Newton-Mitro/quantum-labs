import React from "react";

export default function WorkPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[.2em] text-violet-300">
          Our work
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">
          Selected work &amp; product thinking.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          A future-ready portfolio can showcase the systems, products and
          transformations behind measurable business outcomes.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">CASE STUDY</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              AI Operations Platform
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              An intelligent operations layer connecting documents, workflows
              and business systems.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">CASE STUDY</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Financial Services Platform
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              A secure digital platform for customer accounts, transactions and
              operational workflows.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">CASE STUDY</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Enterprise Automation
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              A connected workflow system replacing repetitive manual processes
              with automation.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">CASE STUDY</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Customer Portal
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              A modern self-service experience that makes complex business
              services easier to access.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a>
        </div>
      </section>
    </main>
    
  );
}
