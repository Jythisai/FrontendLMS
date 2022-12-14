import React from "react";
import axios from "axios";

class GetAllLeaveApp extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            leaves: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:49650/api/LeaveApplications/').then((res) => {
            this.setState({ leaves: res.data });
        })
    }
    



    onClickHandle = (ea, type) => {
        let EA = {
            LeaveApplicationId: ea.leaveApplicationId,
            EmployeeId: ea.employeeId,
            LeaveApplicationId: ea.leaveApplicationId,
            NumberOfDays: ea.numberOfDays,
            StartDate: ea.startDate,
            EndDate: ea.endDate,
            LeaveType: ea.leaveType,
            LeaveReason: ea.leaveReason,
            Status: ea.status,
        }
        if (type === 'A') {

            EA.Status = "accepted";
        } 
        else {
            EA.Status = "rejected";

        }
        console.log(EA);
        axios.put(`http://localhost:49650/api/LeaveApplications/${EA.LeaveApplicationId}`, EA)
            .then(res => {
                console.log(res);
                window.location.reload();
            }).catch(console.log)
    }

    render() {
        return (
            <div >
                <h2 className="text-center">Leaves List</h2><br /><br />
                <div className="row">
                    <table className="table table-striped table-bodered">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Application Id</th>
                                <th>Number Of Days</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Leave Type</th>
                                <th>Leave Reason</th>
                                <th>Status</th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.leaves.map(
                                   ( l) => {
                                    console.log(l)
                                        if( ! l.status) {
                                            l.status = "Pending"
                                        }

                                        return (
                                            <tr key={l.leaveApplicationId}>
                                                <td>{l.employeeId}</td>
                                                <td>{l.leaveApplicationId}</td>
                                                <td>{l.numberOfDays}</td>
                                                <td>{l.startDate}</td>
                                                <td>{l.endDate}</td>
                                                <td>{l.leaveType}</td>
                                                <td>{l.leaveReason}</td>
                                                <td>{l.status}</td>
                                                <td>
                                                <td className="btn btn-success" onClick={e => this.onClickHandle(l, 'A')}>Accept</td>
                                                <td className="btn btn-danger" onClick={e => this.onClickHandle(l, 'D')}>Reject</td></td>
                                            </tr>

                                        )
                                    }
                                )
                            }
                        </tbody>

                    </table>
                </div>
                

            </div>
        )
    }
}

export default GetAllLeaveApp;