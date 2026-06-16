import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import {
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const FiveGreatElementsPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

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

      {/* --- INSERTED FROM ELEMENTAL BALANCE PAGE --- */}
      <div className="pt-6 mt-6 border-t border-slate-200">
        <div className="space-y-1 mb-4">
          <p className="text-[11px] text-[#FE7950] font-normal uppercase tracking-wider block">Yogi Metrology</p>
          <h2 className="text-xl font-semibold text-slate-900 tracking-tight leading-tight">
            Dominant Element Assessment
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-[#FEF6E4] text-center border-l-4 border-l-[#FE7950] border border-[#FDE5A9] shadow-sm mb-6">
          <span className="text-xs font-normal text-slate-700 block tracking-wide">Your Dominant Elements:</span>
          <span className="text-sm font-normal text-[#FE7950] uppercase tracking-wider">{data.elementAnalysis.dominant || 'Ether and Air'}</span>
        </div>

        <div className="py-2">
          <PieChartComponent ratios={data.elementAnalysis.ratios} />
        </div>

        <div className="space-y-4 mt-6">
          {data.elementAnalysis.ratios.slice(0, 2).map((element, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                <span className="text-xs font-normal text-slate-900 uppercase tracking-widest flex items-center">
                  <span className="text-sm mr-2">{idx === 0 ? '✨' : '💨'}</span>
                  {element.name} Dominance Profile
                </span>
                <span className="text-xs font-heavy bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-normal">
                  Ratio {element.percentage}%
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                As per your precise Vedic sidereal coordinates, you are highly {element.name.toLowerCase()} element dominated. This signifies that you {element.description.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Insert Promo */}
      {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
    </div>
  );
};
