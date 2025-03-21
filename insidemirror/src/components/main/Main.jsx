import React from "react";
import * as M from "../../assets/styles/MainStyle";

const Main = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString({
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const formattedTime = today.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24시간 형식
  });
  return (
    <>
      <M.Container>
        <M.Date>{formattedDate}</M.Date>
        <M.Time>{formattedTime}</M.Time>
      </M.Container>
    </>
  );
};

export default Main;
