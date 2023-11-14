import React from "react";

// javascript
import {today, todayYear, todayMonth, todayDate, monthList, todayTextMonth} from "../../js/title"
// styles
import {TitleBox, Calendar} from "../../styles/titleStyles"

const Title = () => {
  return (
    <TitleBox>
      <Calendar>
        <h1>{todayDate}</h1>
        <div>
          <p>{todayTextMonth}</p>
          <p>{todayYear}</p>
        </div>
      </Calendar>
      
      <h1>TODO LIST</h1>
    </TitleBox>
  )
};

export default Title;
