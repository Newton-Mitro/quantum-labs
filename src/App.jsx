import React, { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import IndustriesPage from "./pages/IndustriesPage.jsx";
import InsightsPage from "./pages/InsightsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

const pages = {
  "/": {
    title: "Software, AI & Automation — QuantumLabs",
    Component: HomePage,
  },
  "/services": {
    title: "Services built around outcomes. — QuantumLabs",
    Component: ServicesPage,
  },
  "/solutions": {
    title: "Intelligent solutions for modern business. — QuantumLabs",
    Component: SolutionsPage,
  },
  "/industries": {
    title: "Technology shaped around your industry. — QuantumLabs",
    Component: IndustriesPage,
  },
  "/work": {
    title: "Selected work & product thinking. — QuantumLabs",
    Component: WorkPage,
  },
  "/about": {
    title: "About Quantum Labs — QuantumLabs",
    Component: AboutPage,
  },
  "/insights": {
    title: "Ideas for the systems we're building next. — QuantumLabs",
    Component: InsightsPage,
  },
  "/contact": {
    title: "Start a Project — QuantumLabs",
    Component: ContactPage,
  },
};

function getStoredTheme() {
  try {
    return window.localStorage.getItem("quantumlabs-theme") || "dark";
  } catch {
    return "dark";
  }
}

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

export default function App() {
  const [theme, setTheme] = useState(getStoredTheme);
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname),
  );
  const page = pages[path] || pages["/"];
  const Page = page.Component;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#07090d" : "#f4f7f6");
    try {
      window.localStorage.setItem("quantumlabs-theme", theme);
    } catch {
      // Theme still works for the current visit when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const handlePopState = () =>
      setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = page.title;
    window.scrollTo(0, 0);
  }, [page]);

  function handleNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target;
    const link = target instanceof Element ? target.closest("a") : null;
    if (
      !link ||
      (link.target && link.target !== "_self") ||
      link.hasAttribute("download")
    ) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.hash) return;

    const nextPath = normalizePath(url.pathname);
    if (!pages[nextPath]) return;

    event.preventDefault();
    if (nextPath === path) return;

    window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
    setPath(nextPath);
  }

  return (
    <div onClick={handleNavigation}>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Page />
      <Footer theme={theme} />
    </div>
  );
}
