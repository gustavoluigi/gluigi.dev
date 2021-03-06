import React from 'react';
import Home from '../../assets/img/Home.jpg';

import { Container, SideMenu } from './styles';

export default function Innocence() {
  return (
    <Container>
      <SideMenu>
        <a href="/innocence">Página Inicial</a>
        <a href="/innocence/integra">Íntegra do Produto</a>
        <a href="innocence/categorias">Página de Categorias</a>
      </SideMenu>
      <img src={Home} alt="" />
    </Container>
  );
}
