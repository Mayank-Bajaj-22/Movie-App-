import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const TopNav = () => {
  const [query, setquery] = useState("");
  // console.log(query);

  const GetSearches = async () => {
    try {
      const d = await axios.get(`/search/multi?query=${query}`)
      console.log(d)
    } catch (error) {
      console.log("ERROR: ",error);
    }
  }

  useEffect(()=>{
    GetSearches()
  }, [query])

  return (
    <div className="w-[80%] h-[10vh] relative flex justify-start ml-[18%] items-center">
      <i class="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none rounded-full bg-transparent"
        type="text"
        placeholder="search..."
      />
      {query.length > 0 && <i onClick={()=>setquery("")} class="text-zinc-400 ri-close-line"></i>}

      <div className="absolute top-[90%] w-[65%] max-h-[50vh] bg-zinc-200 overflow-y-auto rounded">
        {/* <Link className="hover:text-black hover:bg-zinc-300 text-zinc-600 duration-300 font-semibold border-b-2 border-zinc-100 bg-zinc-200 w-[100%] flex items-center justify-start p-7">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
         
      </div>
    </div>  
  ); 
};

export default TopNav;
