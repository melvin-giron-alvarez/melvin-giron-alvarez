import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Modal from './Modal';


const FormBox = () => {

    const [submit, setSubmit] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.init('rwKUujv-NmveKn9Vz');
        emailjs.send(
            'service_4qcxb1j',
            'template_t1zd76r',
        formData
        ).then((response) => {
            setSubmit(true);
        }).catch((err) => {
            console.error('FAILED...', err);
        });
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

return (
    <>
    <div className='flex justify-center mt-36 md:mt-0 md:justify-end mx-auto md:mr-[3em]'>
        <form onSubmit={handleSubmit} className='roboto p-5 sm:w-[75%] md:w-[53%] text-dimteal mix-blend-difference space-y-6 md:space-y-10'>
            <div className='flex justify-between border-b-[1px] border-grey'>
                <label htmlFor="name" className='w-auto text-[1em] sm:text-[1.2em] pl-2 font-medium'>NAME</label>
                <input value={formData.name}
                        name="name"
                        id="name"
                        type='text'
                        onChange={handleChange} required
                        className='w-[70%] pl-2 outline-none text-[1em] sm:text-[1.2em] border-b-[1px] border-grey cursor-pointer bg-[transparent]'/>
            </div>
            <div className='flex justify-between border-b-[1px] border-grey'>
                <label htmlFor="email" className='w-auto text-[1em] sm:text-[1.2em] pl-2 font-medium'>EMAIL</label>
                <input value={formData.email}
                        name="email"
                        id="email"
                        type='email'
                        onChange={handleChange} required
                        className='w-[70%] pl-2 outline-none text-[1em] sm:text-[1.2em] border-b-[1px] border-grey cursor-pointer bg-[transparent]'/>
            </div>
            <div className='flex justify-between border-b-[1px] border-grey'>
                <label htmlFor="message" className='w-auto text-[1em] sm:text-[1.2em] pl-2 font-medium'>MESSAGE</label>
                <input value={formData.message}
                        name="message"
                        id="message"
                        type='text'
                        onChange={handleChange} required
                        className='w-[70%] pl-2 outline-none text-[1em] sm:text-[1.2em] border-b-[1px] border-grey cursor-pointer bg-[transparent]'/>
            </div>
            <div className='flex justify-center'>
                <button className='w-auto text-[1em] sm:text-[1.2em] border-[#A9A9A9] hover:bg-dimteal hover:text-dimblack transition-all duration-300 hover:text-black px-8 border-2 hover:scale-105' type='submit' >SUBMIT</button>
            </div>
        </form>
    </div>
    <Modal ifsubmit={submit} setSubmit={setSubmit} />
    </>
)
}

export default FormBox