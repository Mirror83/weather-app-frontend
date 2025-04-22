import { SunIcon } from "lucide-react";

export function ForecastCard() {
  return (
    <div className="card">
      <div className="card-body items-center">
        <h2 className="card-header">21 May</h2>
        <SunIcon size={64} />
        <div className="card-footer">
          <p className="text-content2">11-12°C</p>
        </div>
      </div>
    </div>
  );
}
