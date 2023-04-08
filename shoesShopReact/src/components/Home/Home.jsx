import React from "react";
import Lottie from "lottie-react";
import reader from "../../assets/reader.json";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between container mx-auto p-4">
        <div>
          <span className="font-bold mb-2 badge badge-secondary">
            On Sale !
          </span>
          <h1 className="text-4xl font-bold">
            A reader lives a <br className="hidden md:block" /> thousand lives{" "}
            <span className="inline-block text-blue-400"> before he dies</span>
          </h1>
          <p className="text-base text-gray-700 md:text-lg w-3/5 font-semibold mt-4">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div className="mt-4">
            <Link to="/book">
              <span>
                <button className="btn btn-primary">
                  Visit Store{" "}
                  <ShoppingCartIcon className="w-5 text-gray-100 ml-2"></ShoppingCartIcon>{" "}
                </button>
              </span>
              <span className="ml-4">
                <button className="btn btn-active btn-ghost">Learn More</button>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-4/5">
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
