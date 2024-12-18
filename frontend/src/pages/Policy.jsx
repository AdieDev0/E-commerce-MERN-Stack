import React from "react";
import Layout from "../components/Layout.jsx";

const Policy = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
          <p className="text-gray-600 mb-4">
            At BuyHive, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We may collect personal information such as your name, email address, phone number, and payment details when you interact with our platform.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            Your information is used to process transactions, improve our services, and communicate updates or promotions relevant to your interests.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Your Choices</h2>
          <p className="text-gray-600 mb-4">
            You can update your personal information or opt-out of certain data collection practices by contacting us at support@buyhive.com.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@buyhive.com.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
