import React from "react";

const styles = {
  tenDayForecast: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    padding: "20px 0",
  },
  dayCard: {
    flex: "0 0 auto",
    width: "80px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginRight: "10px",
    textAlign: "center",
  },
  date: {
    marginBottom: "10px",
  },
  temperatures: {
    marginTop: "10px",
  },
  highTemp: {
    color: "#d00",
  },
  lowTemp: {
    color: "#00d",
    marginLeft: "10px",
  },
};

function DayCard(props) {
  return (
    <div className="day-card" style={styles.dayCard}>
      <p className="date" style={styles.date}>
        {props.date}
      </p>
      <img src={props.iconUrl} alt={props.description} />
      <div className="temperatures" style={styles.temperatures}>
        <span className="high-temp">{props.highTemp}°</span>
        <span className="low-temp" style={styles.lowTemp}>
          {props.lowTemp}°
        </span>
      </div>
    </div>
  );
}

export function TenDayForecast(props) {
  return (
    <div className="ten-day-forecast">
      {props.data.map((day, index) => (
        <DayCard
          key={index}
          date={day.date}
          iconUrl={day.iconUrl}
          description={day.description}
          highTemp={day.highTemp}
          lowTemp={day.lowTemp}
        />
      ))}
    </div>
  );
}
