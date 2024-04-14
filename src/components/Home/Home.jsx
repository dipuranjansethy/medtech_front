import React from "react";
import homeimg from "../../assets/images/homeimg.png";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className=" flex  justify-center" style={{ background: "#090E2A" }}>
      <div className=" mx-auto p-8shadow-lg rounded-lg flex items-center">
        <div>
          <h1 className="text-7xl font-bold text-white">
            Welcome To Careconnect
          </h1>
          <p className="text-2xl text-gray-600 mt-4">
            Empowering Lives Beyond Memory
          </p>
          <Button
            variant="contained"
            style={{
              background: "#FFFFFF", // Set button background color
              color: "#090E2A", // Set button text color
              padding: "12px 24px", // Set button padding
              marginTop: "16px", // Set top margin
              fontWeight: "bold",
              zIndex: 0,
            }}
          >
            Get Started
          </Button>
        </div>
        <img src={homeimg} className="w-96 ml-52" alt="Home" />{" "}
        {/* Added 'mr-8' for right margin */}
      </div>
    </div>
  );
};

export default Home;
