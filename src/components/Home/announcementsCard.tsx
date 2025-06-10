import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { useTranslations } from 'next-intl'

export function AnnouncementsCard() {
  const t = useTranslations('AnnouncementsCard')

  return (
    
    <Card className="w-full flex bg-transparent overflow-hidden rounded-none border-0 shadow-none m-0 p-0">
      <CardHeader>
        <Avatar className='w-24 h-24 m-[2px] place-self-center'>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="scroll-m-20 text-center text-2xl md:text-[1rem] lg:text-xl xl:text-2xl font-extrabold tracking-tight text-balance">
          {t('title')}
        </h1>
        <h3 className="scroll-m-20 text-xl md:text-[0.75rem] lg:text-[1.25rem] xl:text-xl font-semibold tracking-tight text-center">
          <p>{t('description')}</p>
        </h3>
        <Button className="w-full bg-ethYellow-300 text-ethBlack-500 text-2xl font-bold hover:bg-ethYellow-400 m-2">
          {t('buttonText')}
        </Button>
      </CardHeader>
    </Card>
  )
}
