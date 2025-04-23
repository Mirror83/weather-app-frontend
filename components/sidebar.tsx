import { getTemperature } from "@/lib/conversions";
import { Rainbow } from "lucide-react";
import { WeatherIcon } from "./weather-icon";
import { SidebarData } from "@/lib/types";

type SidebarProps = {
  data?: SidebarData;
  temperatureUnit: "celsius" | "fahrenheit";
};

export function Sidebar({ data, temperatureUnit }: SidebarProps) {
  return (
    <div className="sm:w-full sm:max-w-[18rem]">
      <input
        type="checkbox"
        id="sidebar-mobile-fixed"
        className="sidebar-state"
      />
      <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
      <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
        <section className="sidebar-title items-center justify-center p-4 font-normal">
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-2">
              <Rainbow />
              <h1>Weather App</h1>
            </div>
          </div>
        </section>
        <section className="sidebar-content items-center justify-center p-4">
          {data && (
            <>
              {/* <CloudFog size={64} className="mb-4" /> */}
              <WeatherIcon
                iconId={data.icon}
                size={64}
                description={data.main}
              />
              <p className="text-xl">
                {getTemperature(data.temp, temperatureUnit)}
              </p>
              <p className="text-2xl font-bold">{data.description}</p>
            </>
          )}
        </section>
        <section className="sidebar-footer justify-end bg-gray-2 pt-2">
          {/* <div className="divider my-0"></div> */}
          <div className="z-50 flex h-fit w-full">
            <label className="whites mx-2 flex h-fit w-full justify-center p-0 text-center">
              <div className="flex flex-row gap-4 p-4">
                <div className="flex flex-col">
                  <span className="text-sm">
                    {new Date().toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </span>
                  {data && (
                    <span className="text-xl font-bold">{data.city}</span>
                  )}
                </div>
              </div>
            </label>
          </div>
        </section>
      </aside>
    </div>
  );
}
