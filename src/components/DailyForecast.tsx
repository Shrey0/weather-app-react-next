import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DailyForecastData } from "@/entities/WeatherData";
import { cn } from "@/lib/utils";
import { formatTemprature } from "@/utils/formatting";
import { getConditionIcons } from "@/utils/functions";
import { format } from "date-fns";
import Image from "next/image";
import { useMemo } from "react";
interface DailyForecastProps {
  DailyForecast: DailyForecastData[];
}

export default function DailyForecast({ DailyForecast }: DailyForecastProps) {

  const minTemperature = useMemo(() => Math.min(...DailyForecast.map((f) => f.minTemperature)), [DailyForecast])
  const maxTemperature = useMemo(() => Math.max(...DailyForecast.map((f) => f.maxTemperature)), [DailyForecast])

  return (
    <Card>
      <CardContent className="flex flex-col items-start justify-center">
        {DailyForecast.map((forecast, index) => {
          const isLast = index === DailyForecast.length - 1;
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
                  <div> {formatTemprature(forecast.minTemperature)}</div>
                  <div className="w-[150px] mx-4 flex flex-row items-center">
                    <Progress value={[ forecast.minTemperature ,forecast.maxTemperature]} min={minTemperature} max={maxTemperature}/>
                  </div>
                  <div> {formatTemprature(forecast.maxTemperature)}</div>
                </div>
              </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
