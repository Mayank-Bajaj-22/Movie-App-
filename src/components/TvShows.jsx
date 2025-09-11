import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "SCSDB | Tv Shows";

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settv((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="py-3 w-screen h-screen">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Tv Shows{" "}
          <small className="text-sm ml-2 text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown
            title="Category"
            options={["airing_today", "on_the_air", "popular", "top_rated"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
