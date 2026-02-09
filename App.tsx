'use client';

import React from 'react';
import { 
  Car, 
  Megaphone, 
  Store, 
  ShoppingCart, 
  BadgeCheck 
} from 'lucide-react';
import AutomotiveTile from './components/AutomotiveTile';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 md:p-8 bg-slate-950 text-white font-display">
      {/* Header Section */}
      <div className="w-full max-w-[960px] mb-6">
        <header className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-900/50 backdrop-blur-md rounded-xl">
          <div className="flex items-center gap-4">
            <div className="size-8 text-cyan-400">
              <Car className="w-8 h-8" />
            </div>
            <h2 className="text-white text-xl font-extrabold tracking-tight">AutomotiveHero</h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8 text-slate-400 text-sm font-medium">
              <a className="hover:text-cyan-400 transition-colors" href="#">Dashboard</a>
              <a className="hover:text-cyan-400 transition-colors" href="#">Pipelines</a>
              <a className="hover:text-cyan-400 transition-colors" href="#">Analytics</a>
            </nav>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition-all cursor-pointer">
              Live View
            </button>
          </div>
        </header>
      </div>

      {/* Main Animated Tile Component */}
      <AutomotiveTile />

      {/* Bottom Key Metrics Grid */}
      <div className="w-full max-w-[960px] mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Awareness Card */}
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Megaphone className="text-cyan-500 w-5 h-5" />
            <span className="text-white text-[10px] font-bold uppercase">Awareness</span>
          </div>
          <p className="text-slate-400 text-xs">Digital channel entry points</p>
        </div>

        {/* Intent Card */}
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Store className="text-cyan-500 w-5 h-5" />
            <span className="text-white text-[10px] font-bold uppercase">Intent</span>
          </div>
          <p className="text-slate-400 text-xs">Showroom engagement cycle</p>
        </div>

        {/* Conversion Card (Highlighted) */}
        <div className="bg-slate-800/80 p-4 rounded-xl border border-cyan-500/30 ring-1 ring-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="text-cyan-400 w-5 h-5" />
            <span className="text-white text-[10px] font-bold uppercase">Conversion</span>
          </div>
          <p className="text-slate-300 text-xs">Revenue realization node</p>
        </div>

        {/* Retention Card */}
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <BadgeCheck className="text-emerald-500 w-5 h-5" />
            <span className="text-white text-[10px] font-bold uppercase">Retention</span>
          </div>
          <p className="text-slate-400 text-xs">Post-sale loyalty peaks</p>
        </div>
      </div>
    </div>
  );
}