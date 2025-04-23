import { Body } from "@/components/body";
import { Sidebar } from "@/components/sidebar";
import { TemperatureUnit } from "@/lib/types";
import { fetchWeatherData } from "@/lib/actions";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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

  const result = await fetchWeatherData(city as string);

  if (!result) {
    return (
      <div className="flex flex-row sm:gap-10">
        <Sidebar temperatureUnit={unit as "celsius" | "fahrenheit"} />
        <Body temperatureUnit={unit as "celsius" | "fahrenheit"} />
      </div>
    );
  }

  const { sidebarData, bodyData } = result;

  return (
    <div className="flex flex-row sm:gap-10">
      <Sidebar data={sidebarData} temperatureUnit={unit as TemperatureUnit} />
      <Body data={bodyData} temperatureUnit={unit as TemperatureUnit} />
    </div>
  );
}
