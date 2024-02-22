import Layout from './components/Layout';
import MetricsRevenue from './components/MetricsRevenue';
import TableandDonut from './components/TableandDonut';
import Topbar from './components/Topbar';

function App() {
  return (
    <div >
      <Layout>
        <main>
          <Topbar />
          <MetricsRevenue />
          <TableandDonut />
        </main>
      </Layout>
    </div>
  );
}

export default App;
