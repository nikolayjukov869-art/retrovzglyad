import React from 'react';
import { Award, Heart, ShieldCheck, Sparkles, Phone, Send, MessageCircle } from 'lucide-react';
import { USER_MASTER_PORTRAIT } from '../images';

interface MasterBioProps {
  onOpenEvaluator: () => void;
}

export const MasterBio: React.FC<MasterBioProps> = ({ onOpenEvaluator }) => {
  return (
    <section id="master" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Master Portrait & Workspace Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#1F2022] h-[520px] w-full">
              <img
                src="https://i.ibb.co/MxDq3Gmq/841b463ae76f3ae291c69bcbffdea839-1f316032-c4b8-44b6-b631-fc4724925ef3.png"
                alt="Мастер-реставратор Николай Жуков"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              
              {/* Single clean overlay text block */}
              <div className="absolute bottom-5 left-5 right-32 text-white space-y-1 z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9774F] block">
                  ОСНОВАТЕЛЬ И ВЕДУЩИЙ РЕСТАВРАТОР
                </span>
                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  Николай Жуков
                </h3>
              </div>
            </div>

            {/* Float Experience Badge */}
            <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E8DFD3] shadow-xl flex items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
                14
              </div>
              <div className="text-left whitespace-nowrap">
                <span className="text-xs font-bold text-[#1F2022] block">Лет опыта</span>
                <span className="text-[10px] text-[#7C6357]">Более 4 800 архивов</span>
              </div>
            </div>
          </div>

          {/* Bio Text & Craft Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>О мастере и философии работы</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight leading-tight">
              «Для меня старая фотография — это не просто бумага, а <span className="text-[#C85A32] italic font-normal">нить связи с корнями</span>»
            </h2>

            <div className="space-y-4 text-base text-[#57585C] leading-relaxed">
              <p>
                Здравствуйте! Меня зовут Николай. Мой путь начался с восстановления сильно поврежденного семейного альбома. С тех пор я понял, насколько бесценен каждый уцелевший снимок для семьи.
              </p>
              <p>
                Я категорически против слепого применения автоматических нейросетевых фильтров, которые превращают живые лица предков в восковые маски. В нашей мастерской каждая морщинка, каждый взгляд, пуговица на гимнастерке и оттенок платья восстанавливаются <strong>вручную на графическом мониторе с точностью до отдельного пикселя</strong>.
              </p>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                <h4 className="text-sm font-bold text-[#1F2022] flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                  <span>Бережность и уважение</span>
                </h4>
                <p className="text-xs text-[#57585C]">
                  Сохраняем подлинные эмоции и индивидуальность человека без искусственных искажений.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm">
                <h4 className="text-sm font-bold text-[#1F2022] flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#C85A32]" />
                  <span>Личная ответственность</span>
                </h4>
                <p className="text-xs text-[#57585C]">
                  Я лично проверяю каждый файл перед отправкой и вношу любые правки бесплатно.
                </p>
              </div>
            </div>

            {/* Contact the master directly */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEvaluator}
                className="px-6 py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-semibold text-sm transition-all shadow cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Задать вопрос Николаю</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F2022]">
                <span>Прямой контакт:</span>
                <a
                  href="https://t.me/nikolay_photo_rest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#2C2D30] flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3 h-3 text-[#2AABEE]" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/79117687641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-[#2C2D30] flex items-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3 h-3 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
