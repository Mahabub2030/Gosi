const TimelineCard = () => {
  return (
    <div className="bg-white rounded-[32px] md:rounded-[40px] p-0 shadow-sm border border-gray-100 overflow-hidden min-h-[250px] md:min-h-[280px] flex flex-col">
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <div className="flex-1 py-3 md:py-4 text-center font-black text-xs md:text-sm bg-[#00BF00] text-white shadow-md">
          الخط الزمني للاشتراكات
        </div>
        <div className="flex-1 py-3 md:py-4 text-center font-bold text-xs md:text-sm text-gray-400 hover:bg-white cursor-pointer transition-colors">
          التنبيهات
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-6 relative">
        <div className="absolute left-[44px] md:left-[54px] top-12 md:top-16 bottom-12 md:bottom-16 w-0.5 border-l-2 border-dashed border-gray-100"></div>

        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 md:h-14 md:w-14 bg-[#0a1e3b] rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-white text-[9px] md:text-[11px] font-bold shadow-xl">
              <span className="opacity-70">اليوم</span>
              <span className="text-sm md:text-xl leading-tight">01</span>
            </div>
          </div>
          <div className="flex-1 bg-gray-50/50 p-4 md:p-5 rounded-2xl md:rounded-3xl flex items-center justify-between border-r-4 border-[#0a1e3b] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] text-gray-400 font-bold mb-1">
                آخر اشتراك
              </span>
              <span className="text-base md:text-xl font-black text-[#0a1e3b]">
                3,200.00 ريال
              </span>
            </div>
            <div className="h-9 w-9 md:h-12 md:w-12 bg-[#0070f3] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white shrink-0">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 opacity-40 grayscale group">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 md:h-14 md:w-14 bg-gray-200 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-gray-500 text-[9px] md:text-[11px] font-bold">
              <span className="text-sm md:text-xl">02</span>
            </div>
          </div>
          <div className="flex-1 bg-gray-50/30 p-4 md:p-5 rounded-2xl md:rounded-3xl flex items-center justify-between border-r-4 border-gray-300">
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] text-gray-400 font-bold mb-1">
                آخر اشتراك
              </span>
              <span className="text-base md:text-xl font-black ">
                3,200.00 ريال
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6 opacity-40 grayscale group">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 md:h-14 md:w-14 bg-gray-200 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-gray-500 text-[9px] md:text-[11px] font-bold">
              <span className="text-sm md:text-xl">03</span>
            </div>
          </div>
          <div className="flex-1 bg-gray-50/30 p-4 md:p-5 rounded-2xl md:rounded-3xl flex items-center justify-between border-r-4 border-gray-300">
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] text-gray-400 font-bold mb-1">
                آخر اشتراك
              </span>
              <span className="text-base md:text-xl font-black ">
                3,200.00 ريال
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
