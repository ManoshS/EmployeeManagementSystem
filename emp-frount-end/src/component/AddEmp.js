import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';

const AddEmp = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }
    const saveEmployee = (e) => {
        e.preventDefault();
        const emp = new EmployeeService()
        emp.saveEmployee(employee).then((response) => {
            console.log(response);
        }).catch((error) => console.log(error));
    }

    return (
        <div className='flex max-w-2xl mx-auto shadow border-b '>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wide'> Add New Employee</div>
                <div className='items-center justify-center h-full w-full '>
                    <label className='block'>First Name :</label>
                    <input className='h-10 w-96 border mt-2 ' name='firstName' value={employee.firstName} onChange={(e) => handleChange(e)} type='text'></input>
                    <label className='block'>Last Name :</label>
                    <input className='h-10 w-96 border mt-2 ' name='lastName' value={employee.lastName} onChange={(e) => handleChange(e)} type='text'></input>
                    <label className='block'>Email :</label>
                    <input className='h-10 w-96 border mt-2 block' name='email' value={employee.email} onChange={(e) => handleChange(e)} type='email'></input>
                    <div className='space-y-10 space-x-10'>
                        <button className='rounded text-white font-semibold bg-green-400 py-2 px-6  hover:bg-green-800' onClick={saveEmployee}> save</button>
                        <button className='rounded text-white font-semibold bg-red-400 py-2 px-6  hover:bg-red-800'> Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmp