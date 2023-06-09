import { React, useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import WorkSidebar from "../components/WorkSidebar";
import WorkDetail from "./WorkDetail";
import workBtn from "../imgs/work/workbtn.png";
// import workBtn from "../imgs/work/workbtn.mp4";


export default function Work() {
  const currentContent = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Topbar />
      <div className="container mx-auto flex items-center justify-between mt-10">
        <div className="hidden lg:block lg:w-96">
          <WorkSidebar selectedContent={currentContent.number} />
        </div>
        <div className="container mx-auto">
          <div
            className={"lg:hidden" + (sidebarOpen ? " flex" : " hidden")}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <WorkSidebar selectedContent={currentContent.number} />
          </div>
          <div
            className={
              "lg:opacity-100" + (sidebarOpen ? " opacity-50" : " opacity-100")
            }
          >
            <button
              type="button"
              className={
                "lg:hidden hover:bg-indigo-700 font-bold py-2 px-4 rounded float-right mb-3 z-10" +
                (sidebarOpen ? " hidden" : " flex")
              }
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <img src={workBtn} alt="metamask" className="h-10 w-12" />
              {/* <video src={workBtn} alt="metamask" className="h-10 w-12" autoPlay muted loop>
              </video> */}
            </button>
            <br /><br /><br />
            <div>
              <WorkDetail selectedContent={currentContent.number} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
