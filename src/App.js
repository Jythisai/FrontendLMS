import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import AddEmployees from './Component/AddNewEmployeeRegister';
import Applyleave from './Component/ApplyLeave';
import GetEmployeeById from './Component/GetEmployeeById';
import LeaveListComponent from './Component/LeaveListComponent';
import ListEmployee from './Component/ListEmployee';
import LoginEmployee from './Component/LoginComponent';
import Dashboard from './Component/Dashboard';
import GetManagerById from './Component/ManagerDetails';
import GetAllLeaveApp from './Component/GetAllLeaveApp';


function App() {
  return (
    <div className="App">
      <h1>Leave management system</h1>
      <br></br>
      
      <li>< Link to='/AddEmployees'> Not an User?Register</Link></li>
      
<br></br>

    <Routes>
      <Route path='/' element={<LoginEmployee/>} > </Route>
      
      
      <Route path='/AddEmployees' element={<AddEmployees/>}></Route>
      

      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/GetEmployeeById' element={<GetEmployeeById/>}></Route>
      <Route path='/GetManagerDetails' element={<GetManagerById/>}></Route>
      <Route path='/GetAllLeaveApp' element={<GetAllLeaveApp/>}></Route>
      <Route path='/Applyleave' element={<Applyleave/>}></Route>
      <Route path='/LeaveListComponent' element={<LeaveListComponent/>}></Route>
    </Routes>
    
    
    
      {/* <AddEmployees/> */}
      {/* <Applyleave/>
      <GetEmployeeById/>
      <LeaveListComponent/>
      <ListEmployee/>
      <LoginEmployee/> */}


       
      
      
    </div>
  );
}

export default App;
