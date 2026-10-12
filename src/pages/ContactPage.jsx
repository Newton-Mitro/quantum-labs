import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-36">
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[.2em] text-violet-300">
              Let's build
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
              Tell us what you're building.
            </h1>
            <p className="mt-6 leading-8 text-slate-400">
              Have a new product, an automation opportunity, or an old system
              that needs a better future? Start the conversation.
            </p>
            <div className="mt-10 space-y-5 text-sm text-slate-400">
              <div>
                <span className="text-slate-500">Based in</span>
                <br />
                <strong className="text-white">Canada</strong>
              </div>
              <div>
                <span className="text-slate-500">Focus</span>
                <br />
                <strong className="text-white">
                  Software · AI · Automation
                </strong>
              </div>
            </div>
          </div>
          <form
            className="card rounded-3xl p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-line bg-black/20 px-4 py-3 outline-none focus:border-violet-400"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-line bg-black/20 px-4 py-3 outline-none focus:border-violet-400"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm">
              What do you need?
              <select className="mt-2 w-full rounded-xl border border-line bg-black/20 px-4 py-3 outline-none focus:border-violet-400">
                <option>New software</option>
                <option>AI solution</option>
                <option>Automation</option>
                <option>Mobile application</option>
                <option>System modernization</option>
              </select>
            </label>
            <label className="mt-5 block text-sm">
              Project details
              <textarea
                required
                rows={6}
                className="mt-2 w-full rounded-xl border border-line bg-black/20 px-4 py-3 outline-none focus:border-violet-400"
                placeholder="Tell us about your goals, users and timeline..."
                defaultValue={""}
              />
            </label>
            <button className="mt-5 w-full rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-violet-100">
              Send inquiry →
            </button>
            <div
              id="sent"
              className={`mt-4 ${submitted ? "" : "hidden"} rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200`}
            >
              Thanks — your inquiry has been captured in this demo UI.
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
