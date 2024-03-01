/* eslint-disable react/prop-types */
function Card({ title, img }) {
  return (
    <div className="cards">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-black rounded-full"></div>
        <h4 className="text-lg">{title}</h4>
      </div>
      <div className="cardcontainer h-[65vh]">
        <div className="card rounded-xl w-full h-full">
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
