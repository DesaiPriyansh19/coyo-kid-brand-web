import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import logo from '../../public/assets/main-logo.png';
import logo2 from '../../public/assets/kidzy.png';
import img1 from '../../public/assets/Girl_with_book.png';
import img2 from '../../public/assets/why_coyokid.png';
import img3 from '../../public/assets/modules.png';
import img4 from '../../public/assets/Contact_us.png';
import { PhoneCall, Menu, X , Mail, MapPin, Phone,} from 'lucide-react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const lines = [
    { text: "CONNECTING", color: "bg-yellow-300" },
    { text: "PARENTS TO", color: "bg-pink-300" },
    { text: "SCHOOL IN", color: "bg-blue-300" },
    { text: "SMARTER WAY", color: "bg-green-300" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
  <div className="relative min-h-screen font-sofia text-[17px] leading-relaxed bg-white">

      {/* Overlay background blur */}
 {menuOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50"
    onClick={() => setMenuOpen(false)}
  />
)}



      {/* Navbar */}
      <nav className="w-full px-1 md:px-7 lg:px-20 flex items-center justify-between  py-3 md:py-8 relative z-50">
        <div className="hidden tracking-wider text-sm lg:text-xl md:flex flex-1 justify-start gap-6 ">
          <a href="#why" className="group relative font-semibold">
            Why COYO Kid?   
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
             <a href="#features" className="group relative font-semibold">
        |
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="group relative font-semibold">
            Feachers & Moduals
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="flex justify-center flex-1 z-0">
          <img src={logo2} alt="Logo" className="h-8 " />
        </div>
        <div className="hidden tracking-wider text-sm lg:text-xl  md:flex flex-1 justify-end gap-6  items-center">
          <a href="#plans" className="group relative font-semibold">
            Plans
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
              <a href="#features" className="group relative font-semibold">
        |
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="tel:+919227090227" className="group relative  flex items-center gap-1">
            <PhoneCall className="h-4 w-4 text-black animate-[wiggle_1s_infinite]" /> +91 9227 09 0227
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
<div className="md:hidden z-999">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className={`text-xl p-2 rounded-full shadow-sm transition-all duration-300 ease-in-out transform
      bg-white hover:scale-110 ${menuOpen ? "rotate-90 scale-110" : ""}`}
    title={menuOpen ? "Close Menu" : "Open Menu"}
  >
    {menuOpen ? <X className="w-6 h-6 rotate-180" /> : <Menu className="w-6 h-6" />}
  </button>
