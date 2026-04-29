import React, { useState } from 'react';
import { Sparkles, Video, Bot, Lightbulb, TrendingUp, BarChart2, FlaskConical } from 'lucide-react';

const creativeSkills = [
  {
    icon: Video,
    title: 'Створення креативів для соцмереж',
    description: 'Створюю AI-контент для TikTok, Instagram, Facebook, YouTube Shorts',
    color: 'from-pink-500 to-rose-500',
    shadow: 'hover:shadow-pink-500/30',
  },
  {
    icon: Bot,
    title: 'Генерація контенту за допомогою AI',
    description: 'Активно використовую ChatGPT, Claude, Grok, Runway, Kling та інші AI-інструменти для генерації ідей, текстів і візуалів',
    color: 'from-purple-500 to-violet-500',
    shadow: 'hover:shadow-purple-500/30',
  },
  {
    icon: Lightbulb,
    title: 'Розробка концепцій та hooks',
    description: 'Вчусь створювати сильні hook’и та цікаві ідеї для відео, які мають потенціал зачепити увагу в перші 3 секунди',
    color: 'from-amber-500 to-orange-500',
    shadow: 'hover:shadow-amber-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Аналіз трендів TikTok та Instagram',
    description: 'Слідкую за актуальними трендами. Вчусь адаптувати їх під різні ніші',
    color: 'from-cyan-500 to-blue-500',
    shadow: 'hover:shadow-cyan-500/30',
  },
  {
    icon: BarChart2,
    title: 'Оптимізація контенту під залучення',
	description: 'Вчуся розуміти, які елементи креативу найбільше впливають на retention, CTR та engagement. Регулярно аналізую свої відео',
    color: 'from-green-500 to-emerald-500',
    shadow: 'hover:shadow-green-500/30',
  },
  {
    icon: FlaskConical,
    title: 'Тестування різних креативних підходів',
    description: 'Регулярно тестую нові ідеї, формати та стилі монтажу. Аналізую результати та вдосконалюю підхід',
    color: 'from-indigo-500 to-blue-600',
    shadow: 'hover:shadow-indigo-500/30',
  },
];

const CreativeSection = ({ visibleSections }) => {
  return (
    <section
      id="creative"
      className={`py-20 px-4 transition-all duration-1000 ${
        visibleSections.has('creative')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Sparkles className="text-pink-400" size={48} /> Creative Production
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`card-3d glass rounded-2xl p-6 hover:shadow-2xl ${skill.shadow} transition-all transform hover:scale-105 group`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-2 leading-snug">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;