/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Card = ({ card, index }) => {
  return (
    <div
      className={`flex flex-col items-start gap-5 md:p-3 md:justify-around h-auto w-[300px] md:h-[460px] ${
        index === 1 ? "md:flex-col-reverse " : " "
      } border-b-2 border-b-white md:border-b-0 pb-5 `}
    >
      <img src={card.img} alt="card-img" className={`rounded-lg  w-full"}`} />

      <div className=" flex  flex-col gap-1">
        <p className="text-yellow-300 text-3xl">0{index + 1}</p>
        <p className="text-2xl">{card.heading}</p>
        <p className="font-thin">{card.info}</p>
      </div>
    </div>
  );
};

export default Card;
