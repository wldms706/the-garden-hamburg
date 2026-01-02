import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Garden Beauty - Hamburg',
  description: 'Lash & PMU K-Beauty Designer | 래쉬 & 반영구 화장',
};

export default function BeautyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary to-primary-dark opacity-95"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] mb-8">
            BEAUTY
          </h1>
          <div className="h-px w-16 bg-white/30 mx-auto mb-8"></div>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl font-light tracking-wide">
              Artist: Lina
            </p>
            <p className="text-base md:text-lg opacity-80 font-light">
              아티스트: 리나
            </p>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center border-b border-gray-100">
        <p className="text-2xl md:text-3xl text-primary-dark font-light mb-3 tracking-wide">
          Lash & PMU K-Beauty Designer
        </p>
        <p className="text-lg md:text-xl text-gray-600 font-light mb-2">
          Authentic Korean Beauty Touch
        </p>
        <p className="text-base md:text-lg text-gray-500 font-light">
          정통 한국식 뷰티 터치
        </p>
      </section>

      {/* Artist Photo */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-md mx-auto">
          <div className="aspect-[3/4] bg-cream rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
            <p className="text-gray-400 text-sm tracking-wide">Artist Photo</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 bg-cream/30">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 tracking-wider text-primary-dark">
          SERVICES / 서비스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-sm border border-gray-100 p-12 text-center shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-extralight mb-3 tracking-[0.2em] text-primary-dark">LASH</h3>
            <p className="text-gray-600 font-light">래쉬</p>
          </div>
          <div className="bg-white rounded-sm border border-gray-100 p-12 text-center shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-extralight mb-3 tracking-[0.2em] text-primary-dark">PMU</h3>
            <p className="text-gray-600 font-light">반영구 화장</p>
          </div>
        </div>
      </section>

      {/* Work Photos */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 tracking-wider text-primary-dark">
          PORTFOLIO / 포트폴리오
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-cream rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
            <p className="text-gray-400 text-sm tracking-wide">Beauty Work Photo 1</p>
          </div>
          <div className="aspect-square bg-cream rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
            <p className="text-gray-400 text-sm tracking-wide">Beauty Work Photo 2</p>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 bg-cream/30">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 tracking-wider text-primary-dark">
          PRICE LIST / 가격표
        </h2>
        <div className="bg-white rounded-sm border border-gray-100 p-10 text-center shadow-sm">
          <div className="aspect-[4/3] bg-cream rounded-sm flex items-center justify-center mb-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm tracking-wide mb-2">Price List Image will be here</p>
              <p className="text-gray-400 text-sm">가격표 이미지가 여기에 들어갑니다</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <p className="text-lg text-primary-dark font-light tracking-wide">
              Retouch: Free / 리터치: 무료
            </p>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
          <a
            href="https://wa.me/4917632684977"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-white px-10 py-5 rounded-sm text-center text-base font-light tracking-wider hover:bg-primary transition-all duration-300 shadow-md hover:shadow-xl uppercase"
          >
            WhatsApp 예약 / Termin
          </a>
          <a
            href="mailto:jungwon.jung0807@gmail.com"
            className="bg-gray-600 text-white px-10 py-5 rounded-sm text-center text-base font-light tracking-wider hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-xl uppercase"
          >
            Email / 이메일
          </a>
          <a
            href="https://instagram.com/_lashgarden"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-10 py-5 rounded-sm text-center text-base font-light tracking-wider hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-xl uppercase"
          >
            Instagram / 팔로우
          </a>
        </div>
      </section>
    </div>
  );
}
