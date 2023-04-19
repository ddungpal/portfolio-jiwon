import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function WorkSidebar({ selectedContent }) {
  const [part, setPart] = useState("All");

  let contents_upcoming = ["1.Solo Exhibition.Painting"];
  let contents_2023 = ["2.Mirroring Effect.Project", "3.Spanning.Project"];
  let contents_2022 = [
    "4.FLOW.Painting",
    "5.Dialing.Project",
    "6.Piece of Light.Project",
    "7.0-Phasing-1.Project",
    "8.Round,Round.Painting",
  ];
  let contents_2021 = ["9.0m3.Project"];
  let contents_2019 = [
    "10.Transparent Moment.Painting",
    "11.Siren.Painting",
    "12.llwolobong.Project",
    "13.Preferable Future.Project",
    "14.Hwareogagsan.Project",
  ];
  let contents_2018 = ["15.Supernumerary Rainbow.Painting"];
  let contents_2017 = ["16.Nuance.Painting"];
  let contents_2014 = ["17.Harmonious Flow.Painting"];
  let contents_2016 = ["18.Perception Lab.Painting"];

  if (part === "Painting") {
    contents_upcoming = contents_upcoming.filter((word) =>
      word.includes("Painting")
    );
    contents_2023 = contents_2023.filter((word) => word.includes("Painting"));
    contents_2022 = contents_2022.filter((word) => word.includes("Painting"));
    contents_2021 = contents_2021.filter((word) => word.includes("Painting"));
    contents_2019 = contents_2019.filter((word) => word.includes("Painting"));
    contents_2018 = contents_2018.filter((word) => word.includes("Painting"));
    contents_2017 = contents_2017.filter((word) => word.includes("Painting"));
    contents_2014 = contents_2014.filter((word) => word.includes("Painting"));
    contents_2016 = contents_2016.filter((word) => word.includes("Painting"));
  } else if (part === "Project") {
    contents_upcoming = contents_upcoming.filter((word) =>
      word.includes("Project")
    );
    contents_2023 = contents_2023.filter((word) => word.includes("Project"));
    contents_2022 = contents_2022.filter((word) => word.includes("Project"));
    contents_2021 = contents_2021.filter((word) => word.includes("Project"));
    contents_2019 = contents_2019.filter((word) => word.includes("Project"));
    contents_2018 = contents_2018.filter((word) => word.includes("Project"));
    contents_2017 = contents_2017.filter((word) => word.includes("Project"));
    contents_2014 = contents_2014.filter((word) => word.includes("Project"));
    contents_2016 = contents_2016.filter((word) => word.includes("Project"));
  }

  return (
    <div className="fixed z-10 inset-y-0 top-[3.8125rem] pb-10 overflow-y-auto bg-white pr-3">
      <div
        className="ml-2 lg:ml-0 mt-8 font-semibold text-slate-900"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          className={
            "mr-3 hover:text-indigo-300" +
            (part === "All" ? " text-indigo-300 scale-100" : " scale-90")
          }
          type="button"
          onClick={() => setPart((part) => "All")}
        >
          All
        </button>
        <button
          className={
            "mr-3 hover:text-indigo-300" +
            (part === "Painting" ? " text-indigo-300 scale-100" : " scale-90")
          }
          type="button"
          onClick={() => setPart((part) => "Painting")}
        >
          Painting
        </button>
        <button
          className={
            "mr-3 hover:text-indigo-300" +
            (part === "Project" ? " text-indigo-300 scale-100" : " scale-90")
          }
          type="button"
          onClick={() => setPart((part) => "Project")}
        >
          Project
        </button>
      </div>
      <ul className="ml-2 lg:ml-0 text-sm leading-6 relative">
        <li
          className={"mt-5" + (contents_upcoming.length > 0 ? "" : " hidden")}
        >
          <h5 className="mb-3 font-semibold text-slate-900">Upcoming</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_upcoming.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2023.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2023</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2023.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2022.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2022</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2022.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2021.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2021</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2021.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2019.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2019</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2019.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2018.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2018</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2018.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2017.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2017</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2017.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2014.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2014</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2014.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li className={"mt-5" + (contents_2016.length > 0 ? "" : " hidden")}>
          <h5 className="mb-3 font-semibold text-slate-900">2016</h5>
          <ul className="space-y-2 border-l border-slate-100">
            {contents_2016.map((content) => (
              <Link to={`/work/${content.split(".")[0]}`}>
                <li
                  key={content.split(".")[0]}
                  className={
                    selectedContent === content.split(".")[0]
                      ? "worksidebar-li-active"
                      : "worksidebar-li-default"
                  }
                >
                  {content.split(".")[1]}
                </li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
