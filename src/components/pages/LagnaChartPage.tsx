import React, { useState } from 'react';
import { useReport } from '../../context/ReportContext';
import { planetImages } from '../../data/planetImages';
import { renderPromoBox } from '../SharedElements';

const getPlanetImage = (planetName: string) => {
  const name = planetName.toLowerCase();
  if (name.includes('sun') || name.includes('surya')) return planetImages.surya;
  if (name.includes('moon') || name.includes('chandra')) return planetImages.moon;
  if (name.includes('mars') || name.includes('mangal') || name.includes('kuja')) return planetImages.mars;
  if (name.includes('mercury') || name.includes('budh') || name.includes('buddha')) return planetImages.buddha;
  if (name.includes('jupiter') || name.includes('guru') || name.includes('brihaspati')) return planetImages.guru;
  if (name.includes('venus') || name.includes('shukra') || name.includes('sukra')) return planetImages.sukra;
  if (name.includes('saturn') || name.includes('shani') || name.includes('sani')) return planetImages.sani;
  if (name.includes('rahu')) return planetImages.rahu;
  if (name.includes('ketu')) return planetImages.ketu;
  return planetImages.surya; // fallback
};

const SouthChartCell = ({ planets, isAsc = false, num, onMouseMove, onMouseLeave }: { planets: string[], isAsc?: boolean, num?: string, onMouseMove: (e: React.MouseEvent) => void, onMouseLeave: () => void }) => (
  <div
    className="border border-slate-200/60 p-1.5 sm:p-2 flex flex-col items-center justify-center bg-white h-full w-full relative overflow-hidden transition-colors duration-200 cursor-pointer hover:bg-indigo-50/40"
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  >
    {num && <span className="absolute top-1 right-1.5 text-[9px] text-slate-300 font-medium">{num}</span>}
    <div className="flex flex-col space-y-0.5 items-center justify-center w-full mt-1">
      {planets.map((p: string, i: number) => (
        <span key={i} className="text-[11px] sm:text-[12px] font-semibold text-slate-700 tracking-tight leading-none">{p}</span>
      ))}
    </div>
    {isAsc && (
      <span className="absolute bottom-1 right-1.5 text-[9px] font-bold text-indigo-500 uppercase tracking-widest">Lagna</span>
    )}
  </div>
);

const NorthChartCell = ({ x, y, width, height, num, planets, isAsc = false, onMouseMove, onMouseLeave }: { x: number, y: number, width: number, height: number, num: string, planets: string[], isAsc?: boolean, onMouseMove: (e: React.MouseEvent) => void, onMouseLeave: () => void }) => (
  <foreignObject x={x} y={y} width={width} height={height} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="cursor-pointer group">
    <div className="flex flex-col items-center justify-center w-full h-full text-center leading-none overflow-visible rounded-xl transition-colors duration-200 hover:bg-indigo-50/40">
      <span className="text-[10px] font-medium text-slate-400 mb-1">{num}</span>
      <div className="flex flex-col items-center justify-center mt-0.5 space-y-[1px]">
        {planets.map((p: string, i: number) => (
          <span key={i} className="text-[10px] font-semibold text-slate-700 tracking-tight leading-tight">{p}</span>
        ))}
      </div>
      {isAsc && <span className="text-[8px] font-bold text-indigo-500 uppercase mt-1 tracking-widest">Lagna</span>}
    </div>
  </foreignObject>
);

