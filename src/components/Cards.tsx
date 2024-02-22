import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import transformMetricData from '../utils/Transform';
import { useMetricsData } from '../hooks/useMetricsData';
import formatTitle from '../utils/FormatTilte'


interface Metric {
    title: string;
    count: number;
    changePercentage: number;
}


interface CardProps {
    title: string;
    count: number;
    changePercentage: number;
    style: object;
    className: string;
    index: number
}



function Cards(): JSX.Element {

    const { data, isLoading, error } = useMetricsData();

    if (isLoading) return <div>Loading metrics...</div>;
    if (error) return <div>Error fetching metrics...</div>;


    const transformedData: Metric[] = transformMetricData(data);

    return (

        <section className='  block 2xl:flex xl:flex md:block lg:flex flex-wrap  flex-1 '>
            {transformedData.map((metric, index) => (
                <Card className=' p-6 sm:w-auto border  w-auto xl:w-72 2xl:w-72  lg:w-72 h-42' index={index}
                    key={metric.title}
                    title={metric.title}
                    count={metric.count}
                    changePercentage={metric.changePercentage}
                    style={index === 0 ? {
                        background: 'conic-gradient(from 240deg at 50% 20%, #e8fedd, #e3fed0, #dffdc4, #defdb7)',
                        borderRadius: '8px',

                        // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

                    } : {
                        background: 'white',
                        borderRadius: '8px',
                        // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                />
            ))}
        </section>
    );
}



const Card: React.FC<CardProps> = ({ title, count, changePercentage, style, className, index }) => {
    return (
        <div className={className} style={style}>

            <header className='flex justify-between mb-6'>

                <h2 className=' text-biz-bashboardmetriccolor font-robo' >{formatTitle(title)}</h2>
                <button aria-label='More options' className='text-black'>
                    <AiOutlineMore size={30} color='black' />
                </button>

            </header>

            <div className='-1'>
                <p className='mb-2 font-bold font-robo text-biz-dashboardmetrictitle text-xl'>{count.toLocaleString()}</p>
                <span className={`text-sm ${index === 0 ? 'text-[#b0caa2]' : ' text-biz-sidemenuhovercolor'}   font-bold p-0.5  flex items-center  rounded-full ${index === 0 ? 'bg-white' : 'bg-[#effed6]'}   p w-12`} >
                    <FaPlus size={8} color='#cde5b4' />
                    {changePercentage > 0 ? '' : ''}{changePercentage}%

                </span>
            </div>
        </div>
    );
};

export default Cards;
