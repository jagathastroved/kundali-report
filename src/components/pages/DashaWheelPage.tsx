import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const DashaWheelPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Vimshottari Dasha Analysis
        </h2>
      </div>

      <div className="p-4 bg-emerald-500/10 text-emerald-600 text-xs font-black uppercase text-center rounded-xl md:rounded-2xl">
        🟢 Active Dasha Phase: Rahu Mahadasha & Venus Antardasha
      </div>

      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
        Vedic astrology divides your life journey into structured chronological dasha segments ruled by key planets. The planetary lord ruling your active Mahadasha provides the principal theme for your career developments, wealth, and wellness traits.
      </p>

      {/* Dasha timeline ladders */}
      <div className="space-y-4">
        {data.dashaTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-7 group">
            {idx < 4 && (
              <div className="absolute left-3 top-6 bottom-[-24px] w-0.5 bg-indigo-100" />
            )}
            {/* Chronology timeline node circles */}
            <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-600 bg-white z-10 transition-colors group-hover:bg-indigo-600" />

            <div className="p-4.5 rounded-2xl bg-slate-50 hover:bg-slate-100/50 border border-slate-200/50 transition flex justify-between items-center">
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest block">
                  {item.levelName}
                </span>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Lord: {item.planetName}
                </h4>
              </div>
              <div className="text-right text-xs font-mono font-bold text-slate-500">
                <div>{item.startDate}</div>
                <div className="text-[10px] text-slate-400">until {item.endDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Insert Promo */}
      {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
    </div>
  );
};
