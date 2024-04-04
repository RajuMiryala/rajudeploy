import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {SiGmail} from 'react-icons/si'

const headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://rajumiryala.github.io/Resume/#Work%20Experience" target="_blank"><FiDribbble/></a>
        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGtxSqJjlkqTcsRXBXPSzbhdJGf?compose=new" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default headersocials