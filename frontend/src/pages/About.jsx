import React from "react";
import { motion } from "framer-motion";
import { Target, Globe, Trophy, Users, CheckCircle, Star } from "lucide-react";
import Layout from "../components/Layout.jsx";
import boy2 from "../assets/boy2.png";
import boy3 from "../assets/boy3.png";
import girl1 from "../assets/girl1.png";

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="mb-4 flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition">
        <Icon className="text-blue-600 group-hover:text-blue-700" size={32} />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TeamMember = ({ name, role, image }) => (
  <motion.div 
    className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </motion.div>
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
      image: boy2,
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: boy3,
    },
    {
      name: "Sarah Kumar",
      role: "Head of Customer Experience",
      image: girl1,
    },
  ];

  return (
    <Layout>
      <motion.div 
        className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-5xl font-bold text-gray-800 mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to BuyHive
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            More than just an e-commerce platform. We're a technology-driven
            marketplace that connects people, products, and possibilities,
            transforming the way you shop online.
          </motion.p>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Our Core Values
          </motion.h2>
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
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="max-w-5xl mx-auto mt-16 bg-blue-50 rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <achievement.icon className="text-blue-600" size={48} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {achievement.value}
                </h3>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div 
          className="max-w-5xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Meet Our Leadership
          </motion.h2>
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
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default About;