"use client"
import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";

const Footer = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        phone: Yup.string(),
        email: Yup.string().email("Invalid Email Address").required("Required"),
        notes: Yup.string()
      });

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            notes: ''
         },
         validationSchema: validationSchema,
         onSubmit: values => console.log(values)
    })

    const footerElement = <footer id='contact' className='px-24 py-10 m-0 bg-[#191919] rounded-t-lg flex flex-row justify-between items-center w-full'>
        <section className='w-1/3 bg-white p-5 rounded-3xl'>
            <h1 className='font-bold text-3xl mb-2 text-[#d0372a]'>Contact us</h1>
            <p className='text-md font-semibold text-black'>
            We invite you to explore our website to learn more about RaCrops and our offerings. If you have any inquiries or would like to partner with us, please do not hesitate to contact us. Together, we can create a healthier and more sustainable future.
            I hope this presentation meets your requirements for the website! If you need any further customization or additional sections, please let me know.
            </p>
        </section>
        <section className='text-white'>
            <h3 className='font-extrabold'>Phone:</h3>
            <p>+201028889005</p>
            <p>+31627882121</p>
        </section>
        <section>
                <form onSubmit={formik.handleSubmit} className='grid grid-cols-2 align-middle'>
                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="firstName">First Name</label>
                        <input className='p-1' id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} type="text" placeholder="First Name" />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="lastName">Last Name</label>
                        <input className='p-1' id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} type="text" placeholder="Last Name" />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="phone">Phone</label>
                        <input className='p-1' id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} type="number" placeholder="+1xxxxxxx" />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="email">Email</label>
                        <input
                        className='p-1'
                        id="email"
                        name="email" onChange={formik.handleChange} value={formik.values.email}
                        placeholder="email@email.com"
                        type="email"
                        />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="notes">Notes</label>
                        <textarea className='p-1' id="notes" name="notes" onChange={formik.handleChange} value={formik.values.notes} type="text" placeholder="" />
                    </section>

                    <button className='w-full m-4 border-2 rounded-3xl h-10 mt-12 text-white' type="submit">Submit</button>
                </form>
        </section>
    </footer>
  return isClient && footerElement
}
export default Footer