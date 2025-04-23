import { TemperatureUnit } from "./types";

export function getTemperature(temp: number, unit: TemperatureUnit) {
  return unit === "celsius" ? temp : (temp * 9) / 5 + 32;
}

export function getTemperatureUnitSymbol(unit: TemperatureUnit) {
  return unit === "celsius" ? "°C" : "°F";
}
