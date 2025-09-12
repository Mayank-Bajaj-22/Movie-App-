import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  // console.log(data)
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.length > 0 ? data.map((d, i) => (
        <Link
        to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[17%] mr-5 mb-5 bg-zinc-900 h-[40vh] flex flex-col rounded-lg"
        >
          <img
            className="w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path || d.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-3 h-[50%] bg-zinc-900 flex flex-col justify-between overflow-y-auto">
            <h1 className="text-xl font-semibold">
              {d.name || d.title || d.original_title || d.original_name}
            </h1>
            <p className="mt-3 text-white">
              {d.overview
                ? d.overview.slice(0, 25)
                : "No description available"}
              ...
              <span className="text-zinc-500"> more</span>
            </p>
          </div>
        </Link>
      )) : <h1 className="text-3xl mt-5 text-white font-black text-center">Nothing to show</h1>}
    </div>
  );
};

export default HorizontalCards;
