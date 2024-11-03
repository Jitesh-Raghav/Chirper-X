import React, { useState } from "react";
import {Spotlight} from "../ui/spotlight";
import { cn } from "../../Utils/utils";
import {Cover} from "../ui/cover";

import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";

const One = () => {

  function Navbar({ className }) {
    const [active, setActive] = useState(null);
  
    return (
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">User Authentication</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">CRUD Blogs</HoveredLink>
              <HoveredLink href="/branding">Payment Integration</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Drawscribe.io"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="ProAssign"
                 href="https://proassign.vercel.app/"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="DocHouse"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Blitzkrieg"
                href="https://blitzkrieg-beryl.vercel.app/"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <div className="h-[50rem] w-full bg-black relative flex items-center justify-center dark:bg-grid-gray-500/[0.6] bg-grid-gray-500/[0.5]">
      {/* Radial gradient for the container to give a subtle faded look */}
      <Spotlight
  className="
    left-0 -top-20      // Default for small screens
    md:left-40 md:-top-20 // Medium screens and up
    lg:left-60 lg:-top-10 // Large screens and up
    xl:left-80 xl:top-0   // Extra-large screens and up
  "
  fill="white"
/>
    <Navbar className="top-2" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <p className="text-4xl sm:text-7xl lg:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500 py-4">
       Write your micro-blogs <br /> at <Cover>Chirper-X</Cover>
      </p>
    </div>
  );
};

export default One;
