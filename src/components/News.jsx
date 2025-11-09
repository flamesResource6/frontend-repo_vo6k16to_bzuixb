import React from 'react';
import { Newspaper } from 'lucide-react';

const items = [
  {
    title: 'Weekly Kid-Friendly Market Brief',
    desc: 'A simple wrap-up of what moved the markets — in plain language kids can grasp.',
  },
  {
    title: 'New: Classroom Mode Beta',
    desc: 'Teachers can run quests in sync and review mastery with one dashboard.',
  },
  {
    title: 'Parent Guides: Allowance to Investing',
    desc: 'Step-by-step tips on using everyday moments to teach money habits.',
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">News & resources</h2>
            <p className="mt-2 text-gray-600">Fresh updates, guides, and classroom content — always easy to read.</p>
          </div>
          <a href="#" className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 sm:inline-block">View all</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((n) => (
            <article key={n.title} className="rounded-2xl border border-gray-200 p-6 hover:bg-gray-50">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                <Newspaper className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{n.desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-gray-900 hover:underline">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
