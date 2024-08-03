import React, { useState } from 'react'

import phoneImage from '../../assets/phone-pic.png'
import { FaGooglePlay } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa'

export const GetApp = () => {
    const [email,setEmail] = useState(true);
    const [data,setData] = useState("")
    return (
    <section 
        className='d-flex mt-5 p-5  '
        style={{
            backgroundColor:'rgba(84, 78, 78, 0.1)',
            width:'100%',
            height:'60vh',
            overflow:'hidden'
        }}
    >

        <div className='d-flex flex-column fs-6 gap-1 fw-semibold' style={{width:'50%', height:'100%'}}>
            <h1 style={{marginBottom:'0',fontWeight:'700'}}> Get the Fringale App </h1>
            <p> We will send you a link, open it on your phone to download the app</p>
            <div className='d-flex justify-content-start gap-5  pe-5'>
                <div className='d-flex gap-1 align-items-center' style={{padding:"20px",PaddingTop:'0'}}>
                    <input 
                        style={{width:'18px',height:'18px',color:'greymeret'}}
                        type='radio'
                        name="contactMethod"
                        onChange = {() => {setData(""),setEmail(true)}}
                        checked={email}
                    
                    />
                    <label onClick = {() => {setData(""),setEmail(true)}}>Email</label>
                </div>
                <div className='d-flex gap-1  align-items-center'  style={{padding:"20px",PaddingTop:'0'}}>
                    <input 
                        style={{width:'18px',height:'18px'}}
                        type='radio'
                        name="contactMethod"
                        onChange = {() => {setData(""),setEmail(false)}}
                        checked={!email}
                    />
                    <label onClick= {() => { setData(""); setEmail(false)}}>Phone</label>
                </div>
            </div>

            <div className='d-flex gap-3 mb-4'>
                <input
                    type={(email?"email":"text")}
                    placeholder={`Enter your ${(email?"Email Address":"Mobile Number")}`}
                    value={data}
                    onChange = {(event) =>{
                        let value = event.target.value;
                        console.log(value)
                        if(email){
                            setData(value)
                        }
                        else {
                            if(value.length>10) return;
                            if(value[value.length-1] <'0' || value[value.length-1] >'9'){
                                
                            }
                            else {
                                setData(value)
                            }
                        }
                        
                    }}
                    style={{
                        borderRadius:'10px',
                        width:'60%',
                        height:'5vh',
                        border:'none'
                    }}
                />
                <button className='btn btn-danger ps-5 pe-5 ' style={{maxHeight:"5vh",borderRadius:'20px'}}>Share App Link</button>
            </div>

            <h5>Or download app from</h5>

            <div className="d-flex gap-3">
                <a 
                    href="https://www.google.com"
                    className='p-2 d-flex rounded-3 bg-dark text-white align-items-center justify-content-center'
                    style={{textDecoration:'none',color:'black'}}    
                >
                    <FaGooglePlay size={30} color="#fff"/>
                    <h5>PlayStore</h5>
                </a>

                <a 
                    href="https://www.google.com"
                    style={{textDecoration:'none',color:'black'}} 
                    className='p-2 d-flex bg-dark rounded-3 text-white align-items-center justify-content-center'
                >
                    <FaApple size={30} color="#fff" />
                    <h5>AppStore</h5>
                </a>
                
            </div>
        </div>

        <div style={{width:'50%',height:'100%',padding:'20px'}}>
            <img src={phoneImage} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
        </div>
    </section>
  )
}
