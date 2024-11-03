"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { SparklesCore } from "../ui/sparkles";

const Footer = () => {
  return (
//     <div className="h-[50rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       <div className="max-w-2xl mx-auto p-4">

//         <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 text-center font-sans font-bold">
//           Mail your thoughts
//         </h1>
        
//         <p className="text-gray-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
//         Welcome to ChirperX, the ultimate microblogging platform. 
// We provide a fast, user-friendly, and secure space for you to share your thoughts with the world. 
// Whether you're posting quick updates, engaging with a lively community, or discovering trending topics, ChirperX has got you covered.

//         </p>
//         <input
//           type="text"
//           placeholder="Lets Talk"
//           className="rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 w-full relative z-10 mt-4 bg-neutral-900 placeholder:text-gray-600 text-gray-300"
//         />
//       </div>
     
//     </div>
<div className="h-[50rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-5xl lg:text-8xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
      <p className="text-gray-400 max-w-lg mx-auto my-2 text-md text-center relative z-10">
         Welcome to ChirperX, the ultimate microblogging platform. 
 We provide a fast, user-friendly, and secure space for you to share your thoughts with the world. 
 Whether you're posting quick updates, engaging with a lively community, or discovering trending topics, ChirperX has got you covered.

         </p>
         <input
          type="text"
          placeholder="  Lets Talk"
          className="h-10 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 w-[60%] relative z-10 mt-4 bg-neutral-900 placeholder:text-gray-600 text-gray-300"
        />
    </div>
  );
};

export default Footer;
