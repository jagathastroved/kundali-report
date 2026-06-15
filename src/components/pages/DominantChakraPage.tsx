import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const DominantChakraPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Dominant Chakra Details
            </h2>
          </div>

          <div className="text-center space-y-3 py-4 bg-purple-500/[0.02] border border-purple-500/10 rounded-2xl p-5">
            {/* Custom interactive chakra wheel indicator */}
            <div className="relative w-36 h-36 mx-auto flex items-center justify-center mb-1">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2.5 rounded-full border border-dotted border-orange-400/40"
              />
              <div className="w-20 h-24 rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 flex items-center justify-center text-3xl text-white shadow-xl shadow-indigo-600/10">
                🌀
              </div>
              <div className="absolute -top-1 px-3 py-1 bg-indigo-600 text-white font-heavy font-mono text-[9px] uppercase tracking-wider rounded-md shadow-md animate-bounce">
                DOMINANT
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-900 ">
              {data.chakraAnalysis.dominantChakra.name} Chakra
            </h3>
            <span className="px-3.5 py-1 bg-emerald-500/10 text-emerald-600  border border-emerald-500/10 text-[10px] uppercase font-mono rounded-full font-bold">
              {data.chakraAnalysis.dominantChakra.status} ({data.chakraAnalysis.dominantChakra.percentage}% Strength)
            </span>
          </div>

          <p className="text-xs text-slate-600  leading-relaxed font-semibold italic text-center max-w-md mx-auto">
            {data.chakraAnalysis.dominantChakra.description}
          </p>

          <div className="p-4 bg-indigo-50/30  rounded-xl space-y-1.5 border border-indigo-50 ">
            <span className="text-[10px] font-black uppercase text-indigo-600  tracking-wider block">
              💡 Soothing Spiritual Remedy:
            </span>
            <p className="text-xs text-slate-600  leading-relaxed font-semibold">
              {data.chakraAnalysis.dominantChakra.remedy}
            </p>
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'remedies')}
        </div>
      );
};
