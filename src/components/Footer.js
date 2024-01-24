import React from "react";

export default function Footer() {
  return (
    <div className="dark:text-white">
      <div className="font-mono flex justify-center items-center h-full py-4 px-6">
        <div className="text-xs sm:text-base">
          Made with ReactJS & TailwindCSS | Portfolio
        </div>
      </div>
      <div className="font-mono flex justify-center items-center h-full py-4 bg-slate-900 text-white">
        <div className="text-xs sm:text-base">
          Designed & Built with ❤️ by Eric Du
        </div>
      </div>
    </div>
  );
}
