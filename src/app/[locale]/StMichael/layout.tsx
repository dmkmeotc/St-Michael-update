import Sidebar from "@/components/Sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { MobileView } from "./mobileView";
import { Suspense } from "react";
import Loading from "../loading";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
   <main className="w-full min-h-screen m-0 bg-slate-850">
      {/* Desktop View */}
      <div className="hidden md:block">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full min-h-screen  rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={20} minSize={20} maxSize={45}>
            <div className="h-screen overflow-hidden pr-6">
               <Suspense fallback={<Loading/>}>
              <Sidebar />
              </Suspense>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={80}  >
            <div className="flex flex-col w-full h-screen overflow-y-auto items-start justify-start border-2 ">
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        
       {/*  <ResizablePanelGroup
          direction="horizontal"
          className="min-h-screen w-full rounded-lg border"
        >
          <ResizablePanel defaultSize={0}>
            <div className="h-screen overflow-hidden pr-6">
              <Sidebar />
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={100}>
            <div className="flex flex-col w-full h-screen overflow-y-auto items-start justify-start ">
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup> */}
<MobileView/>

        <div className="flex flex-col w-full h-screen overflow-y-auto items-start justify-start border-2">
          {children}
        </div>
      </div>
    </main>
    
    </>
}