import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { GoDotFill } from "react-icons/go";
import { useDealsandRevenueData } from "../hooks/useDealsandRevenueData";
import Loading from "./Loading";



const DealsandRevenue = () => {

    const { data, isLoading, error } = useDealsandRevenueData();

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    const chartData: ApexOptions = {
        xaxis: {
            categories: data.map((item: any) => item.month),
        },
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false,
                tools: {
                    download: false
                }
            }
        },
        stroke: {
            curve: 'monotoneCubic',
            colors: ['#8896bb', '#e5d4ef'],
            width: 1.5
        },
        fill: {
            type: 'light',
            colors: ['#f9f4ff',]
        },
        yaxis: [
            {
                title: {
                    text: '',
                },

            },
            {
                opposite: true,
                title: {
                    text: '',
                },
                labels: {
                    formatter: function (value) {
                        return '$' + value;
                    }
                },

            },
        ],
        markers: {
            size: 0
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return '$' + y.toFixed(0);
                    }
                    return y;
                }
            },
            marker: {
                fillColors: ['#8896bb', '#e5d4ef']
            }

        },
        legend: {
            width: 400,
            position: 'top',
            show: false
        },
        series: [
            {
                name: 'Deals',
                type: 'line',
                data: data.map((item: any) => item.deals),
            },
            {
                name: 'Revenue',
                type: 'area',
                data: data.map((item: any) => item.revenue),
            },
        ],
    };

    return <ReactApexChart options={chartData} series={chartData.series} type="line" height={220} />;
};

const App = () => {
    return (
        <div className=''>
            <section className='w-full lg:w-full flex flex-col flex-wrap '>
                <header className=" pr-4 pl-4 pt-4 flex justify-between">
                    <h1 className="font-robo text-biz-blackcolor text-lg font-bold">Deals & Revenue</h1>
                    <nav>
                        <ul className="flex items-center gap-2">
                            <li className="flex items-center">
                                <div><GoDotFill color='#8896bb' /></div>
                                <p className="text-sm text-[#474848]">Deals</p>
                            </li>
                            <li className="flex items-center">
                                <div><GoDotFill color="#e5d4ef" /></div>
                                <p className="text-sm text-[#474848]">Revenue</p>
                            </li>
                        </ul>
                    </nav>
                </header>
                <DealsandRevenue />
            </section>

        </div>

    );
};

export default App;


