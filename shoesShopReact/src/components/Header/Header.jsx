import React, { useState } from "react";
import { BoltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-100">
      <div className="relative flex items-center justify-between container mx-auto p-4">
        {/* logo item -----------*/}
        <Link to="/" className="flex gap-3">
          <span>
            <BoltIcon className="w-8"></BoltIcon>
          </span>
          <span className="text-2xl font-bold tracking-wide">
            Book<span className="text-orange-600">Shop</span>
          </span>
        </Link>

        {/* link bar item -------*/}
        <ul className="hidden md:flex gap-10 font-bold text-[18px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "active" : isActive ? "text-orange-400" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "active" : isActive ? "text-orange-400" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book"
              className={({ isActive, isPending }) =>
                isPending ? "active" : isActive ? "text-orange-400" : ""
              }
            >
              Book
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <Bars3Icon className="w-5"></Bars3Icon>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="flex gap-3">
                      <span>
                        <BoltIcon className="w-8"></BoltIcon>
                      </span>
                      <span className="text-2xl font-bold tracking-wide">
                        Book<span className="text-orange-600">Shop</span>
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4 font-bold text-[18px]">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-orange-400"
                            : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-orange-400"
                            : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/book"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-orange-400"
                            : ""
                        }
                      >
                        Book
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
