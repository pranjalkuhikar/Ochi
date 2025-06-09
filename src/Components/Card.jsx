/* eslint-disable react/prop-types */
function Card({ title, img }) {
  return (
    <div className="cards w-full">
      <div className="flex items-center gap-2 mb-2 md:mb-4">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></div>
        <h4 className="text-sm md:text-lg">{title}</h4>
      </div>
      <div className="cardcontainer h-[30vh] md:h-[65vh]">
        <div className="card rounded-xl w-full h-full overflow-hidden">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
