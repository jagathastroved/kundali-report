import React, { useState, useEffect } from 'react';
import { useReport } from '../context/ReportContext';
import { KundliReportData, PlanetPosition } from '../types';
import {
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

// Ebook slide titles
const PAGE_TITLES = [
  'Namaste Welcome',
  'Birth Coordinates',
  'Your Birth Star',
  'Core Personality',
  'Your Big Three Signs',
  'Five Great Elements',
  'Elemental Balance',
  'Stored Karmic Path',
  'Your Chakras Map',
  'Dominant Chakra Insight',
  'Ayurvedic Dosha Profile',
  'Planetary Shield Strengths',
  'Planet: Sun (Surya)',
  'Planet: Moon (Chandra)',
  'Planet: Mercury (Budha)',
  'Planet: Jupiter (Guru)',
  'Planet: Venus (Shukra)',
  'Planet: Mars (Mangala)',
  'Planet: Saturn (Shani)',
  'Planet: Rahu (North Node)',
  'Planet: Ketu (South Node)',
  'Favorable Ishta Devata',
  'Atmakaraka Soul Focal',
  'Kundli Lagna Chart',
  'Vimshottari Dasha Wheel',
  'Cosmic Future Forecasts',
  'Your Premium Deliverables'
];

// Pie Chart component for representing elements ratio perfectly matching Screenshot 4
const PieChartComponent: React.FC<{ ratios: { name: string; percentage: number }[] }> = ({ ratios }) => {
  let accumulatedAngle = 0;
  const radius = 64;
  const cx = 80;
  const cy = 80;

  // sum percentages to 100 max
  const total = ratios.reduce((sum, r) => sum + r.percentage, 0) || 100;

  const bgColors: { [key: string]: string } = {
    Ether: '#9333EA', // purple-600
    Air: '#FEF08A',   // soft yellow (amber-200)
    Water: '#3B82F6', // blue-500
    Fire: '#EF4444',  // red-500
    Earth: '#10B981', // green-500
  };

  const textColors: { [key: string]: string } = {
    Ether: 'text-purple-600',
    Air: 'text-yellow-700',
    Water: 'text-blue-600',
    Fire: 'text-red-700',
    Earth: 'text-green-600',
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-amber-500/[0.02] border border-[#EBE4D5]/60 p-5 rounded-3xl">
      <div className="relative w-40 h-40">
        <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
          {ratios.map((element, idx) => {
            const val = element.percentage;
            if (val <= 0) return null;

            const sliceAngle = (val / total) * 360;
            const startAngle = accumulatedAngle;
            const endAngle = accumulatedAngle + sliceAngle;
            accumulatedAngle += sliceAngle;

            // Coordinates
            const x1 = cx + radius * Math.cos((startAngle * Math.PI) / 180);
            const y1 = cy + radius * Math.sin((startAngle * Math.PI) / 180);
            const x2 = cx + radius * Math.cos((endAngle * Math.PI) / 180);
            const y2 = cy + radius * Math.sin((endAngle * Math.PI) / 180);

            const largeArcFlag = sliceAngle > 180 ? 1 : 0;
            const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            const color = bgColors[element.name] || '#64748B';

            return (
              <motion.path
                key={idx}
                d={pathData}
                fill={color}
                stroke="#FAF7F0"
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="hover:opacity-90 transition-opacity cursor-pointer"
              />
            );
          })}
          {/* Inner hole for warm donut booklet feel */}
          <circle cx="80" cy="80" r="32" fill="#FCFAF2" />
        </svg>
      </div>

      {/* Legend list matching Screenshot 4 */}
      <div className="space-y-1.5 flex-1 min-w-[120px]">
        {ratios.map((element, idx) => {
          const color = bgColors[element.name] || '#64748B';
          return (
            <div key={idx} className="flex items-center text-xs font-black text-slate-800">
              <span className="w-3.5 h-3.5 rounded-md mr-2.5 transition-colors" style={{ backgroundColor: color }} />
              <span className="min-w-[50px]">{element.name}:</span>
              <span className={`ml-2 font-mono font-black ${textColors[element.name] || 'text-slate-500'}`}>{element.percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Booklet Mockup illustration component shown on promo boxes
const BookletMockup: React.FC = () => {
  return (
    <div className="relative group w-32 h-44 flex-shrink-0 perspective-[1000px] select-none pointer-events-none hidden sm:block">
      <div className="w-full h-full bg-gradient-to-br from-[#2D1B7C] via-[#4F46E5] to-[#7C3AED] rounded-r-2xl shadow-[12px_16px_28px_rgba(33,21,92,0.3)] relative overflow-hidden flex flex-col justify-between p-4.5 border-l-[6px] border-l-[#1E115E]/80">
        {/* Ambient spiritual orbs */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#F4742E]/15 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#6868F9]/15 rounded-full blur-xl" />

        {/* Top Header */}
        <div className="text-[7.5px] text-[#FDE5A9] font-black uppercase tracking-widest text-center border-b border-white/10 pb-1.5 font-mono">
          Vedic Rishi
        </div>

        {/* Dynamic Title Text */}
        <div className="my-auto text-center space-y-1 z-10">
          <div className="text-[10px] font-black text-white leading-tight tracking-tight drop-shadow-md">
            Your Personalised
          </div>
          <div className="text-[12px] font-black tracking-widest text-[#FCAE3B] uppercase bg-white/5 py-1 px-1.5 rounded border border-white/5 drop-shadow">
            Vedic Kundli
          </div>
          <div className="text-[6.5px] text-indigo-200 font-extrabold tracking-wider uppercase">
            145+ Pages Report
          </div>
        </div>

        {/* Footer Pt. Rishiraj */}
        <div className="text-center pt-1.5 border-t border-white/10 z-10">
          <span className="text-[6px] text-slate-300 block font-semibold">Compiled by</span>
          <span className="text-[7px] text-[#F96D6D] font-extrabold uppercase tracking-widest">Pt. Rishiraj</span>
        </div>
      </div>
    </div>
  );
};

export const KundliReportBook: React.FC = () => {
  const { reportData, resetReport } = useReport();
  const navigate = useNavigate();
  const { pageId } = useParams<{ pageId: string }>();

  const currentPage = pageId ? parseInt(pageId, 10) - 1 : 0;

  const setPage = (idx: number) => {
    navigate(`/report/${idx + 1}`);
  };
  const nextPage = () => {
    if (currentPage < 26) navigate(`/report/${currentPage + 2}`);
  };
  const prevPage = () => {
    if (currentPage > 0) navigate(`/report/${currentPage}`);
  };

  const handleResetReport = () => {
    resetReport();
    navigate('/');
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chartType, setChartType] = useState<'north' | 'south'>('north');

  if (!reportData) return <Navigate to="/" replace />;

  // Track scroll details within page container
  const handleScrollToTop = () => {
    const el = document.getElementById('report-page-scroller');
    if (el) el.scrollTop = 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#FFFDF9] via-[#FAF6F0] to-[#FAF5EE] flex flex-col md:flex-row overflow-hidden relative">
      {/* Decorative celestial background sparkles */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Modern Collapsible Table of Contents Navigation Drawer */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 h-screen z-50 md:z-20 border-r border-slate-200/80 bg-white/95 backdrop-blur-md flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out ${isSidebarOpen
          ? 'translate-x-0 w-[85vw] sm:w-80 shadow-2xl md:shadow-none md:w-80 opacity-100'
          : '-translate-x-full md:translate-x-0 w-[85vw] sm:w-80 md:w-0 md:opacity-0 md:overflow-hidden'
          }`}
      >
        <div className="p-5 border-b border-slate-200/80 flex justify-between items-center bg-slate-50/60">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-indigo-600" size={20} />
            <span className="font-extrabold text-sm uppercase tracking-wider text-slate-800">
              Report Index
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-slate-500 hover:text-slate-800 p-1 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {/* Scrollable checklist items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
          {PAGE_TITLES.map((title, idx) => {
            const isActive = idx === currentPage;
            const isCompleted = idx < currentPage;
            return (
              <button
                key={idx}
                onClick={() => {
                  setPage(idx);
                  handleScrollToTop();
                }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-left text-xs font-semibold transition-all group ${isActive
                  ? 'bg-[#FE7950] text-white shadow-md shadow-[#FE7950]/15'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                <div className={`w-5 h-5 rounded-full mr-3 text-[10px] flex items-center justify-center font-bold border transition-colors ${isActive
                  ? 'border-white/40 bg-white/20 text-white'
                  : isCompleted
                    ? 'border-indigo-200 bg-indigo-50/40 text-indigo-500'
                    : 'border-slate-300 bg-transparent text-slate-400'
                  }`}>
                  {idx + 1}
                </div>
                <span className="flex-1 truncate">{title}</span>
                {idx === 26 && (
                  <span className={`px-1.5 py-0.5 rounded text-[8px] uppercase font-black font-mono ml-2 tracking-wider ${isActive ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white animate-pulse'
                    }`}>
                    PRO
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Exit booklet back to start form */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/60 flex justify-center">
          <button
            onClick={handleResetReport}
            className="text-xs font-bold text-slate-500 hover:text-orange-500 hover:text-orange-600 flex items-center space-x-1.5 transition-colors focus:outline-none"
          >
            <RefreshCw size={12} />
            <span>Enter Different Details</span>
          </button>
        </div>
      </aside>

      {/* Main Booklet container view */}
      <main className="flex-1 flex flex-col h-3/4 md:h-screen overflow-hidden relative">
        {/* Floating Show Index Button when Sidebar is closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 left-4 z-30 p-2 px-3 bg-[#FE7950] hover:bg-[#eb6a42] text-white text-xs font-extrabold rounded-lg transition-colors flex items-center shadow-lg"
          >
            <BookOpen size={13} className="mr-1.5" />
            <span>Show Index</span>
          </button>
        )}

        {/* Outer PDF Page Body Grid */}
        <section
          id="report-page-scroller"
          className="flex-1 overflow-y-auto px-4 md:px-12 py-8 flex items-start justify-center custom-scrollbar"
        >
          {/* Virtual Booklet Frame centering */}
          <div className="w-full max-w-2xl bg-[#FCFAF5] border border-[#EBE4D5] shadow-[0_15px_40px_rgba(0,0,0,0.4)] rounded-3xl md:rounded-[2rem] flex flex-col p-6 md:p-10 relative select-text min-h-[580px] justify-between text-slate-800 overflow-hidden">

            {/* Dynamic Header Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-slate-200/60">
              <motion.div
                className="h-full bg-emerald-500 rounded-r-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentPage + 1) / 27) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            <div className="block flex-1">
              {/* Header inside the booklet page */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EBE4D5]/60 relative">
                {/* Left Logo */}
                <div className="flex-1 flex justify-start">
                  <img
                    src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
                    alt="Astroved-logo"
                    className="h-6 sm:h-8 w-auto object-contain"
                  />
                </div>

                {/* Center Section Title */}
                <div className="flex-[2] sm:flex-none flex flex-col items-center justify-center text-center px-2">
                  <div className="flex items-center mb-1 text-[#FE7950] opacity-80">
                    <div className="hidden sm:block w-6 h-px bg-gradient-to-r from-transparent to-[#FE7950] mr-2"></div>
                    <Compass size={14} className="animate-spin" style={{ animationDuration: '25s' }} />
                    <div className="hidden sm:block w-6 h-px bg-gradient-to-l from-transparent to-[#FE7950] ml-2"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-slate-800 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center break-words">
                    {PAGE_TITLES[currentPage]}
                  </span>
                </div>

                {/* Right Balance Placeholder */}
                <div className="flex-1"></div>
              </div>

              {/* Render Page Contents on index */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base font-normal selection:bg-orange-100"
                >
                  {renderReportPage(currentPage, reportData, chartType, setChartType, setPage)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Book Navigator Buttons */}
            <footer className="mt-10 pt-6 border-t border-[#EBE4D5]/60 flex justify-between items-center">
              <button
                onClick={() => {
                  prevPage();
                  handleScrollToTop();
                }}
                disabled={currentPage === 0}
                className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition"
              >
                <ArrowLeft size={16} className="text-slate-700" />
              </button>

              <button
                onClick={() => {
                  nextPage();
                  handleScrollToTop();
                }}
                disabled={currentPage === 26}
                className="flex items-center px-6 py-3 rounded-2xl bg-[#FE7950] hover:bg-[#eb6a42] text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-black shadow-md tracking-wider transition cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight size={14} className="ml-1.5" />
              </button>
            </footer>

          </div>
        </section>
      </main>
    </div>
  );
};

// Render switch logic for pages (Page 0 to 26)
function renderReportPage(pageIdx: number, data: KundliReportData, chartType: 'north' | 'south', setChartType: (type: 'north' | 'south') => void, setPage: (page: number) => void) {
  switch (pageIdx) {
    case 0:
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

    case 1:
      return (
        <div className="space-y-6">
          <div className="space-y-1">

            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Birth Coordinates Summary
            </h2>
          </div>
          <p className="text-xs text-slate-500 ">
            A precise record of the astrological timestamp mapped for your Jyotish calculation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                👤
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Full Name</span>
                <span className="font-extrabold text-slate-800  text-sm">{data.birthDetails.name}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                👥
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Gender Profile</span>
                <span className="font-extrabold text-slate-800  text-sm">{data.birthDetails.gender}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                📅
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Date of Birth</span>
                <span className="font-extrabold text-slate-800  text-sm">
                  {data.birthDetails.day}/{data.birthDetails.month}/{data.birthDetails.year}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                ⏰
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Time of Birth</span>
                <span className="font-extrabold text-slate-800  text-sm">
                  {String(data.birthDetails.hour).padStart(2, '0')}:{String(data.birthDetails.minute).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center col-span-2 space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600  flex items-center justify-center font-black">
                📍
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Place of Calculation</span>
                <span className="font-extrabold text-slate-800  text-sm">
                  {data.birthDetails.city}, {data.birthDetails.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Your Birth Star Details
            </h2>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500/5 to-indigo-500/5 border border-indigo-50  flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-900 ">
                {data.birthStar.nkName} Nakshatra
              </h3>
              <p className="text-xs font-semibold text-slate-500 ">
                Ruling Deity: <span className="text-indigo-600  font-bold">{data.birthStar.associatedDeity}</span>
              </p>
            </div>
            <div className="px-4 py-2 bg-indigo-600 text-white font-heavy text-xs uppercase font-extrabold rounded-xl shadow-md">
              Ruler: {data.birthStar.rulingPlanet}
            </div>
          </div>

          {/* Icon placeholder context */}
          <div className="p-4 rounded-xl bg-indigo-50  text-center flex flex-col items-center">
            <span className="text-4xl filter drop-shadow-md mb-2">⭐</span>
            <p className="text-[11px] font-bold text-indigo-700  uppercase tracking-widest">
              Associated Zodiac: {data.birthStar.zodiacSign}
            </p>
          </div>

          <div className="p-5 bg-indigo-50  border-l-4 border-indigo-600 space-y-2 rounded-r-2xl">
            <p className="text-slate-700  text-xs font-medium leading-relaxed italic">
              "{data.birthStar.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-emerald-100  bg-emerald-50/10 space-y-2">
              <span className="text-[10px] font-black uppercase text-emerald-600  tracking-wider block">
                ✓ Character Strengths
              </span>
              <p className="text-xs text-slate-600  leading-relaxed font-semibold">
                {data.birthStar.strengths}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-orange-100  bg-orange-50/10 space-y-2">
              <span className="text-[10px] font-black uppercase text-orange-600  tracking-wider block">
                ⚡ Karmic Vulnerabilities
              </span>
              <p className="text-xs text-slate-600  leading-relaxed font-semibold">
                {data.birthStar.weaknesses}
              </p>
            </div>
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'remedies')}
        </div>
      );

    case 3:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-[#FE7950] tracking-widest block">Chapter 03</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Core Personality Profile
            </h2>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            In Vedic Astrology, your personality is shaped by multiple pillars. Big 3 includes your Sun sign, your Moon sign and the Ascendant you were born. Your BIG 3 is the most important parameter in Vedic Astrology which represents your physical, emotional and spiritual pathways.
          </p>

          <div className="space-y-3">
            {/* Sun Sign Pill */}
            <div className="p-4 bg-[#FFFBF0] border border-[#FCE6B1] rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#FEF2D5] border border-[#FCE6B1] flex items-center justify-center text-lg shadow-sm">
                ☀️
              </div>
              <div className="flex-1">
                <span className="font-extrabold text-slate-800 text-sm block">
                  Sun Sign (Surya)
                </span>
                <span className="text-xs text-slate-500 font-semibold leading-relaxed">
                  The essence of your core self, representational ego, spark of truth and spiritual willpower in this incarnation.
                </span>
              </div>
            </div>

            {/* Moon Sign Pill */}
            <div className="p-4 bg-[#F2F7FF] border border-[#C5DFFF] rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#E5F2FF] border border-[#B9D9FF] flex items-center justify-center text-lg shadow-sm">
                🌕
              </div>
              <div className="flex-1">
                <span className="font-extrabold text-[#1E3A8A] text-sm block">
                  Moon Sign (Chandra)
                </span>
                <span className="text-xs text-slate-500 font-semibold leading-relaxed">
                  An insight into your emotional self, inner instincts, gut feelings, safety needs and intuitive processes.
                </span>
              </div>
            </div>

            {/* Rising Sign Pill */}
            <div className="p-4 bg-[#FFF5F5] border border-[#FAD0C4] rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#FEEAEA] border-[#F9B4A3] flex items-center justify-center text-xs font-black text-[#991B1B] shadow-sm font-sans tracking-tight">
                ASC
              </div>
              <div className="flex-1">
                <span className="font-extrabold text-[#991B1B] text-sm block">
                  Rising Sign (Lagna)
                </span>
                <span className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Your outward persona and social mask. This represents how you naturally express yourself to strangers.
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed font-semibold italic border-l-2 border-slate-300 pl-3">
            "{data.personality.description}"
          </p>

          {/* Premium Insert Promo for In-depth breakdown */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'breakdown')}
        </div>
      );

    case 4:
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

    case 5:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-[#FE7950] tracking-widest block">Chapter 05</span>
            <p className="text-[11px] text-[#FE7950] font-black uppercase tracking-wider block">Nature's alignment</p>
            <h2 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
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
                <h4 className="font-black text-red-900 text-sm">Fire Element (Agni)</h4>
                <p className="text-[11px] text-slate-600 font-semibold leading-normal">Primal energy, focus, enthusiasm, and spiritual courage.</p>
              </div>
            </div>

            {/* Earth Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#EBF7EA] border border-[#BDE7BD] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl shadow-inner">🌍</div>
              <div>
                <h4 className="font-black text-green-900 text-sm font-sans">Earth Element (Prithvi)</h4>
                <p className="text-[11px] text-slate-600 font-semibold leading-normal">Practical structures, patient foundations, stability, and dependability.</p>
              </div>
            </div>

            {/* Air Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#FEF6E4] border border-[#FDE5A9] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl shadow-inner">💨</div>
              <div>
                <h4 className="font-black text-[#A16207] text-sm">Air Element (Vayu)</h4>
                <p className="text-[11px] text-slate-600 font-semibold leading-normal">Intellectual agility, speech, conceptual logic, and communication.</p>
              </div>
            </div>

            {/* Water Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#E8F3FF] border border-[#B9D9FF] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-inner">💧</div>
              <div>
                <h4 className="font-black text-blue-900 text-sm">Water Element (Jala)</h4>
                <p className="text-[11px] text-slate-600 font-semibold leading-normal">Deep intuitive fields, empathy, creative flow state, and memory.</p>
              </div>
            </div>

            {/* Ether Element */}
            <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-[#F2EAFF] border border-[#DAC3FF] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-xl shadow-inner">🌌</div>
              <div>
                <h4 className="font-black text-purple-900 text-sm">Ether Element (Akasha)</h4>
                <p className="text-[11px] text-slate-600 font-semibold leading-normal">Universal spaciousness, higher wisdom, spiritual portals, and truth alignment.</p>
              </div>
            </div>
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'forecast')}
        </div>
      );

    case 6:
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

    case 7:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Stored Karmic Path
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-indigo-50/40  flex flex-col items-center justify-center text-center space-y-2 col-span-2 border border-indigo-50 ">
              <span className="text-[10px] font-black text-indigo-600  uppercase tracking-widest">
                Karmic Progress Score
              </span>
              <div className="text-4xl font-extrabold text-slate-900  font-mono">
                {data.storedKarma.goodPercentage}%
              </div>
              <p className="text-[11px] text-slate-500  max-w-sm font-semibold">
                An estimate representing balanced karmic fields stemming from prior experiences.
              </p>
            </div>

            <div className="bg-orange-50/15  p-5 rounded-2xl border border-orange-100  col-span-2 space-y-3">
              <h4 className="font-extrabold text-slate-950  text-xs tracking-wider uppercase">
                🔥 Your Focal Karmic Lessons:
              </h4>
              <ul className="text-xs text-slate-700  space-y-2.5 font-semibold list-disc list-inside">
                {data.storedKarma.pendingLessons.map((lesson, idx) => (
                  <li key={idx} className="leading-relaxed">{lesson}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-orange-500/10 text-orange-600 text-xs font-heavy font-extrabold uppercase text-center col-span-2">
              🚨 Primary Karmic Regulator: {data.storedKarma.karmicDebtPlanet}
            </div>

            <p className="text-xs text-slate-500  leading-relaxed col-span-2 italic">
              {data.storedKarma.storedKarmasDescription}
            </p>
          </div>
        </div>
      );

    case 8:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Your Chakras Map
            </h2>
          </div>
          <p className="text-slate-700  text-sm leading-relaxed">
            {data.chakraAnalysis.description}
          </p>

          {/* Chakra energetic map items list */}
          <div className="space-y-3.5">
            {data.chakraAnalysis.chakras.map((chakra, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50  border border-slate-200/50  rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600  font-extrabold text-sm flex items-center justify-center">
                    ☯️
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900  text-xs">
                      {chakra.name} ({chakra.sanskritName})
                    </h4>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">{chakra.status}</span>
                  </div>
                </div>

                <div className="font-mono text-xs font-bold text-slate-600 ">
                  {chakra.percentage}% Energy Focus
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 9:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Dominant Chakra Details
            </h2>
          </div>

          <div className="text-center space-y-3 py-4 bg-purple-500/[0.02] border border-purple-500/10 rounded-2xl p-5">
            {/* Custom interactive chakra wheel indicator */}
            <div className="relative w-36 h-36 mx-auto flex items-center justify-center mb-1">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-400/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2.5 rounded-full border border-dotted border-orange-400/40"
              />
              <div className="w-20 h-24 rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 flex items-center justify-center text-3xl text-white shadow-xl shadow-indigo-600/10">
                🌀
              </div>
              <div className="absolute -top-1 px-3 py-1 bg-indigo-600 text-white font-heavy font-mono text-[9px] uppercase tracking-wider rounded-md shadow-md animate-bounce">
                DOMINANT
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-900 ">
              {data.chakraAnalysis.dominantChakra.name} Chakra
            </h3>
            <span className="px-3.5 py-1 bg-emerald-500/10 text-emerald-600  border border-emerald-500/10 text-[10px] uppercase font-mono rounded-full font-bold">
              {data.chakraAnalysis.dominantChakra.status} ({data.chakraAnalysis.dominantChakra.percentage}% Strength)
            </span>
          </div>

          <p className="text-xs text-slate-600  leading-relaxed font-semibold italic text-center max-w-md mx-auto">
            {data.chakraAnalysis.dominantChakra.description}
          </p>

          <div className="p-4 bg-indigo-50/30  rounded-xl space-y-1.5 border border-indigo-50 ">
            <span className="text-[10px] font-black uppercase text-indigo-600  tracking-wider block">
              💡 Soothing Spiritual Remedy:
            </span>
            <p className="text-xs text-slate-600  leading-relaxed font-semibold">
              {data.chakraAnalysis.dominantChakra.remedy}
            </p>
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(pageIdx + 1), 'remedies')}
        </div>
      );

    case 10:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Ayurvedic Dosha Profile
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            Your biological constitution reflects the dual balances of Tridoshas.
          </p>

          <div className="p-4 rounded-xl bg-orange-500/10 text-orange-600 text-xs font-black uppercase text-center">
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
                  <h4 className="font-extrabold text-sm text-slate-900 ">{dosha.name}</h4>
                  <div className="text-xl font-extrabold font-mono text-slate-800 ">{dosha.percentage}%</div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            {data.doshaAnalysis.doshas.map((dosha, idx) => (
              <div key={idx} className="p-4 bg-slate-50  border border-slate-200/50 rounded-2xl space-y-1.5">
                <h5 className="font-black text-xs text-slate-900 ">
                  {dosha.name} Dosha Context:
                </h5>
                <p className="text-xs text-slate-600  leading-relaxed font-semibold">
                  {dosha.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-indigo-50/30  rounded-xl space-y-2 border border-indigo-50 ">
            <span className="text-[10px] font-black uppercase text-indigo-600  tracking-wider block">
              💡 Balancing Remedies for Daily Living:
            </span>
            <p className="text-xs text-slate-700  leading-relaxed font-semibold">
              {data.doshaAnalysis.balanceRemedy}
            </p>
          </div>
        </div>
      );

    case 11:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Planetary Shield Strengths
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            Planets carry unique energetic behaviors depending on their Vedic dignity.
          </p>

          <div className="space-y-4">
            {/* Yogakaraka row */}
            <div className="p-4.5 rounded-2xl bg-indigo-50/40  border border-indigo-50  space-y-3">
              <span className="px-2.5 py-1 bg-indigo-600 text-white text-[9px] uppercase font-black tracking-wider rounded-md">
                YOGAKARAKA PLANETS
              </span>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.yogakaraka.map((p, idx) => (
                  <span key={idx} className="bg-white border border-indigo-200 text-indigo-700   px-3 py-1 rounded-xl text-xs font-extrabold focus:outline-none shadow-sm">
                    🪐 {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-semibold">
                Yoga Karaka indicates the supreme helper planet in your natal Kundli, carrying massive powers to invite overall growth.
              </p>
            </div>

            {/* Benefics row */}
            <div className="p-4.5 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-3">
              <span className="px-2.5 py-1 bg-emerald-600 text-white text-[9px] uppercase font-black tracking-wider rounded-md">
                BENEFIC FORCES
              </span>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.benefics.map((p, idx) => (
                  <span key={idx} className="bg-white border border-emerald-200/50 text-emerald-700   px-3 py-1 rounded-xl text-xs font-extrabold focus:outline-none shadow-sm">
                    ✦ {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-semibold">
                These are highly protective, auspicious planets that represent areas of ease, wellness, and mental calm.
              </p>
            </div>

            {/* Malefics row */}
            <div className="p-4.5 rounded-2xl bg-orange-500/[0.02] border border-orange-500/10 space-y-3">
              <span className="px-2.5 py-1 bg-orange-600 text-white text-[9px] uppercase font-black tracking-wider rounded-md">
                MALEFIC CHALLENGES
              </span>
              <div className="flex flex-wrap gap-2">
                {data.planetaryStrengths.malefics.map((p, idx) => (
                  <span key={idx} className="bg-white border border-orange-200/50 text-orange-700   px-3 py-1 rounded-xl text-xs font-extrabold focus:outline-none shadow-sm">
                    ⚠️ {p}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500  leading-relaxed font-semibold">
                These are challenging areas where unexpected spiritual lessons, lessons, and tests are triggered.
              </p>
            </div>
          </div>
        </div>
      );

    // Planet profiles (Case 12 to 20)
    case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: {
      const planetKeys = ['sun', 'moon', 'mercury', 'jupiter', 'venus', 'mars', 'saturn', 'rahu', 'ketu'];
      const currentPlanetKey = planetKeys[pageIdx - 12];
      const planet: PlanetPosition = data.planetaryStrengths.planets[currentPlanetKey];

      const emojis: Record<string, string> = {
        sun: '☀️',
        moon: '🌙',
        mercury: '☿️',
        jupiter: '♃',
        venus: '♀️',
        mars: '♂️',
        saturn: '♄',
        rahu: '☊',
        ketu: '☋'
      };

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest block">Planet Profile</span>
            <h2 className="text-2xl font-black text-slate-900  tracking-tight flex items-center">
              <span className="text-3xl mr-2.5 filter drop-shadow">{emojis[currentPlanetKey] || '🪐'}</span>
              {planet.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 py-1 text-center">
            <div className="p-3.5 bg-slate-50  rounded-xl border border-slate-200/50">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Natal Sign</span>
              <span className="font-extrabold text-slate-800  text-sm">{planet.sign}</span>
            </div>
            <div className="p-3.5 bg-slate-50  rounded-xl border border-slate-200/50">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Cusp Position</span>
              <span className="font-extrabold text-slate-805 text-slate-800  text-xs font-mono">{planet.degree}</span>
            </div>
            <div className="p-3.5 bg-slate-50  rounded-xl border border-slate-200/50">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Nakshatra</span>
              <span className="font-extrabold text-slate-808 text-slate-800  text-xs">{planet.nakshatra}</span>
            </div>
            <div className="p-3.5 bg-slate-50  rounded-xl border border-slate-200/50">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Occupied House</span>
              <span className="font-extrabold text-slate-808 text-slate-800  text-sm">{planet.house} House</span>
            </div>
          </div>

          <p className="text-xs text-slate-700  leading-relaxed font-semibold p-4.5 bg-indigo-50/15 border border-indigo-200/30 rounded-2xl italic">
            "{planet.description}"
          </p>

          <div className="p-4 bg-orange-50/30  rounded-xl space-y-1.5 border border-orange-100 ">
            <span className="text-[10px] font-black uppercase text-orange-600  tracking-wider block">
              💡 Corrective Jyotish Remediation:
            </span>
            <p className="text-xs text-slate-600  leading-relaxed font-semibold">
              {planet.remediation}
            </p>
          </div>

          {/* Planet page promos on venus or saturn */}
          {(currentPlanetKey === 'venus' || currentPlanetKey === 'saturn') && renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
        </div>
      );
    }

    case 21:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Favorable Ishta Devata
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            The ruling protective divinity mapped from prior incarnations on earth.
          </p>

          <div className="bg-indigo-700  p-5 rounded-3xl text-white space-y-3 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 bottom-0 opacity-10 font-bold select-none text-9xl">🕉️</div>
            <h3 className="font-black text-lg text-indigo-100">Favorable Archetypes:</h3>
            <div className="text-xl font-bold bg-white/10 p-2.5 rounded-xl border border-white/10 w-fit text-orange-200">
              {data.spiritualProfile.ishtaDevata.name}
            </div>
            <p className="text-xs text-indigo-200 leading-relaxed">
              {data.spiritualProfile.ishtaDevata.description}
            </p>
          </div>

          {/* Deity columns lists */}
          <div className="grid grid-cols-2 gap-4">
            {data.spiritualProfile.ishtaDevata.deities.map((deity, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50  hover:bg-slate-100/50 :bg-slate-800/40 border border-slate-200/50  text-center space-y-2.5 shadow-sm transition"
              >
                <div className="w-16 h-16 rounded-full bg-white  flex items-center justify-center text-3xl mx-auto shadow-md">
                  {deity.emoji}
                </div>
                <h4 className="font-extrabold text-slate-900  text-xs">
                  {deity.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      );

    case 22:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Atmakaraka Soul Focal
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-600 text-center text-xs font-black uppercase">
            🌞 Atmakaraka Planet: {data.spiritualProfile.atmakaraka.planetName}
          </div>

          <div className="p-5 bg-gradient-to-r from-orange-500/5 to-indigo-500/5 border border-indigo-50  space-y-2.5 rounded-2xl">
            <h4 className="font-extrabold text-slate-900  text-sm">
              The Soul\'s Underlying Desire:
            </h4>
            <p className="text-xs text-slate-600  leading-relaxed font-semibold">
              {data.spiritualProfile.atmakaraka.soulDesireText}
            </p>
          </div>

          <p className="text-xs text-slate-500  leading-relaxed italic">
            {data.spiritualProfile.atmakaraka.description}
          </p>
        </div>
      );

    case 23:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Your Lagna Kundli Chart
            </h2>
          </div>

          {/* Review birth details summary indicators inside booklet */}
          <div className="p-3 bg-indigo-50/30  rounded-2xl flex justify-between items-center text-xs font-bold border border-indigo-50">
            <div className="space-y-0.5 text-slate-600 ">
              <div>Birth: <span className="text-indigo-700 ">{data.birthDetails.name}</span> ({data.birthDetails.gender})</div>
              <div className="text-[11px] text-slate-400">Time: {data.birthDetails.day}/{data.birthDetails.month}/{data.birthDetails.year} {data.birthDetails.hour}:{data.birthDetails.minute}</div>
            </div>

            {/* Select Chart Style togglers */}
            <div className="flex bg-slate-200/50  p-1 rounded-xl">
              <button
                onClick={() => setChartType('north')}
                className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all ${chartType === 'north' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500'
                  }`}
              >
                NORTH
              </button>
              <button
                onClick={() => setChartType('south')}
                className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all ${chartType === 'south' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500'
                  }`}
              >
                SOUTH
              </button>
            </div>
          </div>

          {/* Interactive Graphic Kundli Chart Wrapper */}
          <div className="flex justify-center py-2 h-[320px] items-center">
            {chartType === 'north' ? (
              // High Fidelity North Indian Diamond Chart SVG representation
              <svg width="280" height="280" viewBox="0 0 300 300" className="text-slate-800 ">
                {/* Background Box */}
                <rect x="0" y="0" width="300" height="300" fill="none" stroke="currentColor" strokeWidth="2.5" />
                {/* Major Diagonals */}
                <line x1="0" y1="0" x2="300" y2="300" stroke="currentColor" strokeWidth="1.5" />
                <line x1="300" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="1.5" />
                {/* Inner Diamonds lines */}
                <line x1="150" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1.5" />
                <line x1="150" y1="0" x2="300" y2="150" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="150" x2="150" y2="300" stroke="currentColor" strokeWidth="1.5" />
                <line x1="300" y1="150" x2="150" y2="300" stroke="currentColor" strokeWidth="1.5" />

                {/* Displaying house sign numbers with specific coordinate spacing */}
                {/* House 1: Lagna (Taurus-2) */}
                <text x="145" y="115" className="fill-indigo-600  font-extrabold text-xs">2</text>
                <text x="135" y="95" className="fill-orange-500 font-bold text-[9px] uppercase">Lagna (Asc)</text>

                {/* House 2: Gemini-3 */}
                <text x="95" y="65" className="fill-slate-400 font-extrabold text-xs">3</text>

                {/* House 3: Cancer-4 Rahu */}
                <text x="35" y="65" className="fill-slate-405 text-slate-400 font-extrabold text-xs">4</text>
                <text x="30" y="85" className="fill-rose-500 font-bold text-[9px]">Ra</text>

                {/* House 4: Leo-5 */}
                <text x="65" y="145" className="fill-slate-405 text-slate-400 font-extrabold text-xs">5</text>

                {/* House 5: Virgo-6 */}
                <text x="35" y="225" className="fill-slate-405 text-slate-400 font-extrabold text-xs">6</text>

                {/* House 6: Libra-7 */}
                <text x="95" y="245" className="fill-slate-405 text-slate-400 font-extrabold text-xs">7</text>

                {/* House 7: Scorpio-8 */}
                <text x="145" y="195" className="fill-slate-405 text-slate-400 font-extrabold text-xs">8</text>

                {/* House 8: Sag-9 */}
                <text x="195" y="245" className="fill-slate-405 text-slate-400 font-extrabold text-xs">9</text>

                {/* House 9: Cap-10 Moon, Venus, Ketu */}
                <text x="255" y="225" className="fill-slate-500 text-slate-500 text-slate-400 font-extrabold text-xs">10</text>
                <text x="235" y="195" className="fill-blue-500 font-bold text-[9px]">Mo Ve Ke</text>

                {/* House 10: Aqu-11  Sun, Mercury */}
                <text x="225" y="145" className="fill-slate-500 text-slate-500 text-slate-400 font-extrabold text-xs">11</text>
                <text x="225" y="125" className="fill-orange-500 font-bold text-[9px]">Su Me</text>

                {/* House 11: Pisces-12 Mars */}
                <text x="255" y="65" className="fill-slate-500 text-slate-500 text-slate-400 font-extrabold text-xs">12</text>
                <text x="235" y="85" className="fill-red-500 font-bold text-[9px]">Ma</text>

                {/* House 12: Aries-1 Saturn, Ju */}
                <text x="195" y="65" className="fill-slate-400 font-extrabold text-xs">1</text>
                <text x="180" y="45" className="fill-purple-500 font-bold text-[9px]">Sa Ju</text>
              </svg>
            ) : (
              // High Fidelity South Indian Grid Style Chart SVG
              <svg width="280" height="280" viewBox="0 0 320 320" className="text-slate-800 ">
                {/* Outlines of 12 boxes layout */}
                <rect x="0" y="0" width="320" height="320" fill="none" stroke="currentColor" strokeWidth="2.5" />

                {/* Horizontal internal bounds grid */}
                <line x1="0" y1="80" x2="320" y2="80" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="160" x2="320" y2="160" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="240" x2="320" y2="240" stroke="currentColor" strokeWidth="1.5" />

                {/* Vertical internal bounds grid */}
                <line x1="80" y1="0" x2="80" y2="320" stroke="currentColor" strokeWidth="1.5" />
                <line x1="160" y1="0" x2="160" y2="320" stroke="currentColor" strokeWidth="1.5" />
                <line x1="240" y1="0" x2="240" y2="320" stroke="currentColor" strokeWidth="1.5" />

                {/* Center empty space box mask */}
                <rect x="80" y="80" width="160" height="160" fill="white" className=" font-bold" />
                <text x="100" y="165" className="fill-indigo-600  font-extrabold text-xs">LAGNA BLUEPRINT</text>

                {/* Sign allocations */}
                {/* Aries-1 (top center-left) */}
                <text x="90" y="30" className="fill-slate-400 text-[10px] font-bold">Aries (Sa, Ju)</text>
                {/* Taurus-2 (top center-right) */}
                <text x="170" y="30" className="fill-indigo-500 text-[10px] font-black">Taurus (Asc)</text>
                {/* Gemini-3 (top-right) */}
                <text x="250" y="30" className="fill-slate-400 text-[10px] font-bold">Gemini</text>
                {/* Cancer-4 */}
                <text x="250" y="110" className="fill-slate-400 text-[10px] font-bold">Cancer (Ra)</text>
                {/* Leo-5 */}
                <text x="250" y="190" className="fill-slate-400 text-[10px] font-bold">Leo</text>
                {/* Virgo-6 */}
                <text x="250" y="270" className="fill-slate-400 text-[10px] font-bold">Virgo</text>
                {/* Libra-7 */}
                <text x="170" y="270" className="fill-slate-400 text-[10px] font-bold">Libra</text>
                {/* Scorpio-8 */}
                <text x="90" y="270" className="fill-slate-400 text-[10px] font-bold">Scorpio</text>
                {/* Sagittarius-9 */}
                <text x="10" y="270" className="fill-slate-400 text-[10px] font-bold">Sagittarius</text>
                {/* Capricorn-10 */}
                <text x="10" y="190" className="fill-slate-405 text-slate-400 text-[10px] font-bold font-semibold">Capricorn (Mo,Ve,Ke)</text>
                {/* Aquarius-11 */}
                <text x="10" y="110" className="fill-slate-500 text-slate-500 text-slate-400 text-[10px] font-bold font-semibold">Aquarius (Su,Me)</text>
                {/* Pisces-12 */}
                <text x="10" y="30" className="fill-slate-500 text-slate-500 text-slate-400 text-[10px] font-bold font-semibold">Pisces (Ma)</text>
              </svg>
            )}
          </div>

          <div className="space-y-4 font-semibold text-xs border border-indigo-50  bg-indigo-50/15 p-4 rounded-xl leading-relaxed">
            <h4 className="font-extrabold text-indigo-950  text-xs tracking-wider uppercase">
              📖 How to Read the Houses Map:
            </h4>
            <p className="text-slate-600 ">
              Each numbered section inside your Kundli chart represents a specific house, starting from House 1 (central Lagna block) and moving anti-clockwise.
              The text inside each house maps the active planets parked there at your exact birth coordinate, shaping your biological focus areas.
            </p>
          </div>
        </div>
      );

    case 24:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Vimshottari Dasha Analysis
            </h2>
          </div>

          <div className="p-4 bg-emerald-500/10 text-emerald-600 text-xs font-black uppercase text-center rounded-xl md:rounded-2xl">
            🟢 Active Dasha Phase: Rahu Mahadasha & Venus Antardasha
          </div>

          <p className="text-xs text-slate-600  leading-relaxed font-semibold">
            Vedic astrology divides your life journey into structured chronological dasha segments ruled by key planets. The planetary lord ruling your active Mahadasha provides the principal theme for your career developments, wealth, and wellness traits.
          </p>

          {/* Dasha timeline ladders */}
          <div className="space-y-4">
            {data.dashaTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-7 group">
                {idx < 4 && (
                  <div className="absolute left-3 top-6 bottom-[-24px] w-0.5 bg-indigo-100 " />
                )}
                {/* Chronology timeline node circles */}
                <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-indigo-600 bg-white  z-10 transition-colors group-hover:bg-indigo-600" />

                <div className="p-4.5 rounded-2xl bg-slate-50  hover:bg-slate-100/50 :bg-slate-800/40 border border-slate-200/50  transition flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black text-indigo-620  uppercase tracking-widest block">
                      {item.levelName}
                    </span>
                    <h4 className="font-extrabold text-slate-900  text-sm">
                      Lord: {item.planetName}
                    </h4>
                  </div>
                  <div className="text-right text-xs font-mono font-bold text-slate-500 ">
                    <div>{item.startDate}</div>
                    <div className="text-[10px] text-slate-400">until {item.endDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Insert Promo */}
          {renderPromoBox(() => setPage(26), 'forecast')}
        </div>
      );

    case 25:
      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Future Predictions & specialized predictions
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            These represent cosmic forecasts mapped specifically for your active life area metrics.
          </p>

          <div className="space-y-4">
            {data.predictions.map((val, idx) => {
              const icons = { Career: '💼', Wealth: '💰', Health: '🍏', Relationships: '🤝', Spirituality: '🧘' };
              const categoryColors = {
                Career: 'border-l-indigo-500',
                Wealth: 'border-l-orange-500',
                Health: 'border-l-emerald-500',
                Relationships: 'border-l-pink-500',
                Spirituality: 'border-l-purple-500'
              };

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-slate-50  hover:bg-slate-100/50 border border-slate-200/50  border-l-4 ${categoryColors[val.category as keyof typeof categoryColors] || 'border-l-indigo-500'} space-y-3 shadow-sm transition`}
                >
                  <div className="flex justify-between items-center border-b border-indigo-50/60  pb-2">
                    <h4 className="font-extrabold text-sm text-slate-950  flex items-center">
                      <span className="text-base mr-2">{icons[val.category as keyof typeof icons] || '✦'}</span>
                      {val.category} Assessment
                    </h4>

                    {/* Visual Score rings/pills */}
                    <div className="px-3 py-1 bg-indigo-500/10 text-indigo-600  font-bold font-mono text-xs rounded-xl shadow-inner">
                      Score: {val.score}%
                    </div>
                  </div>

                  <p className="text-xs text-slate-700  leading-relaxed font-semibold">
                    "{val.text}"
                  </p>

                  <div className="pt-1.5 text-[11px] text-slate-500  leading-normal flex items-start space-x-1.5">
                    <span className="text-xs mt-0.5">💡</span>
                    <span className="font-semibold italic">Remedy: {val.remedy}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

    case 26:
      return (
        <PremiumCheckout data={data} />
      );

    default:
      return null;
  }
}

// Reusable promotional/upsell component mirroring authentic PDF style
function renderPromoBox(onPromoClick: () => void, textType: 'combo' | 'breakdown' | 'forecast' | 'remedies') {
  const content = {
    combo: {
      tag: 'BEST COMBO OFFER JUST FOR YOU!',
      text: 'We\'ve put together a special Best Combo Offer designed just for you. This includes both the Yearly Varshaphal Report (month-by-month predictions) and the Premium Kundli Report offering in-depth protective remedies combined into a pristine 145+ page book set.',
      btn: 'Continue Reading ➔',
      bg: 'bg-[#F2EAFF] border-[#DAC3FF]',
      tagBg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
      btnBg: 'bg-[#9333ea] hover:bg-[#7e22ce] text-white',
    },
    breakdown: {
      tag: 'IN-DEPTH KUNDLI BREAKDOWN',
      text: 'Get a full Vedic chart breakdown with house-level readings, Dasha schedules, divisional charts, plus Manglik Dosha and Ishta Devata guidance—complete with gemstone and mantra suggestions for your life stages.',
      btn: 'Continue Reading ➔',
      bg: 'bg-[#FEF6D9] border-amber-300',
      tagBg: 'bg-gradient-to-r from-amber-500 to-amber-600',
      btnBg: 'bg-[#FDB515] hover:bg-[#E29E0B] text-slate-950',
    },
    forecast: {
      tag: 'PRECISE KARMIC FORECAST',
      text: 'Explore your Dasha timeline, Yogini and Ashtakavarga scores, Sarvaashtak Varga strength map and composite friendship table to see which planets support or challenge you—plus expert gem, mantra and Havan guidelines to balance your energies.',
      btn: 'Continue Reading ➔',
      bg: 'bg-[#FEF6D9] border-amber-300',
      tagBg: 'bg-[#FEA82F]',
      btnBg: 'bg-[#FEA82F] hover:bg-[#e49122] text-white',
    },
    remedies: {
      tag: 'PROTECTIVE VEDIC REMEDIES',
      text: 'Your complete booklet contains personalized remedies, customized mantras and daily guidelines curated specifically to balance your active planetary positions and release blockages.',
      btn: 'Continue Reading ➔',
      bg: 'bg-[#EBF7EA] border-emerald-300',
      tagBg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      btnBg: 'bg-[#10b981] hover:bg-[#059669] text-white',
    }
  };

  const active = content[textType];

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`p-5 rounded-3xl border ${active.bg} text-slate-800 space-y-4 relative overflow-hidden shadow-sm mt-6 cursor-pointer select-none flex flex-col sm:flex-row items-center justify-between gap-5`}
      onClick={onPromoClick}
    >
      <div className="flex-1 space-y-3">
        <span className={`inline-block px-3 py-1 ${active.tagBg} text-white font-heavy font-mono text-[9px] uppercase tracking-wider rounded-md shadow-sm`}>
          {active.tag}
        </span>

        <p className="text-xs text-slate-600 leading-relaxed font-semibold">
          {active.text}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPromoClick();
          }}
          className={`w-full sm:w-auto px-5 py-3 ${active.btnBg} text-xs font-black rounded-xl cursor-pointer text-center block transition-all shadow-sm`}
        >
          {active.btn}
        </button>
      </div>

      {/* Realistic 3D Mockup render */}
      <BookletMockup />
    </motion.div>
  );
}

// Complete interactive premium checkout experience (Slide 27 / Page 26 idx)
const PremiumCheckout: React.FC<{ data: KundliReportData }> = ({ data }) => {
  const [selectedOffer, setSelectedOffer] = useState<'varshaphal' | 'kundli' | 'combo'>('combo');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Offers configuration details matching references in screenshots
  const offers = {
    varshaphal: {
      title: 'Your Year\'s Varshaphal Report',
      price: 499,
      originalPrice: 1999,
      savePrice: 1500,
      description: 'Your customized Yearly Varshaphal Report. Predicts potential monthly gains, developments, monthly transits, and targeted remediation.'
    },
    kundli: {
      title: 'Full Premium Kundli Report',
      price: 650,
      originalPrice: 1500,
      savePrice: 850,
      description: 'The standard 145+ page comprehensive book of predictions, mantras, gemstones, planetary yogas, and yogakaraka analyses by Pt. Rishiraj.'
    },
    combo: {
      title: 'Best Combo Offer (Recommended)',
      price: 899,
      originalPrice: 3499,
      savePrice: 2600,
      description: 'Provides BOTH files at a massive 74% aggregate discount. Complete planetary breakdowns, yearly forecasts, and protective remedies in one volume.'
    }
  };

  const activeOffer = offers[selectedOffer];

  // Countdown timer local state simulation
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 13, s: 19 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: 59, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid email to deliver your report.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest block">Deliverables Page</span>
        <h2 className="text-2xl font-black text-slate-900  tracking-tight">
          Secure Your Premium Deliverables
        </h2>
      </div>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-emerald-500/[0.04] border-2 border-emerald-500/20 rounded-3xl text-center space-y-4"
        >
          <div className="w-16 h-16 bg-emerald-500 text-white text-3xl flex items-center justify-center rounded-full mx-auto shadow-md shadow-emerald-500/10">
            ✓
          </div>
          <h3 className="text-lg font-black text-slate-900 ">
            Transaction Completed Successfully!
          </h3>
          <p className="text-xs text-slate-600  leading-relaxed max-w-sm mx-auto">
            Your pristine Vedic Astrological Report pack has been compiled and dispatched to <span className="text-indigo-600 font-extrabold">{email}</span>. Please verify your inbox and spam folders within next 5 minutes.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-slate-100  text-slate-700  font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 focus:outline-none transition cursor-pointer"
            >
              <Printer size={13} />
              <span>Print current review page</span>
            </button>
            <button
              onClick={() => alert('Downloading your premium PDF package...')}
              className="px-4 py-2.5 bg-indigo-600 text-white font-heavy text-xs rounded-xl flex items-center justify-center space-x-1.5 hover:bg-indigo-800 transition cursor-pointer"
            >
              <Download size={13} />
              <span>Download PDF File directly</span>
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-5">
          {/* Real-time countdown timer */}
          <div className="text-center font-bold text-xs text-red-500 uppercase tracking-widest animate-pulse flex items-center justify-center space-x-1 mb-2">
            <span>⌛ SPECIAL DECREASING LAUNCH PRICING ENDS IN:</span>
            <span className="font-mono bg-red-500 text-white px-2 py-0.5 rounded text-[11px]">
              {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
            </span>
          </div>

          <p className="text-xs text-slate-500 ">
            Secure complete predictions for the upcoming 6-8 years, fully customized remediation guidelines, and month-by-month dasha updates. Select your report choice below:
          </p>

          {/* Interactive Checkbox Offer selections matching Screenshot 11 */}
          <form onSubmit={handleCheckout} className="space-y-4">
            <div className="space-y-3">
              {/* Varshaphal Option */}
              <div
                onClick={() => setSelectedOffer('varshaphal')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center ${selectedOffer === 'varshaphal'
                  ? 'border-indigo-600 bg-indigo-600/[0.02] '
                  : 'border-slate-200 border-slate-200  bg-white '
                  }`}
              >
                <input
                  type="radio"
                  name="astrology_offer"
                  checked={selectedOffer === 'varshaphal'}
                  onChange={() => setSelectedOffer('varshaphal')}
                  className="w-4 h-4 text-indigo-600/10 mr-4 focus:ring-0 focus:outline-none"
                />

                <div className="flex-1 space-y-0.5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-extrabold text-sm text-slate-900  flex items-center">
                      Yearly Varshaphal Report
                    </h4>
                    <div className="text-xs font-mono font-bold text-slate-800 ">
                      <span className="text-slate-400 line-through mr-1.5">₹1999</span>
                      <span className="text-indigo-600  font-extrabold">₹499 (50% Off)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500  leading-normal">
                    Targeted predictions, remedy actions, monthly transits. (99 pages)
                  </p>
                </div>
              </div>

              {/* Premium Kundli Option */}
              <div
                onClick={() => setSelectedOffer('kundli')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center ${selectedOffer === 'kundli'
                  ? 'border-indigo-600 bg-indigo-600/[0.02] '
                  : 'border-slate-200 border-slate-200  bg-white '
                  }`}
              >
                <input
                  type="radio"
                  name="astrology_offer"
                  checked={selectedOffer === 'kundli'}
                  onChange={() => setSelectedOffer('kundli')}
                  className="w-4 h-4 text-indigo-600/10 mr-4 focus:ring-0 focus:outline-none"
                />

                <div className="flex-1 space-y-0.5">
                  <div className="flex justify-between items-center">
                    <h4 className="font-extrabold text-sm text-slate-900  flex items-center">
                      Your Premium Kundli Report
                    </h4>
                    <div className="text-xs font-mono font-bold text-slate-800 ">
                      <span className="text-slate-400 line-through mr-1.5">₹1500</span>
                      <span className="text-indigo-600  font-extrabold">₹650 (57% Off)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500  leading-normal">
                    145+ page comprehensive book of predictions, mantras, gemstones, and yogas.
                  </p>
                </div>
              </div>

              {/* Combo Option (Double Select tag exactly matching Screenshot 11) */}
              <div
                onClick={() => setSelectedOffer('combo')}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center relative overflow-hidden ${selectedOffer === 'combo'
                  ? 'border-orange-500 bg-orange-500/[0.02] '
                  : 'border-slate-200 border-slate-200  bg-white '
                  }`}
              >
                {/* Visual Exclusive Tag banner */}
                <div className="absolute right-0 top-0 bg-red-500 text-white font-black font-mono text-[7px] uppercase tracking-wider py-1 px-3 rounded-bl-xl">
                  🔥 EXCLUSIVE BEST VALUE
                </div>

                <input
                  type="radio"
                  name="astrology_offer"
                  checked={selectedOffer === 'combo'}
                  onChange={() => setSelectedOffer('combo')}
                  className="w-4 h-4 text-orange-500 mr-4 focus:ring-0 focus:outline-none"
                />

                <div className="flex-1 space-y-0.5">
                  <div className="flex justify-between items-center pr-12">
                    <h4 className="font-extrabold text-sm text-slate-900  flex items-center">
                      Best Combo Offer (Includes Both)
                    </h4>
                    <div className="text-xs font-mono font-bold text-slate-800 ">
                      <span className="text-slate-400 line-through mr-1.5">₹3499</span>
                      <span className="text-orange-500  font-extrabold">₹899 (74% Off)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500  leading-normal">
                    Includes both Varshaphal predictions AND the Premium Kundli report. (Most Populated Package)
                  </p>
                </div>
              </div>
            </div>

            {/* Structured review testomonials matching Screenshot 11 */}
            <div className="p-4 bg-slate-50  rounded-2xl border border-slate-200/55  space-y-2 mt-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-700 text-white text-xs font-black flex items-center justify-center font-bold">
                    AK
                  </div>
                  <div>
                    <h5 className="font-black text-slate-950  text-[11px]">Aditya K.</h5>
                    <span className="text-[9px] text-emerald-500 font-bold block uppercase">✓ Verified Purchaser (3 weeks ago)</span>
                  </div>
                </div>
                <div className="text-sm">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-[10px] text-slate-550  leading-snug font-medium italic">
                "Getting my detailed Kundli report was life-changing. The planetary positions explained my financial struggles perfectly and offered timed triggers that truly worked. I have already recommended this to my family."
              </p>
            </div>

            {/* Checkout Action Input and Button */}
            <div className="space-y-3 pt-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-655  uppercase tracking-wider flex items-center">
                  Delivery Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to receive compilation files"
                  className="w-full bg-slate-50  border border-slate-200 focus:border-indigo-500 rounded-xl py-3 px-4 text-slate-800 text-sm placeholder:text-slate-400 focus:ring-0 focus:outline-none font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-extrabold tracking-wide uppercase rounded-xl md:rounded-2xl transition duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/15 cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing Payment Portal...</span>
                  </>
                ) : (
                  <>
                    <CreditCard size={15} />
                    <span>Secure Report Access (₹{activeOffer.price}.00)</span>
                  </>
                )}
              </button>

              <div className="flex justify-center items-center space-x-2.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest pt-1.5 justify-center">
                <span className="flex items-center"><Lock size={10} className="mr-1 text-emerald-500" /> SSL SECURE 256-BIT</span>
                <span>•</span>
                <span>COMPLETE PRIVACY ASSURED</span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
