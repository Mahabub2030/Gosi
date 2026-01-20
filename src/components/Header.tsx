import React from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="min-h-[128px] px-4 md:px-8 flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -mr-2 text-[#0a1e3b]"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-[#0a1e3b] line-clamp-1">
                مساء الخير MAHABUB ALAM
              </span>
              <span className="text-[10px] font-bold text-gray-400 self-end">
                MAHABUB
              </span>
            </div>
            <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-full flex items-center justify-center font-bold text-[#0a1e3b] shadow-sm border border-gray-100 text-base md:text-lg shrink-0">
              ALAM
            </div>
          </div>
        </div>

        <div className="w-full sm:flex-1 sm:max-w-sm order-3 sm:order-2">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث هنا"
              className="w-full bg-white border border-gray-200 rounded-full py-2.5 px-10 text-right text-sm focus:outline-none focus:ring-1 focus:ring-[#8BC34A] shadow-sm text-[#0a1e3b]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 order-2 sm:order-3 w-full sm:w-auto justify-end">
          <button className="hidden sm:flex bg-[#e8f5e9] text-[#2e7d32] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold items-center gap-2 border border-[#8BC34A]/30 hover:bg-[#c8e6c9] transition-all whitespace-nowrap">
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            العودة للموقع
          </button>

          <button className="sm:hidden h-9 px-3 bg-[#e8f5e9] text-[#2e7d32] rounded-full text-[10px] font-bold border border-[#8BC34A]/30">
            العودة
          </button>

          <div className="flex gap-2">
            <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-[#0a1e3b] shadow-sm">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-[#0a1e3b] shadow-sm">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block text-sm text-[#0070f3] font-bold mt-2 mr-14">
        كيف يمكننا مساعدتك اليوم؟
      </div>
    </header>
  );
};

export default Header;
