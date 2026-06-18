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
        Your cosmic coordinates align uniquely. We've mapped the exact celestial forces present at your birth to create this deeply personalized Kundali report, offering profound insights into your life's true journey.
      </p>

      <div className="pt-8 w-full max-w-3xl mx-auto">
        <h3 className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-8 text-center">
          Inside Your Report
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 text-left">
          {[
            { title: "Personalized Kundali Chart", desc: "Access your detailed birth chart based on precise birth details.", icon: <Star size={16} /> },
            { title: "Core Personality", desc: "Reveal your strengths, challenges, talents, and true life potential.", icon: <Sparkles size={16} /> },
            { title: "Dasha Timeline", desc: "Understand current and future planetary periods shaping your journey.", icon: <Clock size={16} /> },
            { title: "Karmic Chakra Analysis", desc: "Uncover karmic patterns and the spiritual lessons guiding your growth.", icon: <RefreshCw size={16} /> },
            { title: "Planetary Profiles", desc: "Gain insights into how each planet influences different areas of life.", icon: <Globe2 size={16} /> },
            { title: "Influential Signs", desc: "Learn how key zodiac signs affect your personality and life path.", icon: <Compass size={16} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0 mt-0.5 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-slate-800">{item.title}</h4>
                <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
