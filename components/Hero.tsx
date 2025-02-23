import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen relative flex justify-center items-center flex-col mx-auto">
      {/* Left Spotlight */}
      <Spotlight className="top-0" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-5 xl:px-52">
        <h1 className="text-xl font-semibold text-white mb-4">
          Hey, I’m Blendi 👋
        </h1>

        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
          words="Bringing Ideas to Life with Modern Web Experiences"
        />

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Software developer crafting fast, interactive, and seamless user
          interfaces that stand out.
        </p>

        <div className="mt-8">
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="!w-[220px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
