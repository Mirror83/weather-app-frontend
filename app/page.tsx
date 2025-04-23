import { Body } from "@/components/body";
import { Sidebar } from "@/components/sidebar";
import {
  BodyData,
  SidebarData,
  TemperatureUnit,
  WeatherApiResponse,
} from "@/lib/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const city = searchParams.city?.toString() ?? "Nairobi";
  let unit = searchParams.unit?.toString() ?? "celsius";

  if (unit !== "celsius" && unit !== "fahrenheit") {
    // A temporary fix, ideally we should show the user an error message
    // telling them to use either celsius or fahrenheit
    // Or we can move the state from the URL to a global state
    // management solution like Redux or Zustand
    unit = "celsius";
  }

  const response = await fetch(`${API_URL}/weather/${city}`);
  if (!response.ok) {
    const error = await response.json();
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
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

  return (
    <div className="flex flex-row sm:gap-10">
      <Sidebar
        data={city ? sidebarData : undefined}
        temperatureUnit={unit as TemperatureUnit}
      />
      <Body data={bodyData} temperatureUnit={unit as TemperatureUnit} />
    </div>
  );
}
