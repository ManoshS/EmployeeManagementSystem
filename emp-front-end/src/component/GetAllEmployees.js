import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const GetAllEmployees = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const emp = new EmployeeService();

    const getData = () => {
        emp.getAllEmployees().then((response) => {
            setEmployeeList(response.data)
        }).catch((error) => console.log(error));
    }

    const deleteEmployee = (id) => {
        console.log("Delete Employee ")

        const emp = new EmployeeService();
        emp.deleteEmployee(id).then((response) => {
            console.log(response);
        }).catch((error) => console.log(error));
    }
    return (
        <>
            {getData()}
            <div className=' text-center  text-xl' >All Employees</div>
            <div className='py-8 px-8 bg-white'>
                <button className='rounded border-b bg-gray-600 text-white'> <Link to="../add">Add Employee</Link></button>
            </div>
            <div className=' border-y-2 border-x-slate-600 '>
                <table border={2} className='min-w-full'>
                    <tr>
                        <th className='bg-slate-200  uppercase tracking-wide text-left'>ID</th>
                        <th className='bg-slate-200  uppercase tracking-wide text-left '>First Name</th>
                        <th className='bg-slate-200  uppercase tracking-wide text-left'>Last Name</th>
                        <th className='bg-slate-200  uppercase tracking-wide text-left '>email ID</th>
                        <th className='bg-slate-200  uppercase tracking-wide text-left'>Actions</th>
                    </tr>
                    <tbody>
                        {employeeList.map((employee) => <tr key={employee.id}><td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td><div className='space-y-10 space-x-10'>

                                <button className='rounded text-white font-semibold bg-green-400 py-2 px-6  hover:bg-green-800' > POST</button>
                                <button className='rounded text-white font-semibold bg-red-400 py-2 px-6  hover:bg-red-800' onClick={() => deleteEmployee(employee.id)}> DELETE </button>
                            </div></td></tr>)}
                    </tbody>

                </table>

            </div>

        </>
    )
}

export default GetAllEmployees