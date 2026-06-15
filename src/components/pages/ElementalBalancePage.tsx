import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const ElementalBalancePage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      const dominantElement = data.elementAnalysis.dominant || 'Ether and Air';
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-[#FE7950] tracking-widest block">Chapter 06</span>
            <p className="text-[11px] text-[#FE7950] font-black uppercase tracking-wider block">Yogi Metrology</p>
            <h2 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
              Dominant Element Assessment
            </h2>
          </div>

          <div className="p-4 rounded-2xl bg-[#FEF6E4] text-center border-l-4 border-l-[#FE7950] border border-[#FDE5A9] shadow-sm">
            <span className="text-xs font-semibold text-slate-700 block tracking-wide">Your Dominant Elements:</span>
            <span className="text-sm font-black text-[#FE7950] uppercase tracking-wider">{dominantElement}</span>
          </div>

          {/* Dynamic computed Vector Pie Chart matching Screenshot 4 perfectly */}
          <div className="py-2">
            <PieChartComponent ratios={data.elementAnalysis.ratios} />
          </div>

          {/* Structured detailed dominant descriptions corresponding to Screenshot 4 */}
          <div className="space-y-4">
            {data.elementAnalysis.ratios.slice(0, 2).map((element, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5"
              >
                <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center">
                    <span className="text-sm mr-2">{idx === 0 ? '✨' : '💨'}</span>
                    {element.name} Dominance Profile
                  </span>
                  <span className="text-xs font-heavy bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">
                    Ratio {element.percentage}%
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  As per your precise Vedic sidereal coordinates, you are highly {element.name.toLowerCase()} element dominated. This signifies that you {element.description.toLowerCase()}
                </p>
              </div>
            ))}
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
        </div>
      );
};
