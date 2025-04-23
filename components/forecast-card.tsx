import { WeatherIcon } from "./weather-icon";
import { getTemperature, getTemperatureUnitSymbol } from "@/lib/conversions";
import { Forecast, TemperatureUnit } from "@/lib/types";

type ForecastCardProps = {
  data: Forecast;
  temperatureUnit: TemperatureUnit;
};

export function ForecastCard({ data, temperatureUnit }: ForecastCardProps) {
  const { icon, description } = data.weather;
  const symbol = getTemperatureUnitSymbol(temperatureUnit);
  const maxTemp = Math.round(getTemperature(data.max_temp, temperatureUnit));
  const minTemp = Math.round(getTemperature(data.min_temp, temperatureUnit));

  return (
    <div className="card">
      <div className="card-body items-center">
        <h2 className="card-header">
          {new Date(data.date).toLocaleDateString(undefined, {
            day: "2-digit",
            month: "short",
          })}
        </h2>
        <WeatherIcon iconId={icon} size={64} description={description} />
        <div className="card-footer">
          <p className="text-content2">
            {maxTemp + symbol} - {minTemp + symbol}
          </p>
        </div>
      </div>
    </div>
  );
}
