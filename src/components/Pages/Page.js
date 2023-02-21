import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Timeline from "../Timeline/Timeline";

const Page = () => {

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Timeline />
        <Sidebar />
      </div>
    </>
  );
};

export default Page;
