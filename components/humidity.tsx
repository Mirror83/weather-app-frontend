export function Humidity() {
  return (
    <div className="card">
      <div className="card-body items-center">
        <h2 className="card-header">Humidity</h2>
        <p className="text-2xl text-content1">80%</p>
        <div className="card-footer">
          <progress className="progress" value="80" max="100"></progress>
        </div>
      </div>
    </div>
  );
}
