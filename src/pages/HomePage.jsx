import React from "react";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-36">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb absolute left-1/2 top-20 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-500/30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-2 lg:pb-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Software
              · AI · Automation
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
              <span className="gradient-text">Build what’s next.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Quantum Labs builds intelligent software, AI-powered systems, and
              digital products that help ambitious businesses move faster and
              scale with confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">Start a project →</a><a href="/work" className="rounded-xl border border-line px-5 py-3 text-sm font-semibold hover:bg-white/5">Explore our work</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[.2em] text-slate-500">
              <span>Modern architecture</span><span>AI-native</span><span>Cloud-ready</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="card relative aspect-square overflow-hidden rounded-[2rem] p-6 shadow-glow">
              <div className="absolute inset-0 grid-bg opacity-70" />
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/30 bg-violet-500/10 shadow-[0_0_100px_rgba(139,92,246,.35)]" />
              <div className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_8px_rgba(34,211,238,.25)]" />
              <div className="absolute right-[20%] top-[35%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_30px_8px_rgba(139,92,246,.3)]" />
              <div className="absolute bottom-[23%] left-[32%] h-3 w-3 rounded-full bg-white" />
              <div className="absolute bottom-[30%] right-[28%] h-3 w-3 rounded-full bg-cyan-200" />
              <svg className="absolute inset-0 h-full w-full opacity-30">
                <line x1="20%" y1="29%" x2="50%" y2="50%" stroke="white" />
                <line x1="80%" y1="36%" x2="50%" y2="50%" stroke="white" />
                <line x1="34%" y1="77%" x2="50%" y2="50%" stroke="white" />
                <line x1="72%" y1="70%" x2="50%" y2="50%" stroke="white" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  System intelligence
                </div>
                <div className="mt-1 font-display text-lg">
                  Connect · Reason · Execute
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-4 px-6 py-7 text-xs font-medium uppercase tracking-[.2em] text-slate-500">
          <span>Software engineering</span><span>AI &amp; automation</span><span>Digital products</span><span>Cloud systems</span><span>Integration</span>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm text-violet-300">WHY QUANTUM LABS</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Engineering with a point of view.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="card rounded-3xl p-7">
            <svg className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3 4 7v5c0 4.5 3.4 7.8 8 9 4.6-1.2 8-4.5 8-9V7l-8-4Z" stroke="currentColor" strokeWidth="1.7" />
              <path d="m8.5 12 2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="mt-8 text-xl font-semibold">Built for trust</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Secure foundations, clear ownership and systems your team can
              confidently operate.
            </p>
          </div>
          <div className="card rounded-3xl p-7">
            <svg className="h-7 w-7 text-violet-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 19h16M6 16V8m4 8V5m4 11v-3m4 3V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <h3 className="mt-8 text-xl font-semibold">Measured outcomes</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              We connect technical decisions to faster operations, better
              experiences and useful leverage.
            </p>
          </div>
          <div className="card rounded-3xl p-7">
            <svg className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7Zm10 0-3 6h6l-3-6ZM8 21h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="mt-8 text-xl font-semibold">Practical AI</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              We put emerging capabilities to work where they improve real
              workflows, not just demos.
            </p>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm text-cyan-300">OUR PROCESS</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">
                A clear path from idea to impact.
              </h2>
            </div>
            <a href="/about" className="text-sm font-semibold text-violet-300">How we work →</a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            <div className="border-t border-violet-400 pt-5">
              <span className="text-sm text-violet-300">01</span>
              <h3 className="mt-5 text-xl font-semibold">Discover</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Clarify goals, users, constraints and the highest-value
                opportunity.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <span className="text-sm text-violet-300">02</span>
              <h3 className="mt-5 text-xl font-semibold">Design</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Shape the experience, architecture and delivery plan together.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <span className="text-sm text-violet-300">03</span>
              <h3 className="mt-5 text-xl font-semibold">Build</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Ship in focused increments with feedback, testing and
                visibility.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <span className="text-sm text-violet-300">04</span>
              <h3 className="mt-5 text-xl font-semibold">Evolve</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Measure, improve and scale the system as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-violet-300">FEATURED WORK</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              Systems designed for the real world.
            </h2>
          </div>
          <a href="/work" className="text-sm font-semibold text-violet-300">View case studies →</a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <a href="/work" className="card rounded-3xl p-7 transition"><div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-cyan-300">AI platform</span><span className="text-slate-500">↗</span>
            </div>
            <h3 className="mt-20 text-2xl font-semibold">AI Operations Platform</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Connecting documents, workflows and business systems.
            </p></a><a href="/work" className="card rounded-3xl p-7 transition"><div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-violet-300">Fintech</span><span className="text-slate-500">↗</span>
            </div>
            <h3 className="mt-20 text-2xl font-semibold">
              Financial Services Platform
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Secure digital experiences for customers and operations.
            </p></a><a href="/work" className="card rounded-3xl p-7 transition"><div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-cyan-300">Automation</span><span className="text-slate-500">↗</span>
            </div>
            <h3 className="mt-20 text-2xl font-semibold">Enterprise Workflow</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Replacing manual processes with connected automation.
            </p></a>
        </div>
      </section>
      <section className="border-y border-line bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm text-cyan-300">INDUSTRIES WE SERVE</p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-lg text-slate-300 sm:grid-cols-3 lg:grid-cols-6">
            <a className="hover:text-white" href="/industries">Financial services</a><a className="hover:text-white" href="/industries">Healthcare</a><a className="hover:text-white" href="/industries">Retail</a><a className="hover:text-white" href="/industries">Logistics</a><a className="hover:text-white" href="/industries">Education</a><a className="hover:text-white" href="/industries">Professional services</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm text-violet-300">TECHNOLOGY STACK</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              The right tools for the job.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <span className="card rounded-xl px-4 py-4 text-sm text-slate-300">TypeScript</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">React</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">Laravel</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">.NET</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">Python</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">OpenAI</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">AWS</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">Docker</span><span className="card rounded-xl px-4 py-4 text-sm text-slate-300">PostgreSQL</span>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm text-violet-300">WHAT WE BUILD</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            Technology that moves your business forward.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a href="/services" className="card rounded-3xl p-7 transition"><svg className="h-8 w-8 text-cyan-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 5h16v14H4zM8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <div className="mt-10 text-sm text-slate-500">01</div>
            <h3 className="mt-3 text-2xl font-semibold">Software Engineering</h3>
            <p className="mt-3 text-slate-400">
              Reliable web platforms, enterprise applications, APIs and scalable
              architectures.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore service →</span></a>
          <a href="/solutions" className="card rounded-3xl p-7 transition"><svg className="h-8 w-8 text-violet-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <div className="mt-10 text-sm text-slate-500">02</div>
            <h3 className="mt-3 text-2xl font-semibold">AI &amp; Automation</h3>
            <p className="mt-3 text-slate-400">
              AI agents, intelligent workflows and automation that turn
              repetitive work into systems.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore solutions →</span></a>
          <a href="/services" className="card rounded-3xl p-7 transition"><svg className="h-8 w-8 text-cyan-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 4h12v16H6zM9 7h6M9 11h6M9 15h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <div className="mt-10 text-sm text-slate-500">03</div>
            <h3 className="mt-3 text-2xl font-semibold">Digital Products</h3>
            <p className="mt-3 text-slate-400">
              Customer-facing web and mobile products designed around real-world
              experiences.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore service →</span></a>
          <a href="/services" className="card rounded-3xl p-7 transition"><svg className="h-8 w-8 text-violet-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 18h16M6 15V9m4 6V5m4 10v-3m4 3V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <div className="mt-10 text-sm text-slate-500">04</div>
            <h3 className="mt-3 text-2xl font-semibold">Cloud &amp; DevOps</h3>
            <p className="mt-3 text-slate-400">
              Cloud architecture, deployment pipelines, observability and
              infrastructure that scales.
            </p>
            <span className="mt-7 inline-block text-sm text-violet-300">Explore service →</span></a>
        </div>
      </section>
      <section className="border-y border-line bg-white/[.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm text-cyan-300">AI THAT WORKS</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              From intelligent answers to intelligent action.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              We design AI systems that understand context, use tools, interact
              with business systems and execute meaningful workflows.
            </p>
            <a href="/solutions" className="mt-8 inline-block text-sm font-semibold text-violet-300">Explore AI solutions →</a>
          </div>
          <div className="card rounded-3xl p-6">
            <div className="space-y-3">
              <div className="rounded-xl border border-line p-4">
                <span className="text-xs text-slate-500">01</span>
                <div className="mt-1 font-semibold">Understand</div>
              </div>
              <div className="ml-8 rounded-xl border border-violet-400/20 bg-violet-400/10 p-4">
                <span className="text-xs text-violet-300">02</span>
                <div className="mt-1 font-semibold">Reason &amp; plan</div>
              </div>
              <div className="ml-16 rounded-xl border border-line p-4">
                <span className="text-xs text-slate-500">03</span>
                <div className="mt-1 font-semibold">Use tools</div>
              </div>
              <div className="ml-24 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <span className="text-xs text-cyan-300">04</span>
                <div className="mt-1 font-semibold">Execute workflow</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/5 p-8 text-center sm:p-16">
          <p className="text-sm uppercase tracking-[.2em] text-violet-300">
            Ready to build?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Your next system starts with a conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Tell us what you're building. We'll help turn the idea into a
            practical technology roadmap.
          </p>
          <a href="/contact" className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black">Start a conversation →</a>
        </div>
      </section>
    </main>
    
  );
}
