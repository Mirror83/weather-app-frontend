"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Search() {
  const [currentCity, setCurrentCity] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("city:", currentCity);
    const params = new URLSearchParams(searchParams);
    if (!currentCity) return;
    params.set("city", currentCity);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form className="flex flex-row items-center gap-2" onSubmit={handleSearch}>
      <input
        className="input w-72"
        placeholder="Search city..."
        value={currentCity}
        onChange={(e) => {
          console.log(e.target.value);
          setCurrentCity(e.target.value);
        }}
      />
      <button className="btn btn-primary">Go</button>
    </form>
  );
}
