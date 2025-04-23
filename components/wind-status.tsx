type WindStatusProps = {
  data: {
    speed: number;
    deg: number;
  };
};

export function WindStatus({ data }: WindStatusProps) {
  const windSpeed = Math.round(data.speed);
  return (
    <div className="card">
      <div className="card-body items-center">
        <h2 className="card-header">Wind speed</h2>
        <p className="text-2xl text-content1">{windSpeed} km/h</p>
        <div className="card-footer">
          <p className="text-content2">{data.deg}°</p>
        </div>
      </div>
    </div>
  );
}
