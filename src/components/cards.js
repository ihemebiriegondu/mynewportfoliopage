import { useState, useRef, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import '../CSS/cards.css';

const Cards = ({ cardTitle, cardSubTitle, CardText, expandable = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (!expandable || !CardText?.trim()) {
      setHasOverflow(false);
      return;
    }

    const measureOverflow = () => {
      if (!textRef.current) return;
      const element = textRef.current;
      setHasOverflow(element.scrollHeight > element.clientHeight + 1);
    };

    const frame = window.requestAnimationFrame(measureOverflow);
    window.addEventListener('resize', measureOverflow);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', measureOverflow);
    };
  }, [CardText, expandable, expanded]);

  const showExpandControl = expandable && CardText?.trim() && (hasOverflow || expanded);

  const isClamped = expandable && hasOverflow && !expanded;

  return (
    <Card
      className={`shadow py-4 px-3 cards w-100 ${
        expandable ? 'cards--expandable' : ''
      } ${expanded ? 'cards--expanded' : ''} ${
        hasOverflow ? 'cards--has-overflow' : ''
      }`}
    >
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h3 className="h6 mb-3">{cardTitle}</h3>
        </Card.Title>
        <Card.Subtitle className="mb-2">
          <h5 className="h5 certificate mb-4">{cardSubTitle}</h5>
        </Card.Subtitle>

        {CardText ? (
          <div
            className={`cards-text-wrapper${
              isClamped ? ' cards-text-wrapper--clamped' : ''
            }`}
          >
            <Card.Text
              ref={textRef}
              className="cards-text mb-0"
              style={{ whiteSpace: 'pre-line' }}
            >
              {CardText.trim()}
            </Card.Text>
            {showExpandControl && (
              <button
                type="button"
                className="cards-expand-btn"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <>
                    Show less <HiChevronUp className="ms-1" />
                  </>
                ) : (
                  <>
                    Read more <HiChevronDown className="ms-1" />
                  </>
                )}
              </button>
            )}
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default Cards;
