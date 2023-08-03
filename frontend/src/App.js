import "./App.css";
import { CityCard } from "./CityCard";
import { TenDayForecast } from "./TenDayForecast";

function App() {
  const forecastData = [
    // 这里填入10天的数据
    // 例如：
    {
      date: "Aug 1",
      iconUrl: "path/to/icon1.png",
      description: "Sunny",
      highTemp: "25",
      lowTemp: "15",
    },
    {
      date: "Aug 1",
      iconUrl: "path/to/icon1.png",
      description: "Sunny",
      highTemp: "25",
      lowTemp: "15",
    },
    {
      date: "Aug 1",
      iconUrl: "path/to/icon1.png",
      description: "Sunny",
      highTemp: "25",
      lowTemp: "15",
    },
    // ...
  ];
  return (
    <div className="App">
      <CityCard city="Beijing" temp="22" desc="Clear Sky" />
      <TenDayForecast data={forecastData}></TenDayForecast>
    </div>
  );
}

export default App;
