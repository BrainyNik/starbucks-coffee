const Section3 = () => {
  // Data for each section
  const sectionsData = [
    { number: "46", lines: ["YEARS OF", "EXPERIENCE"] },
    { number: "1M+", lines: ["HAPPY", "CLIENTS"] },
    { number: "69", lines: ["COUNTRIES", "OPERATING"] },
    { number: "1K+", lines: ["PRODUCTS", "AVAILABLE"] },
  ];

  return (
    <div className="py-7 px-8 lg:px-[7rem]  bg-white text-black flex flex-col items-center  gap-8 sm:flex-row sm:justify-between before:h-4 before:-top-1 paper" id="about">
      {sectionsData.map((section, index) => (
        <div
          key={index}
          className={`w-[200px] border-b-2 border-b-black pb-3 text-center py-4  ${
            index !== 0 && " sm:border-l-black sm:border-l-2 "
          }  sm:pl-3 text-4xl sm:border-b-0 sm:text-left `}
        >
          <p>{section.number}</p>
          {section.lines.map((line, idx) => (
            <p key={idx} className="text-xl">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Section3;
