import React , { useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Join-us.css';


const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'service_lgdc4am', form.current, '_PyM26vWVlQDIcPF4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr/>
                <div>
                    <span  className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>
            <div className='right-j'>

                <form ref={form} className='email-container'>
                    <input type='email' name='user-email' placeholder='Enter your emali ...' onSubmit={sendEmail} />
                    <button className='btn btn-j'> Join now</button>
                </form>
            
            </div>
            
        </div>
    );
};

export default Join ;