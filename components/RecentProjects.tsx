/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const getDomainFromUrl = (url: string): string => {
  const domain = new URL(url).hostname;
  return domain.replace("www.", "");
};

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div
        className="flex flex-wrap items-center justify-center
      p-4 gap-x-24 gap-y-8 mt-10"
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={getDomainFromUrl(link)} href={link}>
              <div
                className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden
              sm:h-[40vh] h-[30vh]  mb-10"
              >
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 w-full h-full object-cover"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light test-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full"
                      style={{ transform: `translateX(-${index * 5}px)` }}
                    >
                      <img src={icon} className="p-2 w-8 h-8 lg:w-10 lg:h-10" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
