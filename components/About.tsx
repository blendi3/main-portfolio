"use client";

import dynamic from "next/dynamic";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import { useState } from "react";
import { FaDownload, FaLocationArrow } from "react-icons/fa";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("blendiivanja2@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleResumeDownload = () => {
    const resumeUrl = "/my_resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Profile Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid1.png"
              alt="grid-1"
              width={500}
              height={276}
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Blendi</p>
              <p className="grid-subtext">
                A dedicated software developer with a passion for crafting
                innovative web solutions, blending creativity with performance
                to deliver high-quality user experiences.
              </p>
              <MagicButton
                title="My Resume"
                icon={<FaDownload />}
                position="right"
                handleClick={handleResumeDownload}
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid-logos.png"
              alt="grid-2"
              width={500}
              height={276}
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Proficient in modern frontend technologies including React,
                TypeScript, and Next.js, delivering responsive and interactive
                user interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                // backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 42.6629,
                    lng: 21.1655,
                    text: "I am here",
                    color: "white",
                    size: 400,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I excel in remote work across time zones.
              </p>
              <p className="grid-subtext">
                Based in Kosovo, I am fully equipped to handle remote work and
                collaborate effectively with teams worldwide.
              </p>
              <MagicButton
                title="Contact Me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </div>
        </div>

        {/* Passion for Coding */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid3.png"
              alt="grid-3"
              width={500}
              height={266}
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Fueled by a Passion for Coding</p>
              <p className="grid-subtext">
                Coding isn&apos;t just my career, it&apos;s my passion. I thrive
                on solving challenges and creating innovative solutions through
                code.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/assets/grid4.png"
              alt="grid-4"
              width={500}
              height={276}
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div>
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <Image
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                  width={24}
                  height={24}
                />
                <p className="md:text-xl font-medium text-gray_gradient text-white">
                  blendiivanja2@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
