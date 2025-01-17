import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import transformMetricData from '../utils/Transform';
import { useMetricsData } from '../hooks/useMetricsData';
import formatTitle from '../utils/FormatTilte'
import formatNumber from '../utils/Formatnumber'
import Loading from './Loading';


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

    if (isLoading) return <Loading />;
    if (error) return <div>Error fetching metrics...</div>;


    const transformedData: Metric[] = transformMetricData(data);

    return (
        <section className='flex flex-wrap'>
            {transformedData.map((metric, index) => (


                <Card
                    className='  p-4 border w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'
                    index={index}
                    key={metric.title}
                    title={metric.title}
                    count={formatNumber(metric.count)}
                    changePercentage={metric.changePercentage}
                    style={{
                        background: index === 0 ? 'conic-gradient(from 240deg at 50% 20%, #e8fedd, #e3fed0, #dffdc4, #defdb7)' : 'white',
                        borderRadius: '8px',
                    }}
                />
            ))}
        </section>

    );
}



const Card: React.FC<CardProps> = ({ title, count, changePercentage, style, className, index }) => {
    return (
        <div className={className} style={style}>

            <header className='flex justify-between mb-4'>

                <h2 className=' text-biz-bashboardmetriccolor font-robo' >{formatTitle(title)}</h2>
                <button aria-label='More options' className='text-black'>
                    <AiOutlineMore size={30} color='black' />
                </button>

            </header>

            <div className=''>
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
