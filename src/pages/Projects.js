import { useState, useEffect } from 'react';
import { getProjects } from '../services/portfolioService';

import ProjectsCard from '../components/ProjectsCard';
import LoadingDots from '../components/LoadingDots';
import MyModal from '../components/MyModal';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RiProjectorFill } from 'react-icons/ri';

import '../CSS/projects.css';
import '../CSS/loading.css';

function Projects() {
  const [projectDatas, setProjectDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjectDatas(data);
        setError(null);
      })
      .catch((fetchError) => {
        console.error('Failed to load projects:', fetchError);
        setError('Unable to load projects right now. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="mainProject">
      <div className="mainProjectDiv">
        <h3 className="text-center mt-5 text-uppercase display-5 fw-normal">
          my portfolio
        </h3>
        <h5 className="mb-5 fs-6 text-center" style={{ color: '#93f9c8' }}>
          Some of my recent projects{' '}
          <RiProjectorFill className="ms-2 fs-5 project-icon" />
        </h5>
        <div className="projects-content">
          {loading ? (
            <LoadingDots />
          ) : (
            <div className="projects-grid">
            {error && (
              <div className="projects-grid__item projects-grid__item--full">
                <div className="projects-error-state">
                  <p>{error}</p>
                </div>
              </div>
            )}

            {!error && projectDatas.length === 0 && (
              <div className="projects-grid__item projects-grid__item--full">
                <div className="projects-empty-state">
                  <p>No projects to show yet.</p>
                </div>
              </div>
            )}

            {!error &&
              projectDatas.map((project, index) => (
                <div className="projects-grid__item" key={project.id ?? project.Title ?? index}>
                  <div
                    className="h-100 w-100"
                    role="button"
                    tabIndex={0}
                    onClick={() => openProject(project)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        openProject(project);
                      }
                    }}
                  >
                    <ProjectsCard
                      ProjectsCardImage={project.DisplayImage}
                      ProjectsCardName={project.Title}
                      ProjectPreviewLink={project.previewLink}
                      ProjectGitHubLink={project.githubLink}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {show && (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="bottom"
          className="h-100 main-modal"
        >
          <Offcanvas.Header
            closeButton
            className="d-flex justify-content-end"
          />
          {selectedProject && (
            <MyModal
              modalId="modal1"
              ProjectName={selectedProject.Title}
              ProjectLanguages={selectedProject.ProjectLanguages}
              ProjectPreviewLink={selectedProject.previewLink}
              ProjectPreviewLinkName={selectedProject.previewLink}
              ProjectGitHubLink={selectedProject.githubLink}
              ProjectGitHubLinkName={selectedProject.githubLink}
              ProjectImage1={selectedProject.DisplayImage}
              ProjectImage2={selectedProject.relatedImage1}
              ProjectImage3={selectedProject.relatedImage2}
              className=""
            />
          )}
        </Offcanvas>
        )}
      </div>
    </div>
  );
}

export default Projects;
