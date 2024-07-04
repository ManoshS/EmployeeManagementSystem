import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8000/api/v1/employees"


class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }
    getEmployee(id) {
        return axios.get(EMPLOYEE_API_BASE_URL+`/${id}/`)
    }
    getAllEmployees(employee) {
        return axios.get(EMPLOYEE_API_BASE_URL, employee)
    }
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL+`/${id}`)
    }

    updateEmployee(employee) {
        
     }

}
export default EmployeeService;