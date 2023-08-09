import { useState } from "react";
import { SideBar } from "../../SideBar/SideBar";

export const UabContennt = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const onClickSideBar = () => {
    setSideBar(!sideBar);
  };
  console.log(sideBar)
  return (
    <div>
      {/* Use el w-full para que se quitara el scrol horizontal */}
      <div className={`flex flex-row h-full w-full bg-[#003b71] font-serif`}>
        <div className={`lg:flex lg:flex-col lg:w-1/5 lg:bg-[#003264] lg:items-center ${sideBar ? "":"hidden"}`}>
          <SideBar isActiveSideBar={sideBar}/>
        </div>
   

        <button
          className="z-50 p-5 fixed right-0 top-10 bg-slate-600 lg:hidden"
          onClick={onClickSideBar}
        >
          <div className={`hamburger ${sideBar ? "active" : ""}`}>
            <div className="h-0.5 w-6 bg-black dark:bg-white transition"></div>
            <div className="mt-2 h-0.5 w-6 bg-black dark:bg-white transition"></div>
          </div>
        </button>
        <div className="">

        </div>


        <div className="w-full lg:w-4/5 lg:h-full lg:flex lg:flex-col lg:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
