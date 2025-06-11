import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { useTranslations } from 'next-intl'
import QRCodeCard from "../QRCodeCard"
import { HandHelping } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"


export function SupportCard() {
  const t = useTranslations('SupportCard')

  return (
    <Card className="w-full overflow-hidden flex flex-col bg-transparent rounded-none border-0 shadow-none m-0 p-0 ">
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-sm:place-items-center">
          <div>
            <Avatar className='w-24 h-24 m-[2px] sm:w-16 sm:h-16 lg:w-24 lg:h-24 place-self-center'>
              <AvatarFallback>RN</AvatarFallback>
            </Avatar>
          </div>
          <div>
          



 <Link href="/en/StMichael/iframe-view/https://checkout.square.site/merchant/153BEDB9ZJ3GS/checkout/PQKPNJHN452TVYGBGEJOI4L6/">
      <Button className="w-full bg-ethYellow-300 text-ethBlack-500 text-2xl font-bold hover:bg-ethYellow-400 m-4">
       <HandHelping size={48} />  {t('supportTitle')}
        </Button>
      </Link>

           
          </div>
          <div>
            <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center">
              <p>{t('supportDescription')}</p>
            </h3>
          </div>
          <div className='flex justify-center items-center p-4 bg-amber-300 rounded-2xl'>
          {/*   <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center text-ethBlack-500">
              <p>{t('supportCallToAction')}</p>
            </h3> */}
             <QRCodeCard value="https://your-website.com"  text={''} size={60}/>
                        
            
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
