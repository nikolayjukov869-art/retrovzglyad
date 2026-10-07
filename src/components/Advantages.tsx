import React from 'react';
import { Sparkles, Palette, Film, ShieldCheck, Calculator, Award, ArrowUpRight } from 'lucide-react';

interface AdvantagesProps {
  onOpenEvaluator: () => void;
}

interface AdvantageItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export const Advantages: React.FC<AdvantagesProps> = ({ onOpenEvaluator }) => {
  const advantageItems: AdvantageItem[] = [
    {
      id: 'handcrafted',
      icon: <Sparkles className="w-6 h-6 text-[#C85A32]" />,
      title: 'Ювелирная ручная ретушь',
      description: 'Никакого «мыльного пластика» стандартных фильтров. Мастер вручную вырисовывает микротекстуру кожи, форму ресниц, пряди волос и ткань одежды.',
      badge: 'Ручная работа',
    },
    {
      id: 'history-colors',
      icon: <Palette className="w-6 h-6 text-[#C85A32]" />,
      title: 'Историческая колоризация',
      description: 'Мы не просто раскрашиваем фото: сверяем по архивным справочникам цвет одежды и нюансы оттенков эпохи для 100% достоверности.',
      badge: 'Архивная точность',
    },
    {
      id: 'living-portraits',
      icon: <Film className="w-6 h-6 text-[#C85A32]" />,
      title: 'Живой портрет (Motion)',
      description: 'Оживляем застывшие снимки: естественный глубокий взгляд, мягкое дыхание и теплая улыбка. Трогательный подарок родителям и потомкам.',
      badge: 'Новинка 4K',
    },
    {
      id: 'safe-original',
      icon: <ShieldCheck className="w-6 h-6 text-[#C85A32]" />,
      title: 'Оригинал в полной безопасности',
      description: 'Вам не нужно отправлять ценную реликвию почтой. Достаточно переснять на телефон дома при хорошем свете (отсканировать в файл).',
      badge: '100% сохранность',
    },
    {
      id: 'free-estimate',
      icon: <Calculator className="w-6 h-6 text-[#C85A32]" />,
      title: 'Бесплатная оценка и превью',
      description: 'Для проверки Вам отправляется превью пониженного качества с водяным знаком; оплата только после утверждения.',
      badge: 'Без риска',
    },
    {
      id: 'museum-print',
      icon: <Award className="w-6 h-6 text-[#C85A32]" />,
      title: 'Печать на музейной бумаге',
      description: 'Готовим файл в сверхвысоком разрешении (до 300-600 DPI) для широкоформатной печати на бескислотной фотобумаге со стойкостью до 100 лет.',
      badge: 'Архивное качество',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-[#F5EFEB]/60 border-y border-[#E8DFD3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>Почему нам доверяют память поколений</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
            Преимущества мастерской <span className="text-[#C85A32] italic font-normal">РетроВзгляд</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#57585C] leading-relaxed">
            Мы объединяем академическое художественное мастерство ручной ретуши и передовые нейросети, чтобы каждый снимок обретал новую жизнь без потери исторической правды.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantageItems.map((adv) => (
            <div
              key={adv.id}
              id={`advantage-card-${adv.id}`}
              className="group bg-white p-7 rounded-2xl border border-[#E8DFD3] hover:border-[#C85A32]/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EFE6DD] group-hover:bg-[#F4EAE4] flex items-center justify-center transition-colors">
                    {adv.icon}
                  </div>
                  {adv.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-[#EFE6DD] text-[#7C6357] text-[11px] font-semibold tracking-wide">
                      {adv.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2022] mb-3 group-hover:text-[#C85A32] transition-colors">
                  {adv.title}
                </h3>

                <p className="text-sm sm:text-base text-[#57585C] leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E8DFD3]/80 flex items-center justify-between text-xs font-semibold text-[#7C6357] group-hover:text-[#C85A32]">
                <span>Узнать подробнее</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#1F2022] text-[#FBF8F3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF6F0]">
              Сомневаетесь в качестве или сохранности снимка?
            </h4>
            <p className="text-sm sm:text-base text-[#D4CDC5] max-w-2xl">
              Пришлите фото прямо сейчас — мастер бесплатно проведет диагностику состояния бумаги и покажет, что можно восстановить.
            </p>
          </div>

          <button
            onClick={onOpenEvaluator}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Получить бесплатную консультацию
          </button>
        </div>

      </div>
    </section>
  );
};
