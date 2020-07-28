import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';
import media from './media-query';

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const MAIN_COLOR = '#5cbdea';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html{
    font-size: 14px;
    
    ${media.tablet`
      font-size: 16px;
    `}
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
  }
  body{
    letter-spacing: -0.025em;
    overflow-x: hidden;
  }
  html, body, #__next{
    width: 100%;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    font: inherit;
    box-shadow: none;

    &:focus, &:active {
      outline: none;
    }
  }
`;

export default GlobalStyles;
