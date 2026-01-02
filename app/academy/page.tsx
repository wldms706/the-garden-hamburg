import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Garden Academy - Hamburg',
  description: 'K-Beauty Training (Lash & PMU) for Beginners & Professionals | K-뷰티 교육',
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-dark py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary opacity-95"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.2em] mb-8">
            ACADEMY
          </h1>
          <div className="h-px w-16 bg-white/30 mx-auto mb-8"></div>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl font-light tracking-wide">
              K-Beauty Training (Lash & PMU)
            </p>
            <p className="text-base md:text-lg opacity-80 font-light">
              K-뷰티 교육 (래쉬 & 반영구)
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center border-b border-gray-100">
        <p className="text-2xl md:text-3xl text-primary-dark font-light mb-4 tracking-wide">
          Professional K-Beauty training
        </p>
        <p className="text-lg md:text-xl text-gray-600 font-light">
          초보자와 전문가 모두를 위한 전문 K-뷰티 교육
        </p>
      </section>

      {/* Courses */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-extralight text-center mb-16 tracking-wider text-primary-dark">
          AVAILABLE COURSES / 제공 과정
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-sm border border-gray-100 p-10 text-center hover:shadow-xl transition-all duration-500 hover:border-primary-dark group">
            <div className="w-20 h-20 bg-primary-dark group-hover:bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-extralight transition-colors">
              01
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark">
              Korean Lashlift<br/>Schulung
            </h3>
            <p className="text-gray-600 font-light text-sm">
              한국식 래쉬리프트 교육
            </p>
          </div>

          <div className="bg-white rounded-sm border border-gray-100 p-10 text-center hover:shadow-xl transition-all duration-500 hover:border-primary-dark group">
            <div className="w-20 h-20 bg-primary-dark group-hover:bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-extralight transition-colors">
              02
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark">
              Korean PMU<br/>Schulung
            </h3>
            <p className="text-gray-600 font-light text-sm">
              한국식 반영구 교육
            </p>
          </div>

          <div className="bg-white rounded-sm border border-gray-100 p-10 text-center hover:shadow-xl transition-all duration-500 hover:border-primary-dark group">
            <div className="w-20 h-20 bg-primary-dark group-hover:bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-extralight transition-colors">
              03
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide text-primary-dark">
              Wimpernverlängerung<br/>Schulung
            </h3>
            <p className="text-gray-600 font-light text-sm">
              속눈썹 연장 교육
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 bg-cream/30">
        <div className="bg-white border-2 border-primary rounded-sm p-12 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extralight mb-6 tracking-wider text-primary-dark">
            FOR / 대상
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-light tracking-wide mb-2">
            Beginners & Professionals
          </p>
          <p className="text-base md:text-lg text-gray-600 font-light">
            초보자 및 전문가
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="bg-white rounded-sm border border-gray-100 p-16 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-extralight mb-8 tracking-wider text-primary-dark">
            PRICING / 가격
          </h2>
          <p className="text-2xl md:text-3xl text-primary-dark font-light mb-4 tracking-wide">
            Contact us for pricing
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Pricing on inquiry
          </p>
          <p className="text-base text-gray-500 mt-3 font-light">
            문의 시 안내
          </p>
        </div>
      </section>

      {/* CTA Button */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center">
          <a
            href="https://wa.me/4917632684977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-dark text-white px-16 py-6 rounded-sm text-lg font-light tracking-wider hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-2xl uppercase"
          >
            <span className="block mb-1">WhatsApp for Training</span>
            <span className="text-sm opacity-90">교육 문의하기</span>
          </a>
        </div>
      </section>
    </div>
  );
}
