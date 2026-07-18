import React, { memo, useEffect, useState } from 'react';

type EnhancedHeroProps = {
  onContactClick: () => void;
};

const EnhancedHero = memo(({ onContactClick }: EnhancedHeroProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    applyPreference();
    mediaQuery.addEventListener('change', applyPreference);

    return () => {
      mediaQuery.removeEventListener('change', applyPreference);
    };
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay={!prefersReducedMotion}
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/lovable-uploads/Nicotine Hero vid.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/60 lg:from-[rgba(0,0,0,0.25)] lg:to-[rgba(0,0,0,0.45)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-center px-6 pt-24 text-white lg:items-start lg:px-10 lg:pt-[16vh] xl:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="lg:col-span-5 lg:max-w-[40vw]">
              <p className="mb-5 text-left text-sm font-semibold uppercase tracking-[0.22em] text-white">
                CDMO Nicotine Pouch Manufacturer
              </p>
              <h1 className="max-w-[16ch] text-left text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                The Modern Oral Pouch CDMO
              </h1>
              <p className="mt-4 text-left text-xs font-medium uppercase tracking-[0.26em] text-white/80 sm:text-sm">
                Nicotine • Caffeine • Nootropic
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end lg:max-w-[30vw]">
              <p className="max-w-[36ch] text-left text-base font-normal leading-relaxed text-white/90 sm:text-lg md:text-xl lg:ml-auto lg:text-right lg:text-lg xl:text-xl">
                Corbett Labs is a modern oral pouch CDMO specializing in OEM manufacturing, private label production, custom formulations, packaging development, and export-ready manufacturing for nicotine, caffeine, and nootropic pouch brands worldwide.
              </p>
              <div className="mt-8 flex lg:justify-end">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-wide text-deep-navy transition-colors hover:bg-white/90"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

EnhancedHero.displayName = 'EnhancedHero';

export default EnhancedHero;