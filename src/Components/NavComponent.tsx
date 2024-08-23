import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const NavComponent = () => {
  const [viewNav, setViewNav] = useState<boolean>(false);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="navBg px-6 h-16 text-white sticky top-0 z-10">
      <main className="container mx-auto flex items-center justify-between h-full">
        <a href="#" className="font-bold text-3xl lg:text-4xl logo ">
          Ced
        </a>

        <GiHamburgerMenu
          className="h-8 w-auto lg:hidden"
          onClick={() => setViewNav(true)}
        />

        <div
          className={`fixed ${
            viewNav ? " right-0 " : "-right-1/2 "
          } top-0 bg-[#8948be] w-1/2 h-full rounded p-4 transition-all lg:static lg:bg-transparent lg:p-0`}
        >
          <IoMdClose
            className="ml-auto h-auto w-6 lg:hidden"
            onClick={() => setViewNav(false)}
          />
          <ul className="text-xl font-bold h-full  gap-10 pt-16 flex flex-col lg:text-xl lg:flex-row lg:items-center lg:justify-center lg:p-0">
            {links.map((item) => (
              <li className="hover:text-[#DCCFED] transition-colors" key={item}>
                <a className="capitalize " href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </nav>
  );
};
