import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NothingToShow from "../NothingToShow";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);

  return (
    <div className="bg-[rgba(0,0,0,.9)] top-0 z-[100] left-0 absolute w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="ri-close-fill hover:text-[#6556cd] absolute z-[100] text-3xl text-white right-[5%] top-[5%]"
      ></Link>

      {ytvideo ? (
        <ReactPlayer
          height={600}
          width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          controls
        />
      ) : (
        <NothingToShow />
      )}
    </div>
  );
};

export default Trailer;
