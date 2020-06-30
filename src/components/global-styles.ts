import styled, { createGlobalStyle } from 'styled-components';
import { ButtonBaseLayout } from 'components/Button/styles';

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* CSS Reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ bodyColor }) => bodyColor};
    color: ${({ fontColor }) => fontColor};

    padding: 5rem 1rem 1rem 1rem;


    @media only screen and (max-width: 625px) {
      padding-top: 8rem;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GridFrame = styled.section<GridFrameProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  
  @media only screen and (max-width: 625px) {
    justify-items: center;
  }
`;

export const LinkButton = styled.a<LinkButtonProps>`
  ${ButtonBaseLayout}
  text-decoration: none;
  padding: 0.7rem 1rem;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};

  @media only screen and (max-width: 800px) {
    padding: 0;
  }
`;
