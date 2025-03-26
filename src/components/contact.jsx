import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const [result, setResult] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        setResult('Sending...');
        const formData = new FormData(e.target);

        formData.append("access_key","01eef1f1-4f74-426f-879c-7d1ace218acf")

        const response = await fetch('https://api.web3forms.com/submit',{
            method: 'POST',
            body: formData  
        });

        const data = await response.json();

        if (data.success){
            Swal.fire({
                title: 'Success!',
                text: 'Email sent successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              setResult('');
                e.target.reset();
        } else {
            console.log('Error:', data);
            setResult(data.message);
        }
    };
  return (
    <div id='contact' className='flex flex-col mx-auto w-full md:w-3/5 px-8'>
        <h2 className='title-section'>Contact Me</h2>
        <div className='flex flex-col w-full  bg-darkBlue p-8 rounded-lg mx-auto mt-8'>
            <form className='flex flex-col space-y-6 text-start w-full md:max-w-4xl mx-auto' onSubmit={onSubmit}>
                <div className='flex flex-col space-y-4'>
                    <label htmlFor='name' className='text-white'>Name</label>
                    <input type='text' id='name' name='name' className='p-2 rounded-lg' placeholder='Enter your name' required/>
                </div>
                <div className='flex flex-col space-y-4'>
                    <label htmlFor='email' className='text-white'>Email</label>
                    <input type='email' id='email' name='email' className='p-2 rounded-lg' placeholder='Enter your email' required/>
                </div>
                <div className='flex flex-col space-y-4'>
                    <label htmlFor='message' className='text-white'>Message</label>
                    <textarea id='message' name='message' className='p-2 rounded-lg h-32 md:h-48' placeholder='Enter your message' required/>
                </div>
                <button type='submit' className='bg-lightBlue text-white p-2 rounded-lg hover:bg-mainBlue'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;