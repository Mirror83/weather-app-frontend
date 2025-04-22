import { SunIcon } from "lucide-react";

export interface ForecastData {
  date: string;
  tempMin: string;
  tempMax: string;
  weather: {
    icon: string;
    description: string;
  };
}

type ForecastCardProps = {
  data: ForecastData;
};

export function ForecastCard({ data }: ForecastCardProps) {
  return (
    <div className="card">
      <div className="card-body items-center">
        <h2 className="card-header">
          {new Date(data.date).toLocaleDateString(undefined, {
            day: "2-digit",
            month: "short",
          })}
        </h2>
        <SunIcon size={64} />
        <div className="card-footer">
          <p className="text-content2">
            {data.tempMin}-{data.tempMax}°C
          </p>
        </div>
      </div>
    </div>
  );
}
