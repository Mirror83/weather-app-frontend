export function Humidity({ value }: { value: number }) {
  return (
    <div className="card">
      <div className="card-body items-center">
        <h2 className="card-header">Humidity</h2>
        <p className="text-2xl text-content1">{value}%</p>
        <div className="card-footer">
          <progress className="progress" value={value} max="100"></progress>
        </div>
      </div>
    </div>
  );
}
