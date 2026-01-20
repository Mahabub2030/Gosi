
import React from 'react';

const Banner = () => {
  return (
    <div className="relative min-h-[16rem] md:h-64 rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#01004E] flex items-center px-6 md:px-12 text-white shadow-xl">
      <div className="z-10 w-full md:w-3/5 text-right py-8 md:py-0">
        <h2 className="text-xl md:text-3xl font-black leading-tight mb-3 md:mb-4">
          استمتع بتجربة مميزة تأميناتي أعمال على الجوال
        </h2>
        <p className="text-xs md:text-sm opacity-90 leading-relaxed font-light mb-6 md:mb-8 max-w-lg ml-auto">
          قم بأدارة منشأتك ، تتبع طلباتك ، دفع فواتيرك وغيرها من المميزات الآن علي تأميناتي أعمال
        </p>
        
        <div className="flex items-center justify-end gap-2">
           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
           <div className="w-4 h-1.5 md:w-6 md:h-2 rounded-full bg-[#8BC34A]"></div>
           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
 
    
      <div className="absolute left-0 md:left-8 bottom-0 h-[60%] md:h-[115%] w-[35%] flex items-end justify-center pointer-events-none opacity-40 md:opacity-100">
        <img 
          src="https://i.ibb.co.com/gL9z0p8G/Screenshot-from-2026-01-15-20-30-44.png"
          alt="Illustration" 
          className="h-full object-contain filter drop-shadow-2xl scale-110"
        />
      </div>

      <div className="absolute right-[-5%] top-[-20%] w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Banner;
