import React from "react";
import linkedin from "../images/linkedin.png";
import mail from "../images/new-post.png";
import resume from "../images/open-resume.png";
import github from "../images/github.png";

export default function ContactMe(props) {
  return (
    <div className="my-10 font-mono" id="contact" ref={props.refProp}>
      <div className="py-12 xl:px-24">
        <h1 className="text-3xl font-extrabold mb-8 dark:text-white pt-14">
          Let's Connect
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">

          <a href="mailto:ericdu602@gmail.com">
            <div className="flex btn-color py-4 px-8 gap-5 border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex-col items-center">
              <img src={mail} alt="email" className="" />

              <div>
                <p className="font-extrabold text-xs">ericdu602@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ericdu602"
          >
            <div className="flex btn-color py-4 px-8 gap-5 border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex-col items-center">
              <img src={linkedin} alt="email" className="" />

              <p className="font-extrabold text-xs">LinkedIn</p>
            </div>
          </a>

          <a
            href="https://github.com/EricDuuu"
          >
            <div className="flex btn-color py-4 px-8 gap-5 border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex-col items-center">
              <img src={github} alt="email" className="" />

              <p className="font-extrabold text-xs">Github</p>

            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/1LqhgDw2m2V03SscIibWC18wtDzUmh1Uu/view?usp=sharing"
          >
            <div className="flex btn-color py-4 px-8 gap-5 border border-slate-800 dark:bg-[#292d31] rounded dark:text-white pt-3 pb-8 flex-col items-center">
              <img src={resume} alt="email" className="py-2" />

              <p className="font-extrabold text-xs">Download CV</p>
            </div>
          </a>

        </div>
      </div>
      <div className="flex justify-center sm:justify-end pt-16 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red animate-pulse"
          href="#home"
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
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>

          <span className="font-mono text-sm">Scroll to top</span>
        </a>
      </div>
    </div>
  );
}
