"use client";
import React from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { motion, useScroll, useInView,useAnimation } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Hospitality web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const { scrollYProgress } = useScroll();

  return (
    <html lang="en">
    
      <body className="${inter.className} text-neutral max-w-screen-xl mx-auto p-4" >
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
