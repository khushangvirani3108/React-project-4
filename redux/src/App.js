import logo from './logo.svg';
import './App.css';
import Badge from '@mui/material/Badge';
import Header from './Component/Header';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import CardData from './Component/CardData';
import Cards from './Component/Cards';
import CardDetails from './Component/CardsDetail';


function App() {
  return (
    <>
       
        
        <Header/>
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cart/:id" element={<CardDetails />} />
        </Routes>
      
    </>
  );
}

export default App;
