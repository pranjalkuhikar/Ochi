import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-100 whitespace-nowrap overflow-hidden flex items-center">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[45vh] font-[Founder] leading-none uppercase -mb-10 -mt-20 pr-16"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[45vh] font-[Founder] leading-none uppercase -mb-10 -mt-20 pr-16"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
