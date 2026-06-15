import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const BigThreeSignsPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-[#FE7950] tracking-widest block">Chapter 04</span>
            <p className="text-[11px] text-[#FE7950] font-black uppercase tracking-wider block">As per your kundli,</p>
            <h2 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
              Let's take a look at the three most influential and important signs for you!
            </h2>
          </div>

          {/* Three big signs columns grid mimicking Screenshot 2 and 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
            {/* Sun Card */}
            <div className="p-4 rounded-2xl bg-[#FEF6E4] border border-[#FDE5A9] text-center space-y-1.5 shadow-sm">
              <span className="text-[10px] font-black text-[#A16207] uppercase tracking-wider block">Surya (Sun)</span>
              <div className="text-3xl filter drop-shadow">☀️</div>
              <h4 className="font-black text-slate-950 text-sm tracking-tight">
                {data.personality.bigThree.sun.sign}
              </h4>
            </div>

            {/* Lagna (Rising Card) */}
            <div className="p-4 rounded-2xl bg-[#FEEAEA] border-2 border-[#F68080] text-center space-y-1.5 shadow-md">
              <span className="text-[10px] font-black text-[#991B1B] uppercase tracking-wider block">Lagna (Rising)</span>
              <div className="text-3xl filter drop-shadow">♉</div>
              <h4 className="font-black text-[#991B1B] text-sm tracking-tight">
                {data.personality.bigThree.ascendant.sign}
              </h4>
            </div>

            {/* Moon Card */}
            <div className="p-4 rounded-2xl bg-[#E5F2FF] border border-[#B9D9FF] text-center space-y-1.5 shadow-sm">
              <span className="text-[10px] font-black text-[#1E3A8A] uppercase tracking-wider block">Chandra (Moon)</span>
              <div className="text-3xl filter drop-shadow">🌙</div>
              <h4 className="font-black text-slate-950 text-sm tracking-tight">
                {data.personality.bigThree.moon.sign}
              </h4>
            </div>
          </div>

          {/* Dynamic description cards structured in matching color themes */}
          <div className="space-y-3.5 pt-2 font-sans">
            <div className="p-4.5 rounded-2xl border-l-4 border-l-[#FCAE3B] bg-[#FFF8EA] border border-[#FFF8EA] shadow-inner space-y-1">
              <h4 className="font-black text-[#A16207] text-xs uppercase tracking-wider">🌻 Your Sun Sign Essence:</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                {data.personality.bigThree.sun.description}
              </p>
            </div>

            <div className="p-4.5 rounded-2xl border-l-4 border-l-[#F68080] bg-[#FFF3F3] border border-[#FFF3F3] shadow-inner space-y-1">
              <h4 className="font-black text-[#991B1B] text-xs uppercase tracking-wider">🐂 Your Rising Sign Persona:</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                {data.personality.bigThree.ascendant.description}
              </p>
            </div>

            <div className="p-4.5 rounded-2xl border-l-4 border-l-[#5DA2FF] bg-[#F0F7FF] border border-[#F0F7FF] shadow-inner space-y-1">
              <h4 className="font-black text-[#1E3A8A] text-xs uppercase tracking-wider">🐚 Your Moon Sign Emotion:</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                {data.personality.bigThree.moon.description}
              </p>
            </div>
          </div>

          {/* Premium Combo Offer Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
        </div>
      );
};
