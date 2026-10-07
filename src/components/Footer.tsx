import React from 'react';
import { Camera, Sparkles, Send, MessageCircle, Phone, Mail, MapPin, Heart, Shield } from 'lucide-react';

interface FooterProps {
  onOpenEvaluator: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEvaluator, onOpenPrivacy }) => {
  return (
    <footer className="bg-[#141517] text-[#D4CDC5] pt-16 pb-12 border-t border-[#292A2E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top pre-footer CTA card */}
        <div className="bg-gradient-to-r from-[#292A2E] via-[#212226] to-[#292A2E] p-8 sm:p-12 rounded-3xl border border-[#3E4046] mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9774F] block">
              Сохраните историю вашего рода
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Готовы вернуть жизнь старым фотографиям?
            </h3>
            <p className="text-sm text-[#A5A29D]">
              Сделайте снимок на телефон и отправьте мастеру прямо сейчас для бесплатной оценки и тестовой пробы.
            </p>
          </div>

          <button
            onClick={onOpenEvaluator}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-bold text-base shadow-xl shadow-[#C85A32]/30 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Оценить фото бесплатно</span>
          </button>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2C2D32]">
          
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  РетроВзгляд
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-[#A5A29D] block mt-1">
                  Мастерская реставрации
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A5A29D] leading-relaxed">
              Бережная ручная реставрация, исторически достоверная колоризация и оживление старинных семейных фотографий с 2012 года.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://t.me/nikolay_photo_rest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#242529] hover:bg-[#2AABEE] text-white flex items-center justify-center transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/79117687641"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#242529] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://vk.com/club242084790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#242529] hover:bg-[#0077FF] text-white flex items-center justify-center transition-colors"
                title="ВКонтакте"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512" aria-hidden="true">
                  <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.4 17.5 23.5 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 420.7 229.6 448 292.4 448h35.3c15 0 21.9-7.9 21.9-21.7v-52.7c0-15 4.2-21.7 16.6-21.7 8.3 0 22.8 4.4 56.3 36.7 38.3 38.3 44.6 59.4 66.2 59.4h58.9c16.8 0 25.3-8.3 20.4-24.9-5.3-16.5-24.4-40.4-49.8-68.9-13.7-16.3-34.4-33.8-40.7-42.5-8.7-11.3-6.2-16.2 0-26.2.1-.1 71.9-101.4 79.4-136z" />
                </svg>
              </a>
              <a
                href="https://ok.ru/profile/380812639299"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#242529] hover:bg-[#EE8208] text-white flex items-center justify-center transition-colors"
                title="Одноклассники"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0a6.2 6.2 0 0 0-6.194 6.195 6.2 6.2 0 0 0 6.195 6.192 6.2 6.2 0 0 0 6.193-6.192A6.2 6.2 0 0 0 12.001 0zm0 3.63a2.567 2.567 0 0 1 2.565 2.565 2.568 2.568 0 0 1-2.564 2.564 2.568 2.568 0 0 1-2.565-2.564 2.567 2.567 0 0 1 2.565-2.564zM6.807 12.6a1.814 1.814 0 0 0-.91 3.35 11.611 11.611 0 0 0 3.597 1.49l-3.462 3.463a1.815 1.815 0 0 0 2.567 2.566L12 20.066l3.405 3.403a1.813 1.813 0 0 0 2.564 0c.71-.709.71-1.858 0-2.566l-3.462-3.462a11.593 11.593 0 0 0 3.596-1.49 1.814 1.814 0 1 0-1.932-3.073 7.867 7.867 0 0 1-8.34 0c-.318-.2-.674-.29-1.024-.278z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Услуги мастерской
            </h4>
            <ul className="space-y-2 text-xs text-[#A5A29D]">
              <li><a href="#before-after" className="hover:text-[#D9774F] transition-colors">Устранение заломов и трещин</a></li>
              <li><a href="#before-after" className="hover:text-[#D9774F] transition-colors">Историческая колоризация ч/б</a></li>
              <li><a href="#living-photo" className="hover:text-[#D9774F] transition-colors">Живой портрет (Motion 4K)</a></li>
              <li><a href="#before-after" className="hover:text-[#D9774F] transition-colors">Реконструкция утраченных лиц</a></li>
              <li><a href="#pricing" className="hover:text-[#D9774F] transition-colors">Подготовка к музейной печати</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs text-[#A5A29D]">
              <li><a href="#advantages" className="hover:text-[#D9774F] transition-colors">Преимущества работы</a></li>
              <li><a href="#process" className="hover:text-[#D9774F] transition-colors">Как мы работаем</a></li>
              <li><a href="#calculator" className="hover:text-[#D9774F] transition-colors">Калькулятор стоимости</a></li>
              <li><a href="#master" className="hover:text-[#D9774F] transition-colors">О мастере Николае</a></li>
              <li><a href="#reviews" className="hover:text-[#D9774F] transition-colors">Отзывы клиентов</a></li>
              <li><a href="#faq" className="hover:text-[#D9774F] transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Контакты
            </h4>
            <div className="space-y-2.5 text-xs text-[#A5A29D]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D9774F] shrink-0" />
                <a href="tel:+79117687641" className="hover:text-white font-medium text-white">
                  +7 (911) 768-76-41
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9774F] shrink-0" />
                <span>retrovzglyad@studio.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D9774F] shrink-0" />
                <span>Прием заказов онлайн по всей России и СНГ</span>
              </div>
              <div className="pt-2 text-[11px] text-[#7C6357]">
                Режим работы: Ежедневно с 09:00 до 21:00 (МСК)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C6357]">
          <p>© {new Date().getFullYear()} Мастерская «РетроВзгляд». Все права защищены.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>100% Конфиденциальность архивов</span>
            <button
              id="footer-privacy-btn"
              type="button"
              onClick={onOpenPrivacy}
              className="text-[#7C6357] hover:text-white cursor-pointer underline-offset-4 hover:underline transition-colors"
            >
              Политика обработки данных
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
