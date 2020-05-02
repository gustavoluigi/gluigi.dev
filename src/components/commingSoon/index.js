import React, {Component} from 'react';
import Fade from 'react-reveal';
import {Container, Title} from './styles';

class CommingSoon extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Fade left cascade>
                    <Title>
                        <small>Site em construção!</small>
                        Enquanto isso podemos construir
                        <br/>
                        <a
                            href="https://api.whatsapp.com/send?phone=5513991589497"
                            rel="noopener noreferrer"
                            target="_blank">projetos incríveis!</a>
                    </Title>
                </Fade>

            </Container>
        );
    }
}

export default CommingSoon;
