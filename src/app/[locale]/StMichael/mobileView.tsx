import { Button } from "@/components/ui/button"


import { useTranslations } from 'next-intl'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
 SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft } from "lucide-react"
import Sidebar from '../../../components/Sidebar';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function  MobileView() {
      const t = useTranslations('Header')
  return (
    <div className="md:hidden fixed top-0 left-0 ">
    <Sheet   >
      <SheetTrigger asChild>
        <Button variant="outline" className="m-4">
            <AlignLeft />
            </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-ethLightBlue-900">
          <div className="w-full m-4 p-2">
               <h1 className="mobile-church-name inline-flex">

                 <Avatar className='w-12 h-12 m-[2px] place-self-center'>
                          <AvatarImage src="/croos2.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                
                {t('churchName')}
                
                </h1>


          </div>
        
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
         <Sidebar/>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  )
}
