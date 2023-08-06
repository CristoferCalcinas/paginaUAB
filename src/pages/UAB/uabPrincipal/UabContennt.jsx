import { SideBar } from "../../SideBar/SideBar";

export const UabContennt = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row h-full w-screen bg-[#003b71] font-serif">
        <div className="flex flex-col w-1/5 bg-[#003264] flex-grow">
          <SideBar />
        </div>

        <div className="w-4/5 h-full flex flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
