import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-black to-gray-700" />
          <span className="text-lg font-semibold tracking-tight">MintQuest</span>
        </div>
        <nav className="hidden gap-8 text-sm text-gray-700 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#news" className="hover:text-gray-900">News</a>
          <a href="#download" className="hover:text-gray-900">Download</a>
        </nav>
        <a href="#download" className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">Get the app</a>
      </header>

      <div className="relative">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pb-28 md:pt-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-black text-white px-3 py-1 text-xs font-medium">
                Modern. Private. Built for families.
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Money skills for kids, presented with premium polish.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                A clean, confident interface for parents with a playful medieval world inside the app. Learn saving,
                budgeting, and investing with gentle guidance and fun quests.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#download"
                  className="group inline-flex items-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-gray-900"
                >
                  Get the app <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-full border border-gray-200 backdrop-blur px-6 py-3 text-gray-900 hover:bg-white/70"
                >
                  Explore features
                </a>
              </div>
              <div className="mt-5 flex items-center gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> COPPA-friendly</div>
                <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /> Real-world concepts</div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
        </div>
      </div>
    </section>
  );
}
