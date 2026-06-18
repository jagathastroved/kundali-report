import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import {
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup } from '../SharedElements';
import { planetImages } from '../../data/planetImages';
import { zodiacSignImages } from '../../data/zodiacSigns';

export const CorePersonalityPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <p className="text-[12px] text-slate-500 font-medium uppercase tracking-widest">Chapter 02: Core Framework</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          Core Personality Profile
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <div className="px-2">
        <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-2xl mx-auto">
          In Vedic Astrology, your personality is shaped by multiple pillars. Your <strong className="text-slate-800">BIG 3</strong> includes your Sun sign, Moon sign, and Ascendant. It is the most important parameter which represents your physical, emotional, and spiritual pathways.
        </p>
      </div>

      <div className="space-y-4 px-1 pt-2">

        {/* Sun Sign Card */}
        <div className="relative p-5 md:p-6 bg-gradient-to-r from-orange-50/80 to-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-orange-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={planetImages.surya} alt="Sun" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-orange-900 text-base">
              Sun Sign (Surya)
            </h3>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
              The essence of your core self, representational ego, spark of truth and spiritual willpower in this incarnation.
            </p>
          </div>
        </div>

        {/* Moon Sign Card */}
        <div className="relative p-5 md:p-6 bg-gradient-to-r from-indigo-50/80 to-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-indigo-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={planetImages.moon} alt="Moon" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-indigo-900 text-base">
              Moon Sign (Chandra)
            </h3>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
              An insight into your emotional self, inner instincts, gut feelings, safety needs and intuitive processes.
            </p>
          </div>
        </div>

        {/* Rising Sign Card */}
        <div className="relative p-5 md:p-6 bg-gradient-to-r from-rose-50/80 to-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-rose-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={zodiacSignImages[data.personality.bigThree.ascendant.sign.split(' ')[0].toLowerCase()] || ''} alt="Ascendant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-rose-900 text-base">
              Rising Sign (Lagna)
            </h3>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
              Your outward persona and social mask. This represents how you naturally express yourself to strangers.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50/50 rounded-3xl border border-slate-100 relative shadow-sm">
        <div className="absolute top-0 left-8 -mt-3 text-4xl text-indigo-200 font-serif opacity-50">"</div>
        <p className="text-[14px] text-slate-700 leading-relaxed font-medium italic relative z-10">
          {data.personality.description}
        </p>
      </div>

    </div>
  );
};
