# Learning Profile (Vue, Pinia, PWA)

<img src="https://img.shields.io/badge/PWA-optimized-brightgreen" alt="PWA"> <img src="https://img.shields.io/badge/Vue-3-%2341b883" alt="Vue 3"> <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="TypeScript">

Геймифицированное PWA для обучения 🚀

Интерактивный профиль с системой уровней, достижениями и трекингом прогресса

## ✨ Особенности реализации
- Использован Vite PWA Plugin для офлайн-режима
- Адаптивная сетка CSS Grid/Flexbox
- Анимации с Vue Transition
- Типизация TypeScript
- Тестовые данные
- Логика геймификации использует mock-данные из `src/mocks/user.ts`

## 🛠 Запуск проекта

```bash
bun install
bun run dev
bun run build
```

## 🏗 Структура проекта
```text
src/  
├── views/          # Страницы
├── components/     # UI-компоненты
├── stores/         # Pinia-store
├── composables/    # Логика XP/уровней
└── mocks/          # Тестовые данные (user.ts)
```
