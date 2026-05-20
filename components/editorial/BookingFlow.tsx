"use client";

import { useBookingStore } from "@/store/useBookingStore";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Ear, 
  Wind, 
  Moon, 
  Baby, 
  Mic2, 
  Stethoscope 
} from "lucide-react";
import { useEffect, useState } from "react";
import gsap from "gsap";

const services = [
  { id: "general", icon: Stethoscope, name: { en: "General Consultation", bn: "সাধারণ পরামর্শ" } },
  { id: "hearing", icon: Ear, name: { en: "Hearing Assessment", bn: "শ্রবণ শক্তি পরীক্ষা" } },
  { id: "sinus", icon: Wind, name: { en: "Sinus & Allergy", bn: "সাইনাস ও অ্যালার্জি" } },
  { id: "snoring", icon: Moon, name: { en: "Sleep & Snoring", bn: "ঘুম ও নাক ডাকা" } },
  { id: "paediatric", icon: Baby, name: { en: "Paediatric Visit", bn: "শিশুদের ইএনটি" } },
  { id: "surgery", icon: Stethoscope, name: { en: "Surgical Consult", bn: "অস্ত্রোপচার পরামর্শ" } },
];

const slots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"];

interface BookingFlowProps {
  lang: string;
}

export default function BookingFlow({ lang }: BookingFlowProps) {
  const { 
    step, setStep, 
    selectedService, setService, 
    selectedDate, setDate,
    selectedSlot, setSlot,
    patientData, setPatientData,
    resetBooking 
  } = useBookingStore();
  
  const isEn = lang === "en";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    gsap.fromTo(".step-content", 
      { 
        opacity: 0, 
        y: 20 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }
    );
  }, [step]);

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto py-12 lg:py-24 px-6">
      
      {/* Progress Bar */}
      <div className="flex gap-2 mb-12">
        {[1, 2, 3, 4].map((s) => (
          <div 
            key={s} 
            className={`h-1 flex-1 transition-all duration-500 rounded-full ${step >= s ? "bg-rust" : "bg-white/10"}`} 
          />
        ))}
      </div>

      <div className="step-content space-y-12">
        
        {/* Step 1: Service */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif text-paper">
              {isEn ? "Select a service" : "একটি সেবা নির্বাচন করুন"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s.id)}
                  className={`p-6 text-left border transition-all flex items-center gap-4 rounded-sm ${
                    selectedService === s.id ? "bg-rust/10 border-rust" : "bg-white/5 border-white/10 hover:border-paper/20"
                  }`}
                >
                  <s.icon className={`w-6 h-6 ${selectedService === s.id ? "text-rust" : "text-paper/60"}`} />
                  <span className="text-paper font-medium">{isEn ? s.name.en : s.name.bn}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date (Simplified for Demo) */}
        {step === 2 && (
          <div className="space-y-8">
             <div className="flex items-center justify-between">
              <h2 className="text-4xl lg:text-5xl font-serif text-paper">
                {isEn ? "Choose a date" : "একটি তারিখ বেছে নিন"}
              </h2>
              <Button variant="ghost" onClick={() => setStep(1)} className="text-paper/60 hover:text-paper">
                <ArrowLeft className="w-4 h-4 mr-2" /> {isEn ? "Back" : "পিছনে"}
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i + 1);
                const isSelected = selectedDate?.toDateString() === date.toDateString();
                return (
                  <button
                    key={i}
                    onClick={() => setDate(date)}
                    className={`p-6 flex flex-col items-center border transition-all rounded-sm ${
                      isSelected ? "bg-rust/10 border-rust" : "bg-white/5 border-white/10 hover:border-paper/20"
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-widest text-paper/60 mb-2">
                      {date.toLocaleDateString(isEn ? 'en-US' : 'bn-BD', { weekday: 'short' })}
                    </span>
                    <span className="text-2xl font-serif text-paper">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Slot */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl lg:text-5xl font-serif text-paper">
                {isEn ? "Select a time" : "একটি সময় নির্বাচন করুন"}
              </h2>
              <Button variant="ghost" onClick={() => setStep(2)} className="text-paper/60 hover:text-paper">
                <ArrowLeft className="w-4 h-4 mr-2" /> {isEn ? "Back" : "পিছনে"}
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {slots.map((s) => (
                <button
                  key={s}
                  onClick={() => setSlot(s)}
                  className={`p-6 border transition-all rounded-sm ${
                    selectedSlot === s ? "bg-rust/10 border-rust" : "bg-white/5 border-white/10 hover:border-paper/20"
                  }`}
                >
                  <span className="text-paper font-medium">{s}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Details */}
        {step === 4 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl lg:text-5xl font-serif text-paper">
                {isEn ? "Patient Details" : "রোগীর তথ্য"}
              </h2>
              <Button variant="ghost" onClick={() => setStep(3)} className="text-paper/60 hover:text-paper">
                <ArrowLeft className="w-4 h-4 mr-2" /> {isEn ? "Back" : "পিছনে"}
              </Button>
            </div>
            <div className="space-y-6 max-w-xl">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/60">Full Name</label>
                <input 
                  type="text" 
                  value={patientData.name}
                  onChange={(e) => setPatientData({ name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-4 text-paper focus:border-rust outline-none transition-all rounded-sm"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/60">Phone Number</label>
                <input 
                  type="tel" 
                  value={patientData.phone}
                  onChange={(e) => setPatientData({ phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-4 text-paper focus:border-rust outline-none transition-all rounded-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-paper/60">Brief Concern (Optional)</label>
                <textarea 
                  value={patientData.concern}
                  onChange={(e) => setPatientData({ concern: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-4 text-paper focus:border-rust outline-none transition-all rounded-sm h-32"
                  placeholder="Tell us about your symptoms..."
                />
              </div>
              <Button 
                onClick={() => setStep(5)}
                disabled={!patientData.name || !patientData.phone}
                variant="rust" 
                className="w-full py-8 text-lg"
              >
                {isEn ? "Confirm Appointment" : "অ্যাপয়েন্টমেন্ট নিশ্চিত করুন"}
              </Button>
            </div>
          </div>
        )}

        {/* Success Screen */}
        {step === 5 && (
          <div className="text-center py-24 space-y-8">
            <div className="flex justify-center">
              <CheckCircle2 className="w-24 h-24 text-forest animate-bounce" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-paper">
              {isEn ? "Confirmed." : "নিশ্চিত হয়েছে।"}
            </h2>
            <p className="text-paper/60 max-w-md mx-auto text-lg">
              {isEn 
                ? "Your appointment has been scheduled. A confirmation message will be sent to your phone shortly." 
                : "আপনার অ্যাপয়েন্টমেন্ট নির্ধারিত হয়েছে। একটি নিশ্চিতকরণ বার্তা শীঘ্রই আপনার ফোনে পাঠানো হবে।"}
            </p>
            <div className="pt-8">
              <Button variant="outline" onClick={resetBooking} className="border-white/10 text-paper">
                {isEn ? "Book another appointment" : "অন্য অ্যাপয়েন্টমেন্ট বুক করুন"}
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
