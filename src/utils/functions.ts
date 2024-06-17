import { Condition } from "@/entities/WeatherData";
export const getConditionIcons = (condition: Condition) => {
  const iconMap = {
    Cloudy: "cloudy-day",
    Rainy:"rainy-day",
    Thunderstorms: "thunderstorm",
    Sunny:"sunny"
  }

  return `/icons/${iconMap[condition]}.png`;
};
