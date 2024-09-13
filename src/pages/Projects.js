import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import ProjectsCard from "../components/ProjectsCard";
import MyModal from "../components/MyModal";
import Offcanvas from "react-bootstrap/Offcanvas";

import { RiProjectorFill } from "react-icons/ri";

import "../CSS/projects.css";

function Projects() {
  const [projectDatas, setProjectDatas] = useState([]);
  const [show, setShow] = useState(false);
  const [offcanvasTitle, setOffcanvasTitle] = useState("");
  const [offcanvasDisplayImage, setOffcanvasDisplayImage] = useState("");
  const [offcanvasRelatedImage1, setOffcanvasRelatedImage1] = useState("");
  const [offcanvasRelatedImage2, setOffcanvasRelatedImage2] = useState("");
  const [offcanvasLang, setOffcanvasLang] = useState("");
  const [offcanvasPreview, setOffcanvasPreview] = useState("");
  const [offcanvasGithub, setOffcanvasGithub] = useState("");

  useEffect(() => {
    const projectCol = collection(database, "projects");
    const queryProjects = query(projectCol, orderBy("importance", "asc"));

    getDocs(queryProjects)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setProjectDatas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            {projectDatas.map((project, i) => (
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
