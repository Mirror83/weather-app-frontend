import { CloudFog, Rainbow } from "lucide-react";

export function Sidebar() {
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
          <CloudFog size={64} className="mb-4" />
          <p className="text-xl">13°C</p>
          <p className="text-2xl font-bold">Cloudy</p>
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
                  <span className="text-xl font-bold">Nairobi</span>
                </div>
              </div>
            </label>
          </div>
        </section>
      </aside>
    </div>
  );
}
