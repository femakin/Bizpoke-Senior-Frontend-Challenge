// import React, { lazy, Suspense } from 'react';
import Cards from './components/Cards';
import Layout from './components/Layout';
import MetricsRevenue from './components/MetricsRevenue';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="">
      <Layout>

        <main>

          <Topbar />

          {/* <Cards /> */}
          <MetricsRevenue />

        </main>
      </Layout>
    </div>
  );
}

export default App;
