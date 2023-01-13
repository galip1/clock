import moment from "moment/moment";
import React, { useEffect } from "react";
import "./clock3.scss";
import { useState } from "react";

const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());

  // const dateTime = moment();

  //console.log(props);
  const { textColor, bgColor } = props;

  //require("moment/locale/tr");
  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  const minute = dateTime.format("m");
  const second = dateTime.format("ss");

  let message = "";
  if (hour >= 6 && hour < 11) {
    message = "Morning";
  } else if (hour >= 11 && hour < 14) {
    message = "Noon";
  } else if (hour >= 14 && hour < 17) {
    message = "Afternoon";
  } else if (hour >= 17 && hour < 22) {
    message = "Evening";
  } else {
    message = "Night";
  }

  //props da ınlıne yada internal css kullan

  //console.log(timeStr);
  const clockStyle = {
    backgroundColor: bgColor,
    color: textColor,
    //gap:gap,
  };
  //sanyede bır calısır

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(moment());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">
        {hour}
        <span style={{ opacity: second % 2 === 0 ? 1 : 0 }}>:</span>
        {minute}
      </div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};
export default Clock3;
