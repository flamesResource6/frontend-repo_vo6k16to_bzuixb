import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400" />
          <span className="text-lg font-semibold tracking-tight">MintQuest</span>
        </div>
        <nav className="hidden gap-8 text-sm text-gray-700 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#news" className="hover:text-gray-900">News</a>
          <a href="#download" className="hover:text-gray-900">Download</a>
        </nav>
        <a href="#download" className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">Get the app</a>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-6 pb-8 md:pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
              Smart money for young minds
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Financial literacy for kids — wrapped in play.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A business app for families and schools that teaches saving, budgeting, and
              investing through games. Kids explore a playful stock market simulator and
              quests themed like a medieval guild — while you see a clean, pro experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#download"
                className="group inline-flex items-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-gray-900"
              >
                Get the app <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-gray-900 hover:bg-gray-50"
              >
                Explore features
              </a>
            </div>
            <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> COPPA-friendly</div>
              <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /> Real-world concepts</div>
            </div>
          </div>

          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-3xl border border-gray-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)]">
              <Spline
                scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
