"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoPlayerBlockProps {
  videoId: string;
  title: string;
  context: string;
  playLabel: string;
}

export default function VideoPlayerBlock({ videoId, title, context, playLabel }: VideoPlayerBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-paper border border-hairline rounded-sm p-6 shadow-md space-y-6">
      {/* Video Container (9:16 aspect ratio for shorts) */}
      <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-sm overflow-hidden border border-hairline shadow-inner bg-[#0A1A12]">
        {!isPlaying ? (
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/35 transition-colors duration-500" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-16 h-16 bg-[#0A1A12] text-paper rounded-full flex items-center justify-center shadow-xl border border-gold/25 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-gold group-hover:text-[#0A1A12] cursor-pointer"
                aria-label={playLabel}
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      <div className="space-y-3 pt-4 border-t border-hairline/60">
        <h3 className="text-xl md:text-2xl font-serif text-forest">{title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed font-light">{context}</p>
      </div>
    </div>
  );
}
