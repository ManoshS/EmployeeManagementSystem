
import './App.css';
import AddEmp from './component/AddEmp';
import GetAllEmployees from './component/GetAllEmployees';
import GetDeleteEmp from './component/GetDeleteEmp';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (<>
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<GetDeleteEmp />}></Route>
        <Route path='/add' element={<AddEmp />}></Route>

        <Route path='/getAll' element={<GetAllEmployees/>}></Route>
      </Routes>
    
      
      </BrowserRouter>
  </>
    );
}

export default App;
