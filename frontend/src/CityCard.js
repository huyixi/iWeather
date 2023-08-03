import React from "react";

const styles = {
  cityCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "300px",
    textAlign: "center",
  },
  cityName: {
    fontSize: "1.5em",
    marginBottom: "20px",
  },
  temperature: {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1em",
  },
};

export function CityCard(props) {
  return (
    <div className="city-card" style={styles.cityCard}>
      <CityName city={props.city} style={styles.cityName} />
      <Temperature temp={props.temp} style={styles.temperature} />
      <Description desc={props.desc} style={styles.description} />
    </div>
  );
}

function CityName(props) {
  return <h2 className="city-name">{props.city}</h2>;
}

function Temperature(props) {
  return <p className="temperature">{props.temp}°C</p>;
}

function Description(props) {
  return <p className="description">{props.desc}</p>;
}
