import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const FiveGreatElementsPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-normal uppercase text-[#FE7950] tracking-widest block">Chapter 05</span>
            <p className="text-[11px] text-[#FE7950] font-normal uppercase tracking-wider block">Nature's alignment</p>
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight leading-tight">
              Can you see how your qualities are connected to the blessings of nature?
            </h2>
          </div>

          <p className="text-slate-700 text-xs leading-relaxed">
            The universe is said to be made up of five things: fire, earth, air, water, and ether. In Vedic tradition, these Panchamahabhuta elements rule over your energetic frequency and behavior. {data.elementAnalysis.description}
          </p>

          {/* Five elements beautifully colored pills list mapped to Screenshot 3 */}
          <div className="space-y-3.5 font-sans">
            {/* Fire Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#FEEAEA] border border-[#FDB4B4] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl shadow-inner">🔥</div>
              <div>
                <h4 className="font-semibold text-red-900 text-sm">Fire Element (Agni)</h4>
                <p className="text-[11px] text-slate-600 font-normal leading-normal">Primal energy, focus, enthusiasm, and spiritual courage.</p>
              </div>
            </div>

            {/* Earth Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#EBF7EA] border border-[#BDE7BD] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl shadow-inner">🌍</div>
              <div>
                <h4 className="font-semibold text-green-900 text-sm font-sans">Earth Element (Prithvi)</h4>
                <p className="text-[11px] text-slate-600 font-normal leading-normal">Practical structures, patient foundations, stability, and dependability.</p>
              </div>
            </div>

            {/* Air Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#FEF6E4] border border-[#FDE5A9] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl shadow-inner">💨</div>
              <div>
                <h4 className="font-semibold text-[#A16207] text-sm">Air Element (Vayu)</h4>
                <p className="text-[11px] text-slate-600 font-normal leading-normal">Intellectual agility, speech, conceptual logic, and communication.</p>
              </div>
            </div>

            {/* Water Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#E8F3FF] border border-[#B9D9FF] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-inner">💧</div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm">Water Element (Jala)</h4>
                <p className="text-[11px] text-slate-600 font-normal leading-normal">Deep intuitive fields, empathy, creative flow state, and memory.</p>
              </div>
            </div>

            {/* Ether Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#F2EAFF] border border-[#DAC3FF] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-xl shadow-inner">🌌</div>
              <div>
                <h4 className="font-semibold text-purple-900 text-sm">Ether Element (Akasha)</h4>
                <p className="text-[11px] text-slate-600 font-normal leading-normal">Universal spaciousness, higher wisdom, spiritual portals, and truth alignment.</p>
              </div>
            </div>
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
        </div>
      );
};
