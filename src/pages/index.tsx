import { devWeatherData as weatherData } from "@/entities/WeatherData";
import DailyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <CurrentWeatherCard weatherData={weatherData} />
        </div>
        <div className="mb-2">
          <HourlyForecast HourlyForecast={weatherData.HourlyForecastData} />
        </div>
        <div className="">
          <DailyForecast DailyForecast={weatherData.DailyForecastData} />
        </div>
      </div>
    </main>
  );
}
