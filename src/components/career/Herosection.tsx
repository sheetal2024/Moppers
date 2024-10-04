"use client";
import { jobListings } from "@/utils/career";
import React, { useState } from "react";

export default function Herosection() {
  const [openJobIndex, setOpenJobIndex] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };

  return (
    <section className="lg:main-container py-12 px-4 md:px-8">
      <div className="space-y-6 ">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Job Openings
        </h1>
        <p className="text-lg md:text-2xl text-center">
          Join MR Corporate: Redefine Facilities Management In India
        </p>

        {jobListings.map((job, index) => (
          <div key={job.id} className="flex flex-col items-center w-full">
            {/* Job Title Section */}
            <div
              className="bg-blue-100 rounded-lg p-4 md:p-6 cursor-pointer flex items-center gap-5 w-full max-w-4xl transition-all duration-300"
              onClick={() => toggleJob(index)}
            >
              <span className="text-xl">
                {openJobIndex === index ? "-" : "+"}
              </span>
              <h2 className="text-lg md:text-xl font-semibold">
                Job Title: {job.title}
              </h2>
            </div>

            {/* Job Details Section */}
            {openJobIndex === index && (
              <div className="bg-blue-50 rounded-b-lg p-4 md:p-6 w-full max-w-4xl space-y-4 -mt-2 transition-all duration-300">
                <p>
                  <strong>Role Overview:</strong> {job.overview}
                </p>
                <div>
                  <strong>Key Responsibilities:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong>Apply:</strong> {job.applyInfo}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
