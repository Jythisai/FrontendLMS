import React from "react";
import axios from "axios";


class LoginEmployee extends React.Component {
    constructor() {
        super();
        this.state = {
            EmployeeId: '',
            Password: ''
        }
    }
    changeEmployeeIdHandler = (event) => {
        this.setState({ EmployeeId: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ Password: event.target.value })
    }

    clearFields = () => {
        this.setState({
            EmployeeId: "",
            Password: ""
        }
        )
    }

    LoginPage = (e) => {
        e.preventDefault();
        const result = axios.post('http://localhost:49650/api/LoginPages',
            {
                "UserId": 0,
                "EmployeeId": this.state.EmployeeId,
                "Password": this.state.Password
            }
        )
            .then((result) => {
                if (result.data === 'Invalid credentials')
                    alert('wrong crendentials');
                else {
                    if(result.status===200){
                        localStorage.setItem("Id",this.state.EmployeeId);   
                        axios.get('http://localhost:49650/api/Employees/'+this.state.EmployeeId).then((res) => {
                            this.setState({ employees: res.data });    
                            alert('Login successfull');
                            localStorage.setItem('designation', res.data.designation);
                            window.location = '/Dashboard';
                            
                        })
                        
                    }
                }
            })
    }

    render() {
        return (
            
            
            <div className="container" >
                <div className="card-body">
                    <h1>Login</h1>
                    
                    <form  classname="form" onSubmit={this.LoginPage}>
                    
                        <div className="form-group">
                            <label>Employee Id:</label>
                            <input className="form-control" name="employeeid"  
                            required                         
                                onChange={this.changeEmployeeIdHandler}
                                value={this.state.EmployeeId} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" name="password" type="Password"
                            required
                                onChange={this.changePasswordHandler}
                                value={this.state.Password} />
                        </div>
                        
                        <input type="submit" className="btn btn-success" value="Login" />
                        
                        {/* <button onClick={this.LoginPage} className="btn btn-primary">Login</button> */}
                        <button onClick={this.clearFields} className="btn btn-primary">Cancel</button>
                    </form>
                </div>
                </div>
            
            
            
        )
    }
}
export default LoginEmployee;