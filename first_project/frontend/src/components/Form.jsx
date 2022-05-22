import React, { useState } from "react";
import LogoSubmit from '../assets/submit.png';
import axios from 'axios';

export default function Form() {
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [salaray, setSalary] = useState(0)

    const storage = async () => {
        const NewEmployee = { name, lastName, salaray }
        const response = await axios.post('')
    }

    return (
        <div className="leading-loose">
            <form className="max-w-4xl m-4 p-10 bg-white rounded shadow-xl place-content-center">
                <p className="text-gray-800 font-medium">Customer information</p>
                <div className="mt-2">
                    <label className="block text-sm text-gray-00" >Name</label>
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >Last name</label>
                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your last name" aria-label="Email" onChange={e => setlastName(e.target.value)} />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >Your salary</label>
                    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your salary" aria-label="Email" onChange={e => setSalary(e.target.value)} />
                </div>
                <div className="mt-4 flex place-content-center">
                    <button type="submit" className="">
                        <img src={LogoSubmit} alt="" />
                    </button>
                </div>
            </form >
        </div >
    )
}