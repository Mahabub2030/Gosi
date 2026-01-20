const CertificatesCard = () => {
  return (
    <div className="bg-[#01004E] rounded-[32px] md:rounded-[40px] p-0 shadow-lg h-56 md:h-64 flex flex-col overflow-hidden">
      <div className="py-3 md:py-4 text-center">
        <a
          href="../Certificate45605.pdf" // path to your PDF
          download
          className="inline-block"
        >
          <h3 className="text-base md:text-lg font-black text-[#8BC34A] hover:underline cursor-pointer">
            الشهادات
          </h3>
        </a>
      </div>

      <div className="flex-1 bg-white m-1 rounded-[28px] md:rounded-[36px] p-4 md:p-6 flex flex-col items-center justify-between shadow-inner">
        <div className="flex flex-col items-center gap-1">
          <div className="text-[#8BC34A] mb-1">
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-[#0a1e3b] font-bold text-xs md:text-sm">
            شهادة الأجور
          </p>
        </div>

        <button className="w-full border-2 border-[#8BC34A] text-[#2e7d32] py-2 md:py-2.5 rounded-xl font-extrabold text-[10px] md:text-[11px] hover:bg-[#8BC34A]/10 transition-colors flex items-center justify-center gap-2">
          <svg
            className="w-3 h-3 md:w-4 md:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          تحميل الشهادة
        </button>
      </div>
    </div>
  );
};

export default CertificatesCard;
