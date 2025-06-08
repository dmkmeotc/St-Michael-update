import Sidebar from "@/components/Sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
   <main className="w-full min-h-screen m-0 bg-ethDeepBlue-900">
      {/* Desktop View */}
      <div className="hidden md:block">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full min-h-screen  rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={20}>
            <div className="h-screen overflow-hidden pr-6">
              <Sidebar />
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
        <ResizablePanelGroup
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
        </ResizablePanelGroup>
      </div>
    </main>
    
    </>
}