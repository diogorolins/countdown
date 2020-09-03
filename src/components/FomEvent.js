import React, { useState } from "react";
import moment from "moment";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormEvent = ({ calculate }) => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState("00:00");

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="date">
        <TextField
          id="date"
          label="Dia do Evento"
          type="date"
          value={date}
          onChange={handleDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="time">
        <TextField
          id="time"
          label="Hora"
          type="time"
          value={time}
          onChange={handleTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>
      <div className="button">
        <Button variant="contained" onClick={() => calculate(date, time)}>
          Calcular
        </Button>
      </div>
    </>
  );
};

export default FormEvent;
