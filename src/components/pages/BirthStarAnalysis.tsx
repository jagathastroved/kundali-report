import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import {
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup } from '../SharedElements';

export const BirthStarPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-8">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-2">
          <span className="text-3xl filter drop-shadow-sm">⭐</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight">
          Your Birth Star is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">{data.birthStar.nkName} Nakshatra</span>
        </h2>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
          Associated with the Deity {data.birthStar.associatedDeity}
        </p>
      </div>

      {/* Main Description */}
      <div className="px-2">
        <p className="text-slate-700 text-[15px] leading-relaxed font-medium text-center max-w-2xl mx-auto">
          {data.birthStar.nkName} Nakshatra! You are ruled by the <strong className="text-indigo-600">{data.birthStar.rulingPlanet}</strong> and your zodiac sign is <strong className="text-indigo-600">{data.birthStar.zodiacSign}</strong>. Your nakshatra is intimately associated with the god {data.birthStar.associatedDeity}. {data.birthStar.description}
        </p>
      </div>

      {/* Traits Cards Grid */}
      <div className="grid grid-cols-1 gap-6 pt-4">

        {/* Personality Card */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-1 text-xs font-semibold uppercase rounded-full shadow-md tracking-wider">
            Core Personality
          </div>
          <p className="text-slate-700 text-[14px] leading-relaxed font-medium mt-3">
            As a {data.birthStar.nkName}, you are naturally curious and possess a great desire for knowledge. You have an excellent memory and love to learn new things. You are also a good listener and are sensitive to the needs of others. You are respectful of tradition and often hold a position of authority or leadership within your community.
          </p>
        </div>

        {/* Strengths & Weaknesses Card */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-1 text-xs font-semibold uppercase rounded-full shadow-md tracking-wider">
            Strengths & Weaknesses
          </div>
          <p className="text-slate-700 text-[14px] leading-relaxed font-medium mt-3">
            <span className="text-emerald-700 font-semibold mb-1 block">Your Strengths:</span>
            {data.birthStar.strengths}
          </p>
          <div className="h-px w-full bg-indigo-100 my-4" />
          <p className="text-slate-700 text-[14px] leading-relaxed font-medium">
            <span className="text-orange-700 font-semibold mb-1 block">Areas for Growth:</span>
            {data.birthStar.weaknesses}
          </p>
        </div>

      </div>
    </div>
  );
};
