import Image from "next/image";
import React from "react";
import Section from "./Section";

export default function Gallery() {
  return (
    <Section id="gallery">
      <section className="py-12"></section>
      <h2 className="uppercase md:text-4xl text-xl font-bold">Gallery</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6">
        {images.map((image, index) => (
            <div  key={index} className="image-container">
                <Image width={1000} height={1000} src={image}alt="gallery" className="rounded-md image-item" looading="lazy"/>
            </div>
        ))}
      </div>
    </Section>
  );
}

const images = [
  "https://images.unsplash.com/photo-1574578831425-41dbec20aa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvc3BpdGFsaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1516788875874-c5912cae7b43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602097944182-c43423a8056d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGhvc3BpdGFsaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxob3NwaXRhbGl0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
];
