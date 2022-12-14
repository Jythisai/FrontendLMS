import React from "react";
import axios from "axios";
export default class AddEmployees extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'',
            mobileNo:'',
            emailId:'',
            dateJoined:'',           
            designation:'',
            managerName:'',
            salary:'',
            userName:'',
            password:''
        }
    }
    changeNameHandler=(event)=>
    {
        this.setState({name:event.target.value})
    }
    changeMobileNoHandler=(event)=>
    {
        this.setState({mobileNo:event.target.value})
    }
    changeEmailIdHandler=(event)=>
    {
        this.setState({emailId:event.target.value})
    }
    changeDateJoinedHandler=(event)=>
    {
        this.setState({dateJoined:event.target.value})
    }
    changeDesignationHandler=(event)=>
    {
        this.setState({designation:event.target.value})
    }
    changeManagerNameHandler=(event)=>
    {
        this.setState({managerName:event.target.value})
    }
    changeSalaryHandler=(event)=>{
        this.setState({salary:event.target.value});
    }
    changeUserNameHandler=(event)=>
    {
        this.setState({userName:event.target.value})
    }
    changePasswordHandler=(event)=>
    {
        this.setState({password:event.target.value})
    }

    saveEmployee=(e)=>
    {
        e.preventDefault();
        //console.log('Save Employee method called')
        console.log(this.state.name,this.state.mobileNo,this.state.emailId,this.state.dateJoined,this.state.designation,this.state.managerName,this.state.salary,this.state.userName,this.state.password)
        const result=axios.post("http://localhost:49650/api/Employees",
        {
            "EmployeeId":0,
            "Name":this.state.name,
            "MobileNo":this.state.mobileNo,
            "EmailId":this.state.emailId,
            "DateJoined":this.state.dateJoined,
            "Designation":this.state.designation,
            "ManagerName":this.state.managerName,
            "Salary":this.state.salary,
            "UserName":this.state.userName,
            "Password":this.state.password
        });
        console.log(result)
        window.location='/ListEmployee';
    }
    render(){
        return(
            <div className="container" style={{ 'backgroundColor': '#93e4b1' }}>
                <div className="card-body">
                    <form onSubmit={this.saveEmployee}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" name="name"
                            required
                            onChange={this.changeNameHandler}
                            value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Mobile No</label>
                            <input className="form-control" name="mobileNo" required
                            onChange={this.changeMobileNoHandler}
                            value={this.state.mobileNo}/>
                        </div>
                        <div className="form-group">
                            <label>Email Id</label>
                            <input className="form-control" name="emailId" required
                            onChange={this.changeEmailIdHandler}
                            value={this.state.emailId}/>
                        </div>
                        <div className="form-group">
                            <label>Date of Joined</label>
                            <input type="date" className="form-control" name="dateJoined"
                            onChange={this.changeDateJoinedHandler}
                            value={this.state.dateJoined}/>
                        </div>
                        <div className="form-group">
                            <label>Designation</label>
                            <input className="form-control" name="designation" required
                            onChange={this.changeDesignationHandler}
                            value={this.state.designation}/>
                        </div>
                        <div className="form-group">
                            <label>Manager Name</label>
                            <input className="form-control" name="managerName" required
                            onChange={this.changeManagerNameHandler}
                            value={this.state.managerName}/>
                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input className="form-control" name="salary" required
                            onChange={this.changeSalaryHandler}
                            value={this.state.salary}/>
                        </div>
                        <div className="form-group">
                            <label>UserName</label>
                            <input className="form-control" name="userName" required
                            onChange={this.changeUserNameHandler}
                            value={this.state.userName}/>
                        </div>
                        <div className="form-group">
                            <label>Enter Password</label>
                            <input className="form-control" name="password" required
                            onChange={this.changePasswordHandler}
                            value={this.state.password}/>
                        </div>
                        <input type="submit" className="btn btn-success" value="Save" />
                        {/* <button className="btn btn-success" onClick={this.saveEmployee}>Save</button> */}
                    
                    </form>
                </div>
            </div>
        )
    }
}