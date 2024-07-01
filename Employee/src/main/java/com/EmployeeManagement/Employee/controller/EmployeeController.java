package com.EmployeeManagement.Employee.controller;

import com.EmployeeManagement.Employee.model.Employee;
import com.EmployeeManagement.Employee.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        employeeService.createEmployee(employee);
        return employee;
    }

    @GetMapping("/employees")
    public List<Employee> EmployeesList(){
       return  employeeService.getEmployees();
    }
    @DeleteMapping("/employee/{id}")
    public String deleteEmployee(@PathVariable long id){
        return employeeService.deleteEmployee(id);
    }
    @GetMapping("/employee/{id}/")
    public Employee getEmployee(@PathVariable long id){
        return employeeService.getEmployeeById(id);
    }
}
