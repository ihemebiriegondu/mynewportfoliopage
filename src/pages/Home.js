import { Button } from 'react-bootstrap';
import SocialIcons from '../components/SocialIcons';
import { HiOutlineArrowSmDown, HiChevronDoubleDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { usePortfolioSection } from '../hooks/usePortfolioSection';
import { hasValue } from '../services/portfolioService';
import '../CSS/home.css';

function Home() {
  const navigate = useNavigate();
  const { data, loading } = usePortfolioSection('home');

  const heroImage = hasValue(data.heroImage) ? data.heroImage : null;

  return (
    <div className="col-12 mainHome">
      <div className="d-flex flex-column justify-content-center align-items-center mainHomeDiv">
        <SocialIcons
          links={data.socialLinks}
          SocialIconContainerClass="home-social-icons-container d-sm-flex d-none"
          SocialIconClass="socialIconsHome"
        />
        <div className="background">
          <div className="d-flex flex-lg-row flex-column-reverse col-11 m-sm-0 ms-sm-auto m-auto pe-sm-5 align-items-center mainHomeContents">
            <div className="col-lg-7 col-md-11 col-sm-12 text-lg-start text-center">
              <div className="me-xl-5 mt-lg-0 mt-5">
                {hasValue(data.name) && (
                  <h1 className="display-3 fw-bold">{data.name}</h1>
                )}
                {hasValue(data.jobTitle) && (
                  <h2 className="display-4 fw-normal mb-4">{data.jobTitle}</h2>
                )}

                {hasValue(data.description) && (
                  <p className="mb-4">{data.description}</p>
                )}

                <Button
                  variant="primary"
                  onClick={() => navigate('/about')}
                  className="py-3 px-3 fw-bold mb-0 about-button"
                >
                  MORE ABOUT ME <HiOutlineArrowSmDown className="fs-3" />
                </Button>
                <div className="scroll-down d-sm-none d-block">
                  <HiChevronDoubleDown
                    onClick={() => navigate('/about')}
                    className="fs-2 scroll-down-icon d-sm-none d-block"
                  />
                </div>
              </div>
            </div>
            {heroImage && (
              <div className="col-5 header-img-div m-0 p-0">
                <div className="header-img-sub-div shadow">
                  <img src={heroImage} alt={data.name || 'Profile'} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="scroll-down d-sm-block d-none">
          <HiChevronDoubleDown
            onClick={() => navigate('/about')}
            className="fs-2 scroll-down-icon d-sm-block d-none"
          />
        </div>
        {loading && <span className="visually-hidden">Loading home content</span>}
      </div>
    </div>
  );
}

export default Home;
