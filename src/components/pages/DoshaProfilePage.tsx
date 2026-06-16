import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const DoshaProfilePage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
          What's your Ayurvedic body type?
        </h2>
      </div>
      <p className="text-xs text-slate-500  pb-2 leading-relaxed">
        The feeling of weakness tiredness and sometimes high energetic or sometimes low energy. 
        These experiences are influenced by the three body types in Ayurveda known as tridoshas - Vata, Pitta, and Kapha.<br/><br/>
        Tridoshas influence why someone might feel really energetic or why someone may often feel weak. The balance of these doshas in an individual determines their unique constitution and can impact their overall health and well-being.
      </p>

      <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-3">
        <h3 className="font-semibold text-sm text-slate-800">What can happen if you have the dominance of one dosha in you</h3>
        <ul className="space-y-2 text-xs text-slate-600 font-normal leading-relaxed">
          <li>💨 <b>Vata:</b> If you have a dominant Vata dosha, you're likely to be energetic and creative but may struggle with anxiety, digestive issues, and insomnia.</li>
          <li>🔥 <b>Pitta:</b> If your dominant dosha is Pitta, you tend to be intelligent and focused, yet could face issues like irritability, inflammation, and a tendency towards anger.</li>
          <li>🌍 <b>Kapha:</b> If Kapha is your dominant dosha, you're probably calm and nurturing but might have challenges with weight, lethargy, and resistance to change.</li>
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-orange-500/10 text-orange-600 text-xs font-normal uppercase text-center mt-4">
        🌌 Primary Constitution: {data.doshaAnalysis.dominantDosha}
      </div>

      {/* Three columns grid of dosha percentages */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.doshaAnalysis.doshas.map((dosha, idx) => {
          const icons = { Vata: '☁️', Pitta: '🔥', Kapha: '🌍' };
          const colors = {
            Vata: 'bg-indigo-500/20 text-indigo-600 border-indigo-500/20',
            Pitta: 'bg-orange-500/20 text-orange-600 border-orange-500/20',
            Kapha: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/20'
          };

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border text-center space-y-2 ${colors[dosha.name as keyof typeof colors] || 'bg-slate-100'}`}
            >
              <span className="text-3xl">{icons[dosha.name as keyof typeof icons] || '🌀'}</span>
              <h4 className="font-semibold text-sm text-slate-900 ">{dosha.name}</h4>
              <div className="text-xl font-normal font-mono text-slate-800 ">{dosha.percentage}%</div>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        {data.doshaAnalysis.doshas.map((dosha, idx) => (
          <div key={idx} className="p-4 bg-slate-50  border border-slate-200/50 rounded-2xl space-y-1.5">
            <h5 className="font-semibold text-xs text-slate-900 ">
              {dosha.name} Dosha Context:
            </h5>
            <p className="text-xs text-slate-600  leading-relaxed font-normal">
              {dosha.description}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-indigo-50/30  rounded-xl space-y-2 border border-indigo-50 ">
        <span className="text-[10px] font-normal uppercase text-indigo-600  tracking-wider block">
          💡 Balancing Remedies for Daily Living:
        </span>
        <p className="text-xs text-slate-700  leading-relaxed font-normal">
          {data.doshaAnalysis.balanceRemedy}
        </p>
      </div>
    </div>
  );
};
