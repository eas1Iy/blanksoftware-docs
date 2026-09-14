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
          { text: 'Обзор платформы', link: '/website/' },
          { text: 'API и интеграции', link: '/website/api' }
        ]
      },
      {
        text: 'Модификации DayZ',
        collapsed: false,
        items: [
          { text: 'Ядро клиентское', link: '/mods/core-client' },
          { text: 'Ядро серверное', link: '/mods/core-server' },
          { text: 'Advanced Map System', link: '/mods/advanced-map' },
          { text: 'Duels System', link: '/mods/duels' },
          { text: 'Group System', link: '/mods/groupsystem' }
        ]
      }
    ],

    // Иконки соцсетей в правом верхнем углу
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/ТВОЙ_СЕРВЕР' },
      { icon: 'github', link: 'https://github.com/eas1ly' }
    ],
    
    // Текст в подвале
    footer: {
      message: 'Создано для администраторов серверов DayZ.',
      copyright: 'Copyright © 2026 BlankSoftware'
    }
  }
})