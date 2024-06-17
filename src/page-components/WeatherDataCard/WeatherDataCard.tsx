import Card from "@/components/Card/Card";
import { WeatherData } from "@/entities/WeatherData";
import { formatTemprature } from "@/utils/formatting";
import { getConditionIcons } from "@/utils/functions";
import Image from "next/image";
interface WeatherDataCardProps {
  weatherData: WeatherData;
}

export default function WeatherDataCard({ weatherData }: WeatherDataCardProps) {

  return (
    <Card className="flex h-32 w-32 flex-col items-center">
      <h2>{formatTemprature(weatherData.currentTemperature)}</h2>
      <div>{weatherData.location.name}</div>
      <div >
        <Image
          src={getConditionIcons(weatherData.condition)}
          alt={weatherData.condition}
          width={32}
          height={32}
        />
      </div>
      <div>
        H: {formatTemprature(weatherData.maxTemperature)}/ L:
        {formatTemprature(weatherData.minTemperature)}
      </div>
    </Card>
  );
}
