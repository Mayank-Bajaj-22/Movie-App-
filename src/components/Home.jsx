import React from "react";
import SideNav from "./partials/SideNav";

const Home = () => {
  document.title = "SCSDB | Homepage";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-screen"></div>
    </>
  );
};

export default Home;
