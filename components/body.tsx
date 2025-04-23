import { BodyData, TemperatureUnit } from "@/lib/types";
import { ForecastCard } from "@/components/forecast-card";
import { Humidity } from "@/components/humidity";
import { WindStatus } from "@/components/wind-status";
import { Search } from "@/components/search";
import { TemperatureUnitButtons } from "./temperature-unit-buttons";
import { NoData } from "./no-data";

type BodyProps = {
  data?: BodyData;
  temperatureUnit: TemperatureUnit;
};

export function Body({ data, temperatureUnit }: BodyProps) {
  if (!data) {
    return <NoData />;
  }
  return (
    <div className="flex w-full flex-col p-4">
      <div className="w-fit">
        <label
          htmlFor="sidebar-mobile-fixed"
          className="btn btn-primary mb-4 sm:hidden"
        >
          Open Sidebar
        </label>
      </div>

      <div className="my-4 flex flex-row flex-wrap items-center justify-between gap-4">
        <Search />
        <TemperatureUnitButtons />
      </div>

      <div>
        <h2 className="my-4 font-bold">Three-Day Forecast</h2>
        <div className="my-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {data.forecastData.map((forecast) => (
            <ForecastCard
              key={forecast.date}
              data={forecast}
              temperatureUnit={temperatureUnit}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="my-4 font-bold">Additional info</h2>
        <div className="my-4 grid grid-cols-2 gap-4">
          <WindStatus data={data.wind} />
          <Humidity value={data.humidity} />
        </div>
      </div>
    </div>
  );
}
