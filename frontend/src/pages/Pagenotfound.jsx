import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react"; // Default import
import Layout from "../components/Layout.jsx";
import notFound from "../assets/notFound.json";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        {/* Render Lottie Animation */}
        <Lottie animationData={notFound} loop className="size-96" />
        <h1 className="text-2xl font-bold font-Outfit mb-5 ">Oops! Page Not Found</h1>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 font-Outfit bg-violet-700 text-white rounded hover:bg-violet-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
