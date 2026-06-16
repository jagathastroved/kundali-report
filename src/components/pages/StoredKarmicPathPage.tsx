import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const StoredKarmicPathPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
              Stored Karmic Path
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-indigo-50/40  flex flex-col items-center justify-center text-center space-y-2 col-span-2 border border-indigo-50 ">
              <span className="text-[10px] font-normal text-indigo-600  uppercase tracking-widest">
                Karmic Progress Score
              </span>
              <div className="text-4xl font-normal text-slate-900  font-mono">
                {data.storedKarma.goodPercentage}%
              </div>
              <p className="text-[11px] text-slate-500  max-w-sm font-normal">
                An estimate representing balanced karmic fields stemming from prior experiences.
              </p>
            </div>

            <div className="bg-orange-50/15  p-5 rounded-2xl border border-orange-100  col-span-2 space-y-3">
              <h4 className="font-semibold text-slate-950  text-xs tracking-wider uppercase">
                🔥 Your Focal Karmic Lessons:
              </h4>
              <ul className="text-xs text-slate-700  space-y-2.5 font-normal list-disc list-inside">
                {data.storedKarma.pendingLessons.map((lesson, idx) => (
                  <li key={idx} className="leading-relaxed">{lesson}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-orange-500/10 text-orange-600 text-xs font-heavy font-normal uppercase text-center col-span-2">
              🚨 Primary Karmic Regulator: {data.storedKarma.karmicDebtPlanet}
            </div>

            <p className="text-xs text-slate-500  leading-relaxed col-span-2 italic">
              {data.storedKarma.storedKarmasDescription}
            </p>
          </div>
        </div>
      );
};
