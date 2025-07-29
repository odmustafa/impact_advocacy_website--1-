
export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services', 
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'hero.cta': 'Get Started',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'footer.copyright': 'Impact Advocacy Inc. All rights reserved.',
    'footer.disclaimer': 'Educational content. Not professional financial or legal advice.',
    'stats.workshops': 'Community Workshops',
    'stats.families': 'Families Served',
    'stats.years': 'Years Experience',
    'stats.cities': 'Cities Served',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.events': 'Eventos', 
    'nav.contact': 'Contacto',
    'hero.cta': 'Comenzar',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'footer.copyright': 'Impact Advocacy Inc. Todos los derechos reservados.',
    'footer.disclaimer': 'Contenido educativo. No es asesoramiento financiero o legal profesional.',
    'stats.workshops': 'Talleres Comunitarios',
    'stats.families': 'Familias Servidas',
    'stats.years': 'Años de Experiencia',
    'stats.cities': 'Ciudades Servidas',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
