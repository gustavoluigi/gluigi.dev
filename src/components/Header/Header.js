import React from 'react';
import Fade from 'react-reveal';
import {Header} from '../Header/styles';

import logo from '../../assets/img/logo-b.svg';

export default() => (
    <Header>
        <Fade bottom cascade>
            <a href="/">
                <img src={logo} alt=""/>
            </a>
        </Fade>
    </Header>
)
