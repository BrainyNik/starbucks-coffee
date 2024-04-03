import img1 from "../images/section2_img1.jpg";
import img2 from "../images/section2_img2.jpg";
import img3 from "../images/section2_img3.jpg";

import Card from "./card";

function Section2() {
  const cards = [
    {
      img: img1,
      heading: "THE CHERRY",
      info: "High Grown (Preferably Around 2300m) Picked Ripe (Preferably 23% Brix)",
    },
    {
      img: img2,
      heading: "THE BEAN",
      info: "Carefully Processed, Washed, Natural or Honey",
    },
    {
      img: img3,
      heading: "THE ROAST",
      info: "Favourite Part of The Journey",
    },
  ];

  return (
    <div className="section flex flex-col items-center font-kalam  gap-6">
      <div className="mb-4 font-extrabold">
        <p className="flex flex-col text-center gap-1 text-4xl md:text-6xl ">
          THE STORY <span>OF OUR COFFEE</span>
        </p>
      </div>

      <div className="coffee__story__cards flex flex-col items-center  w-full justify-center md:flex-row md:gap-6 gap-5">
        {cards?.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Section2;