export const LagnaChartPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  const [chartType, setChartType] = useState<'south' | 'north'>('north');
  const [tooltip, setTooltip] = useState<{ x: number, y: number, planets: string[], houseNum: string } | null>(null);

  if (!data) return null;

  const handleMouseMove = (e: React.MouseEvent, planets: string[], houseNum: string) => {
    if (planets.length > 0) {
      setTooltip({ x: e.clientX, y: e.clientY, planets, houseNum });
    } else {
      setTooltip(null);
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="space-y-8 pb-6 relative">

      {/* Tooltip Portal Overlay */}
      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full pb-3"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-indigo-50 min-w-[120px] max-w-[200px]">
            <p className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider mb-2 border-b border-indigo-50 pb-1 text-center">
              House {tooltip.houseNum}
            </p>
            <div className="flex flex-col gap-2">
              {tooltip.planets.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={getPlanetImage(p)} alt={p} className="w-6 h-6 rounded-full border border-slate-200 shadow-sm" />
                  <span className="text-[12px] font-bold text-slate-800">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          Your Lagna Kundli Chart
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full mt-4" />
      </div>

      {/* Review birth details summary indicators inside booklet */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 to-white rounded-3xl flex flex-col sm:flex-row justify-between items-center text-xs font-normal border border-slate-200 shadow-sm mx-1 gap-4">
        <div className="space-y-1 text-slate-600 text-center sm:text-left">
          <div className="font-medium text-[14px]">Birth: <span className="text-indigo-600 font-bold">{data.birthDetails.name}</span> <span className="text-slate-400 capitalize">({data.birthDetails.gender})</span></div>
          <div className="text-[12px] text-slate-500 flex flex-col sm:flex-row gap-1 sm:gap-3">
            <span>Date: {data.birthDetails.day}/{data.birthDetails.month}/{data.birthDetails.year}</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span>Time: {String(data.birthDetails.hour % 12 || 12).padStart(2, '0')}:{String(data.birthDetails.minute).padStart(2, '0')} {data.birthDetails.hour >= 12 ? 'PM' : 'AM'}</span>
          </div>
        </div>

        {/* Select Chart Style togglers */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl shadow-inner">
          <button
            onClick={() => setChartType('north')}
            className={`px-4 py-1.5 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${chartType === 'north' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            North
          </button>
          <button
            onClick={() => setChartType('south')}
            className={`px-4 py-1.5 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${chartType === 'south' ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50' : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            South
          </button>
        </div>
      </div>

      {/* Interactive Graphic Kundli Chart Wrapper */}
      <div className="flex justify-center py-4 min-h-[340px] items-center">
        {chartType === 'north' ? (
          // High Fidelity North Indian Diamond Chart SVG representation
          <svg width="300" height="300" viewBox="0 0 300 300" className="text-slate-300">
            {/* Background Box */}
            <rect x="0" y="0" width="300" height="300" fill="white" stroke="currentColor" strokeWidth="1.5" className="rounded-xl" rx="8" ry="8" />
            {/* Major Diagonals */}
            <line x1="0" y1="0" x2="300" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="300" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="1.5" />
            {/* Inner Diamonds lines */}
            <line x1="150" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <line x1="150" y1="0" x2="300" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="150" x2="150" y2="300" stroke="currentColor" strokeWidth="1.5" />
            <line x1="300" y1="150" x2="150" y2="300" stroke="currentColor" strokeWidth="1.5" />

            {/* Displaying houses using foreignObject for perfect flexbox alignment */}
            <NorthChartCell x={110} y={30} width={80} height={90} num="2" planets={[]} isAsc={true} onMouseMove={(e) => handleMouseMove(e, [], '2')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={35} y={5} width={80} height={60} num="3" planets={[]} onMouseMove={(e) => handleMouseMove(e, [], '3')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={5} y={35} width={60} height={80} num="4" planets={['Rahu']} onMouseMove={(e) => handleMouseMove(e, ['Rahu'], '4')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={30} y={110} width={90} height={80} num="5" planets={[]} onMouseMove={(e) => handleMouseMove(e, [], '5')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={5} y={185} width={60} height={80} num="6" planets={[]} onMouseMove={(e) => handleMouseMove(e, [], '6')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={35} y={235} width={80} height={60} num="7" planets={[]} onMouseMove={(e) => handleMouseMove(e, [], '7')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={110} y={180} width={80} height={90} num="8" planets={[]} onMouseMove={(e) => handleMouseMove(e, [], '8')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={185} y={235} width={80} height={60} num="9" planets={[]} onMouseMove={(e) => handleMouseMove(e, [], '9')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={235} y={185} width={60} height={80} num="10" planets={['Moon', 'Venus', 'Ketu']} onMouseMove={(e) => handleMouseMove(e, ['Moon', 'Venus', 'Ketu'], '10')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={180} y={110} width={90} height={80} num="11" planets={['Sun', 'Mercury']} onMouseMove={(e) => handleMouseMove(e, ['Sun', 'Mercury'], '11')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={235} y={35} width={60} height={80} num="12" planets={['Mars']} onMouseMove={(e) => handleMouseMove(e, ['Mars'], '12')} onMouseLeave={handleMouseLeave} />
            <NorthChartCell x={185} y={5} width={80} height={60} num="1" planets={['Saturn', 'Jupiter']} onMouseMove={(e) => handleMouseMove(e, ['Saturn', 'Jupiter'], '1')} onMouseLeave={handleMouseLeave} />
          </svg>
        ) : (
          <div className="grid grid-cols-4 grid-rows-4 w-full aspect-square max-w-[340px] h-[340px] bg-slate-50/50 border border-slate-200 rounded-xl shadow-sm mx-auto overflow-hidden text-center font-sans relative">
            {/* Row 1 */}
            <SouthChartCell planets={['Mars']} num="11" onMouseMove={(e) => handleMouseMove(e, ['Mars'], '11')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={['Saturn', 'Jupiter']} num="12" onMouseMove={(e) => handleMouseMove(e, ['Saturn', 'Jupiter'], '12')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={[]} isAsc={true} num="1" onMouseMove={(e) => handleMouseMove(e, [], '1')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={[]} num="2" onMouseMove={(e) => handleMouseMove(e, [], '2')} onMouseLeave={handleMouseLeave} />

            {/* Row 2 */}
            <SouthChartCell planets={['Sun', 'Mercury']} num="10" onMouseMove={(e) => handleMouseMove(e, ['Sun', 'Mercury'], '10')} onMouseLeave={handleMouseLeave} />
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-slate-50 to-white flex flex-col items-center justify-center border border-slate-100 relative">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Birth Chart</h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">Rasi Chart</p>
            </div>
            <SouthChartCell planets={['Rahu']} num="3" onMouseMove={(e) => handleMouseMove(e, ['Rahu'], '3')} onMouseLeave={handleMouseLeave} />

            {/* Row 3 */}
            <SouthChartCell planets={['Moon', 'Venus', 'Ketu']} num="9" onMouseMove={(e) => handleMouseMove(e, ['Moon', 'Venus', 'Ketu'], '9')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={[]} num="4" onMouseMove={(e) => handleMouseMove(e, [], '4')} onMouseLeave={handleMouseLeave} />

            {/* Row 4 */}
            <SouthChartCell planets={[]} num="8" onMouseMove={(e) => handleMouseMove(e, [], '8')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={[]} num="7" onMouseMove={(e) => handleMouseMove(e, [], '7')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={[]} num="6" onMouseMove={(e) => handleMouseMove(e, [], '6')} onMouseLeave={handleMouseLeave} />
            <SouthChartCell planets={[]} num="5" onMouseMove={(e) => handleMouseMove(e, [], '5')} onMouseLeave={handleMouseLeave} />
          </div>
        )}
      </div>

      {/* Premium Content Card (Stellium Information) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group font-sans mx-1">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-400 to-indigo-600" />

        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            What repeating pattern of your nature does Vedic Astrology reveal?
          </h3>

          <div className="space-y-5 text-[15px] text-slate-700 leading-relaxed font-medium">
            <p>
              A stellium happens when three or more planets gather in one house of your Kundli. If a stellium is present in your birth chart, the house it's in becomes the most active and influential part of your life.
            </p>

            <p>
              With a stellium in your ninth house, areas like philosophy, beliefs, travel and higher learning are integral parts of your life. You likely have an insatiable curiosity to understand the meaning behind things and seek truth through exploring ideas, cultures and new horizons.
            </p>

            <p>
              This suggests you will find great purpose in academic pursuits, world travel, or just experiencing all this amazing planet has to offer. Overall, this placement indicates that expanding your perspectives - whether through physical journeys or inner soul searching - is a major focal point in this lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* Promotional Box */}
      <div className="mt-8">
        {renderPromoBox(() => setPage(pageIdx + 1), 'planetary')}
      </div>

    </div>
  );
};
