import React, { useState } from "react";
import { Spotlight } from "../ui/spotlight";
import { cn } from "../../Utils/utils";
import { Cover } from "../ui/cover";
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
                src="./draw.jpg"
                description="A real time drawing and guessing game."
              />
              <ProductItem
                title="ProAssign"
                href="https://proassign.vercel.app/"
                src="./pro.jpeg"
                description="Project management and bug tracking website."
              />
              <ProductItem
                title="DocHouse"
                href="https://gomoonbeam.com"
                src="./doc.jpg"
                description="Document conversion chrome extension with 7+ file formats."
              />
              <ProductItem
                title="Blitzkrieg"
                href="https://blitzkrieg-beryl.vercel.app/"
                src="./blitz.png"
                description="Online coding editor, run, debug, save your code on fly."
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
    <>
      <div className="h-[48rem] w-full bg-black relative flex items-center justify-center dark:bg-grid-gray-500/[0.6] bg-grid-gray-500/[0.5]">
        {/* Radial gradient for the container to give a subtle faded look */}
        <Spotlight
          className="
            left-0 -top-5      // Default for small screens
            md:left-40 md:-top-20 // Medium screens and up
            lg:left-60 lg:-top-10 // Large screens and up
            xl:left-80 xl:top-0   // Extra-large screens and up
          "
          fill="white"
        />
        <Navbar className="top-2" />

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

        {/* Centered Text */}
        <div className="text-center relative z-20">
          <p className="text-4xl sm:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500 py-4">
            Write your micro-blogs <br /> at <Cover>Chirper-X</Cover>
          </p>
          <p className="lg:text-xl font-semibold text-gray-300 mt-3">
            <span className="text-blue-500">ChirperX:</span> Speak Your Mind in Real Time <br />
            Connect with a vibrant community that celebrates every thought!
          </p>
        </div>
      </div>
    </>
  );
};

export default One;
