const Footer = () => {
  return (
    <div className="py-10  text-center" >
      <div className="grid grid-cols-[2fr,1fr,2fr]">
        <div className="col-span-1  border-y-2    text-xl  flex flex-col gap-4 items-center justify-evenly md:flex-row md:gap-10 md:text-2xl">
          <a href="/" className="md:p-2 ">
            Home
          </a>
          <a href="#PopularItems" className="md:p-2 ">
            Popular Items
          </a>
        </div>
        <div className="col-start-2 col-end-3 border-2 h-[100px] flex flex-col items-center justify-center  p-2 text-2xl md:flex-row md:gap-2 md:text-4xl">
          <p>QScript</p>
          <p>Coffee</p>
        </div>
        <div className="col-span-1  border-y-2  text-md flex flex-col gap-4 items-center justify-evenly md:flex-row   md:gap-10 md:text-xl ">
          <a href="#about" className="md:p-2">
            About 
          </a>
          <a href="#contact" className="md:p-2">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
