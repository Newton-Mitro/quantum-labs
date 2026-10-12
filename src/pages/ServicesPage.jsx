import React from "react";

export default function ServicesPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[.2em] text-violet-300">
          Capabilities
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">
          Services built around outcomes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          From product engineering to cloud infrastructure, we bring strategy,
          design and engineering together to build systems that last.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">01</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Software Development
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Custom web platforms, enterprise applications, APIs and robust
              system architecture.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/solutions" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">02</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              AI &amp; Automation
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              AI agents, LLM applications, workflow automation and intelligent
              document processing.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">03</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Mobile Development
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Cross-platform mobile applications with reliable APIs,
              authentication and delightful UX.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">04</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Cloud &amp; DevOps
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Cloud architecture, CI/CD, infrastructure, observability and
              production operations.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">05</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              System Integration
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Connect ERP, CRM, payments, data and legacy systems through secure
              integrations.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">06</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Legacy Modernization
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Incrementally replace fragile systems without putting business
              continuity at risk.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a>
        </div>
      </section>
    </main>
    
  );
}
