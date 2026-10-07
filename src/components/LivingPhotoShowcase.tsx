import React from 'react';
import { Sparkles, Film, Heart } from 'lucide-react';

interface LivingPhotoProps {
  onOpenEvaluator: () => void;
}

export const LivingPhotoShowcase: React.FC<LivingPhotoProps> = ({ onOpenEvaluator }) => {
  return (
    <section id="living-photo" className="py-20 bg-[#1F2022] text-[#FBF8F3] relative overflow-hidden">
      {/* Background warm glowing circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#8C3A1E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Technology & Emotional value */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#323338] border border-[#44454B] text-[#D9774F] text-xs font-bold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>Эксклюзивная услуга</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBF8F3] tracking-tight leading-tight">
              «Живой портрет» — когда прошлое смотрит вам в глаза
            </h2>

            <p className="text-base sm:text-lg text-[#D4CDC5] leading-relaxed">
              Мы превращаем статичный снимок из альбома в трогательное 4K-видео с естественной мимикой, теплым морганием глаз и нежной улыбкой.
            </p>

            {/* Benefit Bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-[#D9774F]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FBF8F3]">Анатомически точная мимика</h4>
                  <p className="text-xs sm:text-sm text-[#A5A29D]">
                    Никаких неестественных искривлений: движение головы и век рассчитывается по законам портретной анатомии.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-[#D9774F]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FBF8F3]">Идеальный подарок на семейный юбилей</h4>
                  <p className="text-xs sm:text-sm text-[#A5A29D]">
                    Видео вызывает невероятно теплые слезы радости у родителей, бабушек и дедушек.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center shrink-0 mt-1">
                  <Film className="w-4 h-4 text-[#D9774F]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FBF8F3]">Формат MP4 Ultra HD + Музыкальное сопровождение</h4>
                  <p className="text-xs sm:text-sm text-[#A5A29D]">
                    Готово для отправки в Telegram/WhatsApp, показа на семейном празднике или создания видеокниги.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEvaluator}
                className="px-7 py-4 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-[#C85A32]/20 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Заказать оживление фото</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Living Video Frame */}
          <div className="lg:col-span-6">
            <div className="bg-[#292A2E] p-4 sm:p-6 rounded-3xl border border-[#3E4046] shadow-2xl relative">
              
              {/* Top Controls Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3E4046]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C85A32] animate-ping" />
                  <span className="text-xs font-bold text-[#D4CDC5] uppercase tracking-wider">
                    Демонстрация динамики
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F2022] border border-[#3E4046] text-[#D9774F] text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Нейрореставрация & Live AI</span>
                </div>
              </div>

              {/* Restored HD Photo Showcase Display Container with Depth/Ken Burns Effect */}
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-stone-950 border border-[#44454B] flex items-center justify-center min-h-[300px] group/live">
                
                {/* Restored Living Video Display */}
                <video 
                  src="https://res.cloudinary.com/dqnnjgrk/video/upload/img05.mp4" 
                  poster="https://i.ibb.co/pBTTjkM6/img02.jpg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-contain"
                />

                {/* Subtitle / Overlay indicators */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1F2022]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#3E4046] flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Архивное фото (1967 год)
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#A5A29D]">
                      Деликатное оживление взгляда, мимики и дыхания
                    </span>
                  </div>
                </div>

                {/* 4K Resolution Badge */}
                <div className="absolute top-4 left-4 bg-[#C85A32] text-white px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-widest uppercase shadow pointer-events-none">
                  4K ULTRA HD
                </div>
              </div>

              {/* Player Bottom Status */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-[#A5A29D] mt-3">
                <span>Формат MP4 Ultra HD • Плавный цикл</span>
                <span className="text-[#D9774F] font-semibold">Готово для показа на ТВ и смартфонах</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
