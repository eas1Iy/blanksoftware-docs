import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BlankSoftware",
  description: "Документация экосистемы и модификаций для DayZ.",
  
  // Меняем язык сайта на русский (для поиска и системных текстов)
  lang: 'ru-RU',

  themeConfig: {
    // Верхнее меню
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Сайт', link: '/website/' },
      { text: 'Модификации', link: '/mods/core-client' }
    ],

    // Боковое меню
    sidebar: [
      {
        text: 'Платформа (Сайт)',
        collapsed: false, // Меню развернуто по умолчанию
        items: [
          { text: 'Обзор платформы', link: '/website/' }
        ]
      },
      {
        text: 'Модификации DayZ',
        collapsed: false,
        items: [
          { text: 'Core System [CLIENT]', link: '/mods/core-client' },
          { text: 'Core System [SERVER]', link: '/mods/core-server' },
          { text: 'Advanced Map System', link: '/mods/advanced-map' },
          { text: 'Duels System', link: '/mods/duels' },
          { text: 'Group System', link: '/mods/groupsystem' },
          { text: 'Claim Territory', link: '/mods/claimterritory' }
        ]
      }
    ],

    // Иконки соцсетей в правом верхнем углу
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/G9QgchMr9B' },
      { icon: 'github', link: 'https://github.com/eas1Iy' }
    ],
    
    // Текст в подвале
    footer: {
      message: 'Создано для клиентов BSMods.',
      copyright: 'Copyright © 2026 BlankSoftware'
    }
  }
})
