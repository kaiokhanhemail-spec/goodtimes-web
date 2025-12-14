import React from 'react';
import { Background } from './components/Background';
import { PricingCard } from './components/PricingCard';
import { PRICING_DATA } from './types';
import { ArrowRight, MessageCircle, Megaphone, Crown, ThumbsUp, Shield, Users, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-white selection:bg-purple-500/30 font-sans">
      <Background />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-20 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="relative w-full flex flex-col items-center justify-center text-center mb-16">
          
          {/* Main Headline - Consolidated and Cleaner */}
          <div className="relative z-10 mb-8 animate-reveal" style={{ animationDelay: '100ms' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 pb-2">
                GoodTimes
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-[-0.2em]">
                Cloud
              </span>
            </h1>
            {/* Subtle glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
          </div>

          {/* Primary CTA Button - SUPER ENHANCED */}
          <div className="z-20 mb-16 relative animate-reveal" style={{ animationDelay: '300ms' }}>
            <a 
              href="https://t.me/goodtimescloudbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex"
            >
              {/* Deep Pulsing Glow Background */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-60 blur-lg group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 group-hover:duration-200"></div>
              
              {/* Main Button */}
              <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white transition-all duration-300 bg-black rounded-full border border-white/10 group-hover:border-white/30 overflow-hidden group-hover:scale-[1.02]">
                
                {/* Glassy Sheen / Shimmer Effect on Hover */}
                <div className="absolute top-0 left-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] z-0"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center gap-4 z-10">
                  <Crown className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] animate-[pulse_3s_infinite] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 group-hover:from-white group-hover:via-white group-hover:to-white tracking-[0.15em] drop-shadow-sm">
                    BUY PRIVATE ACCESS
                  </span>
                  
                  <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
                </div>
              </button>
            </a>
          </div>

          {/* Features / Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto animate-reveal" style={{ animationDelay: '500ms' }}>
            
            {/* Member 500+ */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
              <Users size={28} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">500+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Members</span>
            </div>

            {/* Safe 100% */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
              <ShieldCheck size={28} className="text-green-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">100%</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Safe</span>
            </div>

            {/* Vouches 100+ */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
              <ThumbsUp size={28} className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">100+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Vouches</span>
            </div>

            {/* Fresh 100% */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group">
              <Sparkles size={28} className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">100%</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Fresh</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div id="pricing" className="w-full z-20 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
              {PRICING_DATA.map((tier, index) => (
                <div key={tier.id} className="animate-reveal h-full" style={{ animationDelay: `${700 + (index * 150)}ms` }}>
                  <PricingCard tier={tier} />
                </div>
              ))}
            </div>
        </div>

        {/* Support & Channel Buttons - Enhanced Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto z-50 animate-reveal" style={{ animationDelay: '1400ms' }}>
          {[
            { 
              label: 'Admin Support', 
              icon: MessageCircle, 
              color: 'text-green-400', 
              link: 'https://t.me/Lexser01', 
              iconBg: 'bg-green-500/10',
              borderColor: 'group-hover:border-green-500/50',
              shadowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]',
              glowClass: 'bg-green-500/20'
            },
            { 
              label: 'Channel', 
              icon: Megaphone, 
              color: 'text-blue-400', 
              link: 'https://t.me/goodtimescloud', 
              iconBg: 'bg-blue-500/10',
              borderColor: 'group-hover:border-blue-500/50',
              shadowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
              glowClass: 'bg-blue-500/20'
            },
            { 
              label: 'Vouches', 
              icon: ThumbsUp, 
              color: 'text-yellow-400', 
              link: 'https://t.me/goodtimesreview', 
              iconBg: 'bg-yellow-500/10',
              borderColor: 'group-hover:border-yellow-500/50',
              shadowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]',
              glowClass: 'bg-yellow-500/20'
            },
            { 
              label: 'Backup', 
              icon: Shield, 
              color: 'text-purple-400', 
              link: 'https://t.me/+IRus_ORxJCtlYmVl', 
              iconBg: 'bg-purple-500/10',
              borderColor: 'group-hover:border-purple-500/50',
              shadowColor: 'group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]',
              glowClass: 'bg-purple-500/20'
            },
          ].map((item, i) => (
             <a 
                key={i}
                href={item.link}
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  relative flex items-center gap-4 px-6 py-4 rounded-xl 
                  bg-[#0A0A0A] border border-white/5 
                  transition-all duration-300 group overflow-hidden
                  hover:bg-[#111] hover:scale-[1.02]
                  ${item.borderColor} ${item.shadowColor}
                `}
              >
               {/* Ambient Glow Background on Hover */}
               <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none radial-gradient ${item.glowClass} blur-xl scale-75`}></div>
               
               {/* Shine Effect sweeping across */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" style={{ transform: 'skewX(-20deg)' }}></div>

               <div className={`relative z-10 p-2 rounded-lg ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                 <item.icon size={20} className={item.color} />
               </div>
               
               <div className="flex-1 relative z-10 flex items-center justify-between">
                 <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                 <ExternalLink size={14} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
               </div>
            </a>
          ))}
        </div>
      </main>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
      `}</style>
    </div>
  );
};

export default App;