
import './App.css';
import Navbar from './Component/Navbar/navbar';
import MyRoute from './Component/Route';
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Navbar/>
    <MyRoute/>
   
    </BrowserRouter>
     

    </div>
  );
}

export default App;
