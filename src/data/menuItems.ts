import { useTranslations } from 'next-intl';

export const useMenuItems = () => {
  const t = useTranslations('Navigationmenu');
  const L = useTranslations('Lan');

  return [
    { label: t('home'), href: `/${L('language')}/StMichael` },
    { label: t('announcements'), href:`/${L('language')}/StMichael/iframe-view/https://kidusmichaeldc.org/blog/`},
     { label: t('RequestConfessor'), href:`/${L('language')}/StMichael/comingpage`},
     { label: t('SundaySchool'), href:`/${L('language')}/StMichael/comingpage`},
     { label: t('ChildrensProgram'), href:`/${L('language')}/StMichael/comingpage`},
     { label: t('OtherService'),  href:`/${L('language')}/StMichael/comingpage`},
     { label: t('makeDonation'), href:`/${L('language')}/StMichael/iframe-view/https://kidusmichaeldc.org/donate/`},
     { label: t('about'), href:`/${L('language')}/StMichael/iframe-view/https://kidusmichaeldc.org/about/`},
     
    
    
   
  ];
};

 