import { useState } from "react";
import { useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
      <div className="rounded-full w-[15vw] h-[15vw] bg-zinc-100 flex items-center justify-center">
        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
          <div
            style={{
              transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
            }}
            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
      <div className="rounded-full w-[15vw] h-[15vw] bg-zinc-100 flex items-center justify-center">
        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
          <div
            style={{
              transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
            }}
            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
