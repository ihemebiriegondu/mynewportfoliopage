import { useState } from 'react';
import Cards from '../components/cards';
import { BsFillPersonLinesFill, BsCodeSlash } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';
import { GiGraduateCap } from 'react-icons/gi';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { usePortfolioSection } from '../hooks/usePortfolioSection';
import { hasValue } from '../services/portfolioService';
import '../CSS/about.css';

const SKILLS_PREVIEW_COUNT = 10;

function About() {
  const { data, loading } = usePortfolioSection('about');
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = data.skills || [];
  const interests = data.interests || [];
  const education = data.education || [];
  const experiences = data.experiences || [];
  const visibleSkills = showAllSkills
    ? skills
    : skills.slice(0, SKILLS_PREVIEW_COUNT);
  const aboutImage = hasValue(data.aboutImage) ? data.aboutImage : null;

  return (
    <div className="mainAbout">
      <div className="col-12 mainAboutDiv">
        <div>
          {aboutImage && (
            <div className="d-flex justify-content-center">
              <div className="about-img-sub-div">
                <img src={aboutImage} alt={data.name || 'Profile'} className="about-img" />
              </div>
            </div>
          )}

          <div className="row row-cols-lg-2 g-5 mt-5 col-sm-10 col-12 m-auto">
            <div>
              <div className="shadow skillsAndabout py-2 px-3 mb-4">
                <h5 className="text-uppercase h4">
                  About Me{' '}
                  <BsFillPersonLinesFill className="mb-1 ms-3 aboutme-icons border-0 rounded-0" />
                </h5>
              </div>

              <div className="ms-sm-3">
                {hasValue(data.name) && (
                  <p className="text-uppercase fw-bold">
                    Name:{' '}
                    <span className="text-capitalize ms-3">{data.name}</span>
                  </p>
                )}
                {hasValue(data.nationality) && (
                  <p className="text-uppercase fw-bold">
                    Nationality:{' '}
                    <span className="text-capitalize ms-3">{data.nationality}</span>
                  </p>
                )}
                {hasValue(data.email) && (
                  <p className="text-uppercase fw-bold">
                    Email:{' '}
                    <a
                      href={`mailto:${data.email}`}
                      className="text-lowercase ms-3 text-decoration-none"
                    >
                      {data.email}
                    </a>
                  </p>
                )}
                {hasValue(data.phone) && (
                  <p className="text-uppercase fw-bold">
                    Phone:{' '}
                    <a
                      href={`tel:${data.phone.replace(/\s/g, '')}`}
                      className="text-capitalize ms-3 text-decoration-none"
                    >
                      {data.phone}
                    </a>
                  </p>
                )}
                {data.languages?.length > 0 && (
                  <p className="text-uppercase fw-bold">
                    Languages:{' '}
                    <span className="text-capitalize ms-3">
                      {data.languages.join(', ')}
                    </span>
                  </p>
                )}

                {interests.length > 0 && (
                  <div>
                    <h6 className="text-uppercase text-center mt-4 h6">My Interest</h6>
                    <div className="about-tags-wrap">
                      {interests.map((interest) => (
                        <span key={interest} className="about-tag">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {hasValue(data.cvUrl) && (
                  <div>
                    <a
                      href={data.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="py-3 btn px-3 fw-bold mb-0 about-button mt-5 text-decoration-none d-inline-flex align-items-center"
                    >
                      DOWNLOAD CV <IoMdDownload className="fs-3 ms-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {skills.length > 0 && (
              <div>
                <div className="shadow skillsAndabout py-2 px-3 mb-4">
                  <h5 className="text-uppercase h4">
                    Skills{' '}
                    <BsCodeSlash className="mb-1 ms-3 aboutme-icons border-0 rounded-0" />
                  </h5>
                </div>
                <div className="ms-sm-3 pe-xxl-5">
                  <div className="about-skills-panel">
                    <div className="about-tags-wrap">
                      {visibleSkills.map((skill) => (
                        <span key={skill} className="about-tag about-tag--skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                    {skills.length > SKILLS_PREVIEW_COUNT && (
                      <button
                        type="button"
                        className="about-skills-toggle"
                        onClick={() => setShowAllSkills((prev) => !prev)}
                      >
                        {showAllSkills ? (
                          <>
                            Show fewer skills <HiChevronUp className="ms-1" />
                          </>
                        ) : (
                          <>
                            Show all skills ({skills.length}){' '}
                            <HiChevronDown className="ms-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {(education.length > 0 || experiences.length > 0) && (
            <div className="pt-5">
              <h5 className="text-uppercase text-center mt-5 mb-4">
                Education & Experience
              </h5>
              <div className="col-11 m-auto">
                {education.length > 0 && (
                  <>
                    <div className="text-center mb-4">
                      <GiGraduateCap className="display-4" />
                    </div>
                    <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 justify-content-center col-md-12 col-sm-10 m-auto g-4">
                      {education.map((item, index) => (
                        <div key={`edu-${index}`} className="col d-flex">
                          <Cards
                            cardTitle={item.title}
                            cardSubTitle={item.subTitle}
                            CardText={item.text || ''}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {experiences.length > 0 && (
                  <>
                    <div className="text-center mb-4 mt-5">
                      <MdWork className="display-4" />
                    </div>
                    <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 justify-content-center col-md-12 col-sm-10 m-auto g-4">
                      {experiences.map((exp, index) => (
                        <div key={`exp-${index}`} className="col d-flex">
                          <Cards
                            cardTitle={exp.title}
                            cardSubTitle={exp.subTitle}
                            CardText={exp.text || ''}
                            expandable={hasValue(exp.text)}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        {loading && <span className="visually-hidden">Loading about content</span>}
      </div>
    </div>
  );
}

export default About;
