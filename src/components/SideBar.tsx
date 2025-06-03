import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from '@/components/ui/sidebar';
import NavMenu from './NavMenu';

export function AppSidebar() {
    return (
        <Sidebar className="w-[220px] bg-white">
            <SidebarHeader className="flex-row gap-3 ml-7 mt-14">
                <div className="w-8 h-8 rounded-full bg-logo text-white font-bold flex items-center justify-center">
                    C
                </div>
                <h1 className="text-[20px] font-bold">TESTAPP</h1>
            </SidebarHeader>

            <SidebarContent className="px-6 flex-1 mt-10">
                <SidebarGroup className="">
                    <NavMenu />
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="flex-row items-center gap-3 ml-[28px] mb-[38px] p-0">
                <div className="w-8 h-8 rounded-full bg-bgGray" />
                <div>
                    <div className="text-black font-semibold">User R.</div>
                    <div className="text-[10px]">test-mail@email.com</div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
