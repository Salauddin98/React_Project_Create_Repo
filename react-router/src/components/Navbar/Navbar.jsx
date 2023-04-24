import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "FAQ", path: "/faq" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className="">
      <nav className="bg-purple-500">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500 "></XMarkIcon>
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500 " />
            )}
          </span>
        </div>
        <div>
          <ul
            className={`md:flex md:items-center pt-4 font-bold absolute  pl-8 pb-4 md:static duration-500 bg-purple-500 ${
              open ? "top-6" : "-top-36"
            }`}
          >
            {routes.map((route) => (
              <li key={route.id} className="mr-4">
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
