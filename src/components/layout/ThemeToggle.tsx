"use client";

import React, { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

function getSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "dark";
}

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignora erro caso localStorage esteja desabilitado
    }

    window.dispatchEvent(new Event("storage"));
  };

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100"
      aria-label={
        theme === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro"
      }
      title={
        theme === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro"
      }
    >
      {theme === "dark" ? (
        // Ícone Sol
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Ícone Lua
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
