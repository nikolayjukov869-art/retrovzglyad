import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { PhotoCalculator, PlanId } from './PhotoCalculator';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: PlanId;
}

export const PhotoEvaluatorModal: React.FC<ModalProps> = ({ isOpen, onClose, initialPlanId }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      id="photo-evaluator-modal-overlay"
      onClick={handleClose}
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
    >
      {/* Modal Card */}
      <div
        id="photo-evaluator-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E8DFD3] z-10 max-h-[90vh] overflow-y-auto p-6 sm:p-8 cursor-default my-auto"
      >
        {/* Close Button */}
        <button
          id="photo-evaluator-modal-close-btn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#E8DFD3] hover:bg-[#C85A32] hover:border-[#C85A32] hover:text-white text-[#1F2022] flex items-center justify-center transition-colors cursor-pointer shadow-sm active:scale-95"
          aria-label="Закрыть окно"
          title="Закрыть (Esc)"
        >
          <X className="w-5 h-5 pointer-events-none" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] block">
            Бесплатная экспресс-оценка
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2022] mt-1">
            Оценить стоимость реставрации фото
          </h2>
          <p className="text-xs sm:text-sm text-[#57585C] mt-1">
            Прикрепите одно или несколько фото либо укажите повреждения — мастер назовет точную стоимость и сделает бесплатный пробный фрагмент.
          </p>
        </div>

        {/* Calculator Component Inside Modal */}
        <PhotoCalculator onSuccess={handleClose} isModal={true} initialPlanId={initialPlanId} />
      </div>
    </div>
  );
};
