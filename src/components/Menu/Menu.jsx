import { CiCoffeeCup } from "react-icons/ci";
import caramel from "../images/Caramel.png";
import latte from "../images/latte.png";
import mocha from "../images/cafeMocha.png";
import espresso from "../images/Espresso.png";
import shakenEspresso from "../images/ShakenEspresso.png";
import { useState } from "react";
import { GiCakeSlice } from "react-icons/gi";
import Drinks from "./Drinks";
import Pastries from "./Pastries";
import cheesecake from "../images/cheesecake.png";
import chocolate from "../images/chocolate_cake.png";
import german from "../images/german_choc.png";
import stc from "../images/strawberry_cheesecake.png";

// Define coffee options with images
const coffees = [
  {
    name: "Iced Shaken Espresso",
    price: "30.00",
    image: shakenEspresso,
  },
  {
    name: "Caramel Macchiato",
    price: "25.00",
    image: caramel,
  },
  {
    name: "Latte",
    price: "20.00",
    image: latte,
  },
  {
    name: "Mocha",
    price: "22.00",
    image: mocha,
  },
  {
    name: "Espresso",
    price: "15.00",
    image: espresso,
  },
];

const pastries = [
  { name: "Cheescake", price: "30.00", image: cheesecake },
  { name: "Chocolate Pastry", price: "30.00", image: chocolate },
  { name: "German Chocolate Pastry", price: "30.00", image: german },
  { name: "Stawberry Cheescake", price: "30.00", image: stc },
];

const Menu = () => {
  const [selectedCups, setSelectedCups] = useState(
    new Array(coffees.length).fill(null)
  );

  const [menuSelect, setMenuSelect] = useState(0);

  const icons = [<CiCoffeeCup key="coffee" />, <GiCakeSlice key="cake" />];

  const handleMenuSelect = (index) => {
    setMenuSelect(index === menuSelect ? menuSelect : index);
  };

  return (
    <div className="bg-white lg:px-20 paper before:-top-1 py-5 " id="PopularItems">
      <div className="flex flex-col md:flex-row justify-between items-center px-5">
        <div className="text-[2rem] md:text-[4rem] text-black">
          Popular Items
        </div>
        <div className="flex  gap-5">
          {icons?.map((icon, index) => (
            <div
              key={index}
              className={`h-[50px] w-[50px] rounded-full flex items-center justify-center text-2xl cursor ${
                menuSelect === index ? `bg-[#47A878]` : `bg-gray-500`
              }`}
              onClick={() => handleMenuSelect(index)}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center p-7 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mt-7 ">
          {menuSelect === 0
            ? coffees.map((coffee, coffeeIndex) => (
                <Drinks
                  key={coffeeIndex}
                  coffeeIndex={coffeeIndex}
                  coffee={coffee}
                  selectedCups={selectedCups}
                  setSelectedCups={setSelectedCups}
                />
              ))
            : pastries.map((pastrie, pIndex) => (
                <Pastries key={pIndex} pastry={pastrie} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
