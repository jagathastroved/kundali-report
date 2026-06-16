import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const CorePersonalityPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-normal uppercase text-[#FE7950] tracking-widest block">Chapter 03</span>
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
              Core Personality Profile
            </h2>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            In Vedic Astrology, your personality is shaped by multiple pillars. Big 3 includes your Sun sign, your Moon sign and the Ascendant you were born. Your BIG 3 is the most important parameter in Vedic Astrology which represents your physical, emotional and spiritual pathways.
          </p>

          <div className="space-y-3">
            {/* Sun Sign Pill */}
            <div className="p-4 bg-[#FFFBF0] border border-[#FCE6B1] rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#FEF2D5] border border-[#FCE6B1] flex items-center justify-center text-lg shadow-sm">
                ☀️
              </div>
              <div className="flex-1">
                <span className="font-normal text-slate-800 text-sm block">
                  Sun Sign (Surya)
                </span>
                <span className="text-xs text-slate-500 font-normal leading-relaxed">
                  The essence of your core self, representational ego, spark of truth and spiritual willpower in this incarnation.
                </span>
              </div>
            </div>

            {/* Moon Sign Pill */}
            <div className="p-4 bg-[#F2F7FF] border border-[#C5DFFF] rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#E5F2FF] border border-[#B9D9FF] flex items-center justify-center text-lg shadow-sm">
                🌕
              </div>
              <div className="flex-1">
                <span className="font-normal text-[#1E3A8A] text-sm block">
                  Moon Sign (Chandra)
                </span>
                <span className="text-xs text-slate-500 font-normal leading-relaxed">
                  An insight into your emotional self, inner instincts, gut feelings, safety needs and intuitive processes.
                </span>
              </div>
            </div>

            {/* Rising Sign Pill */}
            <div className="p-4 bg-[#FFF5F5] border border-[#FAD0C4] rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#FEEAEA] border-[#F9B4A3] flex items-center justify-center text-xs font-normal text-[#991B1B] shadow-sm font-sans tracking-tight">
                ASC
              </div>
              <div className="flex-1">
                <span className="font-normal text-[#991B1B] text-sm block">
                  Rising Sign (Lagna)
                </span>
                <span className="text-xs text-slate-500 font-normal leading-relaxed">
                  Your outward persona and social mask. This represents how you naturally express yourself to strangers.
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed font-normal italic border-l-2 border-slate-300 pl-3">
            "{data.personality.description}"
          </p>

          {/* Premium Insert Promo for In-depth breakdown */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
        </div>
      );
};
