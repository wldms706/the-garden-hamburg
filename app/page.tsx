import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-dark"></div>
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.3em] mb-8 animate-fade-in">
            THE GARDEN
          </h1>
          <div className="h-px w-24 bg-white/40 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-3 tracking-wide">
            Korean Hair & Beauty in Hamburg
          </p>
          <p className="text-base md:text-lg opacity-80 font-light tracking-wide">
            함부르크의 한국식 헤어 & 뷰티
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hair Card */}
          <Link href="/hair" className="group">
            <div className="bg-white rounded-sm overflow-hidden border border-gray-100 hover:border-primary-dark transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-80 bg-cream overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary-dark/40 group-hover:from-primary/30 group-hover:to-primary-dark/50 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h2 className="text-5xl font-extralight tracking-[0.2em] mb-3">HAIR</h2>
                    <p className="text-lg font-light opacity-90">헤어</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark">The Garden Hair</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Korean style haircuts, perms & colors<br />
                  한국식 컷, 펌, 염색
                </p>
                <p className="text-primary-dark text-sm font-medium tracking-wider uppercase group-hover:tracking-[0.2em] transition-all">
                  Discover More →
                </p>
              </div>
            </div>
          </Link>

          {/* Beauty Card */}
          <Link href="/beauty" className="group">
            <div className="bg-white rounded-sm overflow-hidden border border-gray-100 hover:border-primary-dark transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-80 bg-cream overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-primary/50 group-hover:from-accent/40 group-hover:to-primary/60 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h2 className="text-5xl font-extralight tracking-[0.2em] mb-3">BEAUTY</h2>
                    <p className="text-lg font-light opacity-90">뷰티</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark">The Garden Beauty</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Lash & PMU K-Beauty Designer<br />
                  래쉬 & 반영구 화장
                </p>
                <p className="text-primary-dark text-sm font-medium tracking-wider uppercase group-hover:tracking-[0.2em] transition-all">
                  Discover More →
                </p>
              </div>
            </div>
          </Link>

          {/* Academy Card */}
          <Link href="/academy" className="group">
            <div className="bg-white rounded-sm overflow-hidden border border-gray-100 hover:border-primary-dark transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-80 bg-cream overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 to-primary/50 group-hover:from-primary-dark/40 group-hover:to-primary/60 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h2 className="text-5xl font-extralight tracking-[0.2em] mb-3">ACADEMY</h2>
                    <p className="text-lg font-light opacity-90">아카데미</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark">The Garden Academy</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  K-Beauty Training (Lash & PMU)<br />
                  K-뷰티 교육 (래쉬 & 반영구)
                </p>
                <p className="text-primary-dark text-sm font-medium tracking-wider uppercase group-hover:tracking-[0.2em] transition-all">
                  Discover More →
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
