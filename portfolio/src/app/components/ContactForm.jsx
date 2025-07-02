"use client";
import { useState } from "react";
import Swal from 'sweetalert2';

export const ContactForm = ({ onClose }) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f5abc948-efb6-4f65-9e19-1b08256059d9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "You message was sent successfully!",
                icon: "success"
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (

        <div  className='fixed grid inset-0 container  justify-center items-center  backdrop-blur-sm'>
            <div className=' grid grid-rows-7 bg-white border border-black/30 rounded-2xl px-8 pb-8 lg:pb-16 bg-purple lg:h-auto lg:w-[800px] '>
                <div className='row-span-1 flex items-center justify-end '>
                    <button onClick={onClose} type="button" class=" bg-white text-black hover:text-white rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-400 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-default" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <div className='row-span-6'>
                    <form onSubmit={onSubmit} className='flex flex-col gap-4 '>
                        <h2 className='flex justify-center mb-5 text-3xl lg:text-4xl uppercase font-semibold tracking-widest bg-gradient-to-r from-red-500 
                    via-yellow-400 via-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-serif '>Contact Form</h2>
                        <div className='input-box '>
                            <label className=''>Full Name</label>
                            <input type="text" className=' border rounded p-2 flex-1' placeholder='Enter Your Name' name="Name" required></input>
                        </div>
                        <div className='input-box'>
                            <label>E-mail Address</label>
                            <input type="text" className='flex-1 border p-2 rounded' placeholder='Enter Your E-mail' name="E-mail" required></input>
                        </div>
                        <div className='input-box '>
                            <label>Message</label>
                            <textarea name="message" id="" className="border p-2" placeholder='Enter Your Message' required ></textarea>
                        </div>
                        <button type="submit" className='border mt-4 self-center px-8 py-2 rounded-lg bg-purple-400 text-white text-lg hover:bg-purple-600
                        active:scale-95 active:translate-y-0.5 active:bg-purple-800 
             transition duration-150 ease-in-out'>Send Message</button>
                    </form>
                </div>


            </div>
        </div>
    )
}