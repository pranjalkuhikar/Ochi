/* eslint-disable react/prop-types */
function RCards({ img, btn, bg, text, border }) {
  return (
    <div className="w-full">
      <div className={`relative h-[25vw] ${bg} rounded-lg`}>
        <img
          src={img}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-20 object-cover object-center"
        />
        <button
          className={`absolute uppercase bottom-10 left-10 px-[1vw] py-[0.5vw] ${text} ${border} border-2 rounded-full`}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}

export default RCards;
