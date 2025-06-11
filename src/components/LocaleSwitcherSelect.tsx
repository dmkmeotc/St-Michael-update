'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {Locale} from 'next-intl';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import { ChevronDown } from 'lucide-react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
     <label
      className={clsx(
        'relative block text-gray-400', // 'block' ensures it takes full width if needed, 'relative' for icon positioning
        isPending && 'transition-opacity opacity-50 pointer-events-none' // More robust disabling
      )}
      htmlFor="locale-select" // Associate label with select for accessibility
    >
      <span className="sr-only">{label}</span> {/* Screen reader only label */}
      <div className="flex items-center gap-2"> {/* Reduced gap for better visual balance */}
        <select
          id="locale-select" // Unique ID for accessibility
          className="appearance-none bg-transparent py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md cursor-pointer" // Refined styling
          defaultValue={defaultValue}
          disabled={isPending}
             onChange={onSelectChange}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
          <ChevronDown className="h-4 w-4 text-gray-400" /> {/* Tailor icon size and color */}
        </span>
      </div>
    </label>
  );
}
