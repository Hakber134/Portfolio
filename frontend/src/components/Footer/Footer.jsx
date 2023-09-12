import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'
import {Link} from "react-router-dom"
import {BsEnvelope, BsGithub, BsLinkedin,} from "react-icons/bs"

const Footer = () => {
  return <div className="footer">
    <div>
        <Typography variant="h5">That's All For Now!</Typography>
        <Typography>You've scrolled all the way to the bottom. Don't be shy to reach out!</Typography>
        <Link to="/contact" className="footerContactBtn">
            <Typography>Get In Touch</Typography>
        </Link>
    </div>
    <div>
        <a href="https://github.com/hakber134" target='black'>
            <BsGithub />
        </a>
        <a href="https://linkedin.com/in/hassanakberrr" target='black'>
            <BsLinkedin />
        </a>
        <a href="mailto:akber2@ualberta.ca" target='black'>
            <BsEnvelope />
        </a>
    </div>
  </div>
  
}

export default Footer