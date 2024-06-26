import { addDays } from "date-fns";
import { Location, devLocation } from "./Location";

export type Condition = "Cloudy" | "Rainy" | "Sunny" | "Thunderstorms"

export interface HourlyForecastData{
  condition: Condition;
  date: Date,
  maxTemperature: number;
  minTemperature: number;
}

export interface DailyForecastData{
  condition: Condition;
  date: Date,
  maxTemperature: number;
  minTemperature: number;
}

export interface WeatherData {
  condition: Condition;
  currentTemperature: number;
  location: Location;
  maxTemperature: number;
  minTemperature: number;
  DailyForecastData: DailyForecastData[]
  HourlyForecastData: HourlyForecastData[]

}

const today = new Date();

const devHourlyForecastData : HourlyForecastData[] = [
{
  condition: 'Cloudy',
  date: addDays(today, 1),
  maxTemperature: 30,
  minTemperature: 21

},
{
  condition: 'Rainy',
  date: addDays(today, 2),
  maxTemperature: 27,
  minTemperature: 18

},
{
  condition: 'Sunny',
  date: addDays(today, 3),
  maxTemperature: 24,
  minTemperature: 16

},
{
  condition: 'Thunderstorms',
  date: addDays(today, 4),
  maxTemperature: 31,
  minTemperature: 16

},
]

const devDailyForecastData: DailyForecastData[] = [
  {
    condition: 'Cloudy',
    date: addDays(today, 1),
    maxTemperature: 30,
    minTemperature: 21
  
  },
  {
    condition: 'Rainy',
    date: addDays(today, 2),
    maxTemperature: 27,
    minTemperature: 18
  
  },
  {
    condition: 'Sunny',
    date: addDays(today, 3),
    maxTemperature: 24,
    minTemperature: 16
  
  },
  {
    condition: 'Thunderstorms',
    date: addDays(today, 4),
    maxTemperature: 31,
    minTemperature: 19
  
  },
]

export const devWeatherData: WeatherData = {
  condition: 'Cloudy',
  HourlyForecastData: devHourlyForecastData,  
  DailyForecastData: devDailyForecastData,
  currentTemperature: 30,
  location: devLocation,
  maxTemperature: 40,
  minTemperature: 26
};
