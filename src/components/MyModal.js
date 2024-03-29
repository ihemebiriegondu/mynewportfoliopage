import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import '../CSS/mymodal.css'

const MyModal = ({ modalId, ProjectName, ProjectLanguages, ProjectPreviewLink, ProjectPreviewLinkName, ProjectGitHubLink, ProjectGitHubLinkName, ProjectImage1, ProjectImage2, ProjectImage3, ProjectInfoFirst, ProjectFigmaLink, ProjectInfoSecond, figmatext }) => {
  return (
    <div className='' id={modalId}>
      <div className='main-modal'>
        <div className='modal-container'>
          <div className='modal-carousel-div col-11 m-auto py-5'>
            <div className='col-lg-9 col-sm-11 col-12 row row-cols-md-2 row-cols-1 m-auto justify-content-between flex-wrap mb-4'>
              <div className='col'>
                <h5 className='h6 text-uppercase'>Project Name: <span className='fw-bold ms-3'>{ProjectName}</span></h5>
                <h5 className='h6 text-uppercase mt-md-0 mt-3'>Language: <span className='fw-bold ms-3'>{ProjectLanguages}</span></h5>
              </div>
              <div className='ps-md-5 mt-md-0 mt-3 col'>
                <p className='h6 text-uppercase'>Preview: <a href={ProjectPreviewLink} className='fw-bold text-lowercase text-decoration-none ms-3' target={'_blank'} rel="noreferrer" style={{ color: '#93f9c8' }}>{ProjectPreviewLinkName}</a></p>
                <p className='h6 text-uppercase mt-md-0 mt-3'>GitHub Repo: <a href={ProjectGitHubLink} className='fw-bold text-lowercase text-decoration-none ms-3' target={'_blank'} rel="noreferrer" style={{ color: '#93f9c8' }}>{ProjectGitHubLinkName}</a></p>
              </div>
            </div>
            <div className='col-lg-9 col-sm-11 col-12 m-auto projectinfo'>
              <p className=''><span>{ProjectInfoFirst}</span> <a href={ProjectFigmaLink} target='_blank' rel="noreferrer" >{figmatext}</a></p>
              <p>{ProjectInfoSecond}</p>
            </div>
            <Carousel className='col-lg-9 col-sm-11 col-12 main-carousel m-auto py-5'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ProjectImage1}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ProjectImage2}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ProjectImage3}
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyModal
