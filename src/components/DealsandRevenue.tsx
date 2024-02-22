// import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";
// import { GoDotFill } from "react-icons/go";


// const DealsandRevenue = () => {
//     const chartData: ApexOptions = {
//         xaxis: {
//             categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
//         },
//         chart: {
//             height: 350,
//             type: 'line',
//             toolbar: {
//                 show: false,
//                 tools: {
//                     download: false
//                 }
//             }
//         },
//         stroke: {
//             curve: 'monotoneCubic',
//             colors: ['#8896bb', '#e5d4ef']


//         },
//         fill: {
//             type: 'light',
//             // opacity: [0.35, 1],
//             colors: ['#f9f4ff',]
//         },
//         yaxis: [
//             {
//                 title: {
//                     text: '',
//                 },

//             },
//             {
//                 opposite: true,
//                 title: {
//                     text: '',
//                 },
//             },
//         ],
//         markers: {
//             size: 0
//         },
//         tooltip: {
//             shared: true,
//             intersect: false,
//             y: {
//                 formatter: function (y) {
//                     if (typeof y !== "undefined") {
//                         return '$' + y.toFixed(0);
//                     }
//                     return y;
//                 }
//             }
//         },
//         legend: {
//             width: 400,
//             position: 'top',
//             show: false
//         },
//         series: [
//             {
//                 name: 'Deals',
//                 type: 'line',
//                 data: [2, 4, 6, 5, 5, 5.8]
//             },
//             {
//                 name: 'Revenue',
//                 type: 'area',
//                 data: [370, 400, 410, 395, 700, 800]
//             },
//         ],
//     };


//     const formatCurrency = (value: number) => `$${value.toFixed(2)}`;


//     return <ReactApexChart options={chartData} series={chartData.series} type="line" height={250} />;
// };

// const App = () => {
//     return (
//         <div className='w-6/12'>

//             <header className="flex justify-between">
//                 <h1 className="font-robo text-biz-blackcolor text-xl font-bold">Deals & Revenue</h1>
//                 <nav>
//                     <ul className="flex items-center">
//                         <li className="flex items-center" >
//                             <div><GoDotFill /></div>
//                             <p>Deals</p>
//                         </li>
//                         <li className="flex items-center" >
//                             <div ><GoDotFill /></div>
//                             <p>Revenue</p>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>

//             <DealsandRevenue />
//         </div>
//     );
// };

// export default App;

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { GoDotFill } from "react-icons/go";


const DealsandRevenue = () => {
    const chartData: ApexOptions = {
        xaxis: {
            categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
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
            colors: ['#8896bb', '#e5d4ef']
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
                // labels: {
                //     formatter: function (value) {
                //         return '$' + value;
                //     }
                // }
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
                // min: 2,
                // max: 5
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
                data: [2, 4, 6, 5, 5, 5.8]
            },
            {
                name: 'Revenue',
                type: 'area',
                data: [370, 400, 410, 395, 700, 800]
            },
        ],
    };

    return <ReactApexChart options={chartData} series={chartData.series} type="line" height={250} />;
};

const App = () => {
    return (
        <div className='lg:w-[35%]   w-6/12 p-4 flex flex-col flex-wrap '>
            <header className="flex justify-between">
                <h1 className="  font-robo text-biz-blackcolor text-lg font-bold">Deals & Revenue</h1>
                <nav>
                    <ul className="flex items-center gap-2">
                        <li className="flex items-center" >
                            <div><GoDotFill color='#8896bb' /></div>
                            <p className="text-sm text-[#474848]" >Deals</p>
                        </li>
                        <li className="flex items-center" >
                            <div ><GoDotFill color="#e5d4ef" /></div>
                            <p className="text-sm text-[#474848]">Revenue</p>
                        </li>
                    </ul>
                </nav>
            </header>
            <DealsandRevenue />
        </div>
    );
};

export default App;


