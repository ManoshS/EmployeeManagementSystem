import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8000/api/v1/employees"


class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }
    getEmployee(employee,id) {
        return axios.get(EMPLOYEE_API_BASE_URL+`/${id}/`, employee)
    }
    deleteEmployee(employee,id) {
        return axios.delete(EMPLOYEE_API_BASE_URL+`/${id}`, employee)
    }

}
export default EmployeeService;