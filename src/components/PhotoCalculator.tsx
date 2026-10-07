import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Check, CheckCircle2, AlertCircle, FileImage, ShieldCheck, Send, MessageCircle, Phone, ArrowRight, RefreshCw, Trash2, Info, X, Lightbulb, Paperclip } from 'lucide-react';
import { USER_HERO_BEFORE, USER_GALLERY_BEFORE, USER_COLORIZE_BEFORE, IMG01, IMG03 } from '../images';

const SAMPLE_PHOTOS = [
  {
    id: 'sample1',
    name: 'Реставрация старого фото',
    url: USER_HERO_BEFORE || IMG01,
    suggestedDefects: ['cracks', 'missing', 'fading'],
  },
  {
    id: 'sample2',
    name: 'Колоризация группового снимка (1937)',
    url: USER_GALLERY_BEFORE || IMG03,
    suggestedDefects: ['fading', 'scratches'],
  },
  {
    id: 'sample3',
    name: 'снимок на природе',
    url: USER_COLORIZE_BEFORE || 'https://i.ibb.co/hRQ2WPfS/img07.jpg',
    suggestedDefects: ['stains', 'cracks'],
  },
];

export type PlanId = 'restoration' | 'colorization' | 'animation' | 'complex';

export interface UploadedPhotoItem {
  id: string;
  name: string;
  url: string;
  size?: number;
}

interface CalculatorProps {
  onSuccess?: () => void;
  isModal?: boolean;
  initialPlanId?: PlanId;
}

