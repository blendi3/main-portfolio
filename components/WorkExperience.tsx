import React from "react";
import { Timeline } from "./ui/Timeline";
import { workExperiences } from "@/data";

const WorkExperience = () => {
  return (
    <div className="py-20">
      <Timeline
        data={workExperiences.map((exp) => ({
          title: exp.name,
          content: (
            <div className="bg-white dark:bg-[#1a1f38] p-6 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {exp.pos}
              </h3>
              <p className="text-sm text-neutral-500">{exp.duration}</p>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                {exp.title}
              </p>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default WorkExperience;
