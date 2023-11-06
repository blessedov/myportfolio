"use client";
import React, {useRef, useState} from 'react';
import styles from './contact.module.css'
import Contactglobe from '@/components/Contactmotion/Contactmotion';
import emailjs, { send } from '@emailjs/browser'
import { SectionWrapper } from '@/hoc/page';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';

const ContactPage = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [subject, setsubject] = useState("")
  const [message, setmessage] = useState("")
  const [submit, setsubmit] = useState("Submit")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_mmsex9e', 'template_ab6s98w', form.current, 'wvEz8ZQEEJA-ynEH8')
      .then((result) => {
          alert(`${result} Submitted successful!`);
      }, (error) => {
          alert(error.text);
      });
      setname('')
      setemail('')
      setsubject('')
      setmessage('')
      setsubmit('Submit')
  };



  return (
    <section id='contact' className={`${styles.container} pt-9 pb-9`}>
        <div className='md:flex md:flex-wrap md:justify-between items-center flex flex-col gap-5 md:flex-row '>
          <motion.div variants={fadeIn('','', 0.6, 0.7)} className='md:w-[300px] items-center  md:flex md:flex-col flex-1   '>
            
            <motion.div variants={textVariant()} className='md:w-[700px] mx-auto w-full'>
            <h2 className='text-[10vw] md:text-[4vw] font-extrabold '>HIRE <span className='text-[#915eff] '> ME!</span></h2>
            <p className='text-[#ccc] text-[20px]'>Let's collaborate on creating impactful 
              user experiences. Feel free to reach out 
              for design projects, consultations, or collaborations. 
              Connect with me via phone: +234 908-348-6382 or 
              email: ToochukwuOnyemalu@gmail.com</p>
              </motion.div>

            <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-1 mx-auto pt-3 md:w-[700px] w-full '>
            <label>Name:<input onChange={(e)=> setname(e.target.value)} value={name} name='sender_name' className='w-full p-2 text-[#1d1d1d] rounded-sm' type='text' placeholder='Enter your name' required/></label>
            <label>Email:<input onChange={(e)=> setemail(e.target.value)} value={email} name='sender_email' className='w-full p-2 text-[#1d1d1d] rounded-sm' type='email' placeholder='Enter your email' required/></label>
            <label>Subject:<input onChange={(e)=> setsubject(e.target.value)} value={subject} name='sender_subject' className='w-full p-2 text-[#1d1d1d] rounded-sm' type='text' placeholder='Enter your subject' required/></label>
            <label>Message:<textarea onChange={(e)=> setmessage(e.target.value)} value={message} name='message' className='w-full p-2 text-[#1d1d1d] font-medium ' rows={8} type='text' placeholder='Message...' required/></label>
            <button value={submit} onClick={()=> setsubmit("Submiting....")} type='submit' className='bg-[#915eff] py-2 px-5 hover:bg-white hover:text-black font-medium w-max rounded-md cursor-pointer ' >{submit}</button>
            </form>
          </motion.div>
          <motion.div variants={fadeIn('rigt', '', 0.8, 0.8)} className='item-center flex flex-1  md:h-[50vh]'>
            <Contactglobe/>
          </motion.div>
        </div>
    </section>
  )
}

export default SectionWrapper(ContactPage)