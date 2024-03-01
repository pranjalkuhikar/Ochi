import Eye from "./Eye";

const Eyes = () => {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-[url('/img3.jpg')] bg-cover bg-center"
      >
        <Eye />
      </div>
    </div>
  );
};

export default Eyes;
