import * as React from 'react';
import { FooterContainer } from './styles';

export const Footer = () => (
  <FooterContainer>
    <hr />
    ©
    {new Date().getFullYear()}
    {', '}
    All rights reserved.
  </FooterContainer>
);
