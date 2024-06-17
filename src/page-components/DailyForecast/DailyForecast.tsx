import { DailyForecastData } from "@/entities/WeatherData";
import { formatTemprature } from "@/utils/formatting";
import { getConditionIcons } from "@/utils/functions";
import { format } from "date-fns";
import Image from "next/image";
interface DailyForecastProps {
  DailyForecast: DailyForecastData[];
}

export default function DailyForecast({ DailyForecast }: DailyForecastProps) {
  return (
    <div className="flex flex-col items-start justify-center">
      {DailyForecast.map((forecast) => {
        return (
          <div className="flex flex-col align-center">
            <div
              key={format(forecast.date, "yyyy-MM-dd")}
              className="flex flex-row items-center px-2"
            >
              <div className="">
                <Image
                  src={getConditionIcons(forecast.condition)}
                  alt={forecast.condition}
                  width={32}
                  height={32}
                />
              </div>
              <div>
                {formatTemprature(forecast.maxTemperature)}/
                {formatTemprature(forecast.minTemperature)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
