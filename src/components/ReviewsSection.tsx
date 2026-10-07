import React from 'react';
import { REVIEWS } from '../data';
import { Star, MessageSquare, Heart, Quote } from 'lucide-react';

interface ReviewsProps {
  onOpenEvaluator: () => void;
}

export const ReviewsSection: React.FC<ReviewsProps> = ({ onOpenEvaluator }) => {
  return (
    <section id="reviews" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Истории наших клиентов</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
            Слезы радости и <span className="text-[#C85A32] italic font-normal">благодарности</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#57585C]">
            Настоящие отзывы семей, которым мы помогли сохранить память об их предках.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-3xl border border-[#E8DFD3] flex flex-col justify-between hover:shadow-lg transition-all duration-300 shadow-sm relative"
            >
              <div className="space-y-4">
                
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C85A32]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#7C6357]">{rev.date}</span>
                </div>

                {/* Photo Subject Tag */}
                <div className="bg-[#FAF6F0] border border-[#E8DFD3] px-3 py-1.5 rounded-lg text-xs font-bold text-[#8C3A1E]">
                  {rev.photoTitle}
                </div>

                {/* Review Text with Quote Icon */}
                <p className="text-sm text-[#444549] leading-relaxed italic relative">
                  «{rev.text}»
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#E8DFD3]/80 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#1F2022]">
                    {rev.author}
                  </h4>
                  <span className="text-xs text-[#7C6357]">
                    {rev.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#57585C] mb-4">
            Хотите так же порадовать своих близких уникальным памятным подарком?
          </p>
          <button
            onClick={onOpenEvaluator}
            className="px-6 py-3 rounded-xl bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#1F2022] text-sm font-bold transition-colors cursor-pointer shadow-sm"
          >
            Прислать фото на бесплатную пробу
          </button>
        </div>

      </div>
    </section>
  );
};
