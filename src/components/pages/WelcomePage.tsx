import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const WelcomePage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6 pt-4 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center mx-auto text-4xl shadow-xl shadow-indigo-600/10 border border-white/20"
          >
            🕉️
          </motion.div>
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900  tracking-tight leading-tight">
              Namaste, <span className="text-indigo-600 ">{data.birthDetails.name}</span>
            </h1>
            <p className="text-base font-bold text-orange-500 ">
              Welcome to Your Pristine Vedic Blueprint
            </p>
          </div>
          <div className="h-0.5 w-16 bg-orange-400 mx-auto rounded-full" />
          <p className="text-slate-600  text-sm max-w-md mx-auto leading-relaxed">
            We have looked at your details. You have a special birth chart, your Kundli is unique.
            We have prepared a deeply personalized, beautiful, API-driven astrological report matching your cosmic coordinates.
          </p>

          <div className="bg-indigo-50/50  p-5 rounded-2xl border border-indigo-50/80  text-left space-y-3.5 max-w-md mx-auto">
            <ul className="text-xs text-slate-600  space-y-2.5 font-semibold">
              <li className="flex items-center"><CheckCircle size={12} className="text-emerald-500 mr-2" /> Your Big 3 core sign breakdown</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-emerald-500 mr-2" /> Five Elements balance (Tattvas ratios)</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-emerald-500 mr-2" /> Karmic Focal Points & Spiritual lessons</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-emerald-500 mr-2" /> Favorable Ishta Devata & Atmakaraka Soul traits</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-emerald-500 mr-2" /> Interactive Natal Kundli Diamond Chart</li>
              <li className="flex items-center"><CheckCircle size={12} className="text-emerald-500 mr-2" /> Active Vimshottari Mahadasha Schedules</li>
            </ul>
          </div>
        </div>
      );
};
