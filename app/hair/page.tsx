import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Garden Hair - Hamburg',
  description: 'Korean style haircuts, perms & colors by Yeji Mia | 한국식 헤어 디자인',
};

export default function HairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-95"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] mb-8">
            HAIR
          </h1>
          <div className="h-px w-16 bg-white/30 mx-auto mb-8"></div>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl font-light tracking-wide">
              Designer: Yeji Mia
            </p>
            <p className="text-base md:text-lg opacity-80 font-light">
              디자이너: 예지 미아
            </p>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center border-b border-gray-100">
        <p className="text-2xl md:text-3xl text-primary-dark font-light mb-3 tracking-wide">
          Korean style haircuts | perms | colors
        </p>
        <p className="text-lg md:text-xl text-gray-600 font-light">
          한국식 컷 | 펌 | 염색
        </p>
      </section>

      {/* Placeholder for Designer Photos */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-cream rounded-sm border border-gray-100 flex items-center justify-center">
            <p className="text-gray-400 text-sm tracking-wide">Designer Photo 1</p>
          </div>
          <div className="aspect-[3/4] bg-cream rounded-sm border border-gray-100 flex items-center justify-center">
            <p className="text-gray-400 text-sm tracking-wide">Designer Photo 2</p>
          </div>
        </div>
      </section>

      {/* Work Photos */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 bg-cream/30">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 tracking-wider text-primary-dark">
          PORTFOLIO / 포트폴리오
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
            <p className="text-gray-400 text-sm tracking-wide">Hair Work Photo 1</p>
          </div>
          <div className="aspect-square bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm">
            <p className="text-gray-400 text-sm tracking-wide">Hair Work Photo 2</p>
          </div>
        </div>
      </section>

      {/* Price/Menu Section */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 tracking-wider text-primary-dark">
          MENU & PRICE / 메뉴 & 가격
        </h2>
        <div className="bg-white rounded-sm border border-gray-100 p-10 text-center shadow-sm">
          <div className="aspect-[4/3] bg-cream rounded-sm flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-sm tracking-wide mb-2">Price List Image will be here</p>
              <p className="text-gray-400 text-sm">가격표 이미지가 여기에 들어갑니다</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-6 tracking-wide">
            Upload your price list image / 가격표 이미지를 업로드하세요
          </p>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="https://wa.me/420722161337"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-white px-10 py-5 rounded-sm text-center text-base font-light tracking-wider hover:bg-primary transition-all duration-300 shadow-md hover:shadow-xl uppercase"
          >
            WhatsApp 예약 / Termin
          </a>
          <a
            href="https://instagram.com/Thegarden_hh"
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
