/* eslint-disable react/prop-types */
function RCards({ img, btn, bg, text, border }) {
  return (
    <div className="w-full">
      <div className={`relative h-[40vw] md:h-[25vw] ${bg} rounded-lg`}>
        <img
          src={img}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-16 md:h-20 object-cover object-center"
        />
        <button
          className={`absolute uppercase bottom-4 left-4 md:bottom-10 md:left-10 px-2 py-1 text-[0.6rem] md:text-xs md:px-[1vw] md:py-[0.5vw] ${text} ${border} border-2 rounded-full`}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}

export default RCards;
