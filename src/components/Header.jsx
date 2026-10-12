import React, { useState } from "react";
import darkLogo from "../assets/images/logo-dark.jpeg";
import lightLogo from "../assets/images/logo-light.jpeg";

const links = [
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Insights", "/insights"],
];

function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 transition hover:border-violet-400 hover:text-white"
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "light"}
      title={`Switch to ${nextTheme} theme`}
      onClick={onToggle}
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.3 15.6A8.4 8.4 0 0 1 8.4 3.7 8.5 8.5 0 1 0 20.3 15.6Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

function NavigationLinks({ mobile = false, onNavigate }) {
  return links.map(([label, href]) => (
    <a
      className={
        mobile
          ? "block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
          : "transition hover:text-white"
      }
      href={href}
      key={href}
      onClick={onNavigate}
    >
      {label}
    </a>
  ));
}

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <nav
          className="glass flex items-center justify-between rounded-2xl px-4 py-3"
          aria-label="Main navigation"
        >
          <a
            href="/"
            className="flex items-center"
            aria-label="QuantumLabs home"
          >
            <img
              className="h-14 w-21 rounded-md object-contain"
              src={theme === "dark" ? darkLogo : lightLogo}
              alt=""
            />
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <NavigationLinks />
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/contact"
              className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-violet-100 sm:block"
            >
              Let's talk <span aria-hidden="true">→</span>
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 transition hover:border-violet-400 hover:text-white md:hidden"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div
            id="mobile-menu"
            className="glass mt-2 rounded-2xl p-3 md:hidden"
          >
            <NavigationLinks mobile onNavigate={() => setMenuOpen(false)} />
            <a
              className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's talk <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
