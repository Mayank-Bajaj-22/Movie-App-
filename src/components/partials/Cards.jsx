import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap justify-center gap-13 w-full px-[5%] py-10 bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
        to={`/${c.media_Type || title}/details/${c.id}`}
          key={i}
          className="relative w-[30vh] bg-[#2a2a35] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              className="h-[330px] w-full object-cover rounded-t-xl"
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`}
              alt={c.name || c.title}
            />
            {/* gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
          </div>
          <div className="p-3">
            <h1 className="text-lg text-white font-semibold truncate">
              {c.name || c.title || c.original_title || c.original_name}
            </h1>
          </div>
          {c.vote_average && (
            <div className="absolute bottom-[20%] right-[-10%] bg-yellow-600 text-xl text-white rounded-full w-[6vh] h-[6vh] flex items-center justify-center z-999">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
