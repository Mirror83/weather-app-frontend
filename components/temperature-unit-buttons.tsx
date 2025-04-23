"use client";

import { getTemperatureUnitSymbol } from "@/lib/conversions";
import { TemperatureUnit } from "@/lib/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function TemperatureUnitButtons() {
  const searchParams = useSearchParams();
  const currentUnit: TemperatureUnit =
    (searchParams.get("unit") as TemperatureUnit) ?? "celsius";
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleUnitChange(unit: TemperatureUnit) {
    const params = new URLSearchParams(searchParams);

    if (unit === "celsius") {
      params.delete("unit");
    } else {
      params.set("unit", unit);
    }

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="btn-group btn-group-scrollable">
      <TemperatureButton
        unit="celsius"
        currentUnit={currentUnit}
        onClick={handleUnitChange}
      />
      <TemperatureButton
        unit="fahrenheit"
        currentUnit={currentUnit}
        onClick={handleUnitChange}
      />
    </div>
  );
}

function TemperatureButton({
  unit,
  currentUnit,
  onClick,
}: {
  unit: TemperatureUnit;
  currentUnit: TemperatureUnit;
  onClick: (unit: TemperatureUnit) => void;
}) {
  return (
    <button
      className={`btn ${unit === currentUnit && "btn-active"}`}
      onClick={() => onClick(unit)}
    >
      {getTemperatureUnitSymbol(unit)}
    </button>
  );
}
