import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import WeeklyPost from "../../components/weeklyPost/WeeklyPost";

const TopPost = () => {
  return (
    <>
      <Navbar />
      <WeeklyPost />
      <Footer />
    </>
  );
};

export default TopPost;
