import React from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default class Applyleave extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: '',
            numberOfDays: '',

            leaveType: '',
            leaveReason: '',
            errors: {},
            currentDate: new Date()
        }
    }
    changeStartDateHandler = (e) => {
        this.setState({ startDate: e.target.value })
    }
    changeEndDateHandler = (e) => {
        this.setState({ endDate: e.target.value })
    }
    changeNumberOfDaysHandler = (e) => {
        this.setState({ numberOfDays: e.target.value })
    }
    changeLeaveTypeHandler = (e) => {
        this.setState({ leaveType: e.target.value })
    }
    changeLeaveReasonHandler = (e) => {
        this.setState({ leaveReason: e.target.value })
    }
    formValidation = () => {
        console.log('inside formvalidation');
        const { startDate, endDate, numberOfDays, leaveType, leaveReason } = this.state;
        let isValid = true;
        let checkDate = this.state.currentDate > startDate;
        const errors = {};
        if (startDate.length == 0) {

            console.log(this.state.currentDate)
            // const sdate =e.target.value;
            errors.StartDateLength = "Start Date is required**";
            isValid = false;
        }
        if (this.state.currentDate > new Date(this.state.startDate)) {
            console.log(this.state.currentDate)
            errors.StartDatePast = "Start date cannot be past";
            isValid = false;
        }
        if (endDate.length == 0) {
            console.log(this.state.currentDate > startDate);
            errors.endDateLength = "Please select end date**";
            isValid = false;
        }
        if (endDate < startDate) {
            errors.EndDatePast = "End date should be greater than or equal start date";
            isValid = false;
        }

        if (leaveReason.trim().length == 0) {
            errors.leaveReasonLength = "Leave reason is required**";
            isValid = false;
        }
        if (numberOfDays.trim().length == 0) {
            errors.numberOfDaysLength = "Leave reason is required**";
            isValid = false;
        }
        this.setState({ errors });
        // console.log(isValid)
        console.log(errors)
        return isValid;

    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid == true) {
            this.saveLeaves();
        }

    }

    saveLeaves = (e) => {
        //             e.preventDefault();
        console.log("SaveLeaves called");
        console.log(this.state.startDate, this.state.endDate, this.state.numberOfDays, this.state.leaveType, this.state.leaveReason);
        const overlap = axios.get('http://localhost:49650/api/LeaveApplications/overlappingDates?startDate=' + this.state.startDate + '&endDate=' + this.state.endDate)

            .then(overlap => {

                if (overlap.data === 'Success') {
                    axios.post('http://localhost:49650/api/LeaveApplications',
                        {
                            "LeaveDetailsId": 0,
                            "StartDate": this.state.startDate,
                            "EndDate": this.state.endDate,
                            "NumberOfDays": this.state.numberOfDays,
                            "LeaveType": this.state.leaveType,
                            "Status": "Pending",
                            "LeaveReason": this.state.leaveReason,
                            "EmployeeId": localStorage.getItem('Id'),
                            "AppliedOn": new Date().getDate() + "-" + new Date().getMonth().toString() + "-" + new Date().getFullYear().toString(),



                        }


                    );
                    window.location = '/Dashboard';


                }

                else {

                    alert("Cannot apply for existing leave date");

                }

            })
    }

    render() {
        return (
            <>
                <Card className='BgColor-Card'>
                    <CardContent>
                        <div className="container" >
                            <div className="card-body">
                                <h5 className='title'>Apply For Leave</h5>
                                <form className='form-group'>
                                    <div className='card-body '>

                                        <label className='avoidbreakline'>Start Date:</label>
                                        <input type='date' className='form-control' name='startDate'
                                            onChange={this.changeStartDateHandler}
                                            value={this.state.startDate} />


                                    </div>
                                    <div style={{ color: 'red' }}>{this.state.errors.StartDatePast}</div>
                                    <div style={{ color: 'red' }}>{this.state.errors.StartDateLength}</div>
                                    <div className='form-group'>
                                        <label>End Date:</label>
                                        <input type='date' className='form-control' name='endDate'
                                            onChange={this.changeEndDateHandler}
                                            value={this.state.endDate} />

                                    </div>
                                    <div style={{ color: 'red' }}>{this.state.errors.endDateLength}</div>
                                    <div style={{ color: 'red' }}>{this.state.errors.EndDatePast}</div>
                                    <div className='form-group'>
                                        <label>Number Of Days:</label>
                                        <input className='form-control' name='numberOfDays'
                                            onChange={this.changeNumberOfDaysHandler}
                                            value={this.state.numberOfDays} />

                                    </div>

                                    <div className='form-group'>
                                        <label>Leave Type:</label>
                                        <input type='text' placeholder='Earned Leave' className='form-control' name='leaveType'
                                            disabled
                                            onChange={this.changeLeaveTypeHandler}
                                            value={this.state.leaveType} />

                                    </div>
                                    <div style={{ color: "red" }}>{this.state.errors.leaveTypeLength}</div>
                                    <div className='form-group'>
                                        <label>Leave Reason:</label>
                                        <input type='textarea' className='form-control' name='leaveReason'
                                            onChange={this.changeLeaveReasonHandler}
                                            value={this.state.leaveReason} />
                                    </div>
                                    <div style={{ color: "red" }}>{this.state.errors.leaveReasonLength}</div>
                                    <button className='btn btn-success' onClick={this.onFormSubmit}>
                                        Apply
                                    </button>

                                </form>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </>
        )
    }
}


