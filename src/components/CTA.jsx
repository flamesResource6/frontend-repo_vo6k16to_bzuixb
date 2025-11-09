import React from 'react';
import { Apple, Android, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute -inset-x-10 -top-20 h-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start the quest today</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Download the app and invite your child to join the MintQuest guild. Play through money missions
              and a safe stock market simulator that rewards smart choices.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black hover:bg-gray-100">
                <Apple className="h-5 w-5" /> App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-black hover:bg-gray-100">
                <Android className="h-5 w-5" /> Google Play
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4" /> Built for families and classrooms
            </p>
          </div>
          <div className="relative h-72 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-1">
            <div className="absolute inset-0 rounded-3xl border border-white/10" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-2xl bg-white/5 p-6 text-center">
                <p className="text-sm text-white/70">In-app theme</p>
                <h3 className="mt-2 text-2xl font-semibold">Medieval Guild Aesthetic</h3>
                <p className="mt-2 max-w-sm text-white/70">
                  While the website stays sleek and modern, the app itself embraces a cozy medieval style with banners,
                  shields, and quests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
