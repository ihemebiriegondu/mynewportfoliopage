import React, { useState } from 'react'
import ProjectsCard from '../components/ProjectsCard'
import MyModal from '../components/MyModal'
import Offcanvas from 'react-bootstrap/Offcanvas'

import allgraphicsdesignpage from '../assests/Projects/all graphics design page.png'
import graphicAll from '../assests/Projects/collage 3.png'
import allslanttravelpage from '../assests/Projects/all slant travel page.png'
import phoneTravel from '../assests/Projects/travel small.png'
import allportfoliopage from '../assests/Projects/all portfolio page.png'
import allTravel from '../assests//Projects/all travel page.jpg'
import calculatorDark from '../assests/Projects/Calculator dark.png'
import url2 from '../assests/Projects/url home (2).png'
import url3 from '../assests/Projects/url home (3).png'
import piggyBottom from '../assests/Projects/Screenshot 2022-07-15 at 14-00-48 Invest in bits and on the go with Investify - PiggyVest bottom.png'
import piggyTop from '../assests/Projects/Screenshot 2022-07-15 at 14-00-48 Invest in bits and on the go with Investify - PiggyVest top.png'
import portfolioBottom from '../assests/Projects/Screenshot 2022-07-16 at 22-05-42 Egondu Ihemebiri white bottom.png'
import portfolioTop from '../assests/Projects/Screenshot 2022-07-16 at 22-05-42 Egondu Ihemebiri white top.png'
import calculator from '../assests/Projects/calculator.png'
import collage from '../assests/Projects/collage.png'
import collage2 from '../assests/Projects/collage2.png'

import foodApp from '../assests/Projects/food.jpg'
import foodApp2 from '../assests/Projects/Screenshot 2022-08-30 at 16-59-08 React App.png'
import foodApp3 from '../assests/Projects/Screenshot 2022-08-30 at 17-05-56 React App.png'

import generalSlimKhalid from '../assests/Projects/flat-devices-mockup.png'
import slimreview from '../assests/Projects/slimkhalidpreview.png'
import resultPageKhalid from '../assests/Projects/resultpage.png'

import { RiProjectorFill } from 'react-icons/ri'


import '../CSS/projects.css'


