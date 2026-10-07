import React from 'react';
import { SERVICE_PRICING } from '../data';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { PlanId } from './PhotoCalculator';

interface PricingProps {
  onOpenEvaluator: (planId?: PlanId) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenEvaluator }) => {
  return (
    <section id="pricing" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>Прозрачные фиксированные цены</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
            Тарифные пакеты <span className="text-[#C85A32] italic font-normal">реставрации</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#57585C]">
            Точная стоимость всегда фиксируется до начала работы после бесплатной оценки снимка.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICE_PRICING.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-[#1F2022] text-[#FBF8F3] border-[#3E4046] shadow-2xl scale-[1.02] lg:-translate-y-2 z-10'
                  : 'bg-white text-[#1F2022] border-[#E8DFD3] hover:shadow-lg shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C85A32] text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow whitespace-nowrap">
                  Комплекс Хит
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    {plan.name}
                  </h3>
                  <div className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full shrink-0 ${
                    plan.popular ? 'bg-[#323338] text-[#D9774F]' : 'bg-[#FAF6F0] text-[#7C6357] border border-[#E8DFD3]'
                  }`}>
                    <Clock className="w-3 h-3" />
                    <span>{plan.time}</span>
                  </div>
                </div>

                <p className={`text-xs mt-1 min-h-[32px] ${plan.popular ? 'text-[#D4CDC5]' : 'text-[#7C6357]'}`}>
                  {plan.tagline}
                </p>

                <div className="mt-4 mb-5 pb-5 border-b border-[#E8DFD3]/80">
                  <span className={`font-serif text-3xl sm:text-4xl font-bold ${plan.popular ? 'text-[#D9774F]' : 'text-[#C85A32]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs ml-1.5 ${plan.popular ? 'text-[#A5A29D]' : 'text-[#57585C]'}`}>
                    / снимок
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-[#C85A32] text-white' : 'bg-[#F4EAE4] text-[#C85A32]'
                      }`}>
                        <Check className="w-2 h-2 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? 'text-[#D4CDC5]' : 'text-[#57585C]'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3">
                <button
                  onClick={() => onOpenEvaluator(plan.id as PlanId)}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#C85A32] hover:bg-[#A9431E] text-white shadow-lg shadow-[#C85A32]/30'
                      : 'bg-[#EFE6DD] hover:bg-[#C85A32] hover:text-white text-[#1F2022]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Заказать от {plan.price.replace('от ', '')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
