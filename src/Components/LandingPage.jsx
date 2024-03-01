import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen pt-1"
    >
      <div className="textStrusture mt-52 px-20">
        {["we Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] mr-[0.6vw] h-[6vw] relative top-[0.5vw] rounded-md overflow-hidden"
                  >
                    <img
                      className="object-center object-cover w-full h-full"
                      src="./img1.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[9vw] leading-[7vw] tracking-normal font-[Founder] font-light uppercase">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] px-20 py-5 border-zinc-800 mt-48 flex items-center justify-between  ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              className="text-lg font-normal tracking-tight leading-none"
              key={index}
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-2 border-zinc-700 rounded-full uppercase hover:bg-black hover:text-white">
            Start the Project
          </div>
          <div className="px-2 py-2 border-2 border-zinc-700 rounded-full hover:bg-black hover:text-white">
            <FiArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
