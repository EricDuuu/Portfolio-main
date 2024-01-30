import React from "react";
import myface from "../images/eric.png";
import resume from '../Eric Du Resume.pdf'
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import { motion } from "framer-motion";
import { leftSlide, rightSlide } from "../hooks/transitions";

export default function Home(props) {

  return (
    <div className="mt-8 font-mono" id="home">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="xl:grid xl:grid-cols-2 gap-3">

          <motion.div variants={leftSlide} animate={{ rotate: 360 }}>
            <div className="px-10 py-10 xl:px-24" >
              <h1 className="text sm:text-[28px] dark:text-white">Hi <span className="animate-spin inline-block">👋</span>, I'm</h1>
              <h1 className="font-bold text-6xl sm:text-7xl sm:text-[120px] dark:text-white">
                Eric Du
              </h1>
              <h6 className="text-2xl sm:text-4xl mt-6 dark:text-white">
                A Software Engineer
              </h6>
              <h6 className="text-sm sm:text-xl mt-6 dark:text-white">
                who enjoys tackling puzzles, and crafting experiences. I thrive on building products that improve lives and solve problems.{" "}
                <a
                  className="text-custom-blue hover:text-custom-red"
                  href="#experience"
                >
                  See what I currently do.
                </a>
              </h6>
              <div className="mt-10">
                <button>
                  <a
                    href={resume}
                    className="flex btn-color py-4 px-4 gap-2"
                  >
                    <span className="font-mono">Download CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 animate-bounce"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </button>

                <button className="pl-5">
                  <a
                    href="https://www.linkedin.com/in/ericdu602"
                    className="flex btn-color py-4 px-8 gap-2"
                  >
                    <span className="font-mono">LinkedIn</span>

                    <img src={linkedin} alt="email" className="w-6 h-6 animate-bounce" />
                  </a>
                </button>

                <button className="pl-5">
                  <a
                    href="https://github.com/EricDuuu"
                    className="flex btn-color py-4 px-4 gap-2"
                  >
                    <span className="font-mono">Github</span>

                    <img src={github} alt="email" className="w-6 h-6 animate-bounce" />
                  </a>
                </button>

              </div>
              <p className="py-5 dark:text-white">Email: {" "}
                <a href="mailto:ericdu602@gmail.com" className="text-custom-blue hover:text-custom-red">
                  ericdu602@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={rightSlide}>
            <div className="px-10 py-10 xl:px-24 w-[450px] justify-self-center">
              <img src={myface} alt="bootstrap" className="gap-6 object-scale-down rounded-xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>


      <div className="flex justify-center sm:justify-end mt-2 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red animate-pulse"
          href="#experience"
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

          <span className="font-mono text-sm">Scroll to Experiences</span>
        </a>
      </div>
    </div >
  );
}
