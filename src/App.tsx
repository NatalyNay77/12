import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, Star, Zap, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Молниеносная скорость',
    description: 'Оптимизированная производительность для мгновенной загрузки на любом устройстве.',
  },
  {
    icon: Shield,
    title: 'Надёжная защита',
    description: 'Современные стандарты безопасности для защиты ваших данных и конфиденциальности.',
  },
  {
    icon: Heart,
    title: 'Создано с заботой',
    description: 'Продуманный дизайн и внимание к каждой детали для лучшего опыта.',
  },
];

const plans = [
  {
    name: 'Старт',
    price: '0',
    period: 'навсегда',
    features: ['1 проект', 'Базовая аналитика', 'Поддержка по email', '5 ГБ хранилище'],
    highlighted: false,
  },
  {
    name: 'Про',
    price: '990',
    period: 'в месяц',
    features: ['Безлимит проектов', 'Расширенная аналитика', 'Приоритетная поддержка', '50 ГБ хранилище', 'Командный доступ'],
    highlighted: true,
  },
  {
    name: 'Бизнес',
    price: '2900',
    period: 'в месяц',
    features: ['Всё из Про', 'API доступ', 'Персональный менеджер', 'Безлимит хранилище', 'SLA 99.9%'],
    highlighted: false,
  },
];

const testimonials = [
  { name: 'Анна К.', role: 'Дизайнер', text: 'Невероятно удобный сервис. Использую каждый день и не представляю работу без него.', rating: 5 },
  { name: 'Михаил П.', role: 'Разработчик', text: 'Лучшее решение на рынке. Скорость и надёжность на высшем уровне.', rating: 5 },
  { name: 'Елена С.', role: 'Предприниматель', text: 'Запустила проект за один вечер. Всё интуитивно и понятно.', rating: 5 },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white">
                <Zap className="w-5 h-5" />
              </div>
              <span>Nova</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Возможности</a>
              <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Тарифы</a>
              <a href="#testimonials" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Отзывы</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Войти</a>
              <a
                href="#pricing"
                className="text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Начать
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
            <a href="#features" onClick={() => setMenuOpen(false)} className="block text-sm text-slate-600 hover:text-slate-900">Возможности</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-sm text-slate-600 hover:text-slate-900">Тарифы</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-sm text-slate-600 hover:text-slate-900">Отзывы</a>
            <a href="#" className="block text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-lg text-center">Начать</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-white" />
        <div className="absolute top-20 right-0 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Новое поколение инструментов
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
            Создавайте быстрее.
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Работайте умнее.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Современная платформа для создания и управления проектами. Простая, быстрая и красивая.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all hover:scale-105"
            >
              Попробовать бесплатно
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-slate-700 px-6 py-3 rounded-xl font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Узнать больше
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-500" /> Без карты
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-500" /> 14 дней бесплатно
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-500" /> Отмена в любой момент
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Почему выбирают нас</h2>
            <p className="mt-4 text-slate-600 text-lg">Всё, что нужно для продуктивной работы — в одном месте.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-emerald-100/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Простые тарифы</h2>
            <p className="mt-4 text-slate-600 text-lg">Выберите план, который подходит именно вам.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted ? 'border-teal-500 shadow-md md:scale-105' : 'border-slate-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-medium">
                    Популярный
                  </div>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-500 text-sm">₽ / {plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-medium transition-all ${
                    plan.highlighted
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Выбрать план
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Нам доверяют</h2>
            <p className="mt-4 text-slate-600 text-lg">Тысячи пользователей уже выбрали Nova.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-medium text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Готовы начать?</h2>
              <p className="mt-4 text-slate-300 text-lg max-w-md mx-auto">
                Присоединяйтесь к тысячам довольных пользователей уже сегодня.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition-all hover:scale-105"
              >
                Начать бесплатно
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white">
                <Zap className="w-5 h-5" />
              </div>
              <span>Nova</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">О нас</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Блог</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Документация</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Контакты</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Конфиденциальность</a>
            </nav>
            <p className="text-sm text-slate-400">© 2026 Nova. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
