import { ReactNode } from "react";
import { useState } from "react";
import Logout from "./Logout";
import SidebarHeader from "./SidebarHeader";

interface SidebarItem {
    name: string;
    icon: string;
    iconactive: string;
}

interface LayoutProps {
    children: ReactNode;
    SideIcons?: SidebarItem[];
}

function Layout({ children }: LayoutProps) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <main className="flex ">
            <section
                className={`bg-biz-sidebg hidden w-[250px] md:block p-6 border-r-2 border-[#DEDEDE] relative`}
            >
                <header className="flex mb-12">
                    <h1 className="font-robo text-white text-xl font-bold">Company</h1>
                </header>

                <SidebarHeader />
                <footer className="absolute bottom-11 mb-4">
                    <Logout />
                </footer>
            </section>

            <section className={`w-full  ${showSidebar ? "ml-0" : "ml-1/12"} md:ml-0`}>
                <button
                    className=" md:hidden absolute z-[2] right-0 p-4 text-dark  "
                    onClick={toggleSidebar}
                >
                    ☰
                </button>

                {showSidebar && (
                    <div
                        className="  z-10 md:hidden fixed top-0 left-0 h-full w-[250px] bg-biz-sidebg p-4 border-r-2 border-[#DEDEDE]"
                        onClick={toggleSidebar}
                    >
                        <header className="flex mb-8">
                            <h1 className="font-robo text-white text-xl font-bold">Company</h1>
                        </header>

                        <SidebarHeader />

                        <footer className="absolute bottom-11 mb-4">
                            <Logout />
                        </footer>
                    </div>
                )}

                {/* <main className="p-6 h-[calc(100vh)]">{children}</main> */}
                <main className="p-6 h-screen overflow-y-auto" >{children}</main>
                {/* <main className="p-6 sm:h-[calc(100vh-80px)] md:h-[calc(100vh-60px)] h-[calc(100vh)]">{children}</main> */}
            </section>
        </main>
    );
}

export default Layout;
