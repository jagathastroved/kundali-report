import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const PlanetaryStrengthsPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Planetary Shield Strengths
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            Planets carry unique energetic behaviors depending on their Vedic dignity.
          </p>

          <div className="space-y-4">
            {/* Yogakaraka row */}
            <div className="p-4.5 rounded-2xl bg-indigo-50/40  border border-indigo-50  space-y-3">
              <span className="px-2.5 py-1 bg-indigo-600 text-white text-[9px] uppercase font-black tracking-wider rounded-md">
                YOGAKARAKA PLANETS
              </span>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.yogakaraka.map((p, idx) => (
                  <span key={idx} className="bg-white border border-indigo-200 text-indigo-700   px-3 py-1 rounded-xl text-xs font-extrabold focus:outline-none shadow-sm">
                    🪐 {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-semibold">
                Yoga Karaka indicates the supreme helper planet in your natal Kundli, carrying massive powers to invite overall growth.
              </p>
            </div>

            {/* Benefics row */}
            <div className="p-4.5 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-3">
              <span className="px-2.5 py-1 bg-emerald-600 text-white text-[9px] uppercase font-black tracking-wider rounded-md">
                BENEFIC FORCES
              </span>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.benefics.map((p, idx) => (
                  <span key={idx} className="bg-white border border-emerald-200/50 text-emerald-700   px-3 py-1 rounded-xl text-xs font-extrabold focus:outline-none shadow-sm">
                    ✦ {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-semibold">
                These are highly protective, auspicious planets that represent areas of ease, wellness, and mental calm.
              </p>
            </div>

            {/* Malefics row */}
            <div className="p-4.5 rounded-2xl bg-orange-500/[0.02] border border-orange-500/10 space-y-3">
              <span className="px-2.5 py-1 bg-orange-600 text-white text-[9px] uppercase font-black tracking-wider rounded-md">
                MALEFIC CHALLENGES
              </span>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.malefics.map((p, idx) => (
                  <span key={idx} className="bg-white border border-orange-200/50 text-orange-700   px-3 py-1 rounded-xl text-xs font-extrabold focus:outline-none shadow-sm">
                    ⚠️ {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-semibold">
                These are challenging areas where unexpected spiritual lessons, lessons, and tests are triggered.
              </p>
            </div>
          </div>
        </div>
      );
};
