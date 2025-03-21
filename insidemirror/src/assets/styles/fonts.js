import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  /*  Pretendard Black (900) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Black.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
  }

  /*  Pretendard ExtraBold (800) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-ExtraBold.woff2") format("woff2");
    font-weight: 800;
    font-style: normal;
  }

  /*  Pretendard Bold (700) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  /*  Pretendard SemiBold (600) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-SemiBold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  /*  Pretendard Medium (500) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  /*  Pretendard Regular (400) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  /*  Pretendard Light (300) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  /*  Pretendard ExtraLight (200) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-ExtraLight.woff2") format("woff2");
    font-weight: 200;
    font-style: normal;
  }

  /*  Pretendard Thin (100) */
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Thin.woff2") format("woff2");
    font-weight: 100;
    font-style: normal;
  }
`;

export default Fonts;
