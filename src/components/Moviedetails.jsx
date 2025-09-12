import { useEffect } from "react";
import { asyncloadmovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removemovie } from "../store/reducers/movieSlice";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "../components/Loading";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative w-screen min-h-screen px-[8%] overflow-y-auto"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and details */}
      <div className="w-full flex">
        <img
          className="h-[60vh] md:h-[60vh] w-auto mt-5 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover rounded-t-xl"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.bakdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[13%] text-white">
          <h1 className="text-5xl text-white font-black">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-200 ml-3">
              {info.detail.release_date.split("-")[0]}
            </small>
          </h1>

          <div className="mt-3 mb-5 flex items-center gap-x-5">
            <span className="bg-yellow-600 text-xl text-white rounded-full w-[6vh] h-[6vh] flex items-center justify-center z-[10]">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="font-semibold text-xl w-[60px] leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mt-5 mb-2">Overview</h1>
          <p className="leading-relaxed text-zinc-200 mb-6">
            {info.detail.overview}
          </p>

          <h1 className="text-2xl mt-5 mb-2">Movie Translated</h1>
          <p className="text-zinc-300 mb-6 text-base">
            {info.translations.join(", ")}
          </p>

          <Link
            className="inline-block p-5 rounded-lg bg-[#6556cd] hover:bg-[#4b44b6] transition duration-300 shadow-lg"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl mr-2 ri-play-fill"></i>PLay Trailer
          </Link>
        </div>
      </div>

      {/* Part 3 Available Platform */}
      <div className="w-full md:w-[80%] flex flex-col gap-y-8 mt-9 text-white mb-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-6 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-6 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-6 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <hr className="text-zinc-300 mt-10 mb-5 boarder-none h-[2px]" />
      {/* Part 4 Recommendations */}
      <h1 className="text-3xl font-bold text-white mb-2">
        Recommendations & Similar Movies
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
