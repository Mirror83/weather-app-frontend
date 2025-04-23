"use client";

import { useSearchParams } from "next/navigation";

export function NoData() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      {city ? (
        <p className="mt-4 text-lg">Please try again later</p>
      ) : (
        <>
          <p className="mt-4 text-lg">
            Weather info for the city &quot;
            {city}&quot; could not be found
          </p>
          <p className="text-sm">
            Check for any mistakes or typos in the city you entered.
          </p>
        </>
      )}
    </div>
  );
}
