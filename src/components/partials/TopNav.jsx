import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import no_image from "/no_image.jpg";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex justify-start ml-[18%] items-center">
      <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none rounded-full bg-transparent"
        type="text"
        placeholder="search..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 ri-close-line"
        ></i>
      )}

      <div className="absolute top-[100%] left-[5%] w-[58%] max-h-[50vh] bg-zinc-200 overflow-y-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 text-zinc-600 duration-300 font-semibold border-b-2 border-zinc-100 bg-zinc-200 w-[100%] flex items-center justify-start p-7"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-10 shadow-lg"
              src={
                s.backdrop_path || s.profile_path || s.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path || s.poster_path
                    }`
                  : no_image
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
