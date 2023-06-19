"use client";
import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

export default function Section({ children, id }) {
  const ref = useRef(null);
  const animation = useAnimation({ threshold: 0.2 });
  const slideAnimation = useAnimation()
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      animation.start("visible");
      slideAnimation.start("visible")
    } 
    console.log(isInView)
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden" id={id}>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
    <motion.div 
        variants={{
            hidden:{left:0}, 
            visisble:{left:"100%"}
        }} 
        initial="hidden" 
        animate={slideAnimation} transition={{duration:0.5, ease:"easeIn"}} 
        style={{
        position:"absolute",
        top:4,
        botton:4,
        left:0,
        right:0,
        background:"bg-red-500",
        zIndex:20
        }}
    />
    </div>
  );
}
