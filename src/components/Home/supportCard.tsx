import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import { useTranslations } from 'next-intl'
import Link from "next/link"


export function SupportCard() {
  const t = useTranslations('SupportCard')
 const L = useTranslations('Lan');
  return (
    <Card className="w-full overflow-hidden flex flex-col bg-transparent rounded-none border-0 shadow-none m-0 p-0 ">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-sm:place-items-center">
          <div>
             <Avatar className='w-24 h-24 m-[2px] sm:w-16 sm:h-16 lg:w-24 lg:h-24 place-self-center'>
           <AvatarImage
        src="/programforallage.png" // This is the public URL path
        alt="Program for All Ages Icon" // Important for accessibility
      />

    </Avatar>

<div>
            <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center hover:underline  hover:text-ethLightBlue-500">
              <p>{t('supportDescription')}</p>
            </h3>
          </div>


          </div>


          <div className=" place-self-center overflow-auto  ">

            <div>
             <Avatar className='w-24 h-24 m-[2px] sm:w-16 sm:h-16 lg:w-24 lg:h-24 place-self-center'>
           <AvatarImage
        src="/SupportChurch.png" // This is the public URL path
        alt="Program for All Ages Icon" // Important for accessibility
      />

    </Avatar>
          </div>
          

 <Link href={`/${L('language')}/StMichael/iframe-view/https://kidusmichaeldc.org/donate/`}>
 <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center hover:underline hover:text-ethLightBlue-500">
  {t('supportTitle')}

 </h3>
    
   
      
      </Link>

           
          </div>

          
          </div>
      </CardContent>
    </Card>
  )
}
