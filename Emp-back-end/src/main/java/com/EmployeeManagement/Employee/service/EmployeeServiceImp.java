package com.EmployeeManagement.Employee.service;

import com.EmployeeManagement.Employee.entity.EmployeeEntity;
import com.EmployeeManagement.Employee.model.Employee;
import com.EmployeeManagement.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImp implements  EmployeeService{
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImp(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity=new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);

        return employee;
    }
    @Override
    public List<Employee> getEmployees(){
        List<EmployeeEntity> list=employeeRepository.findAll();
        List<Employee> emps=new ArrayList<>();
        int i=0;
        for(EmployeeEntity e:list){
            emps.add(new Employee());
            BeanUtils.copyProperties(e,emps.get(i));
            i++;
        }
          return emps;
    }

    @Override
    public String deleteEmployee(long id) {
        if(employeeRepository.findById(id).isPresent()){
            employeeRepository.deleteById(id);
            return "Deleted Successfully";
        }
        else return "No Employee with this ID";
    }

    @Override
    public Employee getEmployeeById(long id) {
        if(employeeRepository.findById(id).isPresent()) {
            Employee emp = new Employee();
            Optional<EmployeeEntity> e=employeeRepository.findById(id);
            BeanUtils.copyProperties(e.get(),emp);
            return emp;
        }
        return new Employee();
    }
}
