import { Button } from "@/components/ui/button"



import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
 SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft } from "lucide-react"
import Sidebar from '../../../components/Sidebar';



export function  MobileView() {
  
  return (
    <div className="md:hidden fixed top-0 left-0 ">
    <Sheet   >
      <SheetTrigger asChild>
        <Button variant="outline" className="m-4">
            <AlignLeft />
            </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-ethLightBlue-900">
        
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
