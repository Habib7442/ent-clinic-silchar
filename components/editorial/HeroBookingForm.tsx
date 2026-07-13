"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const serviceToDiseaseMap: Record<string, string> = {
  "speech-therapy-clinic": "hearing",
  "hearing-aids": "hearing",
  "micro-otoscopy": "hearing",
  "headache-clinic": "sinus",
  "snoring-sleep-apnea": "snoring",
  "paediatric-ent": "tonsils",
  "pediatric-ent": "tonsils",
  "voice-clinic": "other",
  "vertigo-balance-clinic": "other",
  "surgical-ent": "other",
  "laryngoscopy-endoscopy": "other",
};

const diseaseLabels: Record<string, { en: string; bn: string }> = {
  // Core 8 Services
  "speech-therapy-clinic": { en: "Speech Therapy Clinic", bn: "স্পিচ থেরাপি ক্লিনিক" },
  "hearing-aids": { en: "Hearing Aids Center", bn: "হিয়ারিং এইডস সেন্টার" },
  "headache-clinic": { en: "Headache Clinic", bn: "মাথাব্যথা ক্লিনিক" },
  "laryngoscopy-endoscopy": { en: "Laryngoscopy & Nasal Endoscopy", bn: "ল্যারিঙ্গোস্কোপি ও নাসাল এন্ডোস্কোপি" },
  "pediatric-ent": { en: "Paediatric ENT Clinic", bn: "শিশু নাক, কান ও গলা ক্লিনিক" },
  "voice-clinic": { en: "Voice & Throat Clinic", bn: "ভয়েস ও গলা ক্লিনিক" },
  "vertigo-balance-clinic": { en: "Vertigo and Balance Clinic", bn: "ভার্টিগো ও ব্যালেন্স ক্লিনিক" },
  "surgical-ent": { en: "Surgical ENT Services", bn: "সার্জিকাল ইএনটি সেবা" },

  // General Categories / Fallbacks
  hearing: { en: "Hearing Loss / Audiometry", bn: "শ্রবণ সমস্যা / অডিওমেট্রি" },
  sinus: { en: "Sinus / Nose Allergy", bn: "সাইনাস / নাকের অ্যালার্জি" },
  tonsils: { en: "Tonsils / Adenoids", bn: "টনসিল / অ্যাডেনয়েড" },
  snoring: { en: "Snoring / Sleep Apnea", bn: "নাক ডাকা / স্লিপ অ্যাপনিয়া" },
  other: { en: "Other ENT Issue", bn: "অন্যান্য ইএনটি সমস্যা" },
  not_sure: { en: "Not Sure / Need Diagnosis", bn: "নিশ্চিত নই / রোগ নির্ণয় প্রয়োজন" }
};

