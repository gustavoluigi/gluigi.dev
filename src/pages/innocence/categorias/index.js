import React from 'react';
import categorias from '../../../assets/img/categorias.jpg';

import { Container, SideMenu } from '../styles';

export default function Innocence() {
  return (
    <Container>
      <SideMenu>
        <a href="/innocence">Página Inicial</a>
        <a href="/innocence/integra">Íntegra do Produto</a>
        <a href="/innocence/categorias">Página de Categorias</a>
      </SideMenu>
      <img src={categorias} alt="" />
    </Container>
  );
}
