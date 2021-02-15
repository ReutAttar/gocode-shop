import React, { useState, useEffect, useRef } from "react";
import "./SaleCountDown.css";
import PropTypes from "prop-types";

const SaleCountDown = ({ SetIsSale }) => {
  const [sale, setSale] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = Date.parse(new Date("2021-02-28T18:28:00"));
  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      const total = deadline - Date.parse(new Date());
      setSeconds(Math.floor((total / 1000) % 60));
      setMinutes(Math.floor((total / 1000 / 60) % 60));
      setHours(Math.floor((total / (1000 * 60 * 60)) % 24));
      setDays(Math.floor(total / (1000 * 60 * 60 * 24)));
      if (total <= 0) {
        clearInterval(intervalID.current);
        setSale(false);
      }
    }, 1000);
  }, [deadline]);

  useEffect(() => {
    SetIsSale(sale);
  }, [SetIsSale, sale]);

  return sale ? (
    <div className="divCountdown">
      <div className="Text">Final sale on selected items for a limited time</div>
      <div className="Countdown">
        <span className="days">{`0${days}`.slice(-2)}</span>
        <span>:</span>
        <span className="hours">{`0${hours}`.slice(-2)}</span>
        <span>:</span>
        <span className="minutes">{`0${minutes}`.slice(-2)}</span>
        <span>:</span>
        <span className="seconds">{`0${seconds}`.slice(-2)}</span>
      </div>
    </div>
  ) : (
    <div className="divCountdown" style={{ backgroundColor: "#e1deb7" }}>
      <div className="TextSaleOver">The sale is over</div>
    </div>
  );
};

SaleCountDown.propTypes = {
  sale: PropTypes.bool,
  isSale: PropTypes.func,
};

export default SaleCountDown;
