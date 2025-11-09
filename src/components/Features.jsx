import React from 'react';
import { Gamepad2, LineChart, School, Shield, Cog, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Refined, minimal UI',
    desc: 'Calm palettes, generous spacing, and smooth motion — inspired by modern device design.'
  },
  {
    icon: LineChart,
    title: 'Stock market simulator',
    desc: 'A sandbox that mirrors real market movement with simplified rules, so kids learn risk vs. reward safely.'
  },
  {
    icon: School,
    title: 'Curriculum-aligned lessons',
    desc: 'Bite-sized modules created by educators and advisors — built for classrooms and family time.'
  },
  {
    icon: Shield,
    title: 'Family controls',
    desc: 'Set goals, approve actions, and track progress with transparency. Designed to be COPPA-friendly.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Modern design that feels familiar</h2>
          <p className="mt-4 text-gray-600">Polished like the devices you love. Playful medieval world inside the app for kids.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900 group-hover:bg-gray-900 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
