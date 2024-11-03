"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { SparklesCore } from "../ui/sparkles";
import { cn } from "../../Utils/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
  } from "@tabler/icons-react";
  import Feature from './Feature.jsx';

const Two = () => {

    const features = [
        {
          title: "Built for developers",
          description:
            "Built for engineers, developers, dreamers, thinkers and doers.",
          icon: <IconTerminal2 />,
        },
        {
          title: "Ease of use",
          description:
            "It's as easy as using an Apple, and as expensive as buying one.",
          icon: <IconEaseInOut />,
        },
        {
          title: "Pricing like no other",
          description:
            "Our prices are best in the market. No cap, no lock, no credit card required.",
          icon: <IconCurrencyDollar />,
        },
        {
          title: "100% Uptime guarantee",
          description: "We just cannot be taken down by anyone.",
          icon: <IconCloud />,
        },
        {
          title: "Multi-tenant Architecture",
          description: "You can simply share passwords instead of buying new seats",
          icon: <IconRouteAltLeft />,
        },
        {
          title: "24/7 Customer Support",
          description:
            "We are available a 100% of the time. Atleast our AI Agents are.",
          icon: <IconHelp />,
        },
        {
          title: "Money back guarantee",
          description:
            "If you donot like EveryAI, we will convince you to like us.",
          icon: <IconAdjustmentsBolt />,
        },
        {
          title: "And everything else",
          description: "I just ran out of copy ideas. Accept my sincere apologies",
          icon: <IconHeart />,
        },
      ];

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
      <p className="text-2xl lg:text-4xl font-semibold text-gray-300 text-center">Features we offer?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <p className="text-2xl lg:text-4xl font-semibold text-gray-300 text-center my-10"></p>

      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-5xl lg:text-8xl font-bold text-center text-white relative z-20">
      Join the community
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </div>
  );
}

export default Two;
