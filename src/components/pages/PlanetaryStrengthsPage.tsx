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
            <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
              Planetary Shield Strengths
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            Planets carry unique energetic behaviors depending on their Vedic dignity.
          </p>

          <div className="space-y-8">
            {/* Yogakaraka row */}
            <div className="p-4.5 pt-7 rounded-2xl bg-indigo-50/40 border border-indigo-100 space-y-3 relative mt-3 shadow-sm">
              <div className="absolute -top-3 left-4 inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] uppercase font-semibold tracking-widest rounded-md shadow-sm border border-indigo-400/30">
                YOGAKARAKA PLANETS
              </div>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.yogakaraka.map((p, idx) => (
                  <span key={idx} className="bg-white border border-indigo-200 text-indigo-700   px-3 py-1 rounded-xl text-xs font-normal focus:outline-none shadow-sm">
                    🪐 {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-normal">
                Yoga Karaka indicates the supreme helper planet in your natal Kundli, carrying massive powers to invite overall growth.
              </p>
            </div>

            {/* Benefics row */}
            <div className="p-4.5 pt-7 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-3 relative shadow-sm">
              <div className="absolute -top-3 left-4 inline-block px-3 py-1 bg-emerald-600 text-white text-[10px] uppercase font-semibold tracking-widest rounded-md shadow-sm border border-emerald-400/30">
                BENEFIC FORCES
              </div>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.benefics.map((p, idx) => (
                  <span key={idx} className="bg-white border border-emerald-200/50 text-emerald-700   px-3 py-1 rounded-xl text-xs font-normal focus:outline-none shadow-sm">
                    ✦ {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-normal">
                These are highly protective, auspicious planets that represent areas of ease, wellness, and mental calm.
              </p>
            </div>

            {/* Malefics row */}
            <div className="p-4.5 pt-7 rounded-2xl bg-orange-500/[0.03] border border-orange-500/20 space-y-3 relative shadow-sm">
              <div className="absolute -top-3 left-4 inline-block px-3 py-1 bg-orange-600 text-white text-[10px] uppercase font-semibold tracking-widest rounded-md shadow-sm border border-orange-400/30">
                MALEFIC CHALLENGES
              </div>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.malefics.map((p, idx) => (
                  <span key={idx} className="bg-white border border-orange-200/50 text-orange-700   px-3 py-1 rounded-xl text-xs font-normal focus:outline-none shadow-sm">
                    ⚠️ {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-normal">
                These are challenging areas where unexpected spiritual lessons, lessons, and tests are triggered.
              </p>
            </div>
          </div>
        </div>
      );
};
