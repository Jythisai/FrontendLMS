import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import {Routes,Route,Link} from 'react-router-dom';


class Dashboard extends React.Component
{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div >
                <h1>DashBoard</h1>
                <ul>
                    {(localStorage.getItem('designation')==='Manager') ? 
                    (
                    <>
                    {/* <li>< Link to='/GetManagerDetails'> Manager Details</Link></li> */}
                    <li>< Link to='/GetAllLeaveApp'> Reporting Employee</Link></li>
                    </>
                    
                    )
                    :(<>
                    <li>< Link to='/GetEmployeeById'> My Details</Link></li>
                    <li>< Link to='/GetManagerDetails'> Manager Details</Link></li>
                    <li>< Link to='/Applyleave'> Apply Leave</Link></li>
                    <li>< Link to='/LeaveListComponent'> My LeaveList</Link></li>
                    </>)
                
                    }
                    
                    
                    
                </ul>


            </div>
        )
    }

}
export default Dashboard;