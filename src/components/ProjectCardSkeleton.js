import { Card } from 'react-bootstrap';
import '../CSS/loading.css';

function ProjectCardSkeleton() {
  return (
    <Card className="shadow p-0 projectcard project-card-skeleton border-0">
      <Card.Body className="p-0 projectcardbody">
        <div className="projectcardbodyImg">
          <div className="skeleton project-card-skeleton__image" />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCardSkeleton;
