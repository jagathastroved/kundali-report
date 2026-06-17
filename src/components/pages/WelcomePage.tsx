import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import {
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const WelcomePage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pt-6 pb-8 text-center px-2">
      
      {/* Icon and Greeting */}
      <div className="space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-50 to-orange-50 flex items-center justify-center mx-auto text-5xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
        >
          🕉️
        </motion.div>

        <div className="space-y-2">
          <p className="text-[12px] font-bold text-orange-500 uppercase tracking-widest">
            Welcome to Your Pristine Vedic Blueprint
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Namaste, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">{data.birthDetails.name}</span>
          </h1>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full" />

      {/* Introductory Text */}
      <p className="text-slate-600 text-[14.5px] max-w-lg mx-auto leading-relaxed font-medium">
        We have looked at your details. You have a special birth chart, your Kundli is unique.
        We have prepared a deeply personalized, beautiful, API-driven astrological report matching your cosmic coordinates.
      </p>

      {/* Features List Card */}
      <div className="relative bg-gradient-to-b from-white to-indigo-50/30 p-6 sm:p-8 rounded-[2rem] border border-indigo-50 shadow-sm text-left max-w-xl mx-auto mt-4 overflow-hidden group hover:shadow-md transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
        
        <ul className="text-[13px] text-slate-600 space-y-4 font-medium relative z-10">
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Birth Star & Core Personality:</strong> Discover your Nakshatra and understand your deepest traits.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Influential Signs:</strong> Reveal the most important zodiac signs shaping your destiny.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Planetary Strengths:</strong> Understand the strengths of each planet in your horoscope.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Nature's Blessings:</strong> Learn how your qualities connect to the elements of nature.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Karmic Path:</strong> Unveil the stored karmic journey you are destined to follow.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Planetary Positions:</strong> Gain insights from the precise alignment of all planets at your birth.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <span><strong className="font-semibold text-slate-800">Dasha:</strong> Get actionable predictions through comprehensive Dasha analysis.</span>
          </li>
        </ul>
      </div>

    </div>
  );
};
