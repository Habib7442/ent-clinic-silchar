import BookingFlow from "@/components/editorial/BookingFlow";

export default async function BookingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <main className="flex-1 bg-[#0A1A12] min-h-screen pt-24">
      <div className="border-b border-white/5 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-rust font-semibold">
            Appointment Booking
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-paper">
            Secure your slot.
          </h1>
        </div>
      </div>
      <BookingFlow lang={lang} />
    </main>
  );
}
