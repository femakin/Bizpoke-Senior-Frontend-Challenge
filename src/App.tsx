import Layout from './components/Layout';
import MetricsRevenue from './components/MetricsRevenue';
import Table from './components/Table';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="">
      <Layout>
        <main>
          <Topbar />
          <MetricsRevenue />
          <Table />
        </main>
      </Layout>
    </div>
  );
}

export default App;
