import { useState } from "react";
import React from 'react'

const GetDeleteEmp = () => {

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
    const getEmployee = () => {
        console.log("Get Employee ")
    }
    const deleteEmployee = () => {
        console.log("Delete Employee ")
    }
    return (
        <div className='flex max-w-2xl mx-auto shadow border-b '>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wide'> Get Or Delete Employee </div>
                <div className='items-center justify-center h-full w-full '>
                    <label className='block'>Enter Employee ID :</label>
                    <input className='h-10 w-96 border mt-2 ' name='firstName' value={employee.firstName} onChange={(e) => handleChange(e)} type='text'></input>
                    <div className='border-b-2  list-none'> <ul>
                        <li>Id :{employee.id}</li>
                        <li>First Name :{employee.firstName}</li>
                        <li>Last Name :{employee.lastName}</li>
                        <li>Email Id :{employee.email}</li></ul></div>
                    <div className='space-y-10 space-x-10'>
                        <button className='rounded text-white font-semibold bg-green-400 py-2 px-6  hover:bg-green-800' onClick={getEmployee}> GET</button>
                        <button className='rounded text-white font-semibold bg-red-400 py-2 px-6  hover:bg-red-800' onClick={deleteEmployee}> DELETE </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetDeleteEmp