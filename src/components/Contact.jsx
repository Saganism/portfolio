import React from "react";
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = React.useState({name:'',email:'',message:''});
  const [status, setStatus] = React.useState('idle');
  const formRef = React.useRef();

  let messageStatus;
  if(status === 'success'){
    messageStatus = <p>Thank you for contacting me! I will get back to you ASAP</p>
  }
  else if(status ==='error'){
    messageStatus = <p>Oops! An error occured. Please try again!</p>
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setStatus('loading');
    const response = await emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey
      });
    response.text === 'OK' ? setStatus('success') : setStatus('error');
    setFormData({name:'',email:'',message:''});
  }
  const handleChange = (e)=>{
    const changedValue = {...formData,[e.target.id]:e.target.value}
    setFormData(changedValue)
  }
  return (
    <div className="mt-40 mb-10 scroll-m-28" id="contact">
      <h1 className="mb-10 text-center">Contact Me</h1>
      <p className="mb-8 text-center">Feel free to drop me a message below!</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span className="sm:text-xl">Name</span><span className="text-red-500">*</span>
        </label>
        <input name="user_name" required id="name" value={formData.name} onChange={handleChange} className="block border-2 border-black p-3 rounded-xl w-full text-xl mb-4" type="text" />
        <label htmlFor="email">
        <span className="sm:text-xl">Email</span><span className="text-red-500">*</span>
        </label>
        <input name="user_email" required id="email" value={formData.email} onChange={handleChange} className="block border-2 border-black p-3 rounded-xl w-full text-xl mb-4" type="email" />
        <label htmlFor="message">
        <span className="sm:text-xl">Message</span><span className="text-red-500">*</span>
        </label>
        <textarea required id="message" name="message" value={formData.message} onChange={handleChange} className="block border-2 border-black p-3 rounded-xl w-full h-40 text-xl" />
        <button disabled={status==='loading'} className="bg-black hover:bg-slate-800 text-white text-xl p-3 w-full my-8 rounded-lg">{status==='loading' ? 'Sending...' : 'Send'}</button>
      </form>
      {messageStatus}
    </div>
  );
};

export default Contact;
