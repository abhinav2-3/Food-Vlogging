import PropTypes from "prop-types";
import { motion as m } from "framer-motion";

export const ArticleCard = (props) => {
  return (
    <m.div
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-10 lg:w-[30%] p-7 border border-gray-400 rounded-2xl text-[#444957] text-sm"
    >
      <img src={props.img}></img>
      <h3 className="font-poppins text-blueish text-xl lg:text-2xl font-bold">
        {props.header}
      </h3>
      <p className="tracking-wide">{props.desc}</p>
      <button className="rounded-3xl w-32 lg:w-40 h-10 lg:h-12 font-bold z-50 border-2 border-blueish">
        Read More
      </button>
    </m.div>
  );
};

ArticleCard.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
