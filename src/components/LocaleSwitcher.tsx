'use client';
// LocaleSwitcher.tsx
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'; // Adjust path based on your shadcn setup
import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onValueChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale as Locale }
      );
    });
  }

  return (
    <div className=''>
      <Select
        defaultValue={locale}
        onValueChange={onValueChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-[100px] text-white bg-transparent  focus:ring-0 focus:ring-offset-0    ">
          <SelectValue placeholder={t('label')} />
        </SelectTrigger>
        <SelectContent className="bg-ethBlack-300">
          {routing.locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t('locale', { locale: cur })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}