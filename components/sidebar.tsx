import { getTemperature, getTemperatureUnitSymbol } from "@/lib/conversions";
import { Rainbow } from "lucide-react";
import { WeatherIcon } from "./weather-icon";
import { SidebarData } from "@/lib/types";
import { Frown } from "lucide-react";

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
        <SidebarHeader />
        <SidebarContent data={data} temperatureUnit={temperatureUnit} />
        <SidebarFooter data={data} />
      </aside>
    </div>
  );
}

function SidebarHeader() {
  return (
    <section className="sidebar-title items-center justify-center p-4 font-normal">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2">
          <Rainbow />
          <h1>Weather App</h1>
        </div>
      </div>
    </section>
  );
}

function SidebarFooter({ data }: { data: SidebarData | undefined }) {
  if (!data) {
    return null;
  }
  return (
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
              {data && <span className="text-xl font-bold">{data.city}</span>}
            </div>
          </div>
        </label>
      </div>
    </section>
  );
}

type SidebarContentProps = {} & SidebarProps;

function SidebarContent({ data, temperatureUnit }: SidebarContentProps) {
  if (!data) {
    return (
      <section className="sidebar-content items-center justify-center p-4">
        <Frown size={64} />
      </section>
    );
  }

  const temp = Math.round(getTemperature(data.temp, temperatureUnit));
  const symbol = getTemperatureUnitSymbol(temperatureUnit);
  const description =
    data.description.charAt(0).toUpperCase() + data.description.slice(1);

  return (
    <section className="sidebar-content items-center justify-center p-4">
      <WeatherIcon iconId={data.icon} size={64} description={data.main} />
      <p className="text-xl">{temp + symbol}</p>
      <p className="text-2xl font-bold">{description}</p>
    </section>
  );
}
