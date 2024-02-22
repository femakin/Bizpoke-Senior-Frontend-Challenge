import React from 'react'
import Cards from './Cards'
import DealsandRevenue from './DealsandRevenue'

function MetricsRevenue() {
  return (
    <div className='mt-5  border border-2-gray  flex flex-wrap lg:flex-row 2xl:flex-row md:flex-col flex-col '   >

      <Cards />


      <DealsandRevenue />


    </div>
  )
}

export default MetricsRevenue