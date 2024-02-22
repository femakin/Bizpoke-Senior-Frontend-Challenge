import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Direct', 'Paid', 'Social', 'Other',],
    datasets: [
        {
            label: '',
            data: [1067.8925, 700, 1067.8925, 1435.785],
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
        ctx.fillText('$4,271.57', centerX, centerY)


    }
}


export default function Donut() {
    return (
        <div>
            <Doughnut data={data}
                height="250px"
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