function BookingForm({ lang }: { lang: string }) {
  const isEn = lang === "en";
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState<Date>();
  const [disease, setDisease] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      // Check if it's one of the options in our labels mapping
      if (diseaseLabels[serviceParam]) {
        setDisease(serviceParam);
      } else if (serviceParam === "paediatric-ent") {
        setDisease("pediatric-ent");
      } else {
        const mapped = serviceToDiseaseMap[serviceParam];
        if (mapped) {
          setDisease(mapped);
        }
      }
    }
  }, [serviceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedDisease = diseaseLabels[disease]?.[lang === "bn" ? "bn" : "en"] || (isEn ? "Not specified" : "নির্দিষ্ট করা হয়নি");
    const formattedDate = date ? format(date, "PPP") : (isEn ? "Not specified" : "নির্দিষ্ট করা হয়নি");

    const message = isEn 
      ? `Hello, I would like to book an appointment at The ENT Clinic Silchar.\n\n*Patient Name:* ${name}\n*Mobile Number:* ${mobile}\n*Preferred Date:* ${formattedDate}\n*ENT Issue:* ${selectedDisease}`
      : `নমস্কার, আমি দি ইএনটি ক্লিনিক শিলচরে একটি অ্যাপয়েন্টমেন্ট বুক করতে চাই।\n\n*রোগীর নাম:* ${name}\n*মোবাইল নম্বর:* ${mobile}\n*পছন্দসই তারিখ:* ${formattedDate}\n*ইএনটি সমস্যা:* ${selectedDisease}`;

    const whatsappUrl = `https://wa.me/919435070156?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto lg:max-w-none bg-paper-card border border-hairline shadow-xl overflow-hidden p-0 gap-0">
      <CardHeader className="bg-forest text-paper pb-6 pt-8 px-8 border-b-4 border-rust">
        <CardTitle className="text-2xl font-serif">
          {isEn ? "Book FREE Appointment" : "ফ্রি অ্যাপয়েন্টমেন্ট বুক করুন"}
        </CardTitle>
        <CardDescription className="text-paper/70 text-sm mt-2">
          {isEn ? "Get expert ENT consultation at our clinic. Fill the details below." : "আমাদের ক্লিনিকে বিশেষজ্ঞ ইএনটি পরামর্শ পান। নিচের বিবরণ পূরণ করুন।"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Input 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isEn ? "Patient Name" : "রোগীর নাম"} 
              className="h-12 border-hairline focus-visible:ring-forest focus-visible:border-forest bg-paper-card text-ink"
            />
          </div>
          <div className="space-y-2">
            <Input 
              required 
              type="tel" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder={isEn ? "Mobile Number" : "মোবাইল নম্বর"} 
              className="h-12 border-hairline focus-visible:ring-forest focus-visible:border-forest bg-paper-card text-ink"
            />
          </div>
          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal border-hairline focus-visible:ring-forest focus-visible:border-forest bg-paper-card hover:bg-paper-warm text-ink",
                    !date && "text-ink/50"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>{isEn ? "Select Date" : "তারিখ নির্বাচন করুন"}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-paper-card border border-hairline z-50 shadow-xl" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                  className="bg-paper-card text-ink rounded-none"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Select key={disease} required value={disease} onValueChange={setDisease}>
              <SelectTrigger 
                className="h-12 border border-hairline focus:ring-forest bg-paper-card text-ink"
                aria-label={isEn ? "Select Service or Disease" : "সেবা বা রোগ নির্বাচন করুন"}
              >
                <SelectValue placeholder={isEn ? "Select Service / Disease" : "সেবা / রোগ নির্বাচন করুন"} />
              </SelectTrigger>
              <SelectContent position="popper" className="bg-paper-card border border-hairline shadow-xl w-[--radix-select-trigger-width]">
                {/* Core Services */}
                <SelectItem value="speech-therapy-clinic" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Speech Therapy Clinic" : "স্পিচ থেরাপি ক্লিনিক"}
                </SelectItem>
                <SelectItem value="hearing-aids" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Hearing Aids Center" : "হিয়ারিং এইডস সেন্টার"}
                </SelectItem>
                <SelectItem value="headache-clinic" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Headache Clinic" : "মাথাব্যথা ক্লিনিক"}
                </SelectItem>
                <SelectItem value="laryngoscopy-endoscopy" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Laryngoscopy & Nasal Endoscopy" : "ল্যারিঙ্গোস্কোপি ও নাসাল এন্ডোস্কোপি"}
                </SelectItem>
                <SelectItem value="pediatric-ent" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Paediatric ENT Clinic" : "শিশু নাক, কান ও গলা ক্লিনিক"}
                </SelectItem>
                <SelectItem value="voice-clinic" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Voice & Throat Clinic" : "ভয়েস ও গলা ক্লিনিক"}
                </SelectItem>
                <SelectItem value="vertigo-balance-clinic" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Vertigo and Balance Clinic" : "ভার্টিগো ও ব্যালেন্স ক্লিনিক"}
                </SelectItem>
                <SelectItem value="surgical-ent" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Surgical ENT Services" : "সার্জিকাল ইএনটি সেবা"}
                </SelectItem>

                {/* Fallbacks / General */}
                <SelectItem value="hearing" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Hearing Loss" : "শ্রবণ সমস্যা"}
                </SelectItem>
                <SelectItem value="sinus" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Sinus Infection" : "সাইনাস সংক্রমণ"}
                </SelectItem>
                <SelectItem value="tonsils" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Tonsils/Adenoids" : "টনসিল/অ্যাডেনয়েড"}
                </SelectItem>
                <SelectItem value="snoring" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Snoring/Sleep Apnea" : "নাক ডাকা/স্লিপ অ্যাপনিয়া"}
                </SelectItem>
                <SelectItem value="other" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Other ENT Issue" : "অন্যান্য ইএনটি সমস্যা"}
                </SelectItem>
                <SelectItem value="not_sure" className="text-ink focus:bg-paper-warm focus:text-forest">
                  {isEn ? "Not Sure / Need Diagnosis" : "নিশ্চিত নই / রোগ নির্ণয় প্রয়োজন"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            type="submit" 
            variant="rust"
            className="w-full h-12 text-md mt-4" 
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (isEn ? "Booking..." : "বুকিং হচ্ছে...") 
              : (isEn ? "Book Appointment" : "অ্যাপয়েন্টমেন্ট বুক করুন")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function HeroBookingForm({ lang }: { lang: string }) {
  return (
    <Suspense fallback={
      <Card className="w-full max-w-md mx-auto lg:max-w-none bg-paper-card border border-hairline shadow-xl overflow-hidden p-0 gap-0">
        <div className="bg-forest text-paper pb-6 pt-8 px-8 border-b-4 border-rust animate-pulse">
          <div className="h-8 bg-white/20 rounded w-2/3 mb-2" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
        </div>
        <div className="p-8 space-y-5 animate-pulse">
          <div className="h-12 bg-hairline rounded-none" />
          <div className="h-12 bg-hairline rounded-none" />
          <div className="h-12 bg-hairline rounded-none" />
          <div className="h-12 bg-hairline rounded-none" />
          <div className="h-12 bg-rust/50 rounded-none mt-4" />
        </div>
      </Card>
    }>
      <BookingForm lang={lang} />
    </Suspense>
  );
}
