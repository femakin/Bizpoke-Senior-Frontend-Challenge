// import React, { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import MetricsRevenue from './components/MetricsRevenue';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="">
      <Layout>
        <main>
          <Topbar />
          <MetricsRevenue />
        </main>
      </Layout>
    </div>
  );
}

export default App;
