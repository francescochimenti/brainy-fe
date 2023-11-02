import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPost/NewPost";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Header />
      <NewPost />
      <Footer />
    </div>
  );
};

export default Home;
