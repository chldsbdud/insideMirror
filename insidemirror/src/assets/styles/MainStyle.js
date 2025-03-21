import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  color: white; /* 텍스트 색상을 흰색으로 변경 (가독성 향상) */
  font-family: "Pretendard", sans-serif;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

export const Date = styled.div`
  display: block;
  padding: 10%;
  font-size: 40px;
`;
export const Time = styled.div`
  display: block;
  padding: 10%;
  font-size: 40px;
  font-family: "Pretendard", sans-serif;
  font-weight: 100;
`;
