import { FaUserCircle, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { TbArrowsCross } from "react-icons/tb";

const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const [mobileNav, setMobileNav] = useState(false);
  const [userNav, setUserNav] = useState(false);

  const toggleUsernav = () => setUserNav((prev) => !prev);

  const toggleMobileNav = () => setMobileNav((prev) => !prev);
  return (
    <div className="flex justify-between items-center h-[90px] p-7 md:p-10 lg:p-3 lg:px-12 ">
      <a className="text-3xl font-bold z-20 " href="/">
        QScript
      </a>
      <div className="hidden gap-1 lg:flex md:flex-row md:p-2 md:gap-[2em]">
        <table>
          <tbody>
            <tr>
              {links.map((link, index) => (
                <td
                  key={index}
                  className="md:border md:border-1 md:px-10 md:py-2 hover:cursor-pointer hover:bg-[#225139] transition-colors duration-200 ease-in-out"
                >
                  <a href={link.path}>{link.label}</a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-[#47a878] p-2 px-5 rounded-full  flex gap-5 items-center">
        <button
          className="relative"
          onClick={toggleUsernav}
          onBlur={() => setTimeout(() => setUserNav(false), 200)}
        >
          <FaUserCircle className="text-2xl cursor-pointer" />
          {userNav && (
            <div className="absolute bg-[#47a878] w-max cmn  -left-[2.7rem] top-7 text-sm shadow-2xl shadow-black rounded-sm">
              <a
                href="/fk"
                className="p-3 pt-5 flex items-center gap-1 hover:bg-[#225139]  transition-colors duration-200 ease-in-out"
              >
                <FaUserCircle />
                View Profile
              </a>
              <hr className="" />
              <div className="flex items-center justify-center  hover:bg-[#225139]  transition-colors duration-200 ease-in-out">
                <FaSignOutAlt className="text-xl" />
                <a href="/signout">
                  <p className="flex flex-col items-end px-2">
                    SignOut
                    <span className="text-[11px]   px-1">@User</span>
                  </p>
                </a>
              </div>
            </div>
          )}
        </button>
        <FaShoppingCart className=" text-2xl cursor-pointer" />
        {mobileNav ? (
          <TbArrowsCross
            className="text-2xl lg:hidden cursor-pointer z-20"
            onClick={toggleMobileNav}
          />
        ) : (
          <CiMenuFries
            className="text-2xl lg:hidden cursor-pointer z-20"
            onClick={toggleMobileNav}
          />
        )}
      </div>

      {mobileNav && (
        <div className="lg:hidden absolute top-0 left-0  h-screen w-screen z-10 flex items-center justify-center glass">
          <table>
            <tbody className="flex flex-col gap-5 text-center">
              {links.map((link, index) => (
                <tr key={index}>
                  <td className="flex justify-center text-4xl hover:cursor-pointer hover:bg-[#225139] rounded-md p-2 transition-colors duration-200 ease-in-out">
                    <a href={link.path}>{link.label}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Navbar;
