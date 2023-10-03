import logo from './logo.svg';
import './App.css';
import AxiosGet from './Components/AxiosGet';
import AxiosPost from './Components/AxiosPost';

function App() {
  return (
    <div className="App">
      <AxiosGet />
      <AxiosPost />
    </div>
  );
}

export default App;
