import React from "react";

const OfficialStamp = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative w-48 h-48 select-none pointer-events-none ${className}`}>
      {/* The Stamp Body */}
      <div className="absolute inset-0 flex items-center justify-center transform -rotate-12 opacity-90">
        <div className="w-full h-full border-[3px] border-[#2b4b8c] rounded-full flex items-center justify-center p-1.5 relative shadow-[0_0_10px_rgba(43,75,140,0.05)]">
          {/* Inner Double Ring */}
          <div className="w-full h-full border border-[#2b4b8c] rounded-full flex items-center justify-center relative">
            <div className="text-center z-10 px-3">
              {/* Arabic Name - Smaller */}
              <div className="text-[10px] font-bold text-[#2b4b8c] leading-tight mb-1 font-sans tracking-tight whitespace-nowrap">
                خبراء ابكس لحلول الذكاء الاصطناعي
              </div>
              
              {/* Horizontal Dividers - Thinner */}
              <div className="w-20 h-[1px] bg-[#2b4b8c] mx-auto my-0.5" />
              
              {/* Logo / Icon - Smaller */}
              <div className="text-[16px] font-black text-[#2b4b8c] leading-none mb-0.5 tracking-tighter">
                APEX Experts
              </div>
              
              <div className="w-20 h-[1px] bg-[#2b4b8c] mx-auto my-0.5" />

              {/* English Name - Smaller */}
              <div className="text-[8px] font-bold text-[#2b4b8c] leading-tight uppercase font-sans tracking-normal">
                AI SOLUTIONS
              </div>
            </div>
          </div>

          {/* Border Text (English) - Wrapped closer to the edge */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <path
              id="stampPathOuter"
              d="M 50, 50 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
              fill="none"
            />
            <text className="text-[4px] font-bold fill-[#2b4b8c] tracking-[0.3em] uppercase">
              <textPath href="#stampPathOuter" startOffset="0%">
                APEX EXPERTS AI SOLUTIONS • OFFICIAL SEAL • REGISTERED •
              </textPath>
            </text>
          </svg>
          
          {/* Border Text (Arabic) - Bottom curve */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full scale-[0.9] rotate-180">
            <path
              id="stampPathInner"
              d="M 50, 50 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
              fill="none"
            />
            <text className="text-[5px] font-bold fill-[#2b4b8c] tracking-[0.05em]">
              <textPath href="#stampPathInner" startOffset="5%">
                أبيكس إكسبرتس لحلول الذكاء الاصطناعي • الختم الرسمي •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      
      {/* Very faint ink bleed */}
      <div className="absolute inset-0 bg-[#2b4b8c] opacity-[0.01] blur-xl rounded-full" />
    </div>
  );
};

export default OfficialStamp;
