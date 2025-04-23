export type Weather = {
  main: string;
  description: string;
  icon: string;
};

export type Forecast = {
  date: string;
  average_temp: number;
  min_temp: number;
  max_temp: number;
  weather: Weather;
};

export type WindData = {
  speed: number;
  deg: number;
};

export type Current = {
  weather: Weather;
  main: {
    temp: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  wind: WindData;
};

export type WeatherApiResponse = {
  current: Current;
  forecast: Forecast[];
};

export type BodyData = {
  humidity: number;
  wind: WindData;
  forecastData: Forecast[];
};

export type SidebarData = {
  temp: number;
  main: string;
  description: string;
  icon: string;
  city: string;
};

export type TemperatureUnit = "celsius" | "fahrenheit";
