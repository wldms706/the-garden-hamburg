'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Luxurious Green and Beige Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B7C5D] via-[#8B9D7C] to-[#A8B899]">
          <div className="absolute inset-0 subtle-texture"></div>
          {/* Elegant Decorative Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#E8DCC4]/10 blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-[#D4C5B0]/15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        <div className="relative text-center px-6 max-w-5xl mx-auto z-10">
          <h1 className="text-8xl md:text-9xl font-light tracking-[0.25em] mb-12 italic text-[#F5EFE6] drop-shadow-2xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            The Garden
          </h1>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#E8DCC4] to-transparent mx-auto mb-12"></div>
          <p className="text-2xl md:text-3xl font-light mb-5 tracking-[0.15em] text-[#E8DCC4] drop-shadow-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Korean Hair & Beauty
          </p>
          <p className="text-lg md:text-xl font-light tracking-[0.2em] text-[#D4C5B0] drop-shadow-md" style={{ fontFamily: 'var(--font-cormorant)' }}>
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
