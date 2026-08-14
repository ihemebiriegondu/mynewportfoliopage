import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { BsEyeFill, BsGithub, BsImage } from 'react-icons/bs';
import '../CSS/projectsCard.css';
import '../CSS/loading.css';

const ProjectsCard = ({
  ProjectsCardImage,
  ProjectsCardName,
  ProjectPreviewLink,
  ProjectGitHubLink,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="shadow p-0 projectcard" style={{ height: '20rem' }}>
      <Card.Body className="p-0 projectcardbody">
        <div className="projectcardbodyImg">
          {!imageLoaded && !imageError && (
            <div className="skeleton project-image-skeleton" aria-hidden="true" />
          )}
          {!imageError ? (
            <img
              src={ProjectsCardImage}
              alt={`${ProjectsCardName} preview`}
              className={imageLoaded ? 'is-loaded' : ''}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="project-image-fallback">
              <BsImage className="fs-1" />
              <span>Image unavailable</span>
            </div>
          )}
        </div>
        <div className="cardText">
          <div className="cardTextDiv">
            <h6 className="me-4 text-uppercase">{ProjectsCardName}</h6>
            <div>
              <a
                href={ProjectPreviewLink}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#93f9c8' }}
                onClick={(event) => event.stopPropagation()}
              >
                <BsEyeFill className="fs-3 me-3" />
              </a>
              <a
                href={ProjectGitHubLink}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#93f9c8' }}
                onClick={(event) => event.stopPropagation()}
              >
                <BsGithub className="fs-4" />
              </a>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
