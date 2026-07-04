import { useEffect, useRef } from "react";

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // The vanilla ambient canvas animation logic can go here. 
    // For now we just render the canvas to ensure exact layout parity.
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="ambient-canvas" 
      id="ambientCanvas" 
      aria-hidden="true"
    ></canvas>
  );
}
