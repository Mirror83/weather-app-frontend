import "server-only";
import { WeatherApiResponse, SidebarData, BodyData } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWeatherData(city: string) {
  try {
    const response = await fetch(`${API_URL}/weather/${city}`);

    if (!response.ok) {
      const error = await response.json();
      console.error("Error fetching data:", error);
      return null;
    }

    const data = (await response.json()) as WeatherApiResponse;

    const current = data.current;
    const forecast = data.forecast;

    const sidebarData: SidebarData = {
      temp: current.main.temp,
      main: current.weather.main,
      description: current.weather.description,
      icon: current.weather.icon,
      city: city as string,
    };

    const bodyData: BodyData = {
      humidity: current.main.humidity,
      wind: current.wind,
      forecastData: forecast.map((data) => ({
        date: data.date,
        average_temp: data.average_temp,
        min_temp: data.min_temp,
        max_temp: data.max_temp,
        weather: data.weather,
      })),
    };

    return { sidebarData, bodyData };
  } catch (error) {
    console.error(error);

    return null;
  }
}
