package com.EmployeeManagement.Employee.service;

import com.EmployeeManagement.Employee.model.Employee;
import java.util.*;
public interface EmployeeService {
    Employee createEmployee(Employee employee);
    List<Employee> getEmployees();

    String deleteEmployee(long id);

    Employee getEmployeeById(long id);
}
