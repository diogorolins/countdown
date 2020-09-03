import React from "react";

const CountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <section className="countDownBox">
        <div className="countDownBox_label">Dias: </div>
        <div className="countDownBox_box">{days}</div>
      </section>

      <section className="countDownBox">
        <div className="countDownBox_label">Horas:</div>
        <div className="countDownBox_box">{hours}</div>
      </section>
      <section className="countDownBox">
        <div className="countDownBox_label">Minutos:</div>
        <div className="countDownBox_box">{minutes}</div>
      </section>
      <section className="countDownBox">
        <div className="countDownBox_label">Segundos:</div>
        <div className="countDownBox_box">{seconds}</div>
      </section>
    </>
  );
};

export default CountDown;
