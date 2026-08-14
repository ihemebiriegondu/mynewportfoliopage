import SocialIcons from '../components/SocialIcons';
import { MdEmail } from 'react-icons/md';
import { ImPhone, ImLocation2 } from 'react-icons/im';
import { usePortfolioSection } from '../hooks/usePortfolioSection';
import { hasValue } from '../services/portfolioService';
import '../CSS/contact.css';
import MyForm from '../components/MyForm';

function Contact() {
  const { data, loading } = usePortfolioSection('contact');

  return (
    <div className="mainContact">
      <div className="col-12 mainContactDiv">
        <h3 className="text-center display-3 fw-normal">GET IN TOUCH</h3>
        <div className="col-11 m-auto">
          <h5 className="mb-5 fs-5 text-center">
            Do you have a project you'd like to work on? Feel free to contact me
          </h5>
          <div className="row">
            <div className="col-md-5 d-flex flex-column">
              {(data.socialLinks?.length > 0) && (
                <div className="shadow skillsAndabout py-3 px-3 mb-5">
                  <SocialIcons
                    links={data.socialLinks}
                    SocialIconContainerClass="contact-social-icons-container"
                    SocialIconClass="contact-social-icons"
                  />
                </div>
              )}

              {(hasValue(data.email) ||
                hasValue(data.phone) ||
                hasValue(data.location)) && (
                <div className="shadow skillsAndabout py-3 px-3 mb-5">
                  {hasValue(data.email) && (
                    <div className="mb-4">
                      <a
                        href={`mailto:${data.email}`}
                        className="text-decoration-none contact-icons"
                      >
                        <MdEmail
                          className="me-3 fs-3 mb-1"
                          style={{ color: '#93f9c8' }}
                        />
                        {data.email}
                      </a>
                    </div>
                  )}
                  {hasValue(data.phone) && (
                    <div className="mb-4">
                      <a
                        href={`tel:${data.phone.replace(/\s/g, '')}`}
                        className="text-decoration-none contact-icons"
                      >
                        <ImPhone
                          className="me-3 fs-4 mb-1"
                          style={{ color: '#93f9c8' }}
                        />
                        {data.phone}
                      </a>
                    </div>
                  )}
                  {hasValue(data.location) && (
                    <div>
                      {hasValue(data.locationUrl) ? (
                        <a
                          href={data.locationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none contact-icons d-block"
                        >
                          <ImLocation2
                            className="me-3 fs-4 mb-1"
                            style={{ color: '#93f9c8' }}
                          />
                          {data.location}
                        </a>
                      ) : (
                        <span className="contact-icons d-block">
                          <ImLocation2
                            className="me-3 fs-4 mb-1"
                            style={{ color: '#93f9c8' }}
                          />
                          {data.location}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="col-lg-6 col-md-7 m-auto ps-md-5">
              <MyForm />
            </div>
          </div>
        </div>
        {loading && <span className="visually-hidden">Loading contact content</span>}
      </div>
    </div>
  );
}

export default Contact;
