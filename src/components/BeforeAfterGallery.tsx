import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { Sparkles, CheckCircle2, AlertTriangle, Eye, Layers, ShieldCheck, Play } from 'lucide-react';

interface GalleryProps {
  onOpenEvaluator: () => void;
}

export const BeforeAfterGallery: React.FC<GalleryProps> = ({ onOpenEvaluator }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem>(PORTFOLIO_ITEMS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'Все работы' },
    { id: 'complex', label: 'Реставрация + Цвет' },
    { id: 'restoration', label: 'Реставрация старых фото' },
    { id: 'colorization', label: 'Колоризация ч/б' },
    { id: 'animation', label: 'Оживление портрета' },
  ];

  const isItemInCategory = (item: PortfolioItem, catId: string) => {
    if (catId === 'all') return true;
    if (item.category === catId) return true;
    if (item.categories && item.categories.includes(catId)) return true;
    return false;
  };

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => isItemInCategory(item, activeCategory));

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const items = PORTFOLIO_ITEMS.filter((item) => isItemInCategory(item, catId));
    if (items.length > 0) {
      setSelectedItem(items[0]);
      setSliderPosition(50);
    }
  };

  return (
    <section id="before-after" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Интерактивная галерея</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
            Сравнение результатов <span className="text-[#C85A32] italic font-normal">«До» и «После»</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#57585C]">
            Перемещайте интерактивный бегунок, чтобы оценить ювелирную точность ручной ретуши и реалистичность оттенков.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C85A32] text-white shadow-md shadow-[#C85A32]/20'
                  : 'bg-white hover:bg-[#FAF6F0] text-[#444549] border border-[#E8DFD3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-4 sm:p-8 rounded-3xl border border-[#E8DFD3] shadow-lg shadow-[#1F2022]/5">
          
          {/* Left: Big Interactive Comparison Slider */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            
            <div className="pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
                {selectedItem.categoryLabel} • {selectedItem.year}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2022]">
                {selectedItem.title}
              </h3>
            </div>

            {/* Slider or Side-by-Side Comparison Frame */}
            {selectedItem.category === 'animation' || selectedItem.animatedVideoUrl ? (
              <div className="relative h-[420px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden bg-[#1A1A1C] border border-[#E2D4C6] p-2.5 sm:p-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full h-full">
                  
                  {/* LEFT: STATIC ORIGINAL PHOTO */}
                  <div className="relative w-full h-full min-h-[190px] sm:min-h-0 rounded-xl overflow-hidden bg-[#141517] border border-[#3E4046] flex items-center justify-center p-1">
                    <img
                      src={selectedItem.beforeImg}
                      alt={selectedItem.title + ' оригинал'}
                      referrerPolicy="no-referrer"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '0.75rem',
                        imageRendering: '-webkit-optimize-contrast',
                      }}
                      className="w-full h-full"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#1F2022]/85 backdrop-blur-sm text-[#FBF8F3] px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider shadow uppercase pointer-events-none">
                      До: Статичный оригинал
                    </div>
                  </div>

                  {/* RIGHT: RESTORED HD PORTRAIT WITH KEN BURNS HOVER SCALE */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl bg-stone-950 flex items-center justify-center min-h-[190px] sm:min-h-0 border border-[#3E4046] group/anim">
                    <video 
                      src="https://res.cloudinary.com/dqnnjgrk/video/upload/img05.mp4" 
                      poster="https://i.ibb.co/pBTTjkM6/img02.jpg"
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-[#C85A32]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider shadow uppercase pointer-events-none flex items-center gap-1 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      После: Оживление
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <div className="relative h-[380px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden select-none bg-[#1A1A1C] border border-[#E2D4C6]">
                
                {/* AFTER LAYER */}
                <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedItem.afterImg}
                    alt={selectedItem.title + ' после реставрации'}
                    referrerPolicy="no-referrer"
                    style={{
                      objectFit: 'contain',
                      imageRendering: '-webkit-optimize-contrast',
                      width: '100%',
                      height: '100%',
                    }}
                    className="w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-[#C85A32]/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider shadow uppercase">
                    После реставрации
                  </div>
                </div>

                {/* BEFORE LAYER */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={selectedItem.beforeImg}
                      alt={selectedItem.title + ' до реставрации'}
                      referrerPolicy="no-referrer"
                      style={{
                        objectFit: 'contain',
                        imageRendering: '-webkit-optimize-contrast',
                        width: `${100 / (sliderPosition / 100)}%`,
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: 'none',
                      }}
                      className="absolute inset-0"
                    />

                    <div className="absolute top-4 left-4 bg-[#1F2022]/80 backdrop-blur-sm text-[#FBF8F3] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider shadow uppercase">
                      До: Оригинал
                    </div>
                  </div>
                </div>

                {/* Slider Divider line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C85A32] text-white border-2 border-white shadow-xl flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" transform="rotate(180 12 12)" />
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                  </div>
                </div>

                {/* Range Input for seamless dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Сравнить До и После"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
                />
              </div>
            )}

            {selectedItem.category === 'animation' || selectedItem.animatedVideoUrl ? (
              <div className="flex items-center justify-between text-xs text-[#7C6357] px-1">
                <span>Слева — статичный архивный оригинал, справа — оживленный портрет</span>
                <span className="font-semibold text-[#1F2022]">Плавный цикл • Ultra HD</span>
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs text-[#7C6357] px-1">
                <span>↔ Тяните ползунок для сравнения</span>
                <span className="font-semibold text-[#1F2022]">{sliderPosition}% оригинала</span>
              </div>
            )}

          </div>

          {/* Right: Work Details, Tags & Thumbnails Selector */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Description Card */}
            <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#E8DFD3] space-y-4 shadow-sm">
              <h4 className="font-serif text-lg font-bold text-[#1F2022]">
                О проделанной работе
              </h4>
              <p className="text-sm text-[#57585C] leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Damage Tags */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-[#7C6357] block">Обнаруженные дефекты:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.damageTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#F4EAE4] text-[#8C3A1E] text-xs font-medium"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Done List */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD3]/80">
                <span className="text-xs font-semibold text-[#1F2022] block">Выполненные операции:</span>
                <ul className="space-y-1.5">
                  {selectedItem.workDone.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#444549]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C85A32] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenEvaluator}
                className="w-full py-3 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-semibold text-xs tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
              >
                Оценить похожее фото
              </button>
            </div>

            {/* Other Projects Thumbnails */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C6357] block mb-3">
                Другие примеры в этой категории:
              </span>
              <div className="grid grid-cols-2 gap-3">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item);
                      setSliderPosition(50);
                    }}
                    className={`relative rounded-xl overflow-hidden border-2 text-left transition-all p-1.5 bg-white ${
                      selectedItem.id === item.id
                        ? 'border-[#C85A32] shadow-md ring-2 ring-[#C85A32]/20'
                        : 'border-[#E8DFD3] opacity-85 hover:opacity-100'
                    }`}
                  >
                    <div className="h-20 rounded-lg overflow-hidden relative bg-[#1A1A1C]">
                      <img
                        src={item.category === 'animation' ? item.beforeImg : item.afterImg}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {(item.category === 'animation' || item.animatedVideoUrl) && (
                        <div className="absolute top-1 right-1 bg-[#C85A32] text-white px-1.5 py-0.5 rounded text-[9px] font-bold shadow flex items-center gap-0.5">
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>Видео</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] font-bold text-[#1F2022] mt-1.5 truncate">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-[#7C6357] block">
                      {item.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
