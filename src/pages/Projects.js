import React, { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import MyModal from "../components/MyModal";
import Offcanvas from "react-bootstrap/Offcanvas";

import allgraphicsdesignpage from "../assests/Projects/all graphics design page.png";
import graphicAll from "../assests/Projects/collage 3.png";

import designoPreview1 from "../assests/Projects/preview.jpg";
import designoPreview2 from "../assests/Projects/3-devices-black.png";
import designoPreview3 from "../assests/Projects/all-devices-black.png";

import steafastelearningMulti from "../assests/Projects/steadfastelearning-milti screens.png";
import steafastelearningMulti2 from "../assests/Projects/elearning3-devices-black.png";
import steafastelearninglaptop from "../assests/Projects/screencapture-steadfastprivateschool-elearning-netlify-app-practice-questions-2023-07-26-18_19_08.png";

import calcGif from "../assests/Projects/calcgif.gif";
import calcCover from "../assests/Projects/calcimgwvalue.png";
import calcthird from "../assests/Projects/Screenshot_20240904-222734.jpg";

import spshero from "../assests/Projects/steadfast/responsive mockup.jpg";
import spshome from "../assests/Projects/steadfast/Group 1.png";
import spsadmin from "../assests/Projects/steadfast/Thumbnail (1).png";

import { RiProjectorFill } from "react-icons/ri";

import "../CSS/projects.css";

function Projects() {
  const [show, setShow] = useState(false);
  const [offcanvasTitle, setOffcanvasTitle] = useState("");
  const [offcanvasDisplayImage, setOffcanvasDisplayImage] = useState("");
  const [offcanvasRelatedImage1, setOffcanvasRelatedImage1] = useState("");
  const [offcanvasRelatedImage2, setOffcanvasRelatedImage2] = useState("");
  const [offcanvasLang, setOffcanvasLang] = useState("");
  const [offcanvasPreview, setOffcanvasPreview] = useState("");
  const [offcanvasGithub, setOffcanvasGithub] = useState("");

  const projects = [
    {
      Title: "Steadfast Private Schools Website",
      DisplayImage: spshero,
      ProjectLanguages: "HTML, Bootstrap, JS",
      relatedImage1: spshome,
      relatedImage2: spsadmin,
      previewLink: "https://steadfast-private-school.vercel.app/",
      githubLink:
        "https://github.com/ihemebiriegondu/SteadFast-Official-Website.git",
    },
    {
      Title: "Calculator App",
      DisplayImage: calcCover,
      ProjectLanguages: "HTML, CSS, JS",
      relatedImage1: calcGif,
      relatedImage2: calcthird,
      previewLink: "https://ego-calculator-app.vercel.app/",
      githubLink: "https://github.com/ihemebiriegondu/calculator-app.git",
    },
    {
      Title: "Steadfast School E-learning web app",
      DisplayImage: steafastelearningMulti,
      ProjectLanguages: "ReactJs, ReactBootstrap, Firebase, Axios",
      relatedImage1: steafastelearningMulti2,
      relatedImage2: steafastelearninglaptop,
      previewLink: "https://steadfast-elearning.vercel.app/",
      githubLink: "https://github.com/ihemebiriegondu/steadfast-elearning.git",
    },
    {
      Title: "Graphics designer's portfolio page",
      DisplayImage: allgraphicsdesignpage,
      ProjectLanguages: "HTML, Bootstrap, SCSS, JS",
      relatedImage1: graphicAll,
      relatedImage2: allgraphicsdesignpage,
      previewLink: "https://graphics-designer-theme.vercel.app/",
      githubLink: "https://github.com/ihemebiriegondu/Graphics-Designer-theme",
    },
    {
      Title: "Designo multi-page Website",
      DisplayImage: designoPreview1,
      relatedImage1: designoPreview2,
      ProjectLanguages: "Nextjs, tailwindcss",
      relatedImage2: designoPreview3,
      previewLink: "https://designo-multipage-gamma.vercel.app/",
      githubLink: "https://github.com/tomcodes90/designo-multipage",
    },
  ];

  const showModal = (event) => {
    let targets = event.target;
    //console.log(targets.parentElement.parentElement.parentElement.parentElement.children[1])

    setOffcanvasTitle(
      targets.parentElement.parentElement.children[1].children[0].children[0]
        .textContent
    );
    setOffcanvasDisplayImage(targets.src);
    setOffcanvasGithub(
      targets.parentElement.parentElement.children[1].children[0].children[1]
        .children[1].href
    );
    setOffcanvasPreview(
      targets.parentElement.parentElement.children[1].children[0].children[1]
        .children[0].href
    );
    setOffcanvasLang(
      targets.parentElement.parentElement.parentElement.parentElement
        .children[1].textContent
    );
    setOffcanvasRelatedImage1(
      targets.parentElement.parentElement.parentElement.parentElement
        .children[2].textContent
    );
    setOffcanvasRelatedImage2(
      targets.parentElement.parentElement.parentElement.parentElement
        .children[3].textContent
    );

    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mainProject">
      <div className="col-12 mainProjectDiv">
        <h3 className="text-center mt-5 text-uppercase display-5 fw-normal">
          my portfolio
        </h3>
        <h5 className="mb-5 fs-6 text-center" style={{ color: "#93f9c8" }}>
          Some of my recent projects{" "}
          <RiProjectorFill className="ms-2 fs-5 project-icon" />
        </h5>
        <div className="m-auto col-11">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            {projects.map((project, i) => (
              <div className="col" key={i}>
                <div
                  onClick={(event) => {
                    showModal(event);
                  }}
                >
                  <ProjectsCard
                    ProjectsCardImage={project.DisplayImage}
                    ProjectsCardName={project.Title}
                    ProjectPreviewLink={project.previewLink}
                    ProjectGitHubLink={project.githubLink}
                  />
                  <p className="d-none">{project.ProjectLanguages}</p>
                  <p className="d-none">{project.relatedImage1}</p>
                  <p className="d-none">{project.relatedImage2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modals">
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className="w-100 main-modal"
          >
            <Offcanvas.Header
              closeButton
              className="d-flex justify-content-end"
            ></Offcanvas.Header>
            <MyModal
              modalId={"modal1"}
              ProjectName={offcanvasTitle}
              ProjectLanguages={offcanvasLang}
              ProjectPreviewLink={offcanvasPreview}
              ProjectPreviewLinkName={offcanvasPreview}
              ProjectGitHubLink={offcanvasGithub}
              ProjectGitHubLinkName={offcanvasGithub}
              ProjectImage1={offcanvasDisplayImage}
              ProjectImage2={offcanvasRelatedImage1}
              ProjectImage3={offcanvasRelatedImage2}
              className=""
            />
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}
//#c3dcd8
export default Projects;
