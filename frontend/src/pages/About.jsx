import React from "react";
import { Target, Globe, Trophy, Users, CheckCircle, Star } from "lucide-react";
import Layout from "../components/Layout.jsx";

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div className="mb-4 flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition">
        <Icon className="text-blue-600 group-hover:text-blue-700" size={32} />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
    />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize online shopping by creating a platform that combines cutting-edge technology, user-centric design, and a vast selection of high-quality products.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We're not just a marketplace; we're a global community connecting buyers and sellers from around the world, breaking down geographical barriers.",
    },
    {
      icon: Trophy,
      title: "Our Vision",
      description:
        "To become the most innovative and trusted e-commerce platform, setting new standards in online retail through continuous innovation and customer satisfaction.",
    },
  ];

  const achievements = [
    { icon: Users, value: "500K+", label: "Active Users" },
    { icon: Star, value: "4.8/5", label: "Customer Rating" },
    { icon: CheckCircle, value: "10K+", label: "Products" },
  ];

  const teamMembers = [
    {
      name: "Emily Chen",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300?text=EC",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "/api/placeholder/300/300?text=MR",
    },
    {
      name: "Sarah Kumar",
      role: "Head of Customer Experience",
      image: "/api/placeholder/300/300?text=SK",
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to BuyHive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just an e-commerce platform. We're a technology-driven
            marketplace that connects people, products, and possibilities,
            transforming the way you shop online.
          </p>
        </div>

        {/* Core Values */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-5xl mx-auto mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <achievement.icon className="text-blue-600" size={48} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {achievement.value}
                </h3>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
