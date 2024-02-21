import React from "react";
import SideIcons from "../data";
import { useNavigate, useLocation } from 'react-router-dom';

function SidebarHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = (selected: { name: string; path: string }) => {
        navigate(`${selected.path}`);
    };


    const isActive = (item: any,) => {
        return item.path === location.pathname;
    };

    return (
        <nav className="mt-4">
            <ul className="space-y-4" data-testid="upper-section" >
                {SideIcons.Upper_SideIcons.map((item: any, index: number) => (
                    <li
                        key={index}
                        className="cursor-pointer flex items-center gap-2 py-2"
                        onClick={() =>
                            handleMenuClick({ name: item.name, path: item.path })
                        }
                    >
                        {item.icon &&
                            React.cloneElement(item.icon, {
                                style: {
                                    color: isActive(item) ? "#ddffbd" : "#61616a",
                                },
                            })}{" "}

                        <span className={`font-robo text-[12px] ${isActive(item) ? ' text-biz-sidemenuhovercolor ' : 'text-biz-sidetextcolor'} `}>
                            {item.name}
                        </span>

                    </li>
                ))}
            </ul>

            <ul className="mt-12 space-y-4" data-testid="lower-section"  >
                {SideIcons.Lower_SideIcons.map((item: any, index: number) => (
                    <li
                        key={index}
                        className="cursor-pointer flex items-center gap-2 py-2"
                        onClick={() =>
                            handleMenuClick({ name: item.name, path: item.path })
                        }
                    >
                        {item.icon &&
                            React.cloneElement(item.icon, {
                                style: { color: "#61616a" },
                            })}{" "}
                        <span className="font-robo text-[12px] text-biz-sidetextcolor">
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SidebarHeader;
