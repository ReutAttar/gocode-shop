import React from "react";
import "./SaleCountDown.css";
import PropTypes from "prop-types";

class SaleCountDown extends React.Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    deadline: Date.parse(new Date("2021-02-25T20:45:00")), //year-month-dayThour:minute:seconds. month - from 01 (January) to 12 (December)
  };

  startTimer = () => {
    this.props.isSale(true);
    const intervalID = setInterval(() => {
      const total = this.state.deadline - Date.parse(new Date());
      this.setState(({ seconds }) => ({ seconds: (seconds = Math.floor((total / 1000) % 60)) }));
      this.setState(({ minutes }) => ({ minutes: (minutes = Math.floor((total / 1000 / 60) % 60)) }));
      this.setState(({ hours }) => ({ hours: (hours = Math.floor((total / (1000 * 60 * 60)) % 24)) }));
      this.setState(({ days }) => ({ days: (days = Math.floor(total / (1000 * 60 * 60 * 24))) }));
      if (total <= 0) {
        clearInterval(intervalID);
        this.props.isSale(false);
      }
    }, 1000);
  };

  componentDidMount() {
    this.startTimer();
  }

  render() {
    return this.props.sale ? (
      <div className="divCountdown">
        <div className="Text">Final sale on selected items for a limited time</div>
        <div className="Countdown">
          <span className="days">{`0${this.state.days}`.slice(-2)}</span>
          <span>:</span>
          <span className="hours">{`0${this.state.hours}`.slice(-2)}</span>
          <span>:</span>
          <span className="minutes">{`0${this.state.minutes}`.slice(-2)}</span>
          <span>:</span>
          <span className="seconds">{`0${this.state.seconds}`.slice(-2)}</span>
        </div>
      </div>
    ) : (
      <div className="divCountdown" style={{ backgroundColor: "#e1deb7" }}>
        <div className="TextSaleOver">The sale is over</div>
      </div>
    );
  }
}

SaleCountDown.propTypes = {
  sale: PropTypes.bool,
  isSale: PropTypes.func,
};

export default SaleCountDown;
