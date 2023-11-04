import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import NewPost from "../../components/newPost/NewPost";
import Footer from "../../components/footer/Footer";
import PostContainer from "../../components/postContainer/PostContainer";

const Home = () => {
  return (
    <div className="animate__animated animate__bounceInUp h-screen">
      <Navbar />
      <Header />
      <NewPost />
      <PostContainer />
      <Footer />
    </div>
  );
};

export default Home;
