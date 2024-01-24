import React from "react";
import { projects } from "./ProjectsList";

import { motion } from "framer-motion";
import { leftSlide, rightSlide } from "../hooks/transitions";



export default function Projects(props) {
  return (
    <div className="my-10 font-mono" id="projects">
      <div className="px-10 py-12 xl:px-24">
        <h1 className="text-3xl font-extrabold dark:text-white flex flex-col">
          Some Of My Projects
        </h1>

        {projects.map((project, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="xl:grid xl:grid-cols-2 gap-10 pt-10"
          >

            <motion.div variants={leftSlide}>
              <h1 className="dark:text-white text-xl sm:text-2xl">
                {project.title}
              </h1>

              <div className="relative">
                <a
                  href={project.link}
                  className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 
                      flex justify-center items-center text-base text-white 
                      font-semibold cursor-pointer bg-[#000000aa]"
                >
                  Click to view
                </a>
                <img src={project.image} alt="" className="h-full w-full" />
              </div>
            </motion.div>

            <motion.div variants={rightSlide}>
              <p className="dark:text-white text-md sm:text-lg">
                {project.description}
              </p>
              <div className="mt-6">
                <h6 className="text-custom-blue font-bold text-lg">
                  What I did:
                </h6>

                <div className="dark:text-white py-3 text-xs sm:text-sm flex flex-col gap-2">
                  {project.bulleted.map((bulleted) => (<div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">
                      {bulleted}
                    </p>
                  </div>))}
                </div>

              </div>


              <div className="mt-6">
                <h6 className="text-custom-blue font-bold sm:text-lg">
                  Tools & Technologies
                </h6>

                <div className="dark:text-white py-3 text-xs sm:text-sm flex flex-col gap-2">
                  <div className="grid grid-cols-12 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>

                    <p className="col-span-11">
                      {project.technologies}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        ))}

      </div>



      <div className="flex justify-center pt-4 pb-10 px-2 sm:justify-start sm:px-24">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red"
          href="https://github.com/EricDuuu?tab=repositories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>

          <span className="font-mono text-lg">
            Click here to view my full GitHub
          </span>
        </a>
      </div>
      <div className="flex justify-center sm:justify-end mt-2 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red"
          href="#others"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />

          </svg>

          <span className="font-mono text-sm">Listed Skills</span>
        </a>
      </div>

    </div>
  );
}
