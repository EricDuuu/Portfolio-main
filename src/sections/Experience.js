import React from "react";
import weather from "../images/Weather.gif";
import roomu from "../images/RoomU.gif";

import { motion } from "framer-motion";
import { leftSlide, rightSlide } from "../hooks/transitions";

export default function Experience(props) {
  return (
    <div className="my-10 font-mono" id="experience">

      <div className="px-10 py-1 xl:px-24">
        <h1 className="text-3xl font-extrabold mb-8 dark:text-white pt-14 flex items-center gap-3">
          Where I work
        </h1>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="xl:grid xl:grid-cols-2"
        >
          <motion.div variants={leftSlide}>
            <div>
              <p className="dark:text-white text-lg sm:text-xl">
                Full Stack Engineer |{" "}
                <a
                  href="https://www.plantsciences.ucdavis.edu"
                  className="text-custom-blue hover:text-custom-red"
                >
                  {" "} UC Davis Plant Sciences
                  {" "}
                </a>
                <span className="text-xs italic">(Apr 2023 - Present)</span>
              </p>

              <div className="mt-6">
                <h4 className="text-custom-blue font-bold sm:text-lg">
                  What I do
                </h4>
                <p className="dark:text-white text-sm sm:text-base">
                  Developed and managed a suite of websites on the UC Davis Plant Sciences domain. Implemented mathmathecal prediction models for planting dates, weather prediction, and databases for libraries of research papers.
                </p>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">Built weather models using data fetched from local weather stations to predict effective rice, bean, and corn planting dates.</p>
                  </div>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">Used AWS Lambda, Python, and Javascript to fetch data onto Vue.js and Drupal frontend using RESTful API.</p>
                  </div>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">Created and managed a database of over 50k research papers with fuzzy search on metadata. (AWS, RESTful, MySQL, JS)
                    </p>
                  </div>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">
                      Managed Plant Sciences Twitter, Instagram, and Facebook.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h6 className="text-custom-blue font-bold sm:text-lg">
                  Tools & Technologies I Use
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

                    <p className="col-span-11 font-semibold">
                      Vue.js (FrontEnd), Drupal (Core), PHP, AWS Lambda, Python, HTML, CSS, Twig, Linux
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={rightSlide}>
            <div className="flex flex-col-reverse sm:flex-row justify-center h-full gap-6">
              <div className="dark:text-white flex gap-4">
                <img src={weather} alt="bootstrap" className="justify-end object-scale-down rounded-xl p-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>




      <div className="px-10 py-1 xl:px-24">
        <h1 className="text-3xl font-extrabold mb-8 dark:text-white pt-14 flex items-center gap-3">
          Past Experiences
        </h1>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="xl:grid xl:grid-cols-2"
        >
          <motion.div variants={leftSlide}>
            <div>
              <p className="dark:text-white text-lg sm:text-xl">
                Full Stack Engineer |{" "}
                <a
                  href="https://aggieworks.org"
                  className="text-custom-blue hover:text-custom-red"
                >
                  {" "} AggieWorks
                  {" "}
                </a>
                <span className="text-xs italic">(Sep 2023 - Present)</span>
              </p>

              <div className="mt-6">
                <h4 className="text-custom-blue font-bold sm:text-lg">
                  What I did
                </h4>
                <p className="dark:text-white text-sm sm:text-base">
                  Created and deployed applications and services exclusively for UC Davis Students in an AGILE environment. Products I've worked on:
                  {" "}
                  <a
                    className="text-custom-blue hover:text-custom-red"
                    href="https://apps.apple.com/us/app/roomu-by-aggieworks/id6448738916"
                  >
                    RoomU
                  </a>
                  {", "}
                  <a
                    className="text-custom-blue hover:text-custom-red"
                    href="https://aggieexchange.com"
                  >
                    AggieExchange
                  </a>
                  {", and the "}
                  <a
                    className="text-custom-blue hover:text-custom-red"
                    href="https://aggieworks.org"
                  >
                    AggieWorks
                  </a>
                  {" site."}
                </p>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>

                    <p className="col-span-11"> <b>RoomU:</b> A Tinder-esque roomate matching app with real time chat and swipe feature made exclusively for students.</p>
                  </div>
                  <div className="grid grid-cols-12 gap-4 pl-10">
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
                    <p className="col-span-11">Implemented image caching, user authentication, generic components, matching algorithm with 23 analytical features, and RESTful API calls to SupaBase. </p>
                  </div>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <p className="col-span-11">
                      <b>AggieExchange: </b> An online marketplace centralized in Davis for students looking to sell items. Made as a safer alternative to Facebook marketplace and Craigslist.
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-4 pl-10">
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
                      Deployed pagination, image caching, 12 analytics for commonly used interactions, and safe user to user messaging.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h6 className="text-custom-blue font-bold sm:text-lg">
                  Tools & Technologies I Used
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

                    <p className="col-span-11 font-semibold">
                      React (AggieExchange), React Native (RoomU), Astro(AggieWorks Site), SupaBase, NoSQL, Prisma, FireBase, GoLang, Svelt, Next.js, Tailwind, Docker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={rightSlide}>
            <div className="flex flex-col-reverse sm:flex-row justify-center h-full gap-6">
              <div className="dark:text-white flex gap-4">
                <img src={roomu} alt="bootstrap" className="justify-end object-scale-down rounded-xl p-5 h-[500px]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>




      <div className="flex justify-center sm:justify-end mt-2 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red"
          href="#projects"
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

          <span className="font-mono text-sm">
            See some projects I've done
          </span>
        </a>
      </div>

    </div>
  );
}
