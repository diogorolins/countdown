import React, { useState, useEffect } from "react";

import FormEvent from "./components/FomEvent";
import CountDown from "./components/CountDown";
import Header from "./components/Header";

import moment from "moment";

import "./App.css";

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const calculate = (date, time) => {
    clearInterval(intervalId);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    const target = moment(`${date} ${time}`);
    setIntervalId(
      setInterval(() => {
        calculeDiference(target);
      }, 1000)
    );
  };

  const calculeDiference = (target) => {
    const now = new moment();
    setDays(target.diff(now, "days"));
    const difference = moment.duration(target.diff(now));
    setHours(difference.hours());
    setMinutes(difference.minutes());
    setSeconds(difference.seconds());
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <section className="form">
        <FormEvent calculate={calculate} />
      </section>
      <section className="countdown">
        <CountDown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </section>
    </>
  );
}

export default App;
