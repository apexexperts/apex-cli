import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Protocol | APEX Experts AI Solutions",
  description: "Official Data Protection and Privacy Governance Framework for APEX Experts AI Solutions.",
};

export default function PrivacyPage() {
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
            <div className="text-sinai-glow-orange font-bold">MASTER_PROTOCOL_ARCHIVE: AX-PRV-2.4.CORP</div>
            <div className="text-[8px] text-zinc-600">TIMESTAMP: 2024-04-24T17:24:00Z</div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold uppercase tracking-widest">Classification: INSTITUTIONAL_MANDATE</div>
            <div className="text-[8px] text-zinc-600">AUTH: APEX_LEGAL_ENGINEERING_DEPT</div>
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
              <h1 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">Privacy_Governance_Master_Framework</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[8px] text-zinc-500 uppercase font-bold text-center">
                <div className="p-2 border border-white/5 bg-white/[0.02]">STATUS: ACTIVE_ENFORCEMENT</div>
                <div className="p-2 border border-white/5 bg-white/[0.02]">ENCRYPTION: AES_256_GCM</div>
                <div className="p-2 border border-white/5 bg-white/[0.02]">AUDIT: CONTINUOUS_REAL_TIME</div>
                <div className="p-2 border border-white/5 bg-white/[0.02]">REVISION: 2.4.0_FINAL</div>
              </div>
            </div>

            <div className="space-y-10 text-justify">
              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">1.0_PREAMBLE_AND_INSTITUTIONAL_COMMITMENT</p>
                <p>1.1_APEX EXPERTS AI SOLUTIONS (HEREINAFTER "APEX") RECOGNIZES THAT DATA PRIVACY IS NOT MERELY A COMPLIANCE REQUIREMENT BUT A FUNDAMENTAL ARCHITECTURAL PRINCIPLE. THIS MASTER FRAMEWORK DEFINES THE MANDATORY STANDARDS FOR DATA PROTECTION ACROSS ALL FOUR CORE SERVICE DOMAINS: AI & PROCESS AUTOMATION, ORACLE APEX DEVELOPMENT, CUSTOM WEB ARCHITECTURES, AND MOBILE ECOSYSTEMS. 1.2_DATA SOVEREIGNTY IS THE PRIMARY DIRECTIVE. WE ENSURE THAT CLIENT INTELLECTUAL CAPITAL REMAINS UNDER THE EXCLUSIVE CONTROL OF THE ORIGINATING ENTITY. 1.3_THIS PROTOCOL IS BINDING UPON ALL APEX SUBSIDIARIES, AGENTS, AND AUTOMATED NEURAL ENTITIES.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">2.0_SERVICE_SPECIFIC_DATA_GOVERNANCE</p>
                <div className="space-y-4">
                  <p>2.1_AI_&_PROCESS_AUTOMATION: DATA INJECTED INTO AUTONOMOUS AGENTS IS SUBJECT TO THE "NEURAL ISOLATION" PROTOCOL. WE UTILIZE EPHEMERAL COMPUTE SHARDS THAT ARE DESTROYED POST-INFERENCE. NO CLIENT DATA IS USED TO TRAIN GENERIC MODELS UNLESS EXPLICITLY GOVERNED BY A JOINT DEVELOPMENT AGREEMENT. 2.2_ORACLE_APEX_DEVELOPMENT: DATABASE-CENTRIC APPLICATIONS ARE ENGINEERED WITH ROW-LEVEL SECURITY (RLS) AND TRANSPARENT DATA ENCRYPTION (TDE). WE ENFORCE STRICT SCHEMA ISOLATION TO PREVENT CROSS-TENANT DATA LEAKAGE AT THE KERNEL LEVEL.</p>
                  <p>2.3_CUSTOM_WEB_ARCHITECTURES: WEB ECOSYSTEMS ARE HARDENED AGAINST OWASP TOP 10 THREATS. SESSION DATA IS ENCRYPTED IN TRANSIT AND AT REST, WITH AUTOMATED SANITIZATION OF ALL INPUT VECTORS. 2.4_MOBILE_ECOSYSTEMS: MOBILE APPLICATIONS ADHERE TO THE HIGHEST PRIVACY STANDARDS FOR IOS AND ANDROID, INCLUDING ON-DEVICE ENCRYPTION AND MINIMAL PERMISSION REQUESTS.</p>
                </div>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">3.0_PRODUCT_SPECIFIC_PRIVACY_MANDATES</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                    <p className="text-sinai-glow-orange font-bold mb-2">ASKLYZE_AI</p>
                    <p className="text-[8px]">PROMPT DATA IS STRIPPED OF PII (PERSONALLY IDENTIFIABLE INFORMATION) BEFORE NEURAL PROCESSING. ALL CONTEXTUAL MEMORIES ARE STORED IN CLIENT-SPECIFIC ENCRYPTED VECTOR STORES.</p>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                    <p className="text-sinai-glow-orange font-bold mb-2">MYQUERY_DATA</p>
                    <p className="text-[8px]">DATABASE QUERIES ARE ANALYZED IN REAL-TIME FOR SECURITY ANOMALIES. NO RAW DATA IS PERSISTED OUTSIDE THE CLIENT'S OWN CLOUD INFRASTRUCTURE.</p>
                  </div>
                  <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                    <p className="text-sinai-glow-orange font-bold mb-2">TASTO_EXP</p>
                    <p className="text-[8px]">USER INTERACTION DATA IS AGGREGATED AND ANONYMIZED. INDIVIDUAL BEHAVIORAL PATTERNS ARE PROTECTED VIA DIFFERENTIAL PRIVACY MECHANISMS.</p>
                  </div>
                </div>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">4.0_THE_APEX_GUARD: ADVANCED_SECURITY_ARCHITECTURE</p>
                <p>4.1_PHYSICAL_SECURITY: ALL INFRASTRUCTURE IS HOUSED IN SOC2 TYPE II AND TIER-4 CERTIFIED DATA CENTERS WITH 24/7 BIOMETRIC MONITORING. 4.2_NETWORK_INTEGRITY: WE UTILIZE ZERO-TRUST NETWORK ACCESS (ZTNA) AND CONTINUOUS MONITORING OF ALL API ENDPOINTS. 4.3_NEURAL_SECURITY: OUR AI AGENTS ARE SUBJECT TO "ADVERSARIAL HARDENING" TO PREVENT PROMPT INJECTION AND DATA EXFILTRATION. 4.4_ENCRYPTION_MANDATE: ALL DATA IS ENCRYPTED USING AES-256-GCM AT REST AND TLS 1.3 WITH PERFECT FORWARD SECRECY (PFS) DURING TRANSMISSION.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">5.0_DATA_RETENTION_AND_CRYPTOGRAPHIC_ERA_PROTOCOLS</p>
                <p>5.1_DATA_MINIMIZATION: WE ONLY RETAIN THE MINIMUM AMOUNT OF DATA NECESSARY TO EXECUTE THE DEFINED SERVICES. 5.2_AUTO_PURGE: LOGS AND TRANSIENT DATA ARE AUTOMATICALLY PURGED EVERY 30 DAYS UNLESS OTHERWISE SPECIFIED. 5.3_CERTIFIED_ERASURE: UPON SERVICE TERMINATION, WE EXECUTE A NIST SP 800-88 COMPLIANT CRYPTOGRAPHIC ERASE (CE), DESTROYING ALL KEYS AND RENDERING DATA RECOVERABLE ONLY AS THERMAL NOISE. 5.4_AUDITABLE_CERTIFICATION: A FORMAL CERTIFICATE OF DATA DESTRUCTION IS ISSUED TO THE CLIENT ROOT ACCOUNT UPON COMPLETION.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">6.0_GLOBAL_REGULATORY_SYNCHRONIZATION</p>
                <p>6.1_GDPR_COMPLIANCE: WE ADHERE TO ALL ARTICLES GOVERNING EU DATA PROTECTION, ACTING AS A DATA PROCESSOR WITH FULL DPA SUPPORT. 6.2_REGIONAL_LAWS: WE RESPECT LOCAL DATA RESIDENCY REQUIREMENTS FOR KSA (PDPL), UAE, AND EGYPT. 6.3_USER_RIGHTS: USERS MAY TRIGGER THE "RIGHT TO BE FORGOTTEN" PROTOCOL AT ANY TIME VIA OUR SECURE LEGAL CONSOLE. ACCESS REQUESTS ARE PROCESSED WITHIN 72 BUSINESS HOURS. 6.4_BREACH_NOTIFICATION: IN THE UNLIKELY EVENT OF A SECURITY ANOMALY, NOTIFICATION WILL BE DISPATCHED VIA ENCRYPTED CHANNELS WITHIN 24 HOURS OF CONFIRMATION.</p>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">7.0_ANNEX_I: TECHNICAL_SECURITY_SPECIFICATIONS</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[7px] text-zinc-500 italic">
                  <div>CIPHER: AES-256-GCM</div>
                  <div>HASH: SHA-512 / BLAKE3</div>
                  <div>KEY_EXCHANGE: ECDHE-RSA</div>
                  <div>MFA: FIDO2 / WEBAUTHN</div>
                  <div>IDS: REAL-TIME_HEURISTIC</div>
                  <div>FIREWALL: LAYER_7_WAF</div>
                  <div>BACKUP: REDUNDANT_OFFSITE</div>
                  <div>MONITORING: 24/7_SOC_TEAMS</div>
                </div>
              </section>

              <section>
                <p className="text-white font-bold underline mb-4 tracking-widest uppercase">8.0_DISPUTE_RESOLUTION_AND_GOVERNING_PROTOCOL</p>
                <p>8.1_BINDING_ARBITRATION: ALL PRIVACY DISPUTES SHALL BE SETTLED VIA BINDING ARBITRATION UNDER THE RULES OF THE INTERNATIONAL CHAMBER OF COMMERCE (ICC). 8.2_GOVERNING_LAW: THIS PROTOCOL IS SUBJECT TO THE LAWS OF THE CORPORATE JURISDICTION OF APEX EXPERTS. 8.3_PROTOCOL_UPDATES: WE RESERVE THE RIGHT TO UPDATE THESE STANDARDS TO ADDRESS EVOLVING CYBERSECURITY THREATS. NOTIFICATIONS WILL BE LOGGED TO THIS SYSTEM ENDPOINT.</p>
              </section>
            </div>

            <div className="pt-12 border-t border-white/5 flex justify-between items-center text-[7px] text-zinc-700">
              <div>// AUTHENTICATED_BY_APEX_LEGAL_NODE</div>
              <div className="font-bold uppercase">System_Status: Operational_Secure</div>
              <div>// END_OF_MASTER_PROTOCOL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
