export default function Loader() {
  return (
    <div className="loader" id="loader" aria-label="Loading ScoopyBloom">
      <div className="loader__drip" aria-hidden="true"></div>
      <div className="loader__particles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <div className="loader__mark">
        <span className="loader__welcome">Welcome to</span>
        <span className="loader__logo">ScoopyBloom</span>
        <span className="loader__shine"></span>
      </div>
    </div>
  );
}
