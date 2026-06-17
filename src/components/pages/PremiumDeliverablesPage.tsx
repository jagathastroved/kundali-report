import React, { useState, useEffect } from 'react';
import { useReport } from '../../context/ReportContext';
import {
  CheckCircle2, Star, Edit, CreditCard, Wallet, Smartphone, Building,
  ChevronRight, Circle, CheckCircle, ShieldCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PremiumDeliverablesPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const navigate = useNavigate();
  const { birthDetails } = useReport();

  const [selectedOffer, setSelectedOffer] = useState('combo');
  const [selectedChart, setSelectedChart] = useState('north');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  // Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 8, minutes: 46, seconds: 5 });

  // Payment State
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) { seconds--; }
        else {
          seconds = 59;
          if (minutes > 0) { minutes--; }
          else {
            minutes = 59;
            if (hours > 0) { hours--; }
            else { hours = 23; if (days > 0) days--; }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePayment = (method: string) => {
    if (!email || !mobile) {
      alert("Please enter your email and mobile number to proceed.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).");
      return;
    }
    setIsProcessing(true);
    // Simulate API call for payment
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <ShieldCheck size={48} className="text-green-500" />
        </div>
        <h2 className="text-3xl font-semibold text-slate-900">Payment Successful!</h2>
        <p className="text-slate-600 max-w-sm">
          Thank you for your purchase. Your premium comprehensive report is currently being generated and will be sent to <strong>{email}</strong> shortly.
        </p>
        <button onClick={() => navigate('/report/welcome')} className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition">
          Home
        </button>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
        <h3 className="text-lg font-semibold text-slate-800">Processing Payment...</h3>
        <p className="text-sm text-slate-500">Please do not close or refresh this page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-8 pb-10">

      {/* Title */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          Just for You: A Special Offer!
        </h2>
      </div>

      {/* Offers List */}
      <div className="space-y-3">
        {/* Offer 1 */}
        <div
          onClick={() => setSelectedOffer('varsh')}
          className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedOffer === 'varsh' ? 'border-[#FCAE3B] bg-[#FFF8EE]' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
        >
          <div className="mr-3">
            {selectedOffer === 'varsh' ? <CheckCircle2 className="text-[#51C051]" size={20} fill="#E1F4E1" /> : <Circle className="text-slate-300" size={20} />}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-slate-900">Varshphal Report</h4>
            <p className="text-[10px] text-slate-500">Your Yearly Predictions</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 line-through">₹999</div>
            <div className="text-sm font-semibold text-slate-900">₹499</div>
            <div className="text-[8px] font-semibold text-green-600">(50% OFF)</div>
          </div>
        </div>

        {/* Offer 2 */}
        <div
          onClick={() => setSelectedOffer('premium')}
          className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedOffer === 'premium' ? 'border-[#FCAE3B] bg-[#FFF8EE]' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
        >
          <div className="mr-3">
            {selectedOffer === 'premium' ? <CheckCircle2 className="text-[#51C051]" size={20} fill="#E1F4E1" /> : <Circle className="text-slate-300" size={20} />}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-slate-900">Your Premium Kundli</h4>
            <p className="text-[10px] text-slate-500">with Remedies</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 line-through">₹1500</div>
            <div className="text-sm font-semibold text-slate-900">₹650</div>
            <div className="text-[8px] font-semibold text-green-600">(57% OFF)</div>
          </div>
        </div>

        {/* Offer 3 Combo (Default) */}
        <div
          onClick={() => setSelectedOffer('combo')}
          className={`relative flex items-center p-3 pt-4 rounded-xl border-2 cursor-pointer transition-all ${selectedOffer === 'combo' ? 'border-[#FCAE3B] bg-[#FFF8EE] shadow-md shadow-orange-100' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
        >
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#FCAE3B] text-white text-[9px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full border border-white">
            ⭐ Exclusive Deal
          </div>
          <div className="mr-3 mt-2">
            {selectedOffer === 'combo' ? <CheckCircle2 className="text-[#51C051]" size={20} fill="#E1F4E1" /> : <Circle className="text-slate-300" size={20} />}
          </div>
          <div className="flex-1 mt-2">
            <h4 className="text-sm font-semibold text-slate-900">Best Combo Offer</h4>
            <p className="text-[10px] text-slate-500">Premium Kundli + Varshaphal</p>
          </div>
          <div className="text-right mt-2">
            <div className="text-xs text-slate-400 line-through">₹2499</div>
            <div className="text-sm font-semibold text-slate-900">₹899</div>
            <div className="text-[8px] font-semibold text-green-600">(64% OFF)</div>
          </div>
        </div>
      </div>

      {/* Trust Badges & Reviews */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-center space-x-1 text-xs font-semibold text-slate-800">
          <span className="mr-1">1000+ purchased users</span>
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="text-[#FCAE3B] fill-[#FCAE3B]" />)}
          <span className="ml-1 text-[#FCAE3B]">(4.8)</span>
        </div>

        <div className="border border-slate-200 rounded-xl p-4 bg-white relative">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-xs mr-3 flex-shrink-0">
              AK
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-xs font-semibold text-slate-900 mr-2">Aditya K.</span>
                <span className="text-[9px] text-slate-400">2 weeks ago</span>
              </div>
              <div className="flex space-x-0.5 mt-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} className="text-[#FCAE3B] fill-[#FCAE3B]" />)}
              </div>
              <p className="text-[10px] leading-relaxed text-slate-600">
                Getting my detailed Kundli report was life changing. The planetary positions explained my financial struggles perfectly and offered strong suggestions that truly worked. I've already recommended this service to my family members.
              </p>
              <div className="mt-2 inline-flex items-center space-x-1 px-1.5 py-0.5 bg-green-50 rounded text-[8px] text-green-600 font-semibold border border-green-100">
                <CheckCircle size={8} />
                <span>Verified Purchase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Selection */}
      <div className="max-w-[240px] mx-auto">
        <h4 className="text-[11px] font-semibold text-slate-800 mb-2 text-center">Select chart type</h4>
        <div className="grid grid-cols-2 gap-3">
          {['NORTH', 'SOUTH'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedChart(type.toLowerCase())}
              className={`aspect-square rounded-xl border flex flex-col items-center justify-center transition-colors ${selectedChart === type.toLowerCase() ? 'border-[#FCAE3B] bg-[#FFF8EE]' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
            >
              <div className="w-6 h-6 border border-slate-300 opacity-50 mb-1 grid place-items-center">
                <div className="w-4 h-4 border-x border-slate-300 transform rotate-45" />
              </div>
              <span className="text-[9px] font-semibold text-slate-600">{type}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timer */}
      <div className="text-center pt-2">
        <h4 className="text-xs font-semibold text-red-600 mb-3">Offer ends in</h4>
        <div className="flex items-center justify-center space-x-3">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map(t => (
            <div key={t.label} className="flex flex-col items-center">
              <div className="bg-[#2D2D2D] text-white w-10 h-10 rounded-md flex items-center justify-center text-lg font-semibold shadow-inner">
                {String(t.value).padStart(2, '0')}
              </div>
              <span className="text-[9px] text-slate-500 mt-1">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Forms */}
      <div className="space-y-4 pt-2">
        <div>
          <label className="text-[10px] font-semibold text-slate-700 block mb-1">Enter Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full border border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="text-[10px] font-semibold text-slate-700 block mb-1">Enter Your Mobile number</label>
          <div className="flex space-x-2">
            <select className="border border-slate-300 rounded-lg py-2.5 px-2 text-sm bg-slate-50 focus:outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                setMobile(val);
              }}
              placeholder="Enter Your Mobile Number"
              className="flex-1 border border-slate-300 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="pt-2">
        <h4 className="text-[11px] font-semibold text-slate-800 mb-3">Choose Your Payment Method</h4>
        <div className="space-y-2">

          <button onClick={() => handlePayment('card')} className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <CreditCard size={16} />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-semibold text-slate-900">Card</h5>
                <p className="text-[9px] text-slate-500">Credit card, Debit card</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>

          <button onClick={() => handlePayment('paytm')} className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#00BAF2] flex items-center justify-center font-bold italic text-xs">
                Paytm
              </div>
              <div className="text-left">
                <h5 className="text-xs font-semibold text-slate-900">Paytm</h5>
                <p className="text-[9px] text-slate-500">Pay with Paytm</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>

          <button onClick={() => handlePayment('wallet')} className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                <Wallet size={16} />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-semibold text-slate-900">Wallet</h5>
                <p className="text-[9px] text-slate-500">Ola money, Freecharge, Payzapp & ...</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>

          <button onClick={() => handlePayment('upi')} className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-semibold text-[10px]">
                UPI
              </div>
              <div className="text-left">
                <h5 className="text-xs font-semibold text-slate-900">UPI</h5>
                <p className="text-[9px] text-slate-500">Google pay, Bhim, PhonePe & ...</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>

          <button onClick={() => handlePayment('netbanking')} className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <Building size={16} />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-semibold text-slate-900">Netbanking</h5>
                <p className="text-[9px] text-slate-500">Pay with Netbanking</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-400" />
          </button>

        </div>
      </div>

    </div>
  );
};
