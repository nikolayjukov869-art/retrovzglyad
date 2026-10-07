import React, { useState, useEffect } from 'react';
import { Sparkles, Send, MessageCircle, ArrowUp } from 'lucide-react';

interface FloatingBarProps {
  onOpenEvaluator: () => void;
}

export const FloatingActionBar: React.FC<FloatingBarProps> = ({ onOpenEvaluator }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 flex items-center justify-end gap-2 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white hover:bg-[#FAF6F0] text-[#1F2022] border border-[#E8DFD3] shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
          title="Наверх"
          aria-label="Наверх"
        >
          <ArrowUp className="w-5 h-5 text-[#C85A32]" />
        </button>
      )}

      {/* Floating CTA for Mobile/Tablet */}
      <button
        onClick={onOpenEvaluator}
        className="pointer-events-auto sm:hidden flex-1 py-3.5 px-5 rounded-2xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-bold text-sm shadow-xl shadow-[#C85A32]/40 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
      >
        <Sparkles className="w-4 h-4 animate-spin-slow" />
        <span>Оценить фото онлайн</span>
      </button>

    </div>
  );
};
