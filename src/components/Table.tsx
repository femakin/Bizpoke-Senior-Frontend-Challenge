import { FaSearch } from "react-icons/fa";
import Donut from "./Donut";
import { IoIosArrowForward } from "react-icons/io";
import { useCampaignPerformanceData } from "../hooks/useCampaign";
import Loading from "./Loading";

function Table() {

    type CampaignPerformanceData = {
        campaign: string;
        type: string;
        visitors: number;
        contacts: number;
        companies: number;
        leads: number;
        value: number;
        logo: string;
    };

    const { data, isLoading, error } = useCampaignPerformanceData();

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching metrics...</div>;


    return (
        <div className="flex mt-4  flex-wrap w-full">
            <div className="pr-4    xl:w-3/5 md:w-3/5 2xl:w-3/5 w-full  lg:w-3/5">
                <header className=" border py-2 px-6   flex justify-between items-center">
                    <h1 className="font-robo text-biz-blackcolor text-lg font-semibold">Campaign Performance</h1>
                    <nav>
                        <ul className="flex gap-2 items-center">
                            <li className="p-1 rounded bg-[#f7f7f7]"  >
                                <button aria-label="Search"><FaSearch size={12} /></button>
                            </li>
                            <li className="bg-[#f7f7f7] p-1" >
                                <button className="text-[14px]" >
                                    <span className="text-[12px] text-biz-dashboardmetriccolor " >Channels:</span> All
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>


                <div className="  overflow-auto rounded-lg shadow bg-white">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead>
                            <tr className="bg-white  text-[10px] border text-[#abacac]">
                                <th className="py-2 px-6">NO.</th>
                                <th className="py-2 px-6">CAMPAIGN</th>
                                <th className="py-2 px-6">VISITORS</th>
                                <th className="py-2 px-6">CONTACTS</th>
                                <th className="py-2 px-6">COMPANIES</th>
                                <th className="py-2 px-6">LEADS</th>
                                <th className="py-2 px-6">VALUES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user: CampaignPerformanceData, index: number) => {
                                return (
                                    <tr
                                        key={index}
                                        className="border-b odd:bg-white even:bg-white"
                                    >
                                        <td className=" px-4">{index + 1}</td>

                                        <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={user.logo}
                                                alt={user.campaign}
                                            />
                                            <div className="ps-3">
                                                <div className="text-sm text-biz-dashboardmetriccolor font-semibold">
                                                    {user.campaign}
                                                </div>
                                                <div className="font-normal font-robo text-[8px] text-gray-500">
                                                    {user.type}
                                                </div>
                                            </div>
                                        </td>

                                        <td className=" text-sm text-biz-dashboardmetriccolor  py-4 px-6">
                                            {user.visitors}
                                        </td>
                                        <td className="text-sm text-biz-dashboardmetriccolor  py-4 px-6">
                                            {user.contacts}
                                        </td>
                                        <td className="text-sm text-biz-dashboardmetriccolor  py-4 px-6">
                                            {user.companies}
                                        </td>
                                        <td className="text-sm   font-robo font-bold  py-4 px-6">
                                            {user.leads}
                                        </td>
                                        <td className="text-base text-[#bedaa8]  font-robo font-bold  py-4 px-6">
                                            {user.value}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


            <aside className="   p-5 border xl:w-2/5 md:w-2/5 2xl:w-2/5 w-full lg:w-2/5">

                <section>
                    <header className="flex justify-between items-center">
                        <h2 className="font-robo text-biz-blackcolor text-lg font-semibold">
                            Top Revenue Channels
                        </h2>
                        <button className="p-1 border" aria-label="Next"><IoIosArrowForward /></button>
                    </header>
                    <Donut />
                </section>
            </aside>

        </div>
    );
}

export default Table;
