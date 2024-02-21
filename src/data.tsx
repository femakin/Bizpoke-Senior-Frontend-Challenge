import { BiSolidDashboard } from "react-icons/bi";
import { TbChartHistogram } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { RiSpeedUpFill } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { PiChatsBold } from "react-icons/pi";


type Icon = {
    name: string;
    icon: JSX.Element;
    iconactive: JSX.Element;
    path: string;
};


const Upper_SideIcons: Icon[] = [
    {
        name: "Dashboard",
        icon: <BiSolidDashboard />,
        iconactive: <BiSolidDashboard />,
        path: "/dashboard"
    },
    {
        name: "Revenue Analytics",
        icon: <TbChartHistogram />,
        iconactive: <TbChartHistogram />,
        path: "/rentals"
    },
    {
        name: "Journey",
        icon: <IoBookOutline />,
        iconactive: <IoBookOutline />,
        path: "/properties"
    },
    {
        name: "Performance",
        icon: <RiSpeedUpFill />,
        iconactive: <RiSpeedUpFill />,
        path: "/transactions"
    },
    {
        name: "Data Platform",
        icon: <GoDatabase />,
        iconactive: <GoDatabase />,
        path: "/profile"
    },
];

const Lower_SideIcons: Icon[] = [
    {
        name: "Settings",
        icon: <IoSettingsOutline />,
        iconactive: <IoSettingsOutline />,
        path: "/dashboard"
    },
    {
        name: "Help",
        icon: <PiChatsBold />,
        iconactive: <PiChatsBold />,
        path: "/rentals"
    }
];


const SideIcons = { Upper_SideIcons, Lower_SideIcons };

export default SideIcons;
