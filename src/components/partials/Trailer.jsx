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
        <iframe
        width="80%"
        height="80%"
        src={`https://www.youtube.com/embed/${ytvideo.key}`}
        title="YouTube trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      ) : (
        <NothingToShow />
      )}
    </div>
  );
};

export default Trailer;
