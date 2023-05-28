import React from "react";
import Countdown from "react-countdown";

const CountDownTImer = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return <Countdown date={Date.now() + 5000} renderer={renderer} />;
};

export default CountDownTImer;
