import React from 'react'

import { FaGooglePlay } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa'


import logoImg from '../../../public/logo_erangale.png'

export const Footer = () => {
  return (
    <footer 
        style={{
            backgroundColor:'rgb(1,1,1,.2)'
        }}
        className='p-5 d-flex'
    >
        <div className='d-flex flex-column fs-5' style={{flexGrow:'1'}}>
            <div className="align-self-center" style={{width:'200px',height:'50px'}}>
                <img src={logoImg} style={{height:'100%',width:'100%'}}/>
            </div>
        </div>

        <div className='d-flex flex-column fs-6' style={{flexGrow:'1'}}>
            <p className='mb-0 fw-bold'>COMPANY</p>
            <div className='d-flex flex-column'>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>ABOUT</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>MISSION & VISION</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>BLOG</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>TESTIMONIALS</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>CONTACT US</a>

                
            </div>
        </div>
        <div className='d-flex flex-column fs-6' style={{flexGrow:'1'}}>
            <p className='mb-0 fw-bold'>INFORMATION</p>
            <div className='d-flex flex-column'>
            <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>HELF & SUPPORT</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>PARTNERS</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>FAQ</a>

            </div>
        </div>

        <div className='d-flex flex-column fs-6' style={{flexGrow:'1'}}>
            <p className='mb-0 fw-bold'>SOCIAL MEDIA </p>
            <div className='d-flex flex-column'>
            <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>INSTAGRAM</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>TWITTER</a>
                <a href="" style={{ color:'black',textDecoration:'none'}} className='mb-0'>LINKEDIN</a>

            </div>
        </div>
        

        <div className='d-flex flex-column fs-6' style={{flexGrow:'1'}}>
            <p className='mb-0 fw-bold'>DOWNLOAD APP</p>
            <div className='d-flex flex-column gap-3'>

            <a 
                    href="https://www.google.com"
                    className='p-2 mt-2 d-flex rounded-3 bg-dark text-white align-items-center justify-content-center'
                    style={{width:'fit-content',textDecoration:'none',color:'black'}}    
                >
                    <FaGooglePlay size={30} color="#fff"/>
                    <h5>PlayStore</h5>
                </a>

                <a 
                    href="https://www.google.com"
                    style={{width:'fit-content',textDecoration:'none',color:'black'}} 
                    className='p-2 d-flex bg-dark rounded-3 text-white align-items-center justify-content-center'
                >
                    <FaApple size={30} color="#fff" />
                    <h5>AppStore</h5>
                </a>

            </div>
        </div>

    </footer>
  )
}
