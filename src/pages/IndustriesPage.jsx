import React from "react";

export default function IndustriesPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[.2em] text-violet-300">
          Industries
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">
          Technology shaped around your industry.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Every industry has different constraints. We combine engineering
          discipline with domain-aware product thinking.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">01</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Financial Services
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Secure digital banking, lending, payments, member platforms and
              financial operations.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">02</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Healthcare
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Digital experiences, workflow systems and data platforms designed
              around sensitive operations.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">03</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Retail &amp; E-commerce
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Commerce platforms, automation and customer experiences designed
              for growth.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">04</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">Logistics</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Operational systems that connect teams, assets, workflows and
              real-time information.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">05</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">Education</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Digital platforms that simplify administration, learning and
              engagement.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">06</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Professional Services
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Client portals, workflow automation and internal systems for
              knowledge-driven businesses.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a>
        </div>
      </section>
    </main>
    
  );
}
