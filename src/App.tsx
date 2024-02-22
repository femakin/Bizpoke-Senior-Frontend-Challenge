// import React, { lazy, Suspense } from 'react';
import Cards from './components/Cards';
import Layout from './components/Layout';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="">
      <Layout>
        {/* <h1 className="mb-8 ">
          Dashboard
        </h1> */}

        <main>

          <Topbar />

          <Cards />

        </main>
      </Layout>
    </div>
  );
}

export default App;
