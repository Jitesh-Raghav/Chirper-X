"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Two = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-black min-h-screen">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gray-300">
                Your Thoughts
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/chirp.png"
          alt="hero"
          height="720"
          width="1400"
          className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-lg shadow-black/50"
          draggable="false"
        />
      </ContainerScroll>
    </div>
  );
}

export default Two;
