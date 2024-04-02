import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from "./pages/home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Adduser from "./users/Adduser";
import EditUser from './users/EditUser';
import Viewuser from './users/Viewuser';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      <Router>
  
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='adduser' element={<Adduser/>}/>
          <Route exact path='/edituser/:id' element={<EditUser/>}/>
          <Route exact path='/viewuser/:id' element={<Viewuser/>}/>
          



  



        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
