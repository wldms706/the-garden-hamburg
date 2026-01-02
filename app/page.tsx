import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden garden-gradient">
        <div className="absolute inset-0 botanical-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-moss/40 via-primary/60 to-leaf/50"></div>

        {/* Decorative botanical elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">🌿</div>
        <div className="absolute bottom-20 right-20 text-5xl opacity-15 animate-pulse delay-100">🍃</div>
        <div className="absolute top-1/4 right-10 text-4xl opacity-10">🌱</div>
        <div className="absolute bottom-1/3 left-20 text-5xl opacity-15">🌿</div>

        <div className="relative text-center text-white px-6 max-w-4xl mx-auto z-10">
          <div className="mb-6 flex justify-center gap-3">
            <span className="text-3xl opacity-30">🌿</span>
            <span className="text-2xl opacity-40">🍃</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.3em] mb-8 animate-fade-in drop-shadow-lg">
            THE GARDEN
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-3 tracking-wide drop-shadow-md">
            Korean Hair & Beauty in Hamburg
          </p>
          <p className="text-base md:text-lg opacity-90 font-light tracking-wide">
            함부르크의 한국식 헤어 & 뷰티
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <span className="text-2xl opacity-40">🍃</span>
            <span className="text-3xl opacity-30">🌿</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hair Card */}
          <Link href="/hair" className="group">
            <div className="bg-white rounded-lg overflow-hidden border-2 border-accent hover:border-primary transition-all duration-500 hover:shadow-2xl relative">
              <div className="absolute top-2 right-2 text-3xl opacity-20 group-hover:opacity-30 transition-opacity">🌿</div>
              <div className="relative h-80 bg-gradient-to-br from-cream to-accent/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-leaf/30 to-primary/50 group-hover:from-leaf/40 group-hover:to-primary/60 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 text-7xl opacity-10">🍃</div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="mb-3 text-2xl opacity-40">🌿</div>
                    <h2 className="text-5xl font-extralight tracking-[0.2em] mb-3 drop-shadow-md">HAIR</h2>
                    <p className="text-lg font-light opacity-90">헤어</p>
                  </div>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark flex items-center gap-2">
                  <span className="text-lg">🌱</span>
                  The Garden Hair
                </h3>
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
            <div className="bg-white rounded-lg overflow-hidden border-2 border-accent hover:border-primary transition-all duration-500 hover:shadow-2xl relative">
              <div className="absolute top-2 right-2 text-3xl opacity-20 group-hover:opacity-30 transition-opacity">🍃</div>
              <div className="relative h-80 bg-gradient-to-br from-cream to-sage/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-sage/30 to-primary/50 group-hover:from-sage/40 group-hover:to-primary/60 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 text-6xl opacity-10">🌿</div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="mb-3 text-2xl opacity-40">🌸</div>
                    <h2 className="text-5xl font-extralight tracking-[0.2em] mb-3 drop-shadow-md">BEAUTY</h2>
                    <p className="text-lg font-light opacity-90">뷰티</p>
                  </div>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark flex items-center gap-2">
                  <span className="text-lg">🌺</span>
                  The Garden Beauty
                </h3>
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
            <div className="bg-white rounded-lg overflow-hidden border-2 border-accent hover:border-primary transition-all duration-500 hover:shadow-2xl relative">
              <div className="absolute top-2 right-2 text-3xl opacity-20 group-hover:opacity-30 transition-opacity">🌱</div>
              <div className="relative h-80 bg-gradient-to-br from-cream to-moss/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-moss/30 to-primary-dark/50 group-hover:from-moss/40 group-hover:to-primary-dark/60 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 text-6xl opacity-10">🌿</div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="mb-3 text-2xl opacity-40">🌿</div>
                    <h2 className="text-5xl font-extralight tracking-[0.2em] mb-3 drop-shadow-md">ACADEMY</h2>
                    <p className="text-lg font-light opacity-90">아카데미</p>
                  </div>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark flex items-center gap-2">
                  <span className="text-lg">🌳</span>
                  The Garden Academy
                </h3>
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
