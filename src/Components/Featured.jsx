import { motion, useAnimation } from "framer-motion";
import Card from "./Card";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10 md:py-28">
      <div className="w-full px-4 md:px-20 border-b-[1px] border-zinc-400 pb-6 md:pb-10">
        <h1 className="font-[Neue] text-4xl md:text-6xl tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-4 md:px-20 relative mt-10 md:mt-20 w-full flex flex-col md:flex-row items-center gap-5">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card w-full md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="absolute hidden md:block overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[Neue] text-[#CDEA68] tracking-tight text-8xl z-10">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <Card title={"FYDE"} img={"./img4.png"} />
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card w-full md:w-1/2"
        >
          <h1 className="absolute hidden md:block overflow-hidden right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 font-[Neue] text-[#CDEA68] tracking-tight text-8xl z-10">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <Card title={"VISE"} img={"./img7.jpg"} />
        </motion.div>
      </div>
      <div className="px-4 md:px-20 relative mt-10 md:mt-28 w-full flex flex-col md:flex-row items-center gap-5">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="card w-full md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="absolute hidden md:block overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[Neue] text-[#CDEA68] tracking-tight text-8xl z-10">
            {"TRAWA".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <Card title={"TRAWA"} img={"./img5.jpg"} />
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="card w-full md:w-1/2"
        >
          <h1 className="absolute hidden md:block overflow-hidden right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 font-[Neue] text-[#CDEA68] tracking-tight text-8xl z-10">
            {"PREMIUM BLEND".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[3]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <Card title={"PREMIUM BLEND"} img={"./img6.png"} />
        </motion.div>
      </div>
      <div className="w-full flex justify-center">
        <button className="uppercase px-6 py-3 text-xs md:text-base text-center text-white bg-zinc-900 rounded-full mt-10 md:mt-20">
          view all case studies
        </button>
      </div>
    </div>
  );
}

export default Featured;
