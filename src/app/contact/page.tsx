import { Metadata } from "next";
import { ContactInterface } from "../../components/contact/ContactInterface";

export const metadata: Metadata = {
  title: "Initiate Link // Contact APEX Experts",
  description: "Secure a direct neural link with our AI engineering team. Strategic consultation for elite AI solutions.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#050505] min-h-screen selection:bg-sinai-glow-orange/30 selection:text-white overflow-x-hidden">
      <ContactInterface />
    </div>
  );
}
