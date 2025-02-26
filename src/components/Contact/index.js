import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect,useRef,useState} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () => {

    const [letterClass,setLetterClass] = useState('text-animate');
    const refForm = useRef()
    const [contactNumber] = useState(Date.now());

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('send email')
        emailjs
            .sendForm(
                'contact_service', 
                'contact_form', 
                refForm.current, 
                'tn8aJa8EubYAbsrJJ'
            )
            .then(
                ()=>{
                    alert('Email sent successfully')
                    window.location.reload(false)
                },
                ()=>{
                    alert('Email failed to send')
                }
            )
    }


    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','O','N','T','A','C','T',' ','M','E']} 
                            idx={15}

                        />
                    </h1>
                    <p className='info'>
                        I am interested in part-time or full-time opportunities. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>

                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>

                                <li >
                                    <textarea name='message' placeholder='Message' required> 

                                    </textarea>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                                <li>
                                    <input type="hidden" name="contact_number" value={contactNumber} />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Yichen Zhao,
                    <br/>
                    Sweden,
                    <br/>
                    Björnkärrsgatan,<br/>
                    Linköping,<br/>
                    <span> yiczh573@student.liu.se </span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[58.41207802527399, 15.563023054229099]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[58.41207802527399, 15.563023054229099]}>
                            <Popup>
                                Yichen lives here, come over for a cup of coffee :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                 
                </div>





            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact