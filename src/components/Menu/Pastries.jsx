/* eslint-disable react/prop-types */

const Pastries = ({ pastry }) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-4 border border-green-600 ">
        <div className="bg-[#47A878] p-3 h-[300px]  rounded-lg md:h-[400px]">
          <img
            src={pastry.image}
            alt={pastry.name}
            className="h-full w-full object-contain mb-4 rounded-lg"
          />
        </div>

        <div className="flex text-3xl justify-between py-3 px-2">
          <p className="capitalize text-black font-bold pr-14">{pastry.name}</p>
          <p className="text-[#37634d] font-bold flex flex-col text-right tracking-wider">
            {pastry.price}
            <span className="text-sm tracking-normal">Best Sales</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pastries;
