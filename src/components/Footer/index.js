import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/" target="blank">     
      </a>
      <p>
      <a href="https://www.linkedin.com/in/hudsonlimati/"  target="blank">
        Hudson Lima 
        </a> fez esse projeto orgulhosamente  durante a
        {' '}
        <a href="https://www.alura.com.br/"  target="blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
