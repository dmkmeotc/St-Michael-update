import { useTranslations } from 'next-intl';

export const useMenuItems = () => {
  const t = useTranslations('Navigationmenu');
  const L = useTranslations('Lan');

  return [
    { label: t('home'), href: `/${L('language')}` },
    { label: t('announcements'), href: "/announcements" },
    {
      label: t('deacons'),
      children: [
        { label: t('allDeacons'), href: "/deacons" },
        { label: t('schedules'), href: "/deacons/schedules" },
      ],
    },
    {
      label: t('donation'),
      children: [
        { label: t('makeDonation'), href: "/donation" },
        { label: t('fundraisingEvents'), href: "/donation/events" },
      ],
    },
    { label: t('ourDiocese'), href: "/diocese" },
    {
      label: t('ourChurch'),
      children: [
        { label: t('about'), href: "/church/about" },
        { label: t('events'), href: "/church/events" },
      ],
    },
    { label: t('sundaySchool'), href: "/sunday-school" },
    {
      label: t('youthCorner'),
      children: [
        { label: t('programs'), href: "/youth/programs" },
        { label: t('media'), href: "/youth/media" },
      ],
    },
    {
      label: t('prayersQuotes'),
      children: [
        { label: t('morningPrayers'), href: "/prayers/morning" },
        { label: t('quotes'), href: "/quotes" },
      ],
    },
    {
      label: t('holyFamily'),
      children: [
        { label: t('info'), href: "/holy-family/info" },
        { label: t('meetings'), href: "/holy-family/meetings" },
      ],
    },
    { label: t('contactUs'), href: "/contact" },
  ];
};