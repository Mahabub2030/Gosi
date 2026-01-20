import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      label: "الرئيسية",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      label: "الشهادات",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      label: "الاشتراكات",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      label: "المنافع",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      label: "الأخطار المهنية",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      label: "الخدمات العامة",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      ),
    },
    {
      label: "ساعدني",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`fixed right-0 top-0 h-full w-64 bg-[#0a1e3b] text-white flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
    >
      <div className="p-6 flex flex-col items-start gap-1">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black">gosi</span>
            <span className="text-xl font-bold text-[#8BC34A]"> أفراد </span>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden text-white/50 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="flex-1 mt-4 overflow-y-auto">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-3.5 flex items-center justify-between cursor-pointer transition-colors hover:bg-white/5 ${index === 0 ? "text-[#8BC34A]" : "text-gray-300"}`}
            >
              <span className="text-sm font-bold order-2">{item.label}</span>
              <span className="order-1 opacity-90">{item.icon}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 flex flex-col items-center gap-4 mt-auto">
        <button className="flex flex-col items-center gap-1 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 mb-1">
            <img
              src="https://flagcdn.com/w40/us.png"
              className="w-full h-full object-cover"
              alt="EN"
            />
          </div>
          <span className="text-[10px] text-gray-400 group-hover:text-white font-bold">
            EN
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
