import Eyes from "./Eye";

function Ready() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="eyes w-full h-screen overflow-hidden bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl flex flex-col items-center justify-center"
    >
      <div className="relative w-full h-full shadow-md flex flex-col items-center justify-center">
        <h1 className="text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[15vw] font-[Founder] leading-none text-center">
          READY <br className="md:hidden" /> TO START <br className="md:hidden" /> THE PROJECT?
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.6] sm:scale-75 md:scale-100">
          <Eyes />
        </div>
        <button className="uppercase px-6 py-3 text-xs md:text-base text-center text-white bg-zinc-900 rounded-full mt-8 md:mt-12 flex items-center gap-3">
          Start the project
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
        <h3 className="mt-4 text-sm md:text-base">OR</h3>
        <button className="uppercase px-6 py-3 text-xs md:text-base text-center text-black border-2 border-black bg-transparent rounded-full mt-4 flex items-center gap-3">
          hello@ochi.design
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default Ready;
