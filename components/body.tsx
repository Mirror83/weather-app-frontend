import { BodyData, TemperatureUnit } from "@/lib/types";
import { ForecastCard } from "./forecast-card";
import { Humidity } from "./humidity";
import { WindStatus } from "./wind-status";

type BodyProps = {
  data: BodyData;
  temperatureUnit: TemperatureUnit;
};

export function Body({ data, temperatureUnit }: BodyProps) {
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
        <div className="flex flex-row items-center gap-2">
          <input className="input w-72" placeholder="Search city..." />
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="btn-group btn-group-scrollable">
          <button className="btn btn-active">°C</button>
          <button className="btn">°F</button>
        </div>
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