</div>





        {/* Sidebar */}
        <div
          className={`fixed top-0 pt-16  right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg flex flex-col px-6 py-6 z-100 transform transition-transform duration-500 ease-in-out space-y-5 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
        
          <a href="#why" onClick={() => setMenuOpen(false)} className="flex items-center justify-between group py-2 px-3 border rounded hover:bg-gray-100 transition-all">
            <span className="text-base font-medium">Why COYO Kid?</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="flex items-center justify-between group py-2 px-3 border rounded hover:bg-gray-100 transition-all">
            <span className="text-base font-medium">Feachers & Moduals</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#plans" onClick={() => setMenuOpen(false)} className="flex items-center justify-between group py-2 px-3 border rounded hover:bg-gray-100 transition-all">
            <span className="text-base font-medium">Plans</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="tel:+919227090227" className="flex items-center justify-between group py-2 px-3 border rounded hover:bg-gray-100 transition-all font-semibold">
            <span className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5 text-black animate-[wiggle_1s_infinite]" /> +91 9227 09 0227
            </span>
          </a>
        </div>
      </nav>

      {/* Colored line divider */}
      <div className="flex w-full h-[3px]">
        <div className="w-[24%] bg-blue-500"></div>
        <div className="w-[25%] bg-yellow-400"></div>
        <div className="w-[25%] bg-pink-400"></div>
        <div className="w-[26%] bg-green-500"></div>
      </div>
      {/* Hero Section */}
      <div className="flex tracking-wider flex-col lg:flex-row  mx-auto justify-center items-center gap-0  px-8 md:px-20 py-16 mb-6 lg:mb-14" >
     <div className="w-full lg:w-[60%] text-center lg:text-left mx-auto ">
  <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-8xl font-[0.5] text-gray-700 leading-tight mx-auto">
    <span
      className="relative inline-block"
      data-aos="fade-left"
      data-aos-delay="0"
    >
      CONNECTING
      <span className="absolute left-0 bottom-0 w-full h-1/2 bg-yellow-300 -z-10"></span>
    </span>
    <br />
    <span
      className="relative inline-block"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      PARENTS TO
      <span className="absolute left-0 bottom-0 w-full h-1/2 bg-pink-300 -z-10"></span>
    </span>
    <br />
    <span
      className="relative inline-block"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      SCHOOL IN
      <span className="absolute left-0 bottom-0 w-full h-1/2 bg-blue-300 -z-10"></span>
    </span>
    <br />
    <span
      className="relative inline-block"
      data-aos="fade-left"
      data-aos-delay="600"
    >
      SMARTER WAY
      <span className="absolute left-0 bottom-0 w-full h-1/2 bg-green-300 -z-10"></span>
    </span>
  </h1>
</div>

        <img src={img1} alt="Girl with book" className="w-full lg:w-[40%] mx-auto mt-10 lg:mt-0" data-aos="fade-out" />
      </div>

      {/* Why Section */}
      <div id="why" className="flex tracking-wide flex-col lg:flex-row justify-center items-center px-8 md:px-20 py-10 gap-8" data-aos="fade-in">
        <div className="hidden md:flex w-full lg:w-[40%] mx-auto">
          <img src={img2} alt="Boy" className="w-full" />
        </div>
        <div className="w-full lg:w-[60%] md:pr-28 ">
          <h2 className="text-5xl sm:text-7xl font-bold tracking-wide mb-2">Why COYO Kid?</h2>
          <p className="text-xl font-semibold mb-2">COYO Kid has been developed by a highly experienced team of industry professionals with deep expertise in the education sector. Our system is designed to address practical challenges commonly encountered in daily academic and administrative workflows</p>
          <p className="text-xl font-semibold mb-2">Through extensive engagement with various educational institutions and detailed discussions regarding their operational routines and digital transformation needs, we gained valuable insights into the sector's requirements.</p>
          <p className="text-xl font-semibold">Based on comprehensive analysis of the collected data and thorough observation of institutional processes, COYO Kid has been thoughtfully engineered to deliver a reliable, efficient, and user-centric digital solution for modern educational management.</p>
        </div>
            <div className="flex md:hidden w-full lg:w-[40%] mx-auto">
          <img src={img2} alt="Boy" className="w-full" />
        </div>
      </div>

      {/* Features and Moduals */}
      <div id="features" className="flex tracking-wide flex-col lg:flex-row px-8 py-10 gap-8 items-center" data-aos="fade-up">
        <div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-4   p-4 rounded bg-white">
          <div className="w-[90%] sm:w-60 h-[380px] border-2 border-pink-600 bg-white rounded-2xl  overflow-y-auto mb-5 md:mb-0">
            <h3 className="text-4xl text-center font-semibold mb-2 bg-pink-600 text-white px-2 py-5 ">Feachers</h3>
            <ul className="list-disc pl-5 text-xl">
              <li>Acurate data driving</li>
              <li>Cloud Storage</li>
              <li>Up to End Reporting</li>
              <li>Android & IOS App</li>
              <li>User friendly interface</li>
              <li>Timely Updation</li>
            </ul>
          </div>
          <div className="w-[90%] sm:w-60 h-[380px] border-2 border-pink-600 bg-white rounded-2xl  overflow-y-auto">
            <h3 className="text-4xl text-center font-semibold mb-2 bg-pink-600 text-white px-2 py-5">Moduals</h3>
            <ul className="list-disc pl-5 text-xl">
              <li>User Management</li>
              <li>Roll Management</li>
              <li>Authentication</li>
              <li>Fees collection/refund</li>
              <li>Teacher Schedule</li>
              <li>Time Table</li>
              <li>Subject Management</li>
              <li>Attendance</li>
              <li>Guardians Management</li>
              <li>Class Management</li>
              <li>Examination</li>
              <li>Home work</li>
              <li>Report Card</li>
              <li>Library</li>
              <li>Sports & Activity</li>
            </ul>
          </div>
        </div>
        <img src={img3} alt="Girl magnifying" className=" w-[85%] md:w-[35%]" data-aos="zoom-in" />
      </div>

      {/* Contact Form Section */}
      <div
  id="plans"
  className="flex flex-col lg:flex-row justify-center items-start px-8 py-10 gap-10"
  data-aos="fade-up"
>
  {/* Heading for small screens */}
    <h3 className="flex sm:hidden text-5xl font-semibold mb-4 text-center">
      Let Us Connect You
    </h3> {/* Left Side – Image */}
  <div className="w-[85%] mx-auto lg:w-1/2 flex justify-center items-center">
    <img
      src={img4}
      alt="Phone in hand"
      className="w-full max-w-md h-auto object-contain"
    />
  </div>

  {/* Right Side – Form and Contact Info */}
  <div className="w-full lg:w-1/2">
    {/* Heading for larger screens */}
    <h3 className="hidden sm:flex text-5xl font-bold mb-4">Let Us Connect You</h3>
   

    {/* Form */}
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" placeholder="Name of Organization" className="border p-2" />
      <input type="text" placeholder="Contact Person" className="border p-2" />
      <input type="text" placeholder="Contact Number" className="border p-2" />
      <input type="text" placeholder="Prefered Date" className="border p-2" />
      <input type="text" placeholder="Prefered Time" className="border p-2 sm:col-span-2" />
      <div className="flex gap-4 sm:col-span-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded">SAVE</button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded">RESET</button>
      </div>
    </form>

  {/* Contact Info */}
<div className="mt-8 text-start space-y-3">
  <h3 className="text-5xl font-bold">Contact Us</h3>

  {/* Phone */}
  <a href="tel:9227090227" className="flex items-start justify-start gap-2 text-black hover:underline">
    <Phone className="w-5 h-5" />
    <p className="text-2xl font-semibold">9227090227</p>
  </a>

  {/* Email */}
  <a href="mailto:connect@coyokid.com" className="flex items-start justify-start gap-2 text-black hover:underline">
    <Mail className="w-5 h-5" />
    <p className="text-2xl font-semibold">connect@coyokid.com</p>
  </a>

  {/* Address (opens in Google Maps) */}
  <a
    href="https://www.google.com/maps?q=23.0585136413574,72.5559844970703"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start justify-start gap-3 text-black hover:underline max-w-[90%] text-left"
  >
    <MapPin className="min-w-[20px] min-h-[20px] mt-1" />
    <p className="text-2xl font-semibold leading-snug">
      Basement, Ankur Complex, Ankur Road, Naranpura, Ahmedabad, Gujarat, India.
    </p>
  </a>
</div>

  </div>
</div>


      {/* Footer */}
      <footer className="bg-gray-100 text-center tracking-widest py-4 text-sm">
        <p>© 2025 COYO Kid</p>
      </footer>
    </div>
  );
};

export default Home;
