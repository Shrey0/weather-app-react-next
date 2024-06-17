import { HourlyForecastData } from "@/entities/WeatherData";
import { formatTemprature } from "@/utils/formatting";
import { getConditionIcons } from "@/utils/functions";
import { format } from "date-fns";
import Image from "next/image";

interface HourlyForecastProps {
  HourlyForecast: HourlyForecastData[];
}

export default function HourlyForecast({
  HourlyForecast,
}: HourlyForecastProps) {
  return (
    <div className="flex items-start justify-center">
      {HourlyForecast.map((forecast) => {
        return (
            <div
              key={format(forecast.date, "yyyy-MM-dd")}
              className="flex flex-col items-center px-2"
            >
              <div>
                <Image
                  src={getConditionIcons(forecast.condition)}
                  alt={forecast.condition}
                  width={32}
                  height={32}
                />
              </div>{" "}
              <div>
                {formatTemprature(forecast.maxTemperature)}/
                {formatTemprature(forecast.minTemperature)}
              </div>
            </div>
        );
      })}
    </div>
  );
}
