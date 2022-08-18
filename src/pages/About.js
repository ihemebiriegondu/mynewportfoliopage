import React from 'react'

import HeaderImg from '../assests/HeaderImg.jpg';
import Cards from '../components/cards';

import IhemebiriEgonduCV from '../assests/Ihemebiri Egondu .pdf'
import { BsFillPersonLinesFill, BsCodeSlash, BsBraces } from 'react-icons/bs'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaMusic } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { MdLocalMovies, MdWork } from 'react-icons/md'
import { IoFastFoodSharp } from 'react-icons/io5'
import { IoMdDownload } from 'react-icons/io'
import { GiGraduateCap } from 'react-icons/gi'

import '../CSS/about.css'

function About() {
  return (
    <div className='mainAbout'>
      <div className='col-12 mainAboutDiv'>
        <div>
          <div className='d-flex justify-content-center'>
            <div className='about-img-sub-div'><img src={HeaderImg} alt="hero img" className='about-img' /></div>
          </div>
          <div className='row row-cols-lg-2 g-5 mt-5 col-sm-10 col-12 m-auto'>
            <div className=''>
              <div className='shadow skillsAndabout py-2 px-3 mb-4'>
                <h5 className='text-uppercase h4'>About Me <BsFillPersonLinesFill className='mb-1 ms-3 aboutme-icons border-0 rounded-0' /></h5>
              </div>

              <div className='ms-sm-3'>
                <p className='text-uppercase fw-bold'>Name: <span className='text-capitalize ms-3'>Egondu Ihemebiri</span></p>
                <p className='text-uppercase fw-bold'>Age: <span className='text-capitalize ms-3'>20 years</span></p>
                <p className='text-uppercase fw-bold'>Nationality: <span className='text-capitalize ms-3'>Nigerian</span></p>
                <p className='text-uppercase fw-bold'>Email: <a href='mailto:ihemebiriegondu@gmail.com' className='text-lowercase ms-3 text-decoration-none'>ihemebiriegondu@gmail.com</a></p>
                <p className='text-uppercase fw-bold'>Phone: <a href='tel:+2347050286131' className='text-capitalize ms-3 text-decoration-none'>+234 705 028 6131</a></p>
                <p className='text-uppercase fw-bold'>Languages: <span className='text-capitalize ms-3'>English</span></p>
                <div>
                  <h6 className='text-uppercase text-center mt-4 h6'>My Interest</h6>
                  <div className='d-flex align-items-center justify-content-center mt-4'>
                    <div className='py-sm-3 py-2 px-sm-3 px-2 aboutme-icons-div text-center me-sm-5 me-4'>
                      <FaMusic className='aboutme-icons h4 p-0 m-0 mb-0' />
                    </div>
                    <div className='py-sm-3 py-2 px-sm-3 px-2 aboutme-icons-div text-center me-sm-5 me-4'>
                      <MdLocalMovies className='aboutme-icons h4 p-0 m-0 mb-0' />
                    </div>
                    <div className='py-sm-3 py-2 px-sm-3 px-2 aboutme-icons-div text-center me-sm-5 me-4'>
                      <IoFastFoodSharp className='aboutme-icons h4 p-0 m-0 mb-0' />
                    </div>
                    <div className='py-sm-3 py-2 px-sm-3 px-2 aboutme-icons-div text-center'>
                      <BsBraces className='aboutme-icons h4 p-0 m-0 mb-0' />
                    </div>
                  </div>
                  <div className=''>
                    <a href={IhemebiriEgonduCV} target={'_blank'} rel="noreferrer" variant="primary" className="py-3 btn px-3 fw-bold mb-0 about-button mt-5 text-decoration-none">DOWNLOAD CV <IoMdDownload className='fs-3' /> </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='shadow skillsAndabout py-2 px-3 mb-4'>
                <h5 className='text-uppercase h4'>Skills <BsCodeSlash className='mb-1 ms-3 aboutme-icons border-0 rounded-0' /></h5>
              </div>
              <div className='ms-sm-3 pe-xxl-5'>
                <div className='d-flex align-items-center justify-content-between mb-3 me-xxl-5'>
                  <p className='text-uppercase fw-bold'>HTML</p>
                  <FaHtml5 className='mb-1 aboutme-icons me-xxl-5 display-4 border-0 rounded-0' />
                </div>
                <div className='d-flex align-items-center justify-content-between mb-3 me-xxl-5'>
                  <p className='text-uppercase fw-bold'>CSS</p>
                  <FaCss3Alt className='mb-1 aboutme-icons me-xxl-5 display-4 border-0 rounded-0' />
                </div>
                <div className='d-flex align-items-center justify-content-between mb-3 me-xxl-5'>
                  <p className='text-uppercase fw-bold'>JavaScript</p>
                  <SiJavascript className='mb-1 aboutme-icons me-xxl-5 display-5 border-0 rounded-0' />
                </div>
                <div className='d-flex align-items-center justify-content-between mb-3 me-xxl-5'>
                  <p className='text-uppercase fw-bold'>Bootstrap</p>
                  <FaBootstrap className='mb-1 aboutme-icons me-xxl-5 display-4 border-0 rounded-0' />
                </div>
                <div className='d-flex align-items-center justify-content-between mb-3 me-xxl-5'>
                  <p className='text-uppercase fw-bold'>SCSS</p>
                  <FaSass className='mb-1 aboutme-icons me-xxl-5 display-4 border-0 rounded-0' />
                </div>
                <div className='d-flex align-items-center justify-content-between mb-3 me-xxl-5'>
                  <p className='text-uppercase fw-bold'>ReactJs</p>
                  <FaReact className='mb-1 aboutme-icons me-xxl-5 display-4 border-0 rounded-0' />
                </div>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <h5 className='text-uppercase text-center mt-5 mb-4'>Education & Experience</h5>
            <div className='col-11 m-auto'>
              <div className='text-center mb-4'>
                <GiGraduateCap className='display-4' />
              </div>
              <div className='row row-cols-xl-3 row-cols-md-2 row-cols-1 justify-content-center col-md-12 col-sm-10 m-auto'>
                <div className='col mb-md-0 mb-5'>
                  <Cards cardTitle={"2015 - 2018"} cardSubTitle={"HIGH SCHOOL DIPLOMA"} CardText={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                </div>
                <div className='col'>
                  <Cards cardTitle={"2020 - PRESENT"} cardSubTitle={"BACHELOR'S DEGREE"} CardText={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                </div>
              </div>
              <div className='text-center mb-4 mt-5'>
                <MdWork className='display-4' />
              </div>
              <div className='row row-cols-xl-3 row-cols-md-2 row-cols-1 justify-content-center col-md-12 col-sm-10 m-auto'>
                <div className='col mb-md-0 mb-5'>
                  <Cards cardTitle={"2022"} cardSubTitle={"FRONTEND DEVELOPER INTERN (HTML, CSS, JS"} CardText={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                </div>
                <div className='col'>
                  <Cards cardTitle={"2022 - PRESENT"} cardSubTitle={"FRONTEND DEVELOPER INTERN (REACT JS)"} CardText={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About