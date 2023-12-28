import React from "react";

// 스타일
import { TitleBox } from "../../styles/Style";

// 날짜 표시
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const todayTextMonth = monthList[todayMonth - 1];

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
