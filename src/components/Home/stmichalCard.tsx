import { Button } from "@/components/ui/button"

import { Card, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useTranslations } from 'next-intl'
import Link from "next/link"


export function StMichalCard() {
  const t = useTranslations('StMichalCard')
  const tt=useTranslations('ContactInfo')
 
 

  return (
    <Card className="w-full flex bg-transparent overflow-hidden rounded-none border-0 shadow-none m-0 p-0">
      <CardHeader>
        <Avatar className='w-44 h-54 m-[2px] place-self-center'>
          <AvatarImage src="/michatEt.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
       {/*  <h1 className="scroll-m-20 text-center text-2xl md:text-[1rem] lg:text-xl xl:text-2xl font-extrabold tracking-tight text-balance">
          {t('serviceScheduleTitle')}
        </h1> */}
       {/*  <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center">
          <p>{t('serviceScheduleTimes')}</p>
        </h3> */}

  

 {/*  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
        {tt('title')}
      </h2> */}


       {/* Operating Hours Section */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">{tt('hoursTitle')}</h3>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-medium">{tt('officeHours')}</span> {tt('officeTime')}
        </p>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-medium">{tt('serviceHours')}</span> {tt('serviceTime')}
        </p>
      </div>

      {/* Address Section */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">{tt('addressTitle')}</h3>
        <p className="text-gray-600 leading-relaxed">
          {tt('addressLine1')}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {tt('addressLine2')}
        </p>
      </div>

     
  

    <div>
      <h1>Welcome</h1>
      <Link href="/en/StMichael/iframe-view/https://kidusmichaeldc.org/">
      <Button className="w-full bg-ethYellow-300 text-ethBlack-500 text-2xl font-bold hover:bg-ethYellow-400 m-4">
           {t('buttonText')}
        </Button>
      </Link>
    </div>

     
      </CardHeader>
    </Card>
  )
}
