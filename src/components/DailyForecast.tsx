import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DailyForecastData } from "@/entities/WeatherData";
import { cn } from "@/lib/utils";
import { formatTemprature } from "@/utils/formatting";
import { getConditionIcons } from "@/utils/functions";
import { format } from "date-fns";
import Image from "next/image";
interface DailyForecastProps {
  DailyForecast: DailyForecastData[];
}

export default function DailyForecast({ DailyForecast }: DailyForecastProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start justify-center">
        {DailyForecast.map((forecast, index) => {
          const isLast = index === DailyForecast.length - 1;
          const progress =
            forecast.minTemperature / forecast.maxTemperature * 100;
          return (
              <div
                key={format(forecast.date, "yyyy-MM-dd")}
                className={cn({
                  "flex flex-row items-center px-2": true,
                  "mb-2": !isLast
                })}
              >
                <div className="mr-4">
                  <Image
                    src={getConditionIcons(forecast.condition)}
                    alt={forecast.condition}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-row justify-center">
                  <div> {formatTemprature(forecast.maxTemperature)}</div>
                  <div className="w-[150px] mx-4 flex flex-row items-center">
                    <Progress value={progress}></Progress>
                  </div>
                  <div> {formatTemprature(forecast.minTemperature)}</div>
                </div>
              </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
