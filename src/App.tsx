import React, { useState } from 'react';
import { ReportProvider, useReport } from './context/ReportContext';
import { BirthDetailsForm } from './components/BirthDetailsForm';
import { KundliReportBook } from './components/KundliReportBook';
import { Sparkles, Star, Sun, Compass, Play, ChevronDown, Award, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-indigo-950 flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden select-none">
      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl" />

      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Rotating outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-400/35"
        />
        {/* Rotating inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-6 rounded-full border-2 border-dotted border-orange-400/35"
        />
        {/* Pulsing center sun */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-800 to-indigo-650 flex items-center justify-center text-5xl shadow-2xl shadow-indigo-500/20 border border-white/10"
        >
          ☀️
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 space-y-3"
      >
        <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent">
          Calculating Your Cosmic Alignments
        </h2>
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-xs tracking-widest uppercase font-mono font-bold text-slate-400"
        >
          Connecting to Lahiri coordinates library...
        </motion.p>
      </motion.div>
    </div>
  );
};

const LandingScreen: React.FC = () => {
  const [focusArea, setFocusArea] = useState('My General Destiny');
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  const focusAreas = [
    'My General Destiny',
    'Career & Wealth Prosperity',
    'Marriage & Love Harmony',
    'Family Welfare & Harmony',
    'Higher Spiritual Path',
    'Dosha Remedies & Gems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#FFFDF9] via-[#FAF6F0] to-[#FAF5EE] text-slate-800  flex items-center justify-center p-5 md:p-12 relative overflow-hidden">

      {/* Decorative background vectors representing a classical celestial lobby */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-20 pointer-events-none select-none text-indigo-500/10">
        <Sun size={480} strokeWidth={0.5} />
      </div>
      <div className="absolute top-1/3 right-10 -translate-y-1/2 opacity-20 pointer-events-none select-none text-orange-500/15">
        <Star size={320} strokeWidth={0.5} />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center z-10 py-6">

        {/* Left column presentation text */}
        <div className="space-y-6 text-center lg:text-left">

          <div className="inline-flex items-center space-x-2 bg-indigo-50/70 border border-indigo-100 rounded-full px-4.5 py-2">
            <Sparkles size={14} className="text-indigo-600 animate-pulse" />
            <span className="text-indigo-950 font-black text-xs uppercase tracking-wider">
              AstroVed
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 tracking-tight leading-[1.08] lg:-mt-2">
            Get All Your <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-indigo-600 bg-clip-text text-transparent">
              Questions Answered
            </span> <br />
            — Right Here
          </h1>

          <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-semibold">
            Unlock professional planetary degree charts, sub-period timelines, chakra progress scores, and targeted life remediation in one pristine digital booklet.
          </p>

          {/* Dynamic selector "Select your focus area" from screenshot 1 */}
          <div className="relative inline-block w-full max-w-sm text-left mx-auto lg:mx-0">
            <label className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1.5 block">
              Select Your Focus Area
            </label>
            <button
              type="button"
              onClick={() => setIsFocusOpen(!isFocusOpen)}
              className="w-full bg-white border border-slate-200/80 hover:border-indigo-400 py-3.5 px-5 rounded-2xl flex items-center justify-between font-extrabold text-sm text-slate-800 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <span>{focusArea}</span>
              <ChevronDown size={16} className="text-orange-500 ml-2" />
            </button>

            <AnimatePresence>
              {isFocusOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-20 overflow-hidden"
                >
                  {focusAreas.map((area) => (
                    <li key={area}>
                      <button
                        type="button"
                        onClick={() => {
                          setFocusArea(area);
                          setIsFocusOpen(false);
                        }}
                        className="w-full text-left py-3 px-5 text-xs font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border-b border-slate-50 last:border-0 transition-colors"
                      >
                        {area}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div className="h-0.5 w-16 bg-orange-400 rounded-full mx-auto lg:mx-0 my-3" />

          {/* Credentials stats row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-slate-400 text-xs font-bold">
            <span className="flex items-center"><Award size={14} className="text-orange-500 mr-1.5" /> Sidereal Lahiri Ayanamsha</span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="flex items-center"><Shield size={14} className="text-indigo-500 mr-1.5" /> High Encryption Privacy</span>
          </div>

        </div>

        {/* Right column Form container */}
        <div className="w-full flex justify-center lg:justify-end">
          <BirthDetailsForm />
        </div>

      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ReportProvider>
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/generating" element={<LoadingScreen />} />
            <Route path="/report/:pageId" element={<KundliReportBook />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </ReportProvider>
    </BrowserRouter>
  );
}
