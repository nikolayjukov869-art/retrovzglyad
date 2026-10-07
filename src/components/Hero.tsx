import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { USER_HERO_BEFORE, USER_HERO_AFTER, IMG01, IMG02 } from '../images';

interface HeroProps {
  onOpenEvaluator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluator }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grain"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#E8D5B5]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            
            {/* Master Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
              <span>Частная мастерская реставратора Николая Жукова</span>
            </div>

            {/* Main Grand Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2022] leading-[1.08]">
              Возвращаю к жизни снимки <span className="text-[#C85A32] italic font-normal">семейного альбома</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#525357] leading-relaxed max-w-xl">
              Ювелирная ручная реставрация заломов, трещин и пятен, исторически выверенная колоризация черно-белых снимков и деликатное 4K-оживление лиц с сохранением подлинной души фотографии.
            </p>

            {/* Action Buttons */}
            <div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-estimate-cta"
                  onClick={onOpenEvaluator}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-semibold text-base shadow-lg shadow-[#C85A32]/25 hover:shadow-xl hover:shadow-[#C85A32]/35 transition-all duration-300 cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>Оценить фото бесплатно</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#before-after"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#EFE6DD] hover:bg-[#E2D4C6] text-[#2C2D30] font-semibold text-base transition-colors"
                >
                  <span>Примеры До / После</span>
                </a>
              </div>

              {/* Conversion Micro-Proof */}
              <p className="text-[12px] text-[#7C6357] flex items-center justify-center sm:justify-start gap-1.5 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                <span>Без спама и звонков — расчет и превью сразу в мессенджер</span>
              </p>
            </div>

            {/* Quick Guarantees / Micro Trust Factors */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD3]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span className="text-xs font-medium text-[#444549]">Переснять на телефон (отсканировать в файл)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span className="text-xs font-medium text-[#444549]">Готовность 24–72 часа</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span className="text-xs font-medium text-[#444549]">Оплата только после утверждения</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Interactive Before/After Card */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-[#E8DFD3] shadow-xl shadow-[#1F2022]/5">
              
              {/* Card Header & Title */}
              <div className="w-full pb-3 mb-3 border-b border-[#E8DFD3]">
                <h3 className="font-serif text-base sm:text-lg lg:text-[1.15rem] font-bold text-[#1F2022] whitespace-nowrap overflow-hidden text-ellipsis">
                  Реставрация старого фото (Ленинград, 1959 г.)
                </h3>
                <p className="text-xs text-[#7C6357] mt-1">
                  Устранены нерезкость, блёклость, заломы • Восстановление фото • Детализация 4K
                </p>
              </div>

              {/* Interactive Split Comparison Viewport */}
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden select-none bg-[#1A1A1C] border border-[#E2D4C6]">
                
                {/* AFTER IMAGE (Underneath: Restored & Colorized) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
                  <img
                    src={USER_HERO_AFTER}
                    alt="Результат (ПОСЛЕ) реставрации старого фото"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (e.currentTarget.src !== IMG02) {
                        e.currentTarget.src = IMG02;
                      }
                    }}
                    style={{
                      objectFit: 'contain',
                      imageRendering: '-webkit-optimize-contrast',
                      width: '100%',
                      height: '100%',
                    }}
                    className="w-full h-full"
                  />
                  {/* "После" Badge */}
                  <div className="absolute top-4 right-4 bg-[#C85A32]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                    После: Результат
                  </div>
                </div>

                {/* BEFORE IMAGE (Top Layer: Clipped by slider) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full flex items-center justify-center" style={{ width: '100%' }}>
                    <img
                      src={USER_HERO_BEFORE}
                      alt="Исходное фото (ДО) до реставрации старого фото"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (e.currentTarget.src !== IMG01) {
                          e.currentTarget.src = IMG01;
                        }
                      }}
                      style={{
                        objectFit: 'contain',
                        imageRendering: '-webkit-optimize-contrast',
                        width: `${100 / (sliderPosition / 100)}%`,
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: 'none',
                      }}
                      className="absolute inset-0"
                    />

                    {/* "До" Badge */}
                    <div className="absolute top-4 left-4 bg-[#1F2022]/80 backdrop-blur-sm text-[#FBF8F3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                      До: Исходное фото
                    </div>
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-[#C85A32] text-white border-2 border-white shadow-2xl flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" transform="rotate(180 12 12)" />
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                  </div>
                </div>

                {/* Full Width Range Input for dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Сравнение До и После"
                  style={{ touchAction: 'pan-y' }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0 touch-pan-y"
                />
              </div>

              {/* Slider instruction and hint */}
              <div className="flex items-center justify-between text-xs text-[#7C6357] mt-3 px-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]"></span>
                  Потяните ползунок влево/вправо для сравнения
                </span>
                <span className="font-medium text-[#1F2022]">
                  {sliderPosition < 50 ? 'Показан восстановленный вид' : 'Показан оригинал'}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Counter & Social Proof Ribbon */}
        <div className="mt-16 pt-8 border-t border-[#E8DFD3] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C85A32] block">
              4 800+
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#57585C] mt-1 block">
              Спасенных семейных снимков
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2022] block">
              14 лет
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#57585C] mt-1 block">
              Опыта ювелирной ретуши
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C85A32] block">
              0 ₽
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#57585C] mt-1 block">
              Предоплаты за оценку и пробу
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2022] block">
              100%
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#57585C] mt-1 block">
              Гарантия сохранности оригинала
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
