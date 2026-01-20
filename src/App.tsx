
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Banner from './components/Banner';
import CertificatesCard from './components/CertificatesCard';
import SubscriptionCard from './components/SubscriptionCard';
import TimelineCard from './components/TimelineCard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#f4f7f9] text-right overflow-x-hidden" dir="rtl">
      {/* Sidebar - Integrated with your design and drawer functionality */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

     
      <div className="flex-1 flex flex-col lg:mr-64 transition-all duration-300 min-w-0">
     
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed right-0 lg:right-60 top-[55%] -translate-y-1/2 bg-[#8BC34A] h-10 w-8 rounded-l-full flex items-center justify-center text-white shadow-lg z-[60] cursor-pointer hover:bg-[#7cb342] transition-colors border-r-0 hidden lg:flex"
        >
           <svg className={`w-4 h-4 transition-transform duration-300 ${isSidebarOpen ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
           </svg>
        </button>

        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="px-4 md:px-8 pb-10 space-y-6 md:space-y-8">
         
          <div className="flex flex-col xl:flex-row gap-6 items-stretch">
            <div className="w-full xl:w-[70%]">
              <Banner />
            </div>
            <div className="w-full xl:w-[30%]">
              <CertificatesCard />
            </div>
          </div>

       
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div className="flex-1">
              <SubscriptionCard />
            </div>
            <div className="flex-1">
              <TimelineCard />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Overlay Background */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[45] lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
