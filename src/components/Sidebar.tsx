'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import QRCodeCard from './QRCodeCard'
import ShareButtonWithModal from './ShareButtonWithModal'
import { useMenuItems } from '@/data/menuItems'
import { useTranslations } from 'next-intl'

import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function Sidebar() {
  const menuItems = useMenuItems()
  const pathname = usePathname()
   const t = useTranslations('homeother')

  return (
    <aside className="w-full h-screen flex flex-col justify-between border-r text-ethGray-100 p-4 overflow-y-auto custom-scrollbar">
      {/* Top Menu */}
      <nav className="flex flex-col gap-2">
        <div>
          <Link href="/" >
      
      <div>
             <Avatar className='w-32 h-24 m-2 place-self-start'>
           <AvatarImage
        src="/DMKM.png" // This is the public URL path
        alt="Program for All Ages Icon" // Important for accessibility
      />

    </Avatar>
          </div>
          </Link>
 </div>

        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md hover:opacity-50 transition-colors px-3 py-2',
                isActive && 'opacity-50 font-semibold'
              )}
            >
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section: Membership, QR Codes, Share */}
      <div className="flex flex-col items-start justify-start gap-2 mt-6">
        <div className="flex justify-between items-center gap-6 w-full h-full p-2">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <h1 className="text-sm font-bold">  {t('becomeChurchMember')}</h1>
            </div>
            <div>
              <h1 className="text-sm font-bold">  {t('joinSundaySchool')}</h1>
            </div>
            <div>
              <QRCodeCard
                value="https://docs.google.com/forms/d/e/1FAIpQLSdVlOcEkZVK9dOmoLSH5pNjjjYcgfewWNgqSSRabTAAeWzjyg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628"
                text=""
                size={100}
              />
            </div>
            <div>
              <QRCodeCard value="https://your-website.com" text="" size={100} />
            </div>
          </div>
        </div>

        <ShareButtonWithModal
          shareTitle="Awesome Blog Post"
          shareText="Check out this blog post!"
          shareHashtags={['blog', 'nextjs', 'webdev']}
          className="mt-2 bg-transparent"
        />
      </div>
    </aside>
  )
}
