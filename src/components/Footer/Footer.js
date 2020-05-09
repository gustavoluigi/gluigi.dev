import React from 'react';
import Fade from 'react-reveal';
import { FaWhatsapp, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Footer } from '../Footer/styles';

export default() => (
    <Footer>
        <Fade bottom cascade>
            <a
                href="https://api.whatsapp.com/send?phone=5513991589497"
                rel="noopener noreferrer"
                target="_blank">

                <FaWhatsapp/>
            </a>
           {/* <a
                href="https://github.com/gustavoluigi"
                rel="noopener noreferrer"
                target="_blank">

                <FaGithub/>
            </a>
            <a
                href="#"
                rel="noopener noreferrer"
                target="_blank">

                <FaInstagram/>
            </a>
            <a
                href="#"
                rel="noopener noreferrer"
                target="_blank">

                <FaFacebookF/>
            </a> */}
        </Fade>
    </Footer>
)
