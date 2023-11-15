import React from "react";

// 스타일
import { TitleBox } from "../../styles/Style";

// 날짜 표시
export const today = new Date();
export const todayYear = today.getFullYear();
export const todayMonth = today.getMonth() + 1;
export const todayDate = today.getDate();

export const monthList = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
export const todayTextMonth = monthList[todayMonth];

const Title = () => {
  return (
    <TitleBox>
      <div>
        <h1>{todayDate}</h1>
        <div>
          <p>{todayTextMonth}</p>
          <p>{todayYear}</p>
        </div>
       </div>

      <h1>TODO LIST</h1>
    </TitleBox>
  );
};

export default Title;
