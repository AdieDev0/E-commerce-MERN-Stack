import React, { useState } from "react";
import { Shield, FileText, Lock, Mail, Info } from "lucide-react";
import Layout from "../components/Layout.jsx";
import privacy from '../assets/privacy.png';

const PolicySection = ({ title, children, icon: Icon }) => (
  <div className="mb-6 bg-white shadow-sm rounded-lg p-6">
    <div className="flex items-center mb-4">
      {Icon && <Icon className="mr-3 text-blue-600" size={24} />}
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="text-gray-600">{children}</div>
  </div>
);

const Policy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const policyDetails = [
    {
      title: "Information We Collect",
      content: (
        <>
          <p>We collect information to provide and improve our services. This may include:</p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Personal identifiers (name, email, phone number)</li>
            <li>Payment and billing information</li>
            <li>Device and browser information</li>
            <li>Usage data and interaction with our platform</li>
          </ul>
          <p className="mt-2 text-sm italic text-gray-500">
            We collect only necessary information and always with your consent.
          </p>
        </>
      ),
      icon: FileText
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Process transactions and payments</li>
            <li>Provide customer support</li>
            <li>Send important updates and notifications</li>
            <li>Improve our services and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-2 text-sm italic text-gray-500">
            We never sell your personal information to third parties.
          </p>
        </>
      ),
      icon: Shield
    },
    {
      title: "Data Security",
      content: (
        <>
          <p>We prioritize the security of your personal information through:</p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Encryption of sensitive data</li>
            <li>Regular security audits</li>
            <li>Multi-factor authentication</li>
            <li>Strict access controls</li>
            <li>Compliance with industry-standard security protocols</li>
          </ul>
          <p className="mt-2 text-sm italic text-gray-500">
            Your trust is our top priority.
          </p>
        </>
      ),
      icon: Lock
    },
    {
      title: "Your Rights and Choices",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside pl-4 mt-2">
            <li>Access your personal information</li>
            <li>Request data correction</li>
            <li>Delete your account and data</li>
            <li>Opt-out of marketing communications</li>
            <li>Restrict data processing</li>
          </ul>
          <p className="mt-2 text-sm italic text-gray-500">
            Contact us to exercise these rights.
          </p>
        </>
      ),
      icon: Info
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img 
              src={privacy} 
              alt="Privacy Policy" 
              className="w-64 h-64 md:w-96 md:h-96 object-contain mb-4 md:mr-8"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
                Privacy Policy
              </h1>
              <p className="text-gray-600 text-center md:text-left">
                At BuyHive, we are committed to protecting your privacy and ensuring transparency in our data practices.
              </p>
            </div>
          </div>

          {policyDetails.map((section, index) => (
            <PolicySection 
              key={index} 
              title={section.title} 
              icon={section.icon}
            >
              {section.content}
            </PolicySection>
          ))}

          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
              <Mail className="mr-3 text-blue-600" size={24} />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              Questions or concerns? Reach out to us at{" "}
              <a 
                href="mailto:privacy@buyhive.com" 
                className="text-blue-600 hover:underline"
              >
                privacy@buyhive.com
              </a>
            </p>
            <p className="text-sm text-gray-500 italic">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;