import React from "react";
import darkLogo from "../assets/images/logo-dark.jpeg";
import lightLogo from "../assets/images/logo-light.jpeg";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Solutions", "/solutions"],
      ["Work", "/work"],
      ["Insights", "/insights"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Industries", "/industries"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer({ theme }) {
  return (
    <footer className="site-footer border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" aria-label="QuantumLabs home">
              <img
                className="h-20 w-30 rounded-md object-contain"
                src={theme === "dark" ? darkLogo : lightLogo}
                alt=""
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Software, AI, and automation built around the work that matters.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-semibold">{group.title}</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                {group.links.map(([label, href]) => (
                  <a
                    className="block transition hover:text-white"
                    href={href}
                    key={href}
                  >
                    {label}
                  </a>
                ))}
                {group.title === "Company" && (
                  <span className="block">Canada</span>
                )}
              </div>
            </div>
          ))}
          <div>
            <h2 className="font-semibold">Start a conversation</h2>
            <a
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              href="/contact"
            >
              Tell us what you're building <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 QuantumLabs.tech. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
