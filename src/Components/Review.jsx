import RCards from "./RCards";

function Review() {
  return (
    <div className="w-full py-28">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-10">
        <h1 className="font-[Neue] text-6xl tracking-tight">
          Clients’ reviews
        </h1>
      </div>
      <div className="flex justify-between px-20 mt-6 text-lg tracking-tight">
        <div>
          <u>Karman Ventures</u>
        </div>
        <div className="flex flex-col gap-10">
          <h1>Services:</h1>
          <button className="uppercase px-3 py-1 border-[1px] border-black hover:text-white hover:bg-zinc-900 rounded-full">
            Investor Deck
          </button>
          <button className="uppercase px-1 py-1 border-[1px] border-black hover:text-white hover:bg-zinc-900 rounded-full">
            Sales Deck
          </button>
        </div>
        <div className="flex flex-col gap-10">
          <h1>William Barnes</h1>
          <img src="./img8.png" alt="" className="rounded-lg" width={"120vw"} />
          <p>
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
        <div className="text-[#BFBFBF]">READ</div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Planetly</u>
            </h3>
            <h3 className="w-28">Nina Walloch</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Workiz Easy</u>
            </h3>
            <h3 className="w-40">Tomer Levy</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Premium Blend</u>
            </h3>
            <h3 className="w-44">Ellen Kim</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Hypercare Systems</u>
            </h3>
            <h3 className="w-56">Brendan Goss</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Officevibe</u>
            </h3>
            <h3 className="w-36">Raff Labrie</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Orderlion</u>
            </h3>
            <h3 className="w-36">Stefan Strohmer</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Black Book</u>
            </h3>
            <h3 className="w-40">Jaci Smith</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
        <div className="w-full px-20 border-t-[1px] border-b-[1px] py-5 border-zinc-400">
          <div className="flex items-center justify-between text-xl">
            <h3>
              <u>Trawa Energy</u>
            </h3>
            <h3 className="w-44">David Budde</h3>
            <h3>
              <u>READ</u>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center px-20 py-28 gap-5">
        <div className="w-1/2">
          <RCards
            bg={"bg-[#004D43]"}
            text={"text-[#A2C960]"}
            img={"./one.svg"}
            btn={"©️2019-2022"}
            border={"border-[#A2C960]"}
          />
        </div>
        <div className="w-[25%]">
          <RCards
            bg={"bg-[#212121]"}
            text={"text-white"}
            img={"./three.svg"}
            btn={"Rating 5.0 on clutch"}
            border={"border-white"}
          />
        </div>
        <div className="w-[25%]">
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
