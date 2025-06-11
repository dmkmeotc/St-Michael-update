'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import QRCodeCard from './QRCodeCard'
import ShareButtonWithModal from './ShareButtonWithModal'
import { useMenuItems } from '@/data/menuItems'

export default function Sidebar() {
   const menuItems = useMenuItems();
  const pathname = usePathname()
  const [open, setOpen] = useState<Record<string, boolean>>({})

  const toggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <aside className="w-full   h-screen overflow-y-auto custom-scrollbar text-ethGray-100 border-r">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return item.children ? (
            <div key={item.label}>
                
                
              <div
                onClick={() => toggle(item.label)}
                className="flex items-center justify-between cursor-pointer rounded-md hover:opacity-50 transition-colors px-3 py-2"
              >
                <span className="text-base font-medium">{item.label}</span>
                {open[item.label] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>

              {/* Subitems */}
              {open[item.label] && (
                <div className="pl-6 mt-1 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'rounded-md hover:opacity-50 transition-colors px-3 py-2',
                        pathname === child.href && 'opacity-50 font-semibold'
                      )}
                    >
                      <span className="text-sm font-normal">{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}




            </div>
          ) : (
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
         <QRCodeCard value="https://your-website.com"  text={"Scan to Join"} size={100}/>
             <ShareButtonWithModal
        shareTitle="Awesome Blog Post"
        shareText="Check out this blog post!"
        shareHashtags={['blog', 'nextjs', 'webdev']}
        className="mt-4"
      />
      </nav>
          
    </aside>
  )
}
