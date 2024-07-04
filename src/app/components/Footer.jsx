"use client"
import React, {useState, useEffect, useContext} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { LangContext } from '../../store/context/LangContext'
import emailjs from 'emailjs-com'

const Footer = () => {
    const [isClient, setIsClient] = useState(false)
    const [email, setEmail] = useState({firstName: '', lastName: '', phone: '', email: '', notes: ''})
    const {language, changeLang} = useContext(LangContext)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleChange = (e) => {
        setEmail({...email, [e.target.name]: e.target.value})
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
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

    function submitForm (e) {
        e.preventDefault();
        alert("Sent")
        emailjs.sendForm('service_zrxeet7', 'template_ykpon5w', e.target, {
            publicKey: '6pnGp6tprBD_ypCL6',
        })
        .then(() => {
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
        // setEmail({firstName: '', lastName: '', phone: '', email: '', notes: ''})
    }

    const footerElement = <footer id='contact' className='lg:px-24 px-10 py-10 m-0 bg-[#191919] rounded-t-lg flex lg:flex-row flex-col justify-between items-center w-full'>
        <section className='lg:w-1/3 w-full bg-white md:p-5 p-2 rounded-3xl lg:m-0 mb-2'>
            <h1 className='font-bold md:text-start text-center text-3xl mb-2 text-[#d0372a]'>{language == "en" ? "Contact us" : "Neem contact met ons op"}</h1>
            <p className='text-md font-semibold w-full text-black lg:text-start text-center'>
            {language == "en" ? "We invite you to explore our website to learn more about RaCrops and our offerings. If you have any inquiries or would like to partner with us, please do not hesitate to contact us. Together, we can create a healthier and more sustainable future. I hope this presentation meets your requirements for the website! If you need any further customization or additional sections, please let me know." : "Wij nodigen u uit om onze website te verkennen voor meer informatie over Racrops en ons aanbod. Heeft u vragen of wilt u graag met ons samenwerken, neem dan gerust contact met ons op. Samen kunnen we een gezondere en duurzamere toekomst creëren. Ik hoop dat deze presentatie voldoet aan uw eisen voor de website! Laat het me weten als u verdere aanpassingen of extra secties nodig hebt."}
            </p>
        </section>
        <section className='text-white my-4'>
            <h3 className='font-extrabold'>Phone:</h3>
            <p>+201028889005</p>
            <p>+31627882121</p>
        </section>
        <section>
                <form onSubmit={submitForm} className='grid grid-cols-2 align-middle' action="mailto:bishoyabdelmesseh@gmail.com" method="post">
                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="firstName">First Name</label>
                        <input className='p-1' id="firstName" name="firstName" onChange={handleChange} value={email.firstName} type="text" placeholder="First Name" />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="lastName">Last Name</label>
                        <input className='p-1' id="lastName" name="lastName" onChange={handleChange} value={email.lastName} type="text" placeholder="Last Name" />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="phone">Phone</label>
                        <input className='p-1' id="phone" name="phone" onChange={handleChange} value={email.phone} type="number" placeholder="+1xxxxxxx" />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="email">Email</label>
                        <input
                        className='p-1'
                        id="email"
                        name="email" onChange={handleChange} value={email.email}
                        placeholder="email@email.com"
                        type="email"
                        />
                    </section>

                    <section className='flex flex-col m-4'>
                        <label className='mb-1 text-white' htmlFor="notes">Notes</label>
                        <textarea className='p-1' id="notes" name="notes" onChange={handleChange} value={email.notes} type="text" placeholder="" />
                    </section>

                    <button className='w-full m-4 border-2 rounded-3xl h-10 mt-12 text-white' type="submit">Submit</button>
                </form>
        </section>
    </footer>
  return isClient && footerElement
}
export default Footer