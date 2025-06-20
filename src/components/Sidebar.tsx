'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import QRCodeCard from './QRCodeCard'
import ShareButtonWithModal from './ShareButtonWithModal'
import { useMenuItems } from '@/data/menuItems'

export default function Sidebar() {
  const menuItems = useMenuItems()
  const pathname = usePathname()
  const [open, setOpen] = useState<Record<string, boolean>>({})

  const toggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <aside className=" w-full h-screen flex flex-col justify-between border-r text-ethGray-100 p-4 overflow-y-auto custom-scrollbar">
      {/* Top Menu */}
      <nav className="flex flex-col gap-2"> 
      <div> <Image
          src="/DMKM.png" width={100} height={100} alt="DMKM Logo"/></div> 
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return item.children ? (
            <div key={item.label}>
              <div
                onClick={() => toggle(item.label)}
                className="flex items-center justify-start cursor-pointer rounded-md hover:opacity-50 transition-colors px-3 py-2"
              >
                <span className="text-base font-medium">{item.label}</span>
                {open[item.label] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>

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
      </nav>

      {/* At Bottom QR and Share */}
      <div className="flex flex-col items-start justify-start gap-2 mt-6">

       <div className="flex justify-between items-center gap-6 w-full  h-full p-2">
        <div className='grid grid-cols-2 gap-4 w-full'>
          <div>
              <h1 className="text-sm font-bold">Become a Church Member</h1>
          </div>
          <div>
              <h1 className="text-sm font-bold">Join Sunday School</h1>
          </div>
          <div>
             <QRCodeCard value="https://docs.google.com/forms/d/e/1FAIpQLSdVlOcEkZVK9dOmoLSH5pNjjjYcgfewWNgqSSRabTAAeWzjyg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628"  text={''} size={100}/>
          </div>
          <div>
    <QRCodeCard value="https://your-website.com"  text={''} size={100}/>
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
