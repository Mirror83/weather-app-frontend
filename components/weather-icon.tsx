import Image from "next/image";

export function WeatherIcon({
  iconId,
  description,
  size = 64,
}: {
  iconId: string;
  description: string;
  size?: number;
}) {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${iconId}.png`}
      height={size}
      width={size}
      alt={description}
    />
  );
}
