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
    <div className="w-full py-28">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-10">
        <h1 className="font-[Neue] text-6xl tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20 relative mt-20 w-full flex items-center gap-5">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card"
        >
          <h1 className="absolute  overflow-hidden left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-[Neue] text-[#CDEA68] tracking-tight text-8xl">
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
          className="card"
        >
          <h1 className="absolute overflow-hidden right-1/2 top-1/2 translate-x-[50%] -translate-y-[50%] font-[Neue] text-[#CDEA68] tracking-tight text-8xl">
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
      <div className="px-20 relative mt-28 w-full flex items-center gap-5">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="card"
        >
          <h1 className="absolute  overflow-hidden left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-[Neue] text-[#CDEA68] tracking-tight text-8xl">
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
          className="card"
        >
          <h1 className="absolute overflow-hidden right-1/2 top-1/2 translate-x-[50%] -translate-y-[50%] font-[Neue] text-[#CDEA68] tracking-tight text-8xl">
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
      <button className="uppercase px-6 py-3 text-center text-white bg-zinc-900 rounded-full  mt-20 ml-[43%]">
        view all case studies
      </button>
    </div>
  );
}

export default Featured;
