import { FaSearch } from "react-icons/fa";
import Donut from "./Donut";
import { IoIosArrowForward } from "react-icons/io";

function Table() {

    const TableData = [
        {
            campaign: "ROQ",
            type: "SEARCH/BRAND",
            visitors: 1181,
            contacts: 217,
            companies: 150,
            leads: 26.9,
            value: 78.29,
            logo: "https://icons.iconarchive.com/icons/iynque/ios7-style/48/Stocks-icon.png"
        },
        {
            campaign: "Website Ads",
            type: "RETARGETING",
            visitors: 998,
            contacts: 182,
            companies: 121,
            leads: 20.1,
            value: 63.21,
            logo: "https://icons.iconarchive.com/icons/iynque/ios7-style/48/Stocks-icon.png"
        },
        {
            campaign: "DEMO",
            type: "REQUEST",
            visitors: 891,
            contacts: 145,
            companies: 81,
            leads: 14.2,
            value: 48.39,
            logo: "https://icons.iconarchive.com/icons/iynque/ios7-style/48/Stocks-icon.png"
        },
        {
            campaign: "GLOBAL",
            type: "TOOL",
            visitors: 541,
            contacts: 98,
            companies: 67,
            leads: 10.7,
            value: 35.71,
            logo: "https://icons.iconarchive.com/icons/iynque/ios7-style/48/Stocks-icon.png"
        }
    ]

    return (
        <div className="flex items-center  flex-wrap w-full" >

            <div className="pr-9   xl:w-3/5 md:w-3/5 2xl:w-3/5 w-full  lg:w-3/5" >

                <div className=" flex justify-between  " >
                    <div>
                        <h1>Campaign Performance</h1>
                    </div>

                    <div className="flex items-center" >

                        <button> <FaSearch /></button>
                        <button><span>Channels:</span> All</button>
                    </div>
                </div>
                <div className=" mt-8 overflow-auto rounded-lg shadow bg-white">
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
                            {
                                TableData.map((user, index) => {
                                    return (
                                        <tr key={index} className="border-b odd:bg-white even:bg-white">
                                            <td className="py-4 px-6">{index + 1}</td>

                                            <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                <img className="w-10 h-10 rounded-full" src={user.logo}
                                                    alt={user.campaign} />
                                                <div className="ps-3">
                                                    <div className="text-sm text-biz-dashboardmetriccolor font-semibold">{user.campaign}</div>
                                                    <div className="font-normal font-robo text-[8px] text-gray-500">{user.type}</div>
                                                </div>
                                            </td>

                                            <td className=" text-sm text-biz-dashboardmetriccolor  py-4 px-6">{user.visitors}</td>
                                            <td className="text-sm text-biz-dashboardmetriccolor  py-4 px-6">{user.contacts}</td>
                                            <td className="text-sm text-biz-dashboardmetriccolor  py-4 px-6">{user.companies}</td>
                                            <td className="text-sm   font-robo font-bold  py-4 px-6">{user.leads}</td>
                                            <td className="text-base text-[#bedaa8]  font-robo font-bold  py-4 px-6">{user.value}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            <div className="p-6 border  xl:w-2/5 md:w-2/5 2xl:w-2/5 w-full  lg:w-2/5" >

                <div>

                    <div className=" flex justify-between  " >
                        <div>
                            <h1 className="font-robo text-biz-blackcolor text-lg  font-semibold"  >Top Revenue Channels</h1>
                        </div>

                        <div className="flex items-center" >

                            <button> <IoIosArrowForward /></button>

                        </div>
                    </div>

                    <Donut />

                </div>
            </div>
        </div>





    );
}

export default Table;
