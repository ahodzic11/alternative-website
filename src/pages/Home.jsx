import React from "react";
import AcitivityBar from "../components/AcitivityBar";
import DetailedProjectsBar from "../components/DetailedProjectsBar";
import FillerBar from "../components/FillerBar";
import ProjectsBar from "../components/ProjectsBar";

function Home() {
  return (
    <div>
      <FillerBar />
      <ProjectsBar />
      <AcitivityBar />
      <DetailedProjectsBar />
    </div>
  );
}

export default Home;
