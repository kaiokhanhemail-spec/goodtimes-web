import React from 'react';
import { PricingTier } from '../types';
import { ArrowRight, Box, Layers, Zap, Star } from 'lucide-react';

interface PricingCardProps {
  tier: PricingTier;
}

const getIcon = (id: string) => {
  switch (id) {
    case '3day': return <Zap size={24} className="text-black" />;
    case '1week': return <Box size={24} className="text-black" />;
    case '2weeks': return <Layers size={24} className="text-black" />;
    case '1month': return <Star size={24} className="text-black" />;
    default: return <Box size={24} className="text-black" />;
  }
};

export const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div className="group relative h-full">
      {/* Animated Rotating Border (Glow Effect) */}
      <div className="absolute -inset-[2px] rounded-[34px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_25%,#0891b2_45%,#c026d3_50%,#0891b2_55%,transparent_75%)] animate-spin-slow"></div>
      </div>
      
      {/* Blur Layer for Soft Glow */}
      <div className="absolute -inset-[2px] rounded-[34px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg">
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_25%,#0891b2_45%,#c026d3_50%,#0891b2_55%,transparent_75%)] animate-spin-slow"></div>
      </div>
      
      <div 
        className={`
          relative flex flex-col items-center text-center p-8 rounded-[32px] transition-all duration-500 h-full
          bg-[#111111] border border-white/5 
          ${tier.recommended ? 'shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)]' : ''}
          group-hover:translate-y-[-4px] group-hover:bg-[#151515]
        `}
      >
        {/* Special Effect: Inner Shine Gradient */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Icon Circle */}
        <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-300 z-10">
          {getIcon(tier.id)}
        </div>

        <h3 className="relative text-xl font-medium text-white mb-2 z-10">{tier.duration}</h3>
        
        <div className="relative flex items-baseline gap-1 mb-4 z-10">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 group-hover:from-white group-hover:to-white transition-all duration-300">
            ${tier.price}
          </span>
        </div>

        {/* Features List */}
        <div className="relative text-sm text-gray-500 mb-8 px-2 leading-relaxed z-10 group-hover:text-gray-300 transition-colors duration-300">
          <ul className="space-y-2">
            {tier.features.map((feature, i) => (
              <li key={i} className="block">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="relative mt-auto z-10">
          <a 
            href="https://t.me/goodtimescloud"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 text-sm font-medium text-white/70 
              transition-all duration-300
              py-2 px-4 rounded-full 
              group-hover:bg-white/10 group-hover:text-white
              hover:!bg-white hover:!text-black hover:!scale-105 hover:!shadow-[0_0_20px_rgba(255,255,255,0.5)]
            "
          >
            Get Access <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};