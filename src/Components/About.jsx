function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="w-full  bg-[#CDEA68] font-[Neue] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text  p-20">
        <h1 className="text-[4vw] leading-[4vw] tracking-tight">
          Ochi is a strategic partner for fast-growing tech <br /> businesses
          that need to raise funds, sell products, <br />
          explain complex ideas, and hire great people.
        </h1>
      </div>
      <div className="flex justify-between w-full my-5 p-20 text-[1.2vw] border-t-[1px] border-[#99AD53]">
        <h3>What you can expect:</h3>
        <div className="w-[27vw] -mr-[30vw] leading-7">
          <h2>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether its live or digital,
            delivered for one or a hundred people.
          </h2>
          <br />
          <h2>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h2>
        </div>
        <h3 className="p-28 leading-6">
          S: <br />
          <br />
          Instagram <br />
          Behance <br />
          Facebook <br />
          Linkedin
        </h3>
      </div>
      <div className="flex justify-between w-full mt-5 p-20 text-[1.2vw] border-t-[1px] border-[#99AD53]">
        <div className="w-1/2">
          <h3 className="text-[4vw]">Our approach:</h3>
          <button className="px-10 py-3 rounded-full bg-zinc-900 text-white uppercase flex gap-5 items-center">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-red-500 rounded-lg overflow-hidden">
          <img
            src="./img2.jpg"
            alt=""
            className="object-center object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
