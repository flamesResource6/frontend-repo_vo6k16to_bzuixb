import React, { useEffect, useState } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';

export default function News() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
        const res = await fetch(`${base}/api/news`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Live news & resources</h2>
            <p className="mt-2 text-gray-600">Fresh finance and education headlines, updated automatically.</p>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-2xl border border-gray-200 bg-gray-50" />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((n) => (
              <article key={n.link} className="group rounded-2xl border border-gray-200 p-6 transition-colors hover:bg-gray-50">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">{n.title}</h3>
                {n.published && (
                  <p className="mt-1 text-xs text-gray-500">{new Date(n.published_ts || n.published).toLocaleString()}</p>
                )}
                <a href={n.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline">
                  Read full story <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
