import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { BookletMockup } from '../SharedElements';
import { useNavigate } from 'react-router-dom';

export const ReportFeaturesPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const navigate = useNavigate();
  const features = [
    {
      title: 'Your Kundli and its Calculation',
      description: 'Learn about yourself by knowing your special Kundli. Also, you will get 21 horoscope charts about different life parts.',
      bgColor: 'bg-amber-100/50',
      imgSrc: 'https://cdn.astroved.com/images/images-av/kundali-book-1.png' // using placeholder or can just use colored blocks for now
    },
    {
      title: 'Elements of your Kundli',
      description: 'Find out about your panchang and the predictions and remedies based on it. Also, get to know about your birth nakshatra. See which of the five elements (5 tattva) affects you the most.',
      bgColor: 'bg-emerald-100/50',
    },
    {
      title: 'Doshas and Remedies for you',
      description: 'Get predictions and remedies to follow for the dosha present in your Kundli, such as Manglik dosha, kalsarpa dosha, and many more.',
      bgColor: 'bg-blue-100/50',
    },
    {
      title: 'In-depth analysis of your kundli',
      description: 'Know yourself through 11 detailed reports on key life parts. From your Lagna report to Career, Wealth & Finances, Marriage & relationship. Also, know your past life lessons and suggestions so that you do not make the same mistakes.',
      bgColor: 'bg-purple-100/50',
    },
    {
      title: 'Detailed Kundli Predictions',
      description: 'Get detailed predictions, possible planet challenges in your kundli, and ways to fix them.',
      bgColor: 'bg-pink-100/50',
    },
    {
      title: 'Dasha Predictions for the next 8 years',
      description: 'This report gives predictions and remedies for the next 6-8 years. Know about coming good and bad times, and how to handle them well.',
      bgColor: 'bg-orange-100/50',
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
            Here we have prepared your in-depth personalized Premium Kundli Report
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Know your future predictions and remedies for the next 6 to 8 years. Also, get an in-depth Kundli analysis of your important life areas.
          </p>
        </div>
        <div className="flex-shrink-0 scale-90 sm:scale-100">
          <BookletMockup />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">What you will get in this report?</h3>

        <div className="space-y-4">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex gap-4 p-5 rounded-2xl ${feature.bgColor} transition-transform hover:-translate-y-0.5`}>
              <div className="flex-1 space-y-2">
                <h4 className="text-[15px] font-bold text-slate-900">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              {/* Optional: Add a small decorative image or icon here similar to screenshots */}
              <div className="hidden sm:flex w-24 h-24 bg-white/40 rounded-xl items-center justify-center border border-white/60 shadow-sm overflow-hidden relative">
                <div className="text-[8px] font-bold text-slate-400 absolute top-2 left-2">CHAPTER</div>
                <div className="text-3xl font-black text-slate-800 opacity-20">{idx + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-orange-200 rounded-2xl p-6 bg-white shadow-sm space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
            <img src="https://i.pravatar.cc/150?u=dhaval" alt="Dhaval Motghare" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Dhaval Motghare</h4>
            <p className="text-xs text-slate-500">Engineer</p>
          </div>
        </div>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-[#FCAE3B] fill-[#FCAE3B]" />)}
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          One of the most detailed and useful kundli report I have come across. It provides simple and effective remedies that are easy to follow. I am really satisfied after using it. Thanks for creating this useful kundli report !!!
        </p>
      </div>

      <button
        onClick={() => navigate('/report/premium-deliverables')}
        className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:scale-95"
      >
        Get Your Kundli Report Now
        <ArrowRight size={20} />
      </button>

    </div>
  );
};
