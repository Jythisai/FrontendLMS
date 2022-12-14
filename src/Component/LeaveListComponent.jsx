import React from "react";
import axios from "axios";

class LeaveListComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            leaves:[]
        };
    }
    componentDidMount()
    {
        axios.get('http://localhost:49650/api/LeaveApplications/Leavedetailsbyemployee?eid='+localStorage.getItem('Id')).then((res)=>{
            this.setState({leaves:res.data});
        })
    }
    
newApplication()
    {
        window.location='/applyleave';
    }



    render()
    {
        return(
            <div >
                <h2 className="text-center">Leaves List</h2><br/><br/>
                <div className="row">
                    <table className="table table-striped table-bodered">
                        <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Application Id</th>
                            <th>Number Of Days</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Applied On</th>
                            <th>Leave Type</th>
                            <th>Leave Reason</th>
                            <th>Status</th>

                        </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.leaves.map(
                                    l =>
                                    <tr key={l.leaveApplicationId}>
                                        <td>{l.employeeId}</td>
                                        <td>{l.leaveApplicationId}</td>
                                        <td>{l.numberOfDays}</td>
                                        <td>{l.startDate}</td>
                                        <td>{l.endDate}</td>
                                        <td>{l.appliedOn}</td>
                                        <td>{l.leaveType="Earned leave"}</td>
                                        <td>{l.leaveReason}</td>
                                        <td>{l.status}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                        
                    </table>
                </div>
                <button className='btn btn-primary' onClick={()=>this.newApplication()}>New Application</button>

            </div>
        )
    }
}

export default LeaveListComponent;