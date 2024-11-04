import truck from "../assets/foodTruck.png";
import curve from "../assets/curve.png";
import pizza from "../assets/mainPizza.png";
import { motion as m } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <img src={pizza} className="lg:absolute top-0 lg:right-0 z-0"></img>
      <img src={curve} className="absolute top-0 lg:right-0 z-10"></img>
      <header className="flex justify-between items-center z-50 lg:mt-5 w-10/12 mx-auto">
        <m.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={truck}
          className="opacity-0 lg:opacity-100"
        ></m.img>
        <m.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute top-10 right-5 rounded-3xl w-28 lg:w-40 h-10 lg:h-12 text-white font-bold z-50 border border-white text-sm lg:text-base`}
        >
          Get in Touch
        </m.button>
      </header>
      <main className="w-9/12 lg:w-10/12 mx-auto">
        <section className="lg:w-[30%] lg:h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <m.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-source font-black text-4xl lg:text-6xl"
          >
            Discover the <span className="text-pinkish">Best</span> Food and
            Drinks
          </m.h1>
          <m.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="my-10 lg:w-11/12 text-sm lg:text-base"
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </m.p>
          <m.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className={`bg-pinkish rounded-3xl w-40 h-12 text-white font-bold z-50 border`}
          >
            Explore Now!
          </m.button>
        </section>
      </main>
    </>
  );
};
