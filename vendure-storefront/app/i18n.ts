export default {
  supportedLngs: ['en', 'es', 'pt', 'pt-BR', 'id'],
  fallbackLng: 'en',
  // Disabling suspense is recommended
  react: { useSuspense: false },
  backend: {
    loadPath: '../public/locales/{{lng}}/{{ns}}.json',
  },
};
