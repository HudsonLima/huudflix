import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>      
      <p>
        <a href="https://www.linkedin.com/in/hudsonlimati/"  target="blank">
          Hudson Lima 
          </a> proudly created this react-app project during
          {' '}
          <a href="https://www.alura.com.br/"  target="blank">
          Alura's React Immersion
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
