import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTopRevenueData } from '../hooks/useCharts';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Donut() {

    const { data, isLoading, error } = useTopRevenueData();

    if (isLoading) return <div>Loading metrics...</div>;
    if (error) return <div>Error fetching metrics...</div>;


    const sliceThickness = {
        id: 'sliceThickness',
        beforeDraw(chart: any) {
            let sliceThicknessPixel = [100, 85, 90, 85];
            sliceThicknessPixel.forEach((thickness, index) => {
                chart.getDatasetMeta(0).data[index].outerRadius = thickness
            })
        },
    }

    const doughnutLabel = {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart: any, args: any, plugins: any) {
            const { ctx } = chart;

            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.font = ' 18px Roboto';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`$ ${data.total}`, centerX, centerY)


        }
    }


    const data_ = {
        labels: ['Direct', 'Paid', 'Social', 'Other',],
        datasets: [
            {
                label: '',
                data: [data.social, data.paid, data.direct, data.other],
                backgroundColor: [
                    '#dcffbd',
                    '#e4bbff',
                    '#6285f3',
                    '#c6b9ff',

                ],
                borderColor: [
                    '#dcffbd',
                    '#e4bbff',
                    '#6285f3',
                    '#c6b9ff',

                ],
                borderWidth: 0.5,
            },

        ],
    };


    return (
        <div>
            <Doughnut data={data_}
                height="260px"
                width="100px"
                options={{
                    maintainAspectRatio: false,

                    elements: {

                    },

                    spacing: 4,

                    plugins: {
                        legend: {
                            position: 'bottom',
                            display: true,
                            labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',
                            },

                        },


                    }

                }}

                plugins={
                    [sliceThickness, doughnutLabel]
                }
            />

        </div>

    );
}
