import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | APEX Experts AI Solutions",
  description: "Official Master Terms and Conditions governing the use of APEX Experts AI Solutions and platforms.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#06080a] text-zinc-400 font-mono text-[10px] pt-48 pb-32 px-6">
      {/* Background Subtle Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Document Header Info */}
        <div className="flex justify-between items-end mb-4 px-4">
          <div className="space-y-1">
            <div className="text-sinai-glow-orange font-bold">MASTER_TOS_ARCHIVE: AX-TOS-2.1.CORP</div>
            <div className="text-[8px] text-zinc-600">TIMESTAMP: 2024-04-24T17:25:00Z</div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold uppercase tracking-widest">Classification: BINDING_COMMERCIAL_INSTRUMENT</div>
            <div className="text-[8px] text-zinc-600">AUTH: APEX_LEGAL_COUNCIL</div>
          </div>
        </div>

        {/* The Main Document Container */}
        <div className="bg-white/[0.01] border border-white/10 rounded-sm p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-sinai-glow-orange/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-sinai-glow-orange/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-sinai-glow-orange/30" />

          {/* Document Content */}
          <div className="space-y-12 leading-relaxed">
            <div className="border-b border-white/20 pb-8">
              <h1 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">Master_Terms_Of_Service_Agreement</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[8px] text-zinc-500 uppercase font-bold text-center">
                <div className="p-2 border border-white/5 bg-white/[0.02]">JURISDICTION: INT_COMMERCIAL</div>
                <div className="p-2 border border-white/5 bg-white/[0.02]">TYPE: MASTER_AGREEMENT</div>
                <div className="p-2 border border-white/5 bg-white/[0.02]">LEVEL: ENTERPRISE_GRADE</div>
                <div className="p-2 border border-white/5 bg-white/[0.02]">REF: AX_MSA_2024</div>
              </div>
            </div>

            <div className="space-y-10 text-justify">
              <p className="text-zinc-200 font-bold underline italic tracking-widest">NOTICE: USE OF THE SERVICES OR PRODUCTS PROVIDED BY APEX EXPERTS CONSTITUTES UNCONDITIONAL ACCEPTANCE OF THIS MASTER AGREEMENT.</p>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">1.0_CONTRACTUAL_DEFINITIONS_AND_ORGANIZATIONAL_SCOPE</p>
                <p>1.1_CLIENT_REFERS_TO_THE_INSTITUTIONAL_ENTITY_ACCESSING_THE_SERVICES. 1.2_APEX_REFERS_TO_APEX_EXPERTS_AI_SOLUTIONS_AND_ALL_AFFILIATED_ENTITIES. 1.3_SERVICES_ENCOMPASS_THE_TOTALITY_OF_OFFERINGS_INCLUDING_BUT_NOT_LIMITED_TO_AI_&_PROCESS_AUTOMATION, ORACLE_APEX_DEVELOPMENT, CUSTOM_WEB_SOLUTIONS, AND_MOBILE_ENGINEERING. 1.4_PRODUCTS_INCLUDE_PROPRIETARY_PLATFORMS_SUCH_AS_ASKLYZE_AI, MYQUERY_DATA, AND_TASTO_EXPERIENCE.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">2.0_SERVICE_SPECIFIC_USAGE_TERMS</p>
                <div className="space-y-4">
                  <p>2.1_AI_&_AUTOMATION: CLIENTS ACKNOWLEDGE THAT AI OUTPUTS ARE PROBABILISTIC. APEX PROVIDES THE AGENTIC INFRASTRUCTURE BUT THE CLIENT IS RESPONSIBLE FOR FINAL OUTPUT VALIDATION. 2.2_ORACLE_APEX: ALL DATABASE INTERFACES ARE GOVERNED BY THE CLIENT'S ORACLE LICENSING AGREEMENTS. APEX IS RESPONSIBLE FOR THE ARCHITECTURAL INTEGRITY OF THE APPLICATION LAYER.</p>
                  <p>2.3_WEB_&_MOBILE: CUSTOM DEVELOPED SOLUTIONS ARE DELIVERED ACCORDING TO THE SPECIFIC SOW. APEX RETAINS RIGHTS TO REUSABLE CODE LIBRARIES AND FOUNDATIONAL ARCHITECTURES.</p>
                </div>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">3.0_PRODUCT_LICENSING_AND_RESTRICTIONS</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                    <p className="text-sinai-glow-orange font-bold mb-2">ASKLYZE_AI</p>
                    <p className="text-[8px]">SAAS LICENSE GRANT. USERS ARE PROHIBITED FROM REVERSE-ENGINEERING PROMPT CHAINS OR AGENTIC REASONING LOGIC.</p>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                    <p className="text-sinai-glow-orange font-bold mb-2">MYQUERY_DATA</p>
                    <p className="text-[8px]">DATA ORCHESTRATION LICENSE. CLIENTS RETAIN DATA RIGHTS; APEX RETAINS ORCHESTRATION LOGIC RIGHTS.</p>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                    <p className="text-sinai-glow-orange font-bold mb-2">TASTO_EXP</p>
                    <p className="text-[8px]">EXPERIENCE ENGINE LICENSE. PROHIBITED FROM USING TASTO LOGIC TO BUILD COMPETING CONSUMER INTERFACES.</p>
                  </div>
                </div>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">4.0_INTELLECTUAL_PROPERTY_AND_NEURAL_LOGIC_RIGHTS</p>
                <p>4.1_FOUNDATIONAL_IP: ALL RIGHTS TO APEX AGENTIC FRAMEWORKS, VECTOR-STORES, AND CUSTOM NEURAL ARCHITECTURES REMAIN THE SOLE PROPERTY OF APEX. 4.2_CLIENT_CONTENT: CLIENT RETAINS ALL OWNERSHIP OF DATA SUBMITTED TO THE SERVICES. 4.3_NON_COMPETE: CLIENTS AGREE NOT TO UTILIZE THE SERVICES TO DEVELOP COMPETING AI AUTOMATION OR ORACLE APEX FRAMEWORKS DURING THE TERM OF SERVICE AND FOR 24 MONTHS POST-TERMINATION.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">5.0_LIMITATION_OF_LIABILITY_IN_ENTERPRISE_OPERATIONS</p>
                <p>5.1_NO_WARRANTY: SERVICES ARE PROVIDED "AS IS" TO THE MAXIMUM EXTENT PERMITTED BY LAW. 5.2_LIABILITY_CAP: THE TOTAL AGGREGATE LIABILITY OF APEX FOR ANY CLAIM SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT IN THE TWELVE MONTHS PRECEDING THE CLAIM. 5.3_EXCLUSION_OF_DAMAGES: APEX SHALL NOT BE LIABLE FOR ANY PUNITIVE, CONSEQUENTIAL, OR INCIDENTAL DAMAGES ARISING FROM SYSTEM DOWNTIME OR AI HALLUCINATIONS.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">6.0_FINANCIAL_OBLIGATIONS_AND_SUPPORT_SLAS</p>
                <p>6.1_FEE_STRUCTURE: GOVERNED BY THE MASTER SERVICE AGREEMENT (MSA) OR STATEMENT OF WORK (SOW). 6.2_SUPPORT_TIERS: APEX PROVIDES 24/7 MISSION-CRITICAL SUPPORT FOR ENTERPRISE-TIER CLIENTS. 6.3_LATE_PAYMENTS: BALANCES OVER 30 DAYS INCUR A 2 PERCENT MONTHLY PENALTY. 6.4_TAX_COMPLIANCE: CLIENTS ARE RESPONSIBLE FOR ALL VAT/GST OR REGIONAL TAXES ASSOCIATED WITH THE SERVICES.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">7.0_FORCE_MAJEURE_AND_SYSTEM_CONTINUITY</p>
                <p>7.1_NEITHER_PARTY_SHALL_BE_LIABLE_FOR_PERFORMANCE_DELAYS_CAUSED_BY_EVENTS_BEYOND_REASONABLE_CONTROL, INCLUDING ACTS OF GOD, CYBER-WARFARE, OR WIDESPREAD GRID FAILURE. 7.2_DISASTER_RECOVERY: APEX MAINTAINS GEOGRAPHICALLY REDUNDANT BACKUPS TO ENSURE BUSINESS CONTINUITY UNDER EXTREME CONDITIONS.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">8.0_TERMINATION_AND_CRYPTOGRAPHIC_OFFBOARDING</p>
                <p>8.1_TERMINATION_FOR_CAUSE: EITHER PARTY MAY TERMINATE THE AGREEMENT UPON 30 DAYS WRITTEN NOTICE IN THE EVENT OF A MATERIAL BREACH. 8.2_OFFBOARDING_PROTOCOL: UPON TERMINATION, ALL CLIENT DATA WILL BE SUBJECT TO THE CRYPTOGRAPHIC ERASURE PROTOCOL DEFINED IN OUR PRIVACY POLICY.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">9.0_GOVERNING_LAW_AND_BINDING_ARBITRATION</p>
                <p>9.1_GOVERNING_LAW: THIS AGREEMENT SHALL BE GOVERNED BY INTERNATIONAL COMMERCIAL LAW. 9.2_ARBITRATION: ALL DISPUTES SHALL BE SETTLED VIA BINDING ARBITRATION BY THE ICC. 9.3_ATTORNEY_FEES: THE PREVAILING PARTY SHALL BE ENTITLED TO RECOVER ALL REASONABLE LEGAL COSTS.</p>
              </section>
            </div>

            <div className="pt-12 border-t border-white/5 flex justify-between items-center text-[7px] text-zinc-700">
              <div>// AUTHENTICATED_BY_APEX_LEGAL_COUNCIL</div>
              <div className="font-bold uppercase">System_Status: Legally_Binding</div>
              <div>// END_OF_MASTER_TERMS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
