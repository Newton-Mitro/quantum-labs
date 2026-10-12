import React from "react";

export default function SolutionsPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[.2em] text-violet-300">
          Solutions
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">
          Intelligent solutions for modern business.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Move beyond disconnected tools. We build intelligent systems that
          connect data, people, software and automation.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">01</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">AI Agents</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Purpose-built agents that can understand context, reason, use
              tools and execute business workflows.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">02</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Business Automation
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Automate repetitive operational processes while keeping people in
              control of critical decisions.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">03</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Intelligent Documents
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Extract, classify, validate and route information from documents
              at scale.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">04</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Enterprise Platforms
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Centralize complex business workflows in secure, scalable digital
              platforms.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">05</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Customer Experiences
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Build portals and digital products that make complex services
              simple for customers.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a><a href="/contact" className="card rounded-3xl p-7 transition"><div className="text-xs text-slate-500">06</div>
            <h2 className="mt-14 font-display text-2xl font-semibold">
              Data &amp; Analytics
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Turn operational data into dashboards, insights and decision-ready
              information.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore →</span></a>
        </div>
      </section>
    </main>
    
  );
}
