import axios from "axios";
const EMPLOYEE_API_BASE_URL="http://localhost:49650/api/Employees";
class EmployeeService{
    getEmployees()
    {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId)
    }
    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    updateEmployee(employee,employeeId)
    {
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }
    deleteEmploye(employeeId)
    {
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }

}
export default new EmployeeService();