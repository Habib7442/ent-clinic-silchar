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

export default function HeroBookingForm({ lang }: { lang: string }) {
  const isEn = lang === "en";

  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(isEn ? "Appointment requested successfully!" : "সফলভাবে অ্যাপয়েন্টমেন্টের অনুরোধ করা হয়েছে!");
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto lg:max-w-none bg-white shadow-2xl border-0 overflow-hidden p-0 gap-0">
      <CardHeader className="bg-[#0A1A12] text-[#F6F1E6] pb-6 pt-8 px-8 border-b-4 border-[#B65C36]">
        <CardTitle className="text-2xl font-serif">
          {isEn ? "Book FREE Appointment" : "ফ্রি অ্যাপয়েন্টমেন্ট বুক করুন"}
        </CardTitle>
        <CardDescription className="text-[#F6F1E6]/70 text-sm mt-2">
          {isEn ? "Get expert ENT consultation at our clinic. Fill the details below." : "আমাদের ক্লিনিকে বিশেষজ্ঞ ইএনটি পরামর্শ পান। নিচের বিবরণ পূরণ করুন।"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Input 
              required 
              placeholder={isEn ? "Patient Name" : "রোগীর নাম"} 
              className="h-12 border-[#0A1A12]/20 focus-visible:ring-[#B65C36] bg-white text-[#0A1A12]"
            />
          </div>
          <div className="space-y-2">
            <Input 
              required 
              type="tel" 
              placeholder={isEn ? "Mobile Number" : "মোবাইল নম্বর"} 
              className="h-12 border-[#0A1A12]/20 focus-visible:ring-[#B65C36] bg-white text-[#0A1A12]"
            />
          </div>
          <div className="space-y-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal border-[#0A1A12]/20 focus-visible:ring-[#B65C36] bg-white hover:bg-[#0A1A12]/5 text-[#0A1A12]",
                    !date && "text-[#0A1A12]/50"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>{isEn ? "Select Date" : "তারিখ নির্বাচন করুন"}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-[#0A1A12]/10 z-50 shadow-xl" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                  className="bg-white text-[#0A1A12] rounded-md"
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Select required>
              <SelectTrigger className="h-12 border-[#0A1A12]/20 focus:ring-[#B65C36] bg-white text-[#0A1A12]">
                <SelectValue placeholder={isEn ? "Select Disease" : "রোগ নির্বাচন করুন"} />
              </SelectTrigger>
              <SelectContent position="popper" className="bg-white border-[#0A1A12]/10 shadow-xl w-[--radix-select-trigger-width]">
                <SelectItem value="hearing" className="text-[#0A1A12] focus:bg-[#0A1A12]/5 focus:text-[#0A1A12]">{isEn ? "Hearing Loss" : "শ্রবণ সমস্যা"}</SelectItem>
                <SelectItem value="sinus" className="text-[#0A1A12] focus:bg-[#0A1A12]/5 focus:text-[#0A1A12]">{isEn ? "Sinus Infection" : "সাইনাস সংক্রমণ"}</SelectItem>
                <SelectItem value="tonsils" className="text-[#0A1A12] focus:bg-[#0A1A12]/5 focus:text-[#0A1A12]">{isEn ? "Tonsils/Adenoids" : "টনসিল/অ্যাডেনয়েড"}</SelectItem>
                <SelectItem value="snoring" className="text-[#0A1A12] focus:bg-[#0A1A12]/5 focus:text-[#0A1A12]">{isEn ? "Snoring/Sleep Apnea" : "নাক ডাকা/স্লিপ অ্যাপনিয়া"}</SelectItem>
                <SelectItem value="other" className="text-[#0A1A12] focus:bg-[#0A1A12]/5 focus:text-[#0A1A12]">{isEn ? "Other ENT Issue" : "অন্যান্য ইএনটি সমস্যা"}</SelectItem>
                <SelectItem value="not_sure" className="text-[#0A1A12] focus:bg-[#0A1A12]/5 focus:text-[#0A1A12]">{isEn ? "Not Sure / Need Diagnosis" : "নিশ্চিত নই / রোগ নির্ণয় প্রয়োজন"}</SelectItem>
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
