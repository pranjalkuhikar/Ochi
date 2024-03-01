import Eyes from "./Eye";

function Ready() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="eyes w-full h-screen overflow-hidden bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="relative w-full h-full shadow-md">
        <h1 className="text-[15vw] w-[200vh] font-[Founder] leading-none absolute text-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          READY <br /> TO START <br /> THE PROJECT?
        </h1>
        <Eyes />
      </div>
    </div>
  );
}

export default Ready;
