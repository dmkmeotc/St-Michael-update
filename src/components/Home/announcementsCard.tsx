import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useTranslations } from 'next-intl'
import Link from "next/link"

export function AnnouncementsCard() {
  const t = useTranslations('AnnouncementsCard')
   const L = useTranslations('Lan');

  return (
    
    <Card className="w-full flex bg-transparent overflow-hidden rounded-none border-0 shadow-none m-0 p-0">
      <CardHeader>
      <Avatar className='w-24 h-24 m-[2px] place-self-center'>
     
      <AvatarImage src="/Anouncement.png" alt="Announcement Icon" />

           <AvatarFallback>AN</AvatarFallback> {/* e.g., "AN" for Announcement */}
    </Avatar>
        <h1 className="scroll-m-20 text-center text-2xl md:text-[1rem] lg:text-xl xl:text-2xl font-extrabold tracking-tight text-balance  hover:text-ethLightBlue-500 hover:underline">
          {t('title')}
        </h1>
       

         <Link href={`/${L('language')}/StMichael/StMichael/iframe-view/https://docs.google.com/forms/d/e/1FAIpQLSdVlOcEkZVK9dOmoLSH5pNjjjYcgfewWNgqSSRabTAAeWzjyg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628/`}>
      <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center  hover:text-ethLightBlue-500 hover:underline">
        {t('description')}
      </h3>
      </Link>
       
      </CardHeader>
    </Card>
  )
}
