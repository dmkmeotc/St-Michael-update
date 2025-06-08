import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'am'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      am: '/pfadnamen'
    }
  }
});
