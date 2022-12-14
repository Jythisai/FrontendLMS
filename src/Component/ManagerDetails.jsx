import axios from "axios";
import React from "react";

class GetManagerById extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            employees:{}
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:49650/api/Employees/Managerdetails?id='+localStorage.getItem('Id')).then((res)=>{
            this.setState({employees:res.data});
        })
    }
    render()
    {
        return(
            <div >
                <h2 className="text-center">My Manager Details</h2><br/><br/>
                <div className="row">
                    <table className="table table-striped table-bodered">
                       
                            <tr>
                                <th>Id</th><td>{this.state.employees.employeeId}</td>
                            </tr>
                            <tr>
                                <th>Name</th><td>{this.state.employees.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th><td>{this.state.employees.emailId}</td>
                            </tr>
                            <tr>
                                <th>Designation</th> <td>{this.state.employees.designation}</td>
                            </tr>
                            <tr>
                                 <th>Salary</th><td>{this.state.employees.salary}</td>
                            </tr>
                       
                        
                    </table>
                </div>
            </div>
        )
    }

}

export default GetManagerById;