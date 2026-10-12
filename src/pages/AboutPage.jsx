import React from "react";

export default function AboutPage() {
  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-sm uppercase tracking-[.2em] text-violet-300">
          About Quantum Labs
        </p>
        <h1 className="mt-4 max-w-5xl font-display text-5xl font-semibold sm:text-7xl">
          Technology with purpose.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          Quantum Labs is a Canada-based software and AI technology company
          focused on helping organizations turn ambitious ideas into reliable
          digital products and intelligent business systems.
        </p>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <div className="card rounded-3xl p-7">
            <div className="text-4xl font-display">01</div>
            <h3 className="mt-12 text-xl font-semibold">Think clearly</h3>
            <p className="mt-3 text-slate-400">
              Start with the business problem, not the technology trend.
            </p>
          </div>
          <div className="card rounded-3xl p-7">
            <div className="text-4xl font-display">02</div>
            <h3 className="mt-12 text-xl font-semibold">Engineer deeply</h3>
            <p className="mt-3 text-slate-400">
              Build secure, maintainable systems that can evolve.
            </p>
          </div>
          <div className="card rounded-3xl p-7">
            <div className="text-4xl font-display">03</div>
            <h3 className="mt-12 text-xl font-semibold">Scale responsibly</h3>
            <p className="mt-3 text-slate-400">
              Use automation and AI where they create measurable leverage.
            </p>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm text-cyan-300">OUR MISSION</p>
              <h2 className="mt-3 font-display text-4xl font-semibold">
                Make advanced technology practical.
              </h2>
            </div>
            <p className="leading-8 text-slate-400">
              We believe good technology should remove complexity rather than
              add to it. Our work combines product thinking, software
              engineering and emerging AI capabilities to create systems people
              can actually use and businesses can confidently operate.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-4xl font-semibold">How we work</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <div className="card rounded-2xl p-6">
            <b>Discover</b>
            <p className="mt-2 text-sm text-slate-400">
              Understand goals and constraints.
            </p>
          </div>
          <div className="card rounded-2xl p-6">
            <b>Design</b>
            <p className="mt-2 text-sm text-slate-400">
              Create the experience and architecture.
            </p>
          </div>
          <div className="card rounded-2xl p-6">
            <b>Build</b>
            <p className="mt-2 text-sm text-slate-400">
              Ship incrementally and safely.
            </p>
          </div>
          <div className="card rounded-2xl p-6">
            <b>Evolve</b>
            <p className="mt-2 text-sm text-slate-400">
              Measure, improve and scale.
            </p>
          </div>
        </div>
      </section>
      <section id="team" className="border-y border-line bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[.2em] text-violet-300">
              Team members
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">
              The people behind the systems.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              A focused team of builders bringing product thinking, software
              engineering and AI expertise together around the problem that
              needs solving.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card rounded-2xl p-6 lg:col-span-2">
              <div className="team-avatar grid h-24 w-24 place-items-center rounded-3xl text-3xl font-semibold text-white">
                ATG
              </div>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-violet-300">
                Founder &amp; CEO
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                Aldrin Thomas Gaine
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Leads Quantum Labs with a focus on practical software, AI and
                automation systems for ambitious organizations.
              </p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="team-avatar mb-6 grid h-14 w-14 place-items-center rounded-2xl text-xl font-semibold text-white">
                T
              </div>
              <svg className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 19h16M6 16V8m4 8V5m4 11v-3m4 3V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-cyan-300">
                Team member
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Tonmoy</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Product and strategy team member.
              </p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="team-avatar mb-6 grid h-14 w-14 place-items-center rounded-2xl text-xl font-semibold text-white">
                S
              </div>
              <svg className="h-7 w-7 text-violet-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-violet-300">
                Team member
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Sumon</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Software engineering team member.
              </p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="team-avatar mb-6 grid h-14 w-14 place-items-center rounded-2xl text-xl font-semibold text-white">
                R
              </div>
              <svg className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-cyan-300">
                Team member
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Raven</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                AI and automation team member.
              </p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="team-avatar mb-6 grid h-14 w-14 place-items-center rounded-2xl text-xl font-semibold text-white">
                N
              </div>
              <svg className="h-7 w-7 text-violet-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm8-4v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-violet-300">
                Team member
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Newton</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Delivery and partnership team member.
              </p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="team-avatar grid h-14 w-14 place-items-center rounded-2xl text-xl font-semibold text-white">
                B
              </div>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-cyan-300">
                Team member
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Bappy</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Quantum Labs team member.
              </p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="team-avatar grid h-14 w-14 place-items-center rounded-2xl text-xl font-semibold text-white">
                RR
              </div>
              <p className="mt-8 text-xs uppercase tracking-[.16em] text-cyan-300">
                Team member
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                Reza Rabbi
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Quantum Labs team member.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
