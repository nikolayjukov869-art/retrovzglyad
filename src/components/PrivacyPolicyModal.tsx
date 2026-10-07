import React, { useEffect } from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="privacy-policy-modal-container"
        className="relative w-full max-w-xl bg-[#FAF7F2] text-[#1F2022] rounded-3xl shadow-2xl border border-[#E8DFD3] overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#212226] text-white flex items-start justify-between gap-4 border-b border-[#34363C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                Политика обработки персональных данных и конфиденциальности
              </h3>
              <p className="text-xs text-[#D4CDC5] mt-1">
                Мастерская семейной реставрации «РетроВзгляд»
              </p>
            </div>
          </div>

          <button
            id="privacy-modal-close-btn"
            onClick={onClose}
            aria-label="Закрыть окно"
            className="w-9 h-9 rounded-full bg-[#2E3036] hover:bg-[#C85A32] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Body */}
        <div className="p-6 sm:p-8 space-y-4 text-sm text-[#4E4844] leading-relaxed">
          <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm space-y-3.5">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C85A32]/15 text-[#C85A32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <p className="text-xs sm:text-sm text-[#2C2D30]">
                Мастерская <strong className="text-[#1F2022]">«РетроВзгляд»</strong> гарантирует 100% конфиденциальность всех переданных архивных фотоматериалов.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C85A32]/15 text-[#C85A32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <p className="text-xs sm:text-sm text-[#2C2D30]">
                Исходные фотографии и контактные данные клиентов используются исключительно для проведения бесплатной оценки, согласования стоимости и выполнения реставрационных работ.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C85A32]/15 text-[#C85A32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <p className="text-xs sm:text-sm text-[#2C2D30]">
                Мы никогда не передаем ваши семейные фотографии и персональные данные третьим лицам.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#C85A32]/15 text-[#C85A32] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <p className="text-xs sm:text-sm text-[#2C2D30]">
                Ваши исходные файлы удаляются из рабочего архива по вашему первому запросу.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-[#E8D8C0] border-t border-[#DEC8AC] flex items-center justify-end">
          <button
            id="privacy-modal-confirm-btn"
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
          >
            <Check className="w-4 h-4" />
            <span>Понятно</span>
          </button>
        </div>
      </div>
    </div>
  );
};
