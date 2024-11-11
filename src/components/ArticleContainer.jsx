import { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { articles } from "../../public/constent";
import { motion as m } from "framer-motion";

export const ArticleContainer = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = articles.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <section className="w-10/12 mx-auto">
      <m.h2
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="font-source text-4xl lg:text-5xl font-semibold tracking-wide"
      >
        Latest Articles
      </m.h2>
      <div
        className={`${"flex"} flex-col lg:flex-row flex-wrap justify-between mt-20 gap-16 lg:gap-0`}
      >
        {currentItems?.map((art) => {
          return (
            <ArticleCard
              key={art.key}
              img={art.img}
              header={art.header}
              desc={art.desc}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-2 my-20 justify-center">
        <AiOutlineLeft
          className={`border h-6 w-6 rounded-md cursor-pointer ${
            currentPage === 1
              ? "text-gray-400 border-gray-400"
              : "text-blueish border-blueish "
          }`}
          onClick={() => goToPreviousPage()}
        />
        <span>
          {currentPage}/{totalPages}
        </span>
        <AiOutlineRight
          className={`border h-6 w-6 border-black rounded-md cursor-pointer ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-400"
              : " text-blueish border-blueish"
          }`}
          onClick={() => goToNextPage()}
        />
      </div>
    </section>
  );
};
