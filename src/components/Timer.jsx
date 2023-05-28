import Countdown, { zeroPad } from "react-countdown";
import classes from "../styles/payment.module.css";

const Timer = () => {
  const renderer = ({ minutes, seconds, completed }) => {
    const minute = zeroPad(minutes);
    const second = zeroPad(seconds);
    return (
      <div className={classes.timer}>
        <p className={classes.squareBackground}>{minute[0]}</p>
        <p className={classes.squareBackground}>{minute[1]}</p>
        <p className={classes.squareBackground}>:</p>
        <p className={classes.squareBackground}>{second[0]}</p>
        <p className={classes.squareBackground}>{second[1]}</p>
      </div>
    );
  };

  return (
    <>
      <Countdown date={Date.now() + 7200} renderer={renderer} zeroPadTime={3} />
    </>
  );
};

export default Timer;
