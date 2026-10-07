import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqProps {
  onOpenEvaluator: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenEvaluator }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#F5EFEB]/60 border-t border-[#E8DFD3] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Частые вопросы</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
            Ответы на популярные <span className="text-[#C85A32] italic font-normal">вопросы</span>
          </h2>

          <p className="mt-3 text-base text-[#57585C]">
            Все, что нужно знать перед тем, как доверить нам реставрацию снимков.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1F2022]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#E8DFD3] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#C85A32] text-white border-[#C85A32]' : 'text-[#1F2022]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#57585C] leading-relaxed border-t border-[#E8DFD3] animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E8DFD3] text-center space-y-3 shadow-sm">
          <p className="text-sm font-semibold text-[#1F2022]">
            Не нашли ответ на свой вопрос?
          </p>
          <p className="text-xs text-[#57585C]">
            Напишите мастеру напрямую — Николай ответит на любые технические детали в течение 15 минут.
          </p>
          <div>
            <button
              onClick={onOpenEvaluator}
              className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Задать свой вопрос
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
