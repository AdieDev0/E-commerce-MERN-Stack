import React from "react";
import Layout from "../components/Layout.jsx";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About BuyHive</h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to BuyHive, your ultimate destination for seamless online shopping. We bring you the best products, competitive prices, and an unmatched user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To empower buyers with a reliable, fast, and user-friendly platform to find everything they need in one place.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
            <p className="text-gray-600">
              We offer a curated selection of high-quality products, exceptional customer service, and secure payment options to make your shopping experience worry-free.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted e-commerce platform globally, connecting buyers and sellers with ease.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
