import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'

import Lara from '@primeuix/themes/lara'

import App from './App.vue'
import router from './router'
import { lazyload } from './directives/lazyload'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import en from './locales/en.json'
import id from './locales/id.json'

import './style.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)

const Noir = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{gray.50}',
      100: '{gray.100}',
      200: '{gray.200}',
      300: '{gray.300}',
      400: '{gray.400}',
      500: '{gray.500}',
      600: '{gray.600}',
      700: '{gray.700}',
      800: '{gray.800}',
      900: '{gray.900}',
      950: '{gray.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{gray.900}',
          inverseColor: '#ffffff',
          hoverColor: '{gray.800}',
          activeColor: '{gray.700}',
        },
        highlight: {
          background: '{gray.900}',
          focusBackground: '{gray.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{gray.200}',
          inverseColor: '{gray.900}',
          hoverColor: '{gray.100}',
          activeColor: '{gray.50}',
        },
        highlight: {
          background: 'rgba(229, 231, 235, .16)',
          focusBackground: 'rgba(229, 231, 235, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        surface: {
          0: '#18181b',
          50: '{gray.950}',
          100: '{gray.900}',
          200: '{gray.800}',
          300: '{gray.700}',
          400: '{gray.600}',
          500: '{gray.500}',
          600: '{gray.400}',
          700: '{gray.300}',
          800: '{gray.200}',
          900: '{gray.100}',
          950: '{gray.50}',
        },
      },
    },
  },
})

app.use(createPinia())

const savedLocale = localStorage.getItem('portfolio-locale') || 'en'
const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { en, id },
})

app.use(i18n)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      darkModeSelector: '.dark',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
  ripple: true,
})
app.directive('lazyload', lazyload)

app.mount('#app')
