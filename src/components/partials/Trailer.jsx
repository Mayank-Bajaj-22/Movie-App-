// import React from "react";
// import ReactPlayer from "react-player";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

// const Trailer = () => {
//   const { pathname } = useLocation();
//   const category = pathname.includes("movie") ? "movie" : "tv";
//   const ytvideo = useSelector((state) => state[category].info.videos);
//   console.log(ytvideo);

//   return (
//     <div className="bg-[rgba(0,0,0,.9)] top-0 z-[100] left-0 absolute w-screen h-screen flex items-center justify-center">
//       <ReactPlayer
//         height={800}
//         width={1500}
//         url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
//       />
//     </div>
//   );
// };

// export default Trailer;

import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  if (!ytvideo || !ytvideo.key) {
    return (
      <div className="bg-[rgba(0,0,0,.9)] absolute inset-0 flex items-center justify-center text-white">
        Loading trailer...
      </div>
    );
  }

  const url = `https://www.youtube.com/watch?v=${ytvideo.key}`;
  console.log("TRAILER URL =>", url);

  return (
    <div className="bg-[rgba(0,0,0,.9)] top-0 z-[100] left-0 absolute w-screen h-screen flex items-center justify-center">
      <ReactPlayer
        height={700}
        width={1350}
        url={url}
        controls
        playing
        muted 
      />
    </div>
  );
};

export default Trailer;
