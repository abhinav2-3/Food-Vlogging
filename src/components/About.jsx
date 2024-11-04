import "../index.css";
import aboutImg from "../assets/aboutImg.png";
import { motion as m } from "framer-motion";

export const About = () => {
  return (
    <section className="my-20 lg:my-20 gray-gradient lg:px-60 flex py-20 lg:py-0 justify-between gap-40 text-center lg:text-left px-10">
      <m.img
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={aboutImg}
        className="hidden lg:block"
      ></m.img>
      <div className="w-full lg:w-[48%] flex flex-col justify-center lg:items-start items-center gap-10 lg:gap-6">
        <m.h2
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="font-poppins font-medium text-4xl"
        >
          About Us
        </m.h2>
        <m.p
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          className="text-sm lg:text-base"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </m.p>
        <m.button
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="rounded-3xl w-32 lg:w-40 h-10 lg:h-12 bg-pinkish text-white font-bold z-50 text-sm lg:text-base"
        >
          Read More
        </m.button>
      </div>
    </section>
  );
};
