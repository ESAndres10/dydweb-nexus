"use client";

import { useEffect } from "react";

type ArticleViewTrackerProps = {
  title: string;
  slug: string;
  category: string;
};

export function ArticleViewTracker({ title, slug, category }: ArticleViewTrackerProps) {
  useEffect(() => {
    const key = `dydweb-view-${slug}`;
    const lastView = Number(window.sessionStorage.getItem(key) || 0);
    const now = Date.now();

    if (now - lastView < 30 * 60 * 1000) {
      return;
    }

    window.sessionStorage.setItem(key, String(now));

    void fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug,
        category,
        page: window.location.href,
        referrer: document.referrer,
        createdAt: new Date().toISOString(),
      }),
      keepalive: true,
    }).catch(() => undefined);
  }, [category, slug, title]);

  return null;
}
