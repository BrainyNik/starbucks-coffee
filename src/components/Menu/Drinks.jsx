import { CiCoffeeCup } from "react-icons/ci";

/* eslint-disable react/prop-types */
const Drinks = ({ coffee, coffeeIndex, selectedCups, setSelectedCups }) => {
  const cupSizes = [
    { label: "Tall", size: "12 Fl Oz", iconSize: "1.8rem", priceMultiplier: 1 },
    {
      label: "Grande",
      size: "16 Fl Oz",
      iconSize: "2.5rem",
      priceMultiplier: 1.2,
    },
    {
      label: "Venti",
      size: "24 Fl Oz",
      iconSize: "3rem",
      priceMultiplier: 1.5,
    },
  ];

  const handleCupClick = (coffeeIndex, cupIndex) => {
    const newSelectedCups = [...selectedCups];
    if (newSelectedCups[coffeeIndex] === cupIndex) {
      // If already selected, deselect
      newSelectedCups[coffeeIndex] = null;
    } else {
      newSelectedCups[coffeeIndex] = cupIndex;
    }

    setSelectedCups(newSelectedCups);
  };

  const getPriceForCoffee = (coffeeIndex) => {
    const selectedCupIndex = selectedCups[coffeeIndex];
    if (selectedCupIndex !== null && selectedCupIndex !== undefined) {
      // If a cup size is selected, adjust the price based on the selected cup size
      const priceMultiplier = cupSizes[selectedCupIndex].priceMultiplier;
      return (
        parseFloat(coffee.price.replace("$", "")) * priceMultiplier
      ).toFixed(2);
    }
    // If no cup size is selected, return the default price
    return coffee.price;
  };

  return (
    <div
      key={coffeeIndex}
      className="bg-white rounded-xl p-4 border border-green-600 "
    >
      <div className="bg-[#47A878] p-3 h-[300px] rounded-lg md:h-[400px]">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="h-full w-full object-contain mb-4 rounded-lg"
        />
      </div>
      <div className="flex text-3xl justify-between py-3 px-2">
        <p className="capitalize text-black font-bold pr-14 text-xl">
          {coffee.name}
        </p>
        <p className="text-[#37634d] font-bold flex flex-col text-xl md:text-xl text-right tracking-wider">
          {/* Use getPriceForCoffee function to display the adjusted price */}$
          {getPriceForCoffee(coffeeIndex)}
          <span className="text-sm tracking-normal">Best Sales</span>
        </p>
      </div>
      <div className="flex justify-between px-7 py-5">
        {cupSizes.map((cup, cupIndex) => (
          <div key={cupIndex} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center text-[${
                cup.iconSize
              }] text-[#47A878] w-[50px] h-[50px] rounded-full ${
                selectedCups[coffeeIndex] === cupIndex
                  ? "bg-[#339462] text-white"
                  : "bg-[#f2f8f5] "
              }`}
              onClick={() => handleCupClick(coffeeIndex, cupIndex)}
            >
              <CiCoffeeCup size={cup.iconSize} />
            </div>
            <p className="text-black font-bold text-sm md:text-xl">
              {cup.label}
            </p>
            <p className="text-gray-400 ">{cup.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
