import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen pt-1 px-4 md:px-0"
    >
      <div className="textStrusture mt-32 md:mt-52 px-4 md:px-20">
        {["we Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[12vw] md:w-[8vw] mr-[1vw] md:mr-[0.6vw] h-[8vw] md:h-[6vw] relative top-[1vw] md:top-[0.5vw] rounded-md overflow-hidden"
                  >
                    <img
                      className="object-center object-cover w-full h-full"
                      src="./img1.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[13vw] md:text-[9vw] leading-[11vw] md:leading-[7vw] tracking-tight md:tracking-tighter font-[Founder] font-semibold uppercase">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] px-4 md:px-20 py-5 border-zinc-800 mt-20 md:mt-32 lg:mt-48 flex flex-col md:flex-row items-start md:items-center justify-between ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className="text-sm md:text-lg font-normal tracking-tight leading-none mb-4 md:mb-0"
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2 mt-4 md:mt-0">
          <div className="px-4 py-2 md:px-5 md:py-2 border-2 border-zinc-700 rounded-full uppercase text-xs md:text-base hover:bg-black hover:text-white">
            Start the Project
          </div>
          <div className="px-2 py-2 border-2 border-zinc-700 rounded-full hover:bg-black hover:text-white">
            <FiArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
