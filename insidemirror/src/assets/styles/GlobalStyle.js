import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Black.woff2") format("woff2");
    font-weight: 900; /* Black */
    font-style: normal;
  }
  body {
    background-color: black;
    color: white; /* 텍스트 색상을 흰색으로 설정 */
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
