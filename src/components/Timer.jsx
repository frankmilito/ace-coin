import Countdown, { zeroPad } from "react-countdown";
import classes from "../styles/payment.module.css";
import React from "react";

const Timer = ({ handleOpen }) => {
  const renderer = ({ minutes, seconds, completed }) => {
    //Using zeropad to format the time from 'm-s' to 'mm-ss
    const minute = zeroPad(minutes);
    const second = zeroPad(seconds);
    if (completed) {
      return handleOpen();
    } else {
      return (
        <div className={classes.timer}>
          <p className={classes.squareBackground}>{minute[0]}</p>
          <p className={classes.squareBackground}>{minute[1]}</p>
          <p className={classes.squareBackground}>:</p>
          <p className={classes.squareBackground}>{second[0]}</p>
          <p className={classes.squareBackground}>{second[1]}</p>
        </div>
      );
    }
  };

  return (
    <>
      <Countdown
        date={Date.now() + 100000}
        renderer={renderer}
        zeroPadTime={3}
      />
    </>
  );
};

//React.Memo to avoid re-rendering of the component when parent state/props changes

export default React.memo(Timer);