function Projects() {
  const [show, setShow] = useState(false);
  const [offcanvasTitle, setOffcanvasTitle] = useState('');
  const [offcanvasDisplayImage, setOffcanvasDisplayImage] = useState('');
  const [offcanvasRelatedImage1, setOffcanvasRelatedImage1] = useState('');
  const [offcanvasRelatedImage2, setOffcanvasRelatedImage2] = useState('');
  const [offcanvasLang, setOffcanvasLang] = useState('');
  const [offcanvasPreview, setOffcanvasPreview] = useState('');
  const [offcanvasGithub, setOffcanvasGithub] = useState('');

  const projects = [
    { Title: 'SlimKhalid Test Website', DisplayImage: generalSlimKhalid, ProjectLanguages: "ReactJs, css", relatedImage1: slimreview, relatedImage2: resultPageKhalid, previewLink: 'https://quizzes.slimkhalid.com.ng', githubLink: 'https://github.com/ihemebiriegondu/slim-khalids-test-site.git' },
    { Title: 'Lillies Food Web App', DisplayImage: foodApp, relatedImage1: foodApp2, ProjectLanguages: "ReactJs, css", relatedImage2: foodApp3, previewLink: 'https://lilies-react-food-app.netlify.app/', githubLink: 'https://github.com/ihemebiriegondu/react-food-app.git' },
    { Title: 'Graphics designer\'s portfolio page', DisplayImage: allgraphicsdesignpage, ProjectLanguages: "HTML, Bootstrap, SCSS, JS", relatedImage1: graphicAll, relatedImage2: allgraphicsdesignpage, previewLink: 'https://graphizdemo.egondu-ihemebiri.com/', githubLink: 'https://github.com/ihemebiriegondu/Graphics-Designer-theme' },
    { Title: 'Holidayz travel page', DisplayImage: allslanttravelpage, relatedImage1: '', ProjectLanguages: "HTML, Bootstrap, CSS, JS", relatedImage2: allTravel, previewLink: phoneTravel, githubLink: 'https://github.com/ihemebiriegondu/same-travel-page.git' },
    { Title: 'My portfolio page V1.0', DisplayImage: allportfoliopage, ProjectLanguages: "html, css, scss, bootstrap, js", relatedImage1: portfolioTop, relatedImage2: portfolioBottom, previewLink: 'https://egonduihemebiri.netlify.app/', githubLink: 'https://github.com/ihemebiriegondu/EGO.git' },
    { Title: 'My Basic calculator', DisplayImage: calculator, ProjectLanguages: "HTML, CSS, JS", relatedImage1: calculatorDark, relatedImage2: calculator, previewLink: 'https://ego-simple-calculator.netlify.app/', githubLink: 'https://github.com/ihemebiriegondu/My-Simple-Calculator' },
    { Title: 'Link shortener page', DisplayImage: collage, ProjectLanguages: "HTML,CSS, JS", relatedImage1: url2, relatedImage2: url3, previewLink: 'https://elide-link-shortener.netlify.app/', githubLink: 'https://github.com/ihemebiriegondu/URL-Shortener' },
    { Title: 'PiggyVest website clone', DisplayImage: collage2, ProjectLanguages: "HTML, Bootstrap, CSS, JS", relatedImage1: piggyTop, relatedImage2: piggyBottom, previewLink: 'https://piggy-clone.netlify.app/', githubLink: 'https://github.com/ihemebiriegondu/PiggyVest-Clone' }
  ]

  const showModal = (event) => {
    let targets = event.target
    //console.log(targets.parentElement.parentElement.parentElement.parentElement.children[1])

    setOffcanvasTitle(targets.parentElement.parentElement.children[1].children[0].children[0].textContent)
    setOffcanvasDisplayImage(targets.src)
    setOffcanvasGithub(targets.parentElement.parentElement.children[1].children[0].children[1].children[1].href)
    setOffcanvasPreview(targets.parentElement.parentElement.children[1].children[0].children[1].children[0].href)
    setOffcanvasLang(targets.parentElement.parentElement.parentElement.parentElement.children[1].textContent)
    setOffcanvasRelatedImage1(targets.parentElement.parentElement.parentElement.parentElement.children[2].textContent)
    setOffcanvasRelatedImage2(targets.parentElement.parentElement.parentElement.parentElement.children[3].textContent)

    handleShow()
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mainProject'>
      <div className='col-12 mainProjectDiv'>
        <h3 className='text-center mt-5 text-uppercase display-5 fw-normal'>my portfolio</h3>
        <h5 className='mb-5 fs-6 text-center' style={{ color: '#93f9c8' }}>Some of my recent projects <RiProjectorFill className='ms-2 fs-5 project-icon' /></h5>
        <div className='m-auto col-11'>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
            {
              projects.map((project, i) => (
                <div className='col' key={i}>
                  <div onClick={(event) => { showModal(event) }}>
                    <ProjectsCard ProjectsCardImage={project.DisplayImage} ProjectsCardName={project.Title} ProjectPreviewLink={project.previewLink}
                      ProjectGitHubLink={project.githubLink} />
                    <p className='d-none'>{project.ProjectLanguages}</p>
                    <p className='d-none'>{project.relatedImage1}</p>
                    <p className='d-none'>{project.relatedImage2}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='modals'>
          <Offcanvas show={show} onHide={handleClose} placement='end' className='w-100 main-modal' >
            <Offcanvas.Header closeButton className='d-flex justify-content-end'></Offcanvas.Header>
            <MyModal modalId={"modal1"} ProjectName={offcanvasTitle} ProjectLanguages={offcanvasLang} ProjectPreviewLink={offcanvasPreview}
              ProjectPreviewLinkName={offcanvasPreview} ProjectGitHubLink={offcanvasGithub} ProjectGitHubLinkName={offcanvasGithub} ProjectImage1={offcanvasDisplayImage}
              ProjectImage2={offcanvasRelatedImage1} ProjectImage3={offcanvasRelatedImage2}
              className="" />
          </Offcanvas>
        </div>
      </div>
    </div>
  )
}

export default Projects