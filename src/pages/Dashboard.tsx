import React from 'react'
import Topbar from '../components/Topbar'
import MetricsRevenue from '../components/MetricsRevenue'
import TableandDonut from '../components/TableandDonut'
import Layout from '../components/Layout'

export default function Dashboard() {
    return (
        <Layout>
            <main>
                <Topbar />
                <MetricsRevenue />
                <TableandDonut />
            </main>
        </Layout>
    )
}
