import hero_img from "../images/coffee.png";

const HeroPage = () => {
  return (
    <div className="lg:h-screen bg-[#f5f5f5] flex flex-col items-center md:justify-between mt-20  px-3 mb-2 paper pt-10 w-full lg:justify-center">
      <div className="w-full relative">
        <img
          className=" w-full h-[600px] lg:h-[700px] object-contain z-40"
          src={hero_img}
          alt=""
        />

        <div className="absolute flex flex-col text-center top-0 left-1/2 -translate-x-1/2 ">
          <div className="text-[1.5rem] text-gray-400 mt-7 font-extrabold md:text-[2rem] z-50">
            Drink of the day
          </div>
          <div className=" text-black uppercase font-extrabold text-[3rem]  text-center tracking-wide md:text-[5em] lg:text-[10rem] z-10 md:z-0">
            <p>Brewscape</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