export const PhotoCalculator: React.FC<CalculatorProps> = ({ onSuccess, isModal = false, initialPlanId }) => {
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhotoItem[]>([]);
  const [selectedSampleId, setSelectedSampleId] = useState<string>(SAMPLE_PHOTOS[0].id);
  const [isCustomUpload, setIsCustomUpload] = useState<boolean>(false);
  const [photoCount, setPhotoCount] = useState<number>(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addMoreInputRef = useRef<HTMLInputElement>(null);
  
  // Selected defects
  const [defects, setDefects] = useState<{ [key: string]: boolean }>({
    scratches: true,
    cracks: true,
    stains: true,
    missing: true,
    fading: true,
  });

  // Selected extra services
  const [services, setServices] = useState<{ [key: string]: boolean }>(() => {
    if (initialPlanId === 'restoration') {
      return { restoration: true, colorization: false, animation: false, printPrep: false, express: false };
    }
    if (initialPlanId === 'colorization') {
      return { restoration: true, colorization: true, animation: false, printPrep: false, express: false };
    }
    if (initialPlanId === 'animation') {
      return { restoration: true, colorization: false, animation: true, printPrep: false, express: false };
    }
    if (initialPlanId === 'complex') {
      return { restoration: true, colorization: true, animation: true, printPrep: true, express: false };
    }
    return { restoration: true, colorization: true, animation: true, printPrep: true, express: false };
  });

  // Synchronize services when initialPlanId changes
  React.useEffect(() => {
    if (!initialPlanId) return;
    if (initialPlanId === 'restoration') {
      setServices({
        restoration: true,
        colorization: false,
        animation: false,
        printPrep: false,
        express: false,
      });
    } else if (initialPlanId === 'colorization') {
      setServices({
        restoration: true,
        colorization: true,
        animation: false,
        printPrep: false,
        express: false,
      });
    } else if (initialPlanId === 'animation') {
      setServices({
        restoration: true,
        colorization: false,
        animation: true,
        printPrep: false,
        express: false,
      });
    } else if (initialPlanId === 'complex') {
      setServices({
        restoration: true,
        colorization: true,
        animation: true,
        printPrep: true,
        express: false,
      });
    }
  }, [initialPlanId]);

  // Client form state
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactMethod, setContactMethod] = useState<'telegram' | 'whatsapp' | 'phone'>('telegram');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Multiple File upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList: File[] = Array.from(files);
    const readPromises = fileList.map((file: File) => {
      return new Promise<UploadedPhotoItem>((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve({
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            name: file.name,
            url: (event.target?.result as string) || '',
            size: file.size,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readPromises).then((newPhotos) => {
      setUploadedPhotos((prev) => {
        const updated = [...prev, ...newPhotos];
        setPhotoCount(updated.length);
        return updated;
      });
      setIsCustomUpload(true);
      if (fileInputRef.current) fileInputRef.current.value = '';
      if (addMoreInputRef.current) addMoreInputRef.current.value = '';
    });
  };

  const handleRemovePhoto = (id: string) => {
    setUploadedPhotos((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      if (updated.length === 0) {
        setIsCustomUpload(false);
        setPhotoCount(1);
      } else {
        setPhotoCount(updated.length);
      }
      return updated;
    });
  };

  const handleResetPhoto = () => {
    setIsCustomUpload(false);
    setUploadedPhotos([]);
    setSelectedSampleId(SAMPLE_PHOTOS[0].id);
    setPhotoCount(1);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (addMoreInputRef.current) {
      addMoreInputRef.current.value = '';
    }
  };

  const toggleDefect = (key: string) => {
    setDefects((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleService = (key: string) => {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Price Calculation Logic
  const calculateTotal = () => {
    let base = 150; // Base restoration starting at 150 ₽

    if (defects.cracks) base += 50;
    if (defects.stains) base += 30;
    if (defects.missing) base += 50;
    if (defects.fading) base += 20;

    let extras = 0;
    if (services.colorization) extras += 200; // Colorization from 200 ₽
    if (services.animation) extras += 300;    // Video Animation from 300 ₽
    if (services.printPrep) extras += 100;
    if (services.express) extras += 150;

    let subtotal = (base + extras);
    subtotal = subtotal * photoCount;

    // Discount for multiple photos
    if (photoCount >= 3) {
      subtotal = Math.round(subtotal * 0.85); // 15% discount
    }

    return subtotal;
  };

  const estimatedDays = () => {
    if (services.express) return '12–24 часа (Экспресс)';
    if (photoCount > 3) return '3–4 дня';
    return '1–2 дня';
  };

  const buildOrderText = () => {
    const chosenDefects: string[] = [];
    if (defects.cracks) chosenDefects.push('заломы и трещины');
    if (defects.missing) chosenDefects.push('утраченные фрагменты');
    if (defects.stains) chosenDefects.push('пятна и выцветание');
    if (defects.scratches) chosenDefects.push('царапины и потертости');
    if (defects.fading) chosenDefects.push('потеря контраста');

    const chosenServices: string[] = [];
    if (services.restoration) chosenServices.push('Ручная ретушь');
    if (services.colorization) chosenServices.push('Историческая колоризация');
    if (services.animation) chosenServices.push('Живой портрет (Motion 4K)');
    if (services.printPrep) chosenServices.push('Музейная печать');
    if (services.express) chosenServices.push('Экспресс-готовность (12–24ч)');

    const servicesStr = chosenServices.length > 0 ? chosenServices.join(', ') : 'Ручная ретушь';
    const defectsStr = chosenDefects.length > 0 ? chosenDefects.join(', ') : 'нет видимых повреждений';

    const lines = [
      `Здравствуйте, мастер Николай!`,
      `Хочу оценить фото.`,
      `Количество снимков: ${photoCount}`,
    ];

    if (isCustomUpload && uploadedPhotos.length > 0) {
      if (uploadedPhotos.length === 1) {
        lines.push(`Прикреплен файл: ${uploadedPhotos[0].name}`);
      } else {
        lines.push(`Прикреплено файлов (${uploadedPhotos.length} шт.): ${uploadedPhotos.map((p) => p.name).join(', ')}`);
      }
    } else {
      const activeSample = SAMPLE_PHOTOS.find((s) => s.id === selectedSampleId);
      if (activeSample) {
        lines.push(`Выбран пример: ${activeSample.name}`);
      }
    }

    lines.push(`Выбранные услуги: ${servicesStr}`);
    lines.push(`Дефекты: ${defectsStr}`);
    lines.push(`Предварительный расчет: ${calculateTotal()} ₽`);

    if (name.trim()) {
      lines.push(`Имя: ${name.trim()}`);
    }
    if (contact.trim()) {
      lines.push(`Контакт: ${contact.trim()}`);
    }

    lines.push(`(Прикрепляю фото к сообщению ниже 👇)`);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderText = buildOrderText();
    const encodedText = encodeURIComponent(orderText);

    const selectedServices = Object.entries(services)
      .filter(([_, active]) => active)
      .map(([key]) => {
        switch (key) {
          case 'restoration': return 'Реставрация';
          case 'colorization': return 'Колоризация';
          case 'animation': return 'Оживление';
          case 'complex': return 'Комплекс';
          default: return key;
        }
      });
    const selectedServicesList = selectedServices.join(', ');
    const totalPrice = calculateTotal();

    if (contactMethod === 'telegram') {
      const message = encodeURIComponent(`Здравствуйте, Николай! Заявка на реставрацию:\nУслуги: ${selectedServicesList || 'Оценка'}\nСумма: ${totalPrice} ₽\n(Прикрепляю фото 👇)`);
      window.open(`https://t.me/nikolay_photo_rest?text=${message}`, '_blank');
    } else if (contactMethod === 'whatsapp') {
      const waUrl = `https://wa.me/79117687641?text=${encodedText}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else if (contactMethod === 'phone') {
      window.location.href = 'tel:+79117687641';
    }

    setIsSubmitted(true);
    if (onSuccess) {
      setTimeout(() => onSuccess(), 2500);
    }
  };

  return (
    <div id="calculator" className={`${isModal ? '' : 'py-20 bg-[#F5EFEB]/60 border-y border-[#E8DFD3] relative'}`}>
      <div className={`${isModal ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#E2D4C6] text-[#7C6357] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Реставрация от 150 ₽ • Колоризация от 200 ₽ • Оживление от 300 ₽</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2022] tracking-tight">
              Калькулятор <span className="text-[#C85A32] italic font-normal">оценки стоимости</span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-[#57585C]">
              Переснять на телефон (отсканировать в файл) и рассчитать точную стоимость реставрации за 1 минуту.
            </p>
          </div>
        )}

        {isSubmitted ? (
          <div className="relative bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DFD3] text-center max-w-xl mx-auto space-y-5 shadow-lg">
            <button
              id="calculator-success-close-btn"
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#FAF6F0] hover:bg-[#EFE6DD] text-[#7C6357] hover:text-[#1F2022] border border-[#E8DFD3] flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Закрыть"
              title="Закрыть и вернуться к калькулятору"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#C85A32] text-white flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2022]">
              Заявка успешно отправлена!
            </h3>
            <p className="text-sm sm:text-base text-[#57585C]">
              Спасибо, {name || 'уважаемый клиент'}! Мастер Николай Жуков уже получил данные по вашему снимку и свяжется с вами в {contactMethod === 'telegram' ? 'Telegram' : contactMethod === 'whatsapp' ? 'WhatsApp' : 'по телефону'} ({contact || 'указанным контактам'}) в течение 15–20 минут. Для проверки Вам отправляется превью пониженного качества с водяным знаком; оплата только после утверждения.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.open('https://t.me/nikolay_photo_rest', '_blank', 'noopener,noreferrer')}
                className="px-4 py-2.5 rounded-xl bg-[#2AABEE] hover:bg-[#2297D4] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Открыть Telegram</span>
              </button>
              <button
                type="button"
                onClick={() => window.open('https://wa.me/79117687641', '_blank', 'noopener,noreferrer')}
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Открыть WhatsApp</span>
              </button>
              <a
                href="tel:+79117687641"
                className="px-4 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Позвонить</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col items-center gap-3">
              <button
                id="calculator-recalculate-btn"
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#EFE6DD] hover:bg-[#E2D4C6] text-[#2C2D30] text-sm font-semibold transition-colors cursor-pointer"
              >
                Рассчитать ещё одно фото
              </button>

              <button
                id="calculator-back-to-site-btn"
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-medium text-[#7C6357] hover:text-[#C85A32] underline-offset-4 hover:underline transition-colors cursor-pointer py-1 px-3"
              >
                Вернуться к просмотру сайта
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Photo Upload / Selection & Defect Picker */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Photo Area */}
              <div className="bg-white p-6 rounded-3xl border border-[#E8DFD3] space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <label className="text-sm font-bold text-[#1F2022] block">
                    1. Переснять на телефон (отсканировать в файл):
                  </label>
                  <span className="text-xs text-[#C85A32] font-semibold">
                    Памятка: без вспышки при дневном свете
                  </span>
                </div>

                {/* Upload Previews or Upload Box */}
                {isCustomUpload && uploadedPhotos.length > 0 ? (
                  <div className="space-y-4">
                    {uploadedPhotos.length === 1 ? (
                      /* Single photo preview */
                      <div className="space-y-3">
                        <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-[#E8DFD3] p-3 w-full flex items-center justify-center group">
                          <img
                            src={uploadedPhotos[0].url}
                            alt={uploadedPhotos[0].name}
                            className="max-h-64 w-auto mx-auto object-contain rounded-lg shadow-sm"
                          />
                          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-semibold shadow">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Фото готово к оценке</span>
                          </div>
                          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md max-w-[80%] truncate">
                            {uploadedPhotos[0].name}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Multiple photos grid preview */
                      <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                          <span className="text-xs font-bold text-[#1F2022]">
                            Загружено снимков: <span className="text-[#C85A32]">{uploadedPhotos.length} шт.</span>
                          </span>
                          <span className="text-[11px] text-[#7C6357]">
                            Нажмите ✕ для удаления любого снимка
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {uploadedPhotos.map((photo, idx) => (
                            <div
                              key={photo.id}
                              className="relative rounded-2xl overflow-hidden bg-stone-100 border border-[#E8DFD3] aspect-square flex items-center justify-center group shadow-xs hover:border-[#C85A32]/60 transition-colors"
                            >
                              <img
                                src={photo.url}
                                alt={photo.name}
                                className="w-full h-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                              />
                              
                              {/* Number Badge */}
                              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-bold shadow">
                                №{idx + 1}
                              </span>

                              {/* Remove Individual Photo Button */}
                              <button
                                type="button"
                                onClick={() => handleRemovePhoto(photo.id)}
                                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm active:scale-95"
                                title="Удалить этот снимок"
                                aria-label={`Удалить ${photo.name}`}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>

                              {/* File Name Caption */}
                              <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md truncate font-mono">
                                {photo.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action buttons under photo / grid */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#E8DFD3]/60">
                      <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF6F0] border border-[#E8DFD3] text-xs font-semibold text-[#1F2022] transition-colors cursor-pointer shadow-sm active:scale-95">
                        <Upload className="w-3.5 h-3.5 text-[#C85A32]" />
                        <span>+ Добавить ещё фото</span>
                        <input
                          ref={addMoreInputRef}
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>

                      <button
                        type="button"
                        onClick={handleResetPhoto}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F4EAE4] hover:bg-[#EAD6CC] text-xs font-semibold text-[#C85A32] transition-colors cursor-pointer active:scale-95"
                        title="Удалить все загруженные фото и перейти к образцам"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{uploadedPhotos.length > 1 ? 'Сбросить все фото' : 'Сбросить фото'}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Standard Upload Box */}
                    <div className="relative border-2 border-dashed border-[#C85A32]/40 hover:border-[#C85A32] bg-[#FAF6F0] rounded-2xl p-6 text-center transition-colors group">
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        title="Загрузить одно или несколько фото"
                      />
                      <div className="space-y-2">
                        <div className="w-12 h-12 rounded-full bg-[#F5EFEB] text-[#C85A32] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-[#1F2022]">
                          Переснять на телефон (отсканировать в файл) и загрузить
                        </p>
                        <p className="text-xs text-[#7C6357]">
                          Можно выбрать сразу несколько фото (JPG, PNG, WEBP, HEIC)
                        </p>
                      </div>
                    </div>

                    {/* Current Preview or Samples */}
                    <div>
                      <span className="text-xs font-semibold text-[#7C6357] block mb-2">
                        Или выберите образец для проверки расчета:
                      </span>
                      <div className="grid grid-cols-3 gap-3">
                        {SAMPLE_PHOTOS.map((sample) => (
                          <button
                            key={sample.id}
                            type="button"
                            onClick={() => {
                              setSelectedSampleId(sample.id);
                              setIsCustomUpload(false);
                              setUploadedPhotos([]);
                              setPhotoCount(1);
                            }}
                            className={`p-1.5 rounded-xl border text-left transition-all bg-[#FAF6F0] flex flex-col cursor-pointer ${
                              selectedSampleId === sample.id && !isCustomUpload
                                ? 'border-[#C85A32] ring-2 ring-[#C85A32]/20 shadow-sm'
                                : 'border-[#E8DFD3] opacity-75 hover:opacity-100 hover:border-[#C85A32]/40'
                            }`}
                          >
                            <div className="h-16 w-full rounded-lg overflow-hidden bg-stone-900 flex items-center justify-center">
                              <img
                                src={sample.url}
                                alt={sample.name}
                                className="h-full w-full object-cover object-center rounded-lg"
                                referrerPolicy="no-referrer"
                                loading="eager"
                              />
                            </div>
                            <span className="text-[10px] font-medium text-[#1F2022] block mt-1.5 truncate text-center w-full">
                              {sample.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Quantity selector */}
                <div className="flex items-center justify-between pt-3 border-t border-[#E8DFD3]">
                  <span className="text-xs sm:text-sm font-semibold text-[#1F2022]">
                    Количество снимков:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPhotoCount(Math.max(1, photoCount - 1))}
                      className="w-8 h-8 rounded-lg bg-[#EFE6DD] hover:bg-[#E2D4C6] font-bold text-sm text-[#1F2022] flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-[#1F2022]">
                      {photoCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPhotoCount(photoCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#EFE6DD] hover:bg-[#E2D4C6] font-bold text-sm text-[#1F2022] flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                    {photoCount >= 3 && (
                      <span className="text-[11px] font-bold text-[#C85A32] bg-[#F4EAE4] px-2 py-0.5 rounded-full ml-1">
                        Скидка 15%
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Defect Checkboxes */}
              <div className="bg-white p-6 rounded-3xl border border-[#E8DFD3] space-y-4 shadow-sm">
                <label className="text-sm font-bold text-[#1F2022] block">
                  2. Отметьте видимые дефекты на фото:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'scratches', label: 'Мелкие царапины и пыль', price: 'от 150 ₽' },
                    { id: 'cracks', label: 'Глубокие заломы и трещины', price: '+50 ₽' },
                    { id: 'stains', label: 'Пятна от воды, клея, плесени', price: '+30 ₽' },
                    { id: 'missing', label: 'Утрачены фрагменты (угол, лицо)', price: '+50 ₽' },
                    { id: 'fading', label: 'Сильное выцветание / желтизна', price: '+20 ₽' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleDefect(item.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                        defects[item.id]
                          ? 'bg-[#F4EAE4] border-[#C85A32] text-[#8C3A1E]'
                          : 'bg-[#FAF6F0] border-[#E8DFD3] text-[#57585C] hover:border-[#C85A32]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          defects[item.id] ? 'bg-[#C85A32] border-[#C85A32] text-white' : 'border-[#A5A29D]'
                        }`}>
                          {defects[item.id] && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[11px] font-bold opacity-75">{item.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Services Selector */}
              <div className="bg-white p-6 rounded-3xl border border-[#E8DFD3] space-y-4 shadow-sm">
                <label className="text-sm font-bold text-[#1F2022] block">
                  3. Выберите желаемые услуги:
                </label>

                <div className="space-y-2.5">
                  {[
                    {
                      id: 'restoration',
                      title: 'Реставрация фото',
                      desc: 'Устранение заломов, трещин, пятен и повышение резкости',
                      price: 'от 150 ₽',
                      required: true,
                    },
                    {
                      id: 'colorization',
                      title: 'Колоризация ч/б',
                      desc: 'Исторически достоверный подбор оттенков кожи, одежды и наград',
                      price: 'от 200 ₽',
                      badge: 'Популярно',
                    },
                    {
                      id: 'animation',
                      title: 'Оживление в видео (Motion 4K)',
                      desc: 'Естественный живой взгляд, моргание и легкая улыбка (10 сек MP4)',
                      price: 'от 300 ₽',
                      badge: 'Хит',
                    },
                    {
                      id: 'printPrep',
                      title: 'Подготовка к печати большого формата (300-600 DPI)',
                      desc: 'Увеличение разрешения без потери резкости под рамку 30×40 или 40×60 см',
                      price: '+100 ₽',
                    },
                    {
                      id: 'express',
                      title: 'Экспресс-готовность (до 24 часов)',
                      desc: 'Приоритетная внеочередная работа мастера',
                      price: '+150 ₽',
                    },
                  ].map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => !srv.required && toggleService(srv.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        services[srv.id]
                          ? 'bg-[#F4EAE4] border-[#C85A32] shadow-sm ring-1 ring-[#C85A32]/30'
                          : 'bg-[#FAF6F0] border-[#E8DFD3] opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border ${
                            services[srv.id] ? 'bg-[#C85A32] border-[#C85A32] text-white' : 'border-[#A5A29D] bg-white'
                          }`}>
                            {services[srv.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-[#1F2022]">{srv.title}</span>
                              {srv.badge && (
                                <span className="px-2 py-0.5 rounded-full bg-[#F4EAE4] text-[#C85A32] text-[10px] font-bold">
                                  {srv.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#57585C] mt-0.5">{srv.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#C85A32] shrink-0">{srv.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complex package badge */}
                {services.colorization && services.animation && (
                  <div className="p-3 rounded-xl bg-[#F4EAE4] border border-[#C85A32]/30 text-xs text-[#8C3A1E] font-medium flex items-center justify-between">
                    <span>🔥 Комплекс «Всё включено» (Реставрация + Цвет + Видео)</span>
                    <span className="font-bold">от 650 ₽</span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Calculation Summary & Submission Form */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              
              <div className="bg-[#1F2022] text-[#FBF8F3] p-6 sm:p-7 rounded-3xl shadow-xl space-y-6 border border-[#3A3B40]">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D9774F] block">
                    Итоговая оценка
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                      {calculateTotal().toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-xs text-[#A5A29D]">
                      {photoCount > 1 ? `(за ${photoCount} фото)` : '(за все услуги)'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 py-3 border-y border-[#3A3B40] text-xs text-[#D4CDC5]">
                  <div className="flex justify-between">
                    <span>Срок готовности:</span>
                    <span className="font-semibold text-white">{estimatedDays()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Для проверки:</span>
                    <span className="font-semibold text-[#2AABEE]">Превью с водяным знаком</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Оплата:</span>
                    <span className="font-semibold text-[#25D366]">Только после утверждения</span>
                  </div>
                </div>

                {/* Form to submit request */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#D4CDC5] block mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Например, Анна"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#2C2D32] border border-[#44454C] text-white text-sm focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#D4CDC5] block mb-1">
                      Куда прислать расчет и превью?
                    </label>
                    
                    {/* Messenger Choice */}
                    <div className="grid grid-cols-3 gap-2 mb-2.5">
                      <button
                        type="button"
                        onClick={() => setContactMethod('telegram')}
                        className={`py-3.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          contactMethod === 'telegram'
                            ? 'bg-[#2AABEE] text-white shadow-sm'
                            : 'bg-[#2C2D32] text-[#A5A29D] hover:text-white'
                        }`}
                      >
                        <Send className="w-5 h-5" />
                        Telegram
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('whatsapp')}
                        className={`py-3.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          contactMethod === 'whatsapp'
                            ? 'bg-[#25D366] text-white shadow-sm'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                        }`}
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('phone')}
                        className={`py-3.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          contactMethod === 'phone'
                            ? 'bg-[#C85A32] text-white shadow-sm'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500/30'
                        }`}
                      >
                        <Phone className="w-5 h-5" />
                        Звонок
                      </button>
                    </div>

                    {/* Dynamic Context Hint with accelerated pulsating animation and bright glow */}
                    <div
                      style={{ animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                      className="flex items-center gap-1.5 mb-1.5 px-0.5 text-xs text-amber-300 font-medium drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>
                        {contactMethod === 'telegram' && 'Укажите ваш @username в Telegram или номер телефона'}
                        {contactMethod === 'whatsapp' && 'Укажите ваш номер телефона, привязанный к WhatsApp'}
                        {contactMethod === 'phone' && 'Укажите ваш номер телефона для обратного звонка'}
                      </span>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder={
                        contactMethod === 'telegram'
                          ? 'например: @username или +7 999 123-45-67'
                          : contactMethod === 'whatsapp'
                          ? '+7 999 123-45-67'
                          : '+7 999 123-45-67'
                      }
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#2C2D32] border border-[#44454C] text-white text-sm focus:outline-none focus:border-[#C85A32] placeholder:text-[#8E8B85]"
                    />

                    {/* Direct links to channels */}
                    <div className="flex items-center justify-between text-[11px] text-[#A5A29D] pt-1.5 px-0.5">
                      <span>Прямой канал связи:</span>
                      <div className="flex items-center gap-2 font-medium">
                        <a
                          href="https://t.me/nikolay_photo_rest"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2AABEE] hover:underline flex items-center gap-0.5"
                          title="Открыть Telegram"
                        >
                          <Send className="w-2.5 h-2.5" />
                          <span>Telegram</span>
                        </a>
                        <span>•</span>
                        <a
                          href="https://wa.me/79117687641"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline flex items-center gap-0.5"
                          title="Открыть WhatsApp"
                        >
                          <MessageCircle className="w-2.5 h-2.5" />
                          <span>WhatsApp</span>
                        </a>
                        <span>•</span>
                        <a
                          href="tel:+79117687641"
                          className="text-[#E8DFD3] hover:underline flex items-center gap-0.5"
                          title="Позвонить мастеру"
                        >
                          <Phone className="w-2.5 h-2.5" />
                          <span>Звонок</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#D4CDC5] block mb-1">
                      Комментарий мастеру (необязательно)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Особые пожелания по цвету глаз, форме или срокам..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-[#2C2D32] border border-[#44454C] text-white text-xs focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#C85A32] hover:bg-[#A9431E] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-[#C85A32]/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Отправить фото на оценку</span>
                  </button>

                  {/* Memo card: How submission works */}
                  <div className="rounded-xl bg-zinc-800/70 border border-amber-500/20 p-3.5 text-left text-xs space-y-2.5 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Как отправить заказ за 3 простых шага:</span>
                    </div>
                    <ul className="space-y-2 text-[#D4CDC5] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-sm shrink-0">🟢</span>
                        <div>
                          <strong className="text-white font-semibold">WhatsApp / 🔵 Telegram:</strong>{' '}
                          После нажатия на кнопку откроется чат с мастером с готовым расчетом. Нажмите кнопку «Отправить» в чате, а затем через скрепку (<Paperclip className="w-3 h-3 inline text-amber-300 -mt-0.5" />) прикрепите ваше фото к диалогу.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sm shrink-0">📞</span>
                        <div>
                          <strong className="text-white font-semibold">Телефонный звонок:</strong>{' '}
                          Нажмите кнопку, чтобы сразу набрать прямой номер мастера{' '}
                          <a
                            href="tel:+79117687641"
                            className="text-amber-300 hover:underline font-semibold"
                          >
                            +7 (911) 768-76-41
                          </a>{' '}
                          и обсудить заказ голосом.
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>

                <div className="space-y-1.5 text-[11px] text-[#A5A29D] text-center leading-relaxed">
                  <p>
                    🛡️ Для проверки Вам отправляется превью пониженного качества с водяным знаком; оплата только после утверждения.
                  </p>
                  <p className="text-[#7C6357]">
                    🔒 Ваши фотографии конфиденциальны и не передаются третьим лицам.
                  </p>
                  <div className="pt-2 mt-3 text-xs text-zinc-300">
                    <span>Контактный т. </span>
                    <a
                      href="tel:+79117687641"
                      className="hover:text-amber-400 underline decoration-amber-500/40 transition-colors font-medium"
                    >
                      +7 (911) 768-76-41
                    </a>
                    <span> Николай Павлович</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
