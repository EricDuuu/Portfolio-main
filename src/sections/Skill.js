import React from "react";

export default function Skill(props) {
  return (
    <div>
      <div className="px-10 mb-10 xl:px-24" id="others">
        <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
          Front-End
        </h1>
        <div className="gap-6 dark:text-white mb-6">
          React, React Native, Expo, PHP, HTML, CSS, Flask, Twig, Svelte, Vue, Next.js, Astro
        </div>
        <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-blue pb-8 lg:pb-0">
          Back-End
        </h1>
        <div className="flex flex-wrap items-center h-full gap-6 dark:text-white mb-6">
          SQL (PostgreS, NoSQL, MySQL, GraphQL), GoLang, Django, Node, FastAPI, AWS, Prisma, SupaBase, FireBase, Drupal, Prisma
        </div>
        <div className="flex flex-row flex-wrap gap-16">
          <div>
            <h1 className="text-xl sm:text-[28px] font-extrabold text-custom-red pb-8 lg:pb-0">
              Languages and Technologies
            </h1>
            <div className="flex justify-center gap-6">
              <div className="w-full py-4">
                <p className="dark:text-white">
                  <span className="my-2 block sm:text-sm lg:text-base font-mono font-bold">
                    C++, Java, Python, C, JavaScript, Docker, Figma, Git
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center sm:justify-end mt-2 px-10">
        <a
          className="flex border-slate-800 dark:border-white text-custom-blue hover:text-custom-red"
          href="#contact"
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

          <span className="font-mono text-sm">Now let's connect</span>
        </a>
      </div>
    </div>
  );
}
