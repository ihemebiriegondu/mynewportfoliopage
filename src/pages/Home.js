import React from "react";
import { Button } from "react-bootstrap";
import HeaderImg from "../assests/HeaderImg.jpg";
import SocialIcons from "../components/SocialIcons";
import { HiOutlineArrowSmDown, HiChevronDoubleDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "../CSS/home.css";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="col-12 mainHome">
      <div className="d-flex flex-column justify-content-center align-items-center mainHomeDiv">
        <SocialIcons
          SocialIconContainerClass={
            "home-social-icons-container d-sm-flex d-none"
          }
          SocialIconClass={"socialIconsHome"}
        />
        <div className="background">
          <div className="d-flex flex-lg-row flex-column-reverse col-11 m-sm-0 ms-sm-auto m-auto pe-sm-5 align-items-center mainHomeContents">
            <div className="col-lg-7 col-md-11 col-sm-12 text-lg-start text-center">
              <div className="me-xl-5 mt-lg-0 mt-5">
                <h1 className="display-3 fw-bold">Egondu Ihemebiri</h1>
                <h2 className="display-4 fw-normal mb-4">Frontend Developer</h2>

                <p className="mb-4">
                  {/* I am a creative Frontend developer with experience in creating static websites and web applications. Throughout my years of experience I have worked on various projects some which involves me working alongside UI/UX designers and Backend developers and I am a well organized and collaborative team player. */}
                  I build websites because it feels like magic. Type some code,
                  refresh, and suddenly there’s something new. I’m always
                  chasing that little spark when an idea clicks. Sometimes I
                  work solo, sometimes with a team, but it’s always about
                  creating something that wasn’t there yesterday.
                </p>

                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="py-3 px-3 fw-bold mb-0 about-button"
                >
                  MORE ABOUT ME <HiOutlineArrowSmDown className="fs-3" />{" "}
                </Button>
                <div className="scroll-down d-sm-none d-block">
                  <HiChevronDoubleDown
                    onClick={() => {
                      navigate("/about");
                    }}
                    className="fs-2 scroll-down-icon d-sm-none d-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-5 header-img-div m-0 p-0">
              <div className="header-img-sub-div shadow">
                <img src={HeaderImg} alt="hero img" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down d-sm-block d-none">
          <HiChevronDoubleDown
            onClick={() => {
              navigate("/about");
            }}
            className="fs-2 scroll-down-icon d-sm-block d-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
