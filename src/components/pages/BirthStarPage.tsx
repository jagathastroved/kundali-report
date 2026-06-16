import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const BirthStarPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
              Your Birth Star Details
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500/5 to-indigo-500/5 border border-indigo-50  flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 ">
                {data.birthStar.nkName} Nakshatra
              </h3>
              <p className="text-xs font-normal text-slate-500 ">
                Ruling Deity: <span className="text-indigo-600  font-normal">{data.birthStar.associatedDeity}</span>
              </p>
            </div>
            <div className="px-4 py-2 bg-indigo-600 text-white font-heavy text-xs uppercase font-normal rounded-xl shadow-md">
              Ruler: {data.birthStar.rulingPlanet}
            </div>
          </div>

          {/* Icon placeholder context */}
          <div className="p-4 rounded-xl bg-indigo-50  text-center flex flex-col items-center">
            <span className="text-4xl filter drop-shadow-md mb-2">⭐</span>
            <p className="text-[11px] font-normal text-indigo-700  uppercase tracking-widest">
              Associated Zodiac: {data.birthStar.zodiacSign}
            </p>
          </div>

          <div className="p-5 bg-indigo-50  border-l-4 border-indigo-600 space-y-2 rounded-r-2xl">
            <p className="text-slate-700  text-xs font-medium leading-relaxed italic">
              "{data.birthStar.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-emerald-100  bg-emerald-50/10 space-y-2">
              <span className="text-[10px] font-normal uppercase text-emerald-600  tracking-wider block">
                ✓ Character Strengths
              </span>
              <p className="text-xs text-slate-600  leading-relaxed font-normal">
                {data.birthStar.strengths}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-orange-100  bg-orange-50/10 space-y-2">
              <span className="text-[10px] font-normal uppercase text-orange-600  tracking-wider block">
                ⚡ Karmic Vulnerabilities
              </span>
              <p className="text-xs text-slate-600  leading-relaxed font-normal">
                {data.birthStar.weaknesses}
              </p>
            </div>
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'remedies')}
        </div>
      );
};
