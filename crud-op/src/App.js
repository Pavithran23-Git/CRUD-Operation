import logo from './logo.svg';
import './App.css';
import ListCustomer from './ViewComponent/ListCustomer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './ViewComponent/AddCustomer';
import Updateuser from './ViewComponent/UpdateCustomer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ListCustomer />}></Route>
          <Route path='/list-user' element={<ListCustomer />}></Route>
          <Route path='/add-user' element={<AddUser />}></Route>
          <Route path='/update-user/:cus_id' element={<Updateuser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
