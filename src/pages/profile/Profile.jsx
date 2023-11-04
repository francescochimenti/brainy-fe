import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import UserProfile from "../../components/userProfile/UserProfile";

const Profile = () => {
  return (
    <div className="animate__animated animate__animated animate__bounceInUp">
      <Navbar />
      <UserProfile />
      <Footer />
    </div>
  );
};

export default Profile;
