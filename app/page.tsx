'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [shouldShowGif, setShouldShowGif] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    // Check if device is mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;
    setShouldShowGif(!isMobile && !motionQuery.matches);

    // Listen for motion preference changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      setShouldShowGif(!isMobile && !e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background - GIF for desktop, gradient for mobile/reduced-motion */}
        {shouldShowGif ? (
          <div className="absolute inset-0">
            <img
              src="/hero-background.gif"
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-primary-dark/60"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-soft-green">
            <div className="absolute inset-0 subtle-texture"></div>
          </div>
        )}

        <div className="relative text-center text-white px-6 max-w-5xl mx-auto z-10">
          <h1 className="text-8xl md:text-9xl font-light tracking-[0.2em] mb-10 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
            The Garden
          </h1>
          <div className="h-[1px] w-24 bg-white/40 mx-auto mb-10"></div>
          <p className="text-2xl md:text-3xl font-light mb-4 tracking-wider" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Korean Hair & Beauty
          </p>
          <p className="text-lg md:text-xl opacity-85 font-light tracking-wide" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Hamburg
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hair Card */}
          <Link href="/hair" className="group">
            <div className="bg-white overflow-hidden border border-border hover:border-primary-dark transition-all duration-300 hover:shadow-lg">
              <div className="relative h-72 bg-gradient-to-br from-accent to-cream overflow-hidden">
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h2 className="text-6xl font-light tracking-[0.1em] mb-2 italic" style={{ fontFamily: 'var(--font-playfair)' }}>Hair</h2>
                    <p className="text-base font-light opacity-90 tracking-wide">헤어</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-light mb-4 tracking-wide text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>Hair</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Korean style haircuts, perms & colors<br />
                  한국식 컷, 펌, 염색
                </p>
                <p className="text-primary-dark text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  View More →
                </p>
              </div>
            </div>
          </Link>

          {/* Beauty Card */}
          <Link href="/beauty" className="group">
            <div className="bg-white overflow-hidden border border-border hover:border-primary-dark transition-all duration-300 hover:shadow-lg">
              <div className="relative h-72 bg-gradient-to-br from-accent to-cream overflow-hidden">
                <div className="absolute inset-0 bg-soft-green/40 group-hover:bg-soft-green/50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h2 className="text-6xl font-light tracking-[0.1em] mb-2 italic" style={{ fontFamily: 'var(--font-playfair)' }}>Beauty</h2>
                    <p className="text-base font-light opacity-90 tracking-wide">뷰티</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-light mb-4 tracking-wide text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>Beauty</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Lash & PMU K-Beauty Designer<br />
                  래쉬 & 반영구 화장
                </p>
                <p className="text-primary-dark text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  View More →
                </p>
              </div>
            </div>
          </Link>

          {/* Academy Card */}
          <Link href="/academy" className="group">
            <div className="bg-white overflow-hidden border border-border hover:border-primary-dark transition-all duration-300 hover:shadow-lg">
              <div className="relative h-72 bg-gradient-to-br from-accent to-cream overflow-hidden">
                <div className="absolute inset-0 bg-deep-green/40 group-hover:bg-deep-green/50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h2 className="text-6xl font-light tracking-[0.1em] mb-2 italic" style={{ fontFamily: 'var(--font-playfair)' }}>Academy</h2>
                    <p className="text-base font-light opacity-90 tracking-wide">아카데미</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-light mb-4 tracking-wide text-foreground" style={{ fontFamily: 'var(--font-playfair)' }}>Academy</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  K-Beauty Training (Lash & PMU)<br />
                  K-뷰티 교육 (래쉬 & 반영구)
                </p>
                <p className="text-primary-dark text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  View More →
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
