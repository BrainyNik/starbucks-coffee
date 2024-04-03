const Contact = () => {
  return (
    <div className="p-6 pt-14 lg:px-[7rem]" id="contact">
      <div className=" grid grid-cols-0  lg:grid-cols-2 gap-2">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.256097824795!2d73.83903741024604!3d18.5173256825029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4daa097f%3A0xce339b60765d5009!2sFergusson%20College%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712135707487!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="p-2 px-5">
          <p className="w-full text-center text-4xl">Contact us</p>
          <div className="md:p-7  flex flex-col  ">
            <form
              action=""
              className="flex flex-col gap-8 items-center justify-center "
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full p-2 md:p-5 text-black outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full p-2 md:p-5 text-black outline-none"
              />

              <textarea
                type="text"
                placeholder="Message"
                className="w-full rounded-full p-2 md:p-5  text-black outline-none resize-y"
              />

              <button
                type="submit"
                className="p-2 md:p-4  bg-white w-[100px] rounded-full text-black hover:bg-[#47A878] hover:text-white "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
