import RCards from "./RCards";

function Review() {
  return (
    <div className="w-full py-10 md:py-28">
      <div className="w-full px-4 md:px-20 border-b-[1px] border-zinc-400 pb-6 md:pb-10">
        <h1 className="font-[Neue] text-4xl md:text-6xl tracking-tight">
          Clients’ reviews
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 mt-6 text-sm md:text-lg tracking-tight">
        <div className="mb-6 md:mb-0">
          <u>Karman Ventures</u>
        </div>
        <div className="flex flex-col gap-4 md:gap-10 mb-6 md:mb-0">
          <h1 className="text-base md:text-lg">Services:</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            <button className="uppercase text-xs md:text-base px-3 py-1 border-[1px] border-black hover:text-white hover:bg-zinc-900 rounded-full mb-2 md:mb-0 md:mr-2">
              Investor Deck
            </button>
            <button className="uppercase text-xs md:text-base px-1 py-1 border-[1px] border-black hover:text-white hover:bg-zinc-900 rounded-full">
              Sales Deck
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10 mb-6 md:mb-0">
          <h1 className="text-base md:text-lg">William Barnes</h1>
          <img
            src="./img8.png"
            alt=""
            className="rounded-lg w-20 md:w-[120px]"
          />
          <p className="text-xs md:text-base">
            They were transparent about the time and the stages of the <br />
            project. The end product is high quality, and I feel confident about
            <br />
            how they were handholding the client through the process. I feel
            <br />
            like I can introduce them to someone who needs to put a sales <br />
            deck together from scratch, and they would be able to handhold
            <br />
            the client experience from 0 to 100 very effectively from story to
            <br />
            design. 5/5
          </p>
        </div>
        <div className="text-[#BFBFBF] text-xs md:text-base">READ</div>
      </div>
      <div className="flex flex-col mt-10">
        {[
          { name: "Planetly", person: "Nina Walloch", width: "w-auto md:w-28" },
          { name: "Workiz Easy", person: "Tomer Levy", width: "w-auto md:w-40" },
          { name: "Premium Blend", person: "Ellen Kim", width: "w-auto md:w-44" },
          { name: "Hypercare Systems", person: "Brendan Goss", width: "w-auto md:w-56" },
          { name: "Officevibe", person: "Raff Labrie", width: "w-auto md:w-36" },
          { name: "Orderlion", person: "Stefan Strohmer", width: "w-auto md:w-36" },
          { name: "Black Book", person: "Jaci Smith", width: "w-auto md:w-40" },
          { name: "Trawa Energy", person: "David Budde", width: "w-auto md:w-44" },
        ].map((item, index) => (
          <div
            key={index}
            className={`w-full px-4 md:px-20 border-t-[1px] py-3 md:py-5 border-zinc-400 ${
              index === 7 && "border-b-[1px]"
            }`}
          >
            <div className="flex items-center justify-between text-sm md:text-xl">
              <h3>
                <u>{item.name}</u>
              </h3>
              <h3 className={item.width}>{item.person}</h3>
              <h3>
                <u>READ</u>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center px-4 md:px-20 py-10 md:py-28 gap-5">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <RCards
            bg={"bg-[#004D43]"}
            text={"text-[#A2C960]"}
            img={"./one.svg"}
            btn={"©️2019-2022"}
            border={"border-[#A2C960]"}
          />
        </div>
        <div className="w-full md:w-[25%] mb-5 md:mb-0">
          <RCards
            bg={"bg-[#212121]"}
            text={"text-white"}
            img={"./three.svg"}
            btn={"Rating 5.0 on clutch"}
            border={"border-white"}
          />
        </div>
        <div className="w-full md:w-[25%]">
          <RCards
            bg={"bg-[#212121]"}
            text={"text-white"}
            img={"./two.png"}
            btn={"business bootcamp alumni"}
            border={"border-white"}
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
