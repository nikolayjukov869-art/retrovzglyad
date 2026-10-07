import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Camera, MessageSquare, Wand2, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenEvaluator: () => void;
}

export const ProcessSteps: React.FC<ProcessProps> = ({ onOpenEvaluator }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#C85A32]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#C85A32]" />;
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-[#C85A32]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#C85A32]" />;
      default:
        return <Camera className="w-6 h-6 text-[#C85A32]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#F5EFEB]/60 border-y border-[#E8DFD3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>Простой и бережный процесс</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
            Как происходит <span className="text-[#C85A32] italic font-normal">реставрация фото</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#57585C]">
            Всего 4 простых шага, чтобы сохранить драгоценные воспоминания для ваших детей и внуков.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8DFD3] flex flex-col justify-between relative group hover:border-[#C85A32]/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-[#C85A32]">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD3] group-hover:bg-[#F4EAE4] flex items-center justify-center transition-colors">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1F2022] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-sm text-[#57585C] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.tip && (
                <div className="mt-6 pt-4 border-t border-[#E8DFD3]/80">
                  <span className="text-[11px] font-semibold text-[#8C3A1E] block bg-[#F4EAE4] px-2.5 py-1 rounded-lg">
                    {step.tip}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenEvaluator}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <span>Начать с бесплатной оценки</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
