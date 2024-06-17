type TemperatureUnit = "celcius" | "farenheight";
export const formatTemprature = (temperature: number, unit: TemperatureUnit = "celcius") =>
{
   if (unit === "farenheight")
   {
    return `${temperature}°F`
   } return `${temperature}°C`
}