import React from 'react'
import './Header.css';
import { CustomNav } from './CustomNav';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className="header">
        <CustomNav/>
        <div className="socials">
          <div className="circle-icon bg-light">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} color="#C13584" />
            </a>
          </div>
          <div className="circle-icon bg-light">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} color="grey" />
            </a>
          </div>
        </div>
    </div>

  )
}
