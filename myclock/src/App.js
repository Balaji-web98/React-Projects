import './App.css';
import Clock from './Clock';
import Table from './Table';
import TableRenderCusCom from './StyleAgGrid';
import StyleAgGrid from './StyleAgGrid';
import TooltipAggrid from './TooltipAggrid';
import ExternalApiAggrid from './ExternalApiAggrid';
import ChkbxSeleAgg from './ChkbxSeleAgg';
import AxiosAggrid from './AxiosAggrid';
import AdminGrid from './AdminGrid';

function App() {
  return (
    <div className="App">
      {/* <Clock />
      <Table />
      <StyleAgGrid />
      <TooltipAggrid />
      <ExternalApiAggrid />
      <ChkbxSeleAgg /> */}
      {/* <AxiosAggrid apiUrl="https://jsonplaceholder.typicode.com/comments" /> */}
      <AdminGrid />
    </div>
  );
}

export default App;
