import axios from "axios";
import React from "react";
import GetManagerById from "./ManagerDetails";

class GetEmployeeById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:49650/api/Employees/' + localStorage.getItem('Id')).then((res) => {
            this.setState({ employees: res.data });
            console.error(res.data)
        })
    }
    render() {
        return (
            <div >
                <h2 className="text-center">My Details</h2><br /><br />
                <div className="row">
                    <table className="table table-striped table-bodered">

                        <tr>
                            <th>Employee Id</th><td>{this.state.employees.employeeId}</td>
                        </tr>
                        <tr>
                            <th>Name</th><td>{this.state.employees.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th><td>{this.state.employees.emailId}</td>
                        </tr>
                        <tr>
                            <th>Mobile Number</th><td>{this.state.employees.mobileNo}</td>
                        </tr>
                        <tr>
                            <th>Date Joined</th><td>{this.state.employees.dateJoined}</td>
                        </tr>
                        <tr>
                            <th>Department</th> <td>{this.state.employees.designation}</td>
                        </tr>



                    </table>
                </div>
                {/* <h2 className="text-center">Manager Details</h2><br/><br/>
                <GetManagerById /> */}
            </div>
        )
    }

}

export default GetEmployeeById;