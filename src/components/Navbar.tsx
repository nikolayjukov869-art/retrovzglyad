import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Menu, X, Phone, MessageCircle, Send, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEvaluator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEvaluator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Примеры До/После', href: '#before-after' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Оживление фото', href: '#living-photo' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Как работаем', href: '#process' },
    { name: 'Цены', href: '#pricing' },
    { name: 'О мастере', href: '#master' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD3] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center shadow-md group-hover:bg-[#A9431E] transition-colors">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1F2022] block leading-none">
                РетроВзгляд
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#7C6357] block mt-1">
                Мастерская реставрации фото
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#444549] hover:text-[#C85A32] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C85A32] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Quick CTA and Contacts */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Messengers & Social */}
            <div className="flex items-center gap-1.5 mr-1">
              <a
                href="https://t.me/nikolay_photo_rest"
                target="_blank"
                rel="noopener noreferrer"
                title="Написать в Telegram"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#2C2D30] flex items-center justify-center transition-colors text-xs font-semibold shadow-sm"
              >
                <Send className="w-4 h-4 text-[#2AABEE]" />
              </a>
              <a
                href="https://wa.me/79117687641"
                target="_blank"
                rel="noopener noreferrer"
                title="Написать в WhatsApp"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#2C2D30] flex items-center justify-center transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="https://vk.com/club242084790"
                target="_blank"
                rel="noopener noreferrer"
                title="Группа ВКонтакте"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#2C2D30] flex items-center justify-center transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-[#0077FF] fill-current"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.4 17.5 23.5 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 420.7 229.6 448 292.4 448h35.3c15 0 21.9-7.9 21.9-21.7v-52.7c0-15 4.2-21.7 16.6-21.7 8.3 0 22.8 4.4 56.3 36.7 38.3 38.3 44.6 59.4 66.2 59.4h58.9c16.8 0 25.3-8.3 20.4-24.9-5.3-16.5-24.4-40.4-49.8-68.9-13.7-16.3-34.4-33.8-40.7-42.5-8.7-11.3-6.2-16.2 0-26.2.1-.1 71.9-101.4 79.4-136z" />
                </svg>
              </a>
              <a
                href="https://ok.ru/profile/380812639299"
                target="_blank"
                rel="noopener noreferrer"
                title="Страница в Одноклассниках"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#2C2D30] flex items-center justify-center transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-[#EE8208] fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0a6.2 6.2 0 0 0-6.194 6.195 6.2 6.2 0 0 0 6.195 6.192 6.2 6.2 0 0 0 6.193-6.192A6.2 6.2 0 0 0 12.001 0zm0 3.63a2.567 2.567 0 0 1 2.565 2.565 2.568 2.568 0 0 1-2.564 2.564 2.568 2.568 0 0 1-2.565-2.564 2.567 2.567 0 0 1 2.565-2.564zM6.807 12.6a1.814 1.814 0 0 0-.91 3.35 11.611 11.611 0 0 0 3.597 1.49l-3.462 3.463a1.815 1.815 0 0 0 2.567 2.566L12 20.066l3.405 3.403a1.813 1.813 0 0 0 2.564 0c.71-.709.71-1.858 0-2.566l-3.462-3.462a11.593 11.593 0 0 0 3.596-1.49 1.814 1.814 0 1 0-1.932-3.073 7.867 7.867 0 0 1-8.34 0c-.318-.2-.674-.29-1.024-.278z" />
                </svg>
              </a>
            </div>

            {/* Primary CTA Button */}
            <button
              id="header-cta-button"
              onClick={onOpenEvaluator}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C85A32] hover:bg-[#A9431E] text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Оценить фото</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEvaluator}
              className="px-3 py-1.5 rounded-full bg-[#C85A32] text-white text-xs font-semibold flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Оценить</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F2022] hover:bg-[#EFE6DD] focus:outline-none"
              aria-label="Переключить меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border border-[#E8DFD3] bg-white rounded-2xl shadow-lg px-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#1F2022] hover:bg-[#FAF6F0] hover:text-[#C85A32] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E8DFD3] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEvaluator();
                  }}
                  className="w-full py-3 rounded-xl bg-[#C85A32] text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Оценить фото бесплатно</span>
                </button>
                <div className="flex items-center justify-center gap-4 py-2 text-xs text-[#57585C]">
                  <a href="tel:+79117687641" className="flex items-center gap-1 text-[#1F2022] font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                    +7 (911) 768-76-41
                  </a>
                  <span>•</span>
                  <span>Ежедневно 9:00 - 21:00</span>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#E8DFD3]/60">
                  <a
                    href="https://t.me/nikolay_photo_rest"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Telegram"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] flex items-center justify-center shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#2AABEE]" />
                  </a>
                  <a
                    href="https://wa.me/79117687641"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] flex items-center justify-center shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </a>
                  <a
                    href="https://vk.com/club242084790"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="ВКонтакте"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] flex items-center justify-center shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 text-[#0077FF] fill-current"
                      viewBox="0 0 576 512"
                      aria-hidden="true"
                    >
                      <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.4 17.5 23.5 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 420.7 229.6 448 292.4 448h35.3c15 0 21.9-7.9 21.9-21.7v-52.7c0-15 4.2-21.7 16.6-21.7 8.3 0 22.8 4.4 56.3 36.7 38.3 38.3 44.6 59.4 66.2 59.4h58.9c16.8 0 25.3-8.3 20.4-24.9-5.3-16.5-24.4-40.4-49.8-68.9-13.7-16.3-34.4-33.8-40.7-42.5-8.7-11.3-6.2-16.2 0-26.2.1-.1 71.9-101.4 79.4-136z" />
                    </svg>
                  </a>
                  <a
                    href="https://ok.ru/profile/380812639299"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Одноклассники"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] flex items-center justify-center shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 text-[#EE8208] fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0a6.2 6.2 0 0 0-6.194 6.195 6.2 6.2 0 0 0 6.195 6.192 6.2 6.2 0 0 0 6.193-6.192A6.2 6.2 0 0 0 12.001 0zm0 3.63a2.567 2.567 0 0 1 2.565 2.565 2.568 2.568 0 0 1-2.564 2.564 2.568 2.568 0 0 1-2.565-2.564 2.567 2.567 0 0 1 2.565-2.564zM6.807 12.6a1.814 1.814 0 0 0-.91 3.35 11.611 11.611 0 0 0 3.597 1.49l-3.462 3.463a1.815 1.815 0 0 0 2.567 2.566L12 20.066l3.405 3.403a1.813 1.813 0 0 0 2.564 0c.71-.709.71-1.858 0-2.566l-3.462-3.462a11.593 11.593 0 0 0 3.596-1.49 1.814 1.814 0 1 0-1.932-3.073 7.867 7.867 0 0 1-8.34 0c-.318-.2-.674-.29-1.024-.278z" />
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
