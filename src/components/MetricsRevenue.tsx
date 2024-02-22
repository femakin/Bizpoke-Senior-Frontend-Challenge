import Cards from './Cards'
import DealsandRevenue from './DealsandRevenue'

function MetricsRevenue() {
  return (
    <section className='mt-5 border border-2-gray flex flex-wrap lg:flex-row 2xl:flex-row md:flex-col flex-col'>
      <div className='lg:w-1/2 2xl:w-1/2 md:w-full'>
        <Cards />
      </div>
      <div className='lg:w-1/2 2xl:w-1/2 md:w-full'>
        <DealsandRevenue />
      </div>
    </section>

  )
}

export default MetricsRevenue