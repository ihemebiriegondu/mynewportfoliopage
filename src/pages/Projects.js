import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import MyModal from '../components/MyModal'

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
  return (
    <div className='mainProject'>
      <div className='col-12 mainProjectDiv'>
        <h3 className='text-center mt-5 text-uppercase display-5 fw-normal'>my portfolio</h3>
        <h5 className='mb-5 fs-6 text-center' style={{ color: '#93f9c8' }}>Some of my recent projects <RiProjectorFill className='ms-2 fs-5 project-icon' /></h5>
        <div className='m-auto col-11'>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
            <div className='col'>
              <div onClick={window['openModal8']}>
                <ProjectsCard ProjectsCardImage={generalSlimKhalid} ProjectsCardName={"SlimKhalid Test Website"} ProjectPreviewLink={"https://quizzes.slimkhalid.com.ng"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/slim-khalids-test-site.git"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal7']}>
                <ProjectsCard ProjectsCardImage={foodApp} ProjectsCardName={"Food ordering app"} ProjectPreviewLink={"https://lilies-react-food-app.netlify.app/"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/react-food-app.git"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal1']}>
                <ProjectsCard ProjectsCardImage={allgraphicsdesignpage} ProjectsCardName={"Graphics designer's portfolio page"} ProjectPreviewLink={"https://graphizdemo.egondu-ihemebiri.com/"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/Graphics-Designer-theme"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal2']}>
                <ProjectsCard ProjectsCardImage={allslanttravelpage} ProjectsCardName={"Holidayz travel page"} ProjectPreviewLink={""}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/same-travel-page.git"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal3']}>
                <ProjectsCard ProjectsCardImage={allportfoliopage} ProjectsCardName={"My portfolio page V1.0"} ProjectPreviewLink={"https://egonduihemebiri.netlify.app/"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/EGO.git"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal4']}>
                <ProjectsCard ProjectsCardImage={calculator} ProjectsCardName={"My Basic calculator"} ProjectPreviewLink={"https://ego-simple-calculator.netlify.app/"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/My-Simple-Calculator"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal5']}>
                <ProjectsCard ProjectsCardImage={collage} ProjectsCardName={"Link shortener page"} ProjectPreviewLink={"https://elide-link-shortener.netlify.app/"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/URL-Shortener"} />
              </div>
            </div>
            <div className='col'>
              <div onClick={window['openModal6']}>
                <ProjectsCard ProjectsCardImage={collage2} ProjectsCardName={"PiggyVest website clone"} ProjectPreviewLink={"https://piggy-clone.netlify.app/"}
                  ProjectGitHubLink={"https://github.com/ihemebiriegondu/PiggyVest-Clone"} />
              </div>
            </div>
          </div>
        </div>
        <div className='modals'>
          <MyModal modalId={"modal1"} ProjectName={"Graphics designer's portfolio page"} ProjectLanguages={"html, bootstrap, scss, js"} ProjectPreviewLink={"https://graphizdemo.egondu-ihemebiri.com/"}
            ProjectPreviewLinkName={"graphizdemo.egondu-ihemebiri.com"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/Graphics-Designer-theme"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/Graphics-Designer-theme"} ProjectImage1={allgraphicsdesignpage}
            ProjectImage2={graphicAll} ProjectImage3={allgraphicsdesignpage}
            className="" />
          <MyModal modalId={"modal2"} ProjectName={"Holidayz travel page (in progress)"} ProjectLanguages={"html, css, bootstrap, js"} ProjectPreviewLink={""}
            ProjectPreviewLinkName={""} ProjectGitHubLink={"https://github.com/ihemebiriegondu/same-travel-page.git"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/same-travel-page"} ProjectImage1={allslanttravelpage}
            ProjectImage2={allTravel} ProjectImage3={phoneTravel}
            className="" />
          <MyModal modalId={"modal3"} ProjectName={"My portfolio page V1.0"} ProjectLanguages={"html, css, scss, bootstrap, js"} ProjectPreviewLink={"https://egonduihemebiri.netlify.app/"}
            ProjectPreviewLinkName={"egonduihemebiri.netlify.app"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/EGO.git"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/EGO"} ProjectImage1={allportfoliopage}
            ProjectImage2={portfolioTop} ProjectImage3={portfolioBottom}
            className="" />
          <MyModal modalId={"modal4"} ProjectName={"My Basic calculator"} ProjectLanguages={"html, css, js"} ProjectPreviewLink={"https://ego-simple-calculator.netlify.app/"}
            ProjectPreviewLinkName={"ego-simple-calculator.netlify.app"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/My-Simple-Calculator"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/My-Simple-Calculator"} ProjectImage1={calculator}
            ProjectImage2={calculatorDark} ProjectImage3={calculator}
            className="" />
          <MyModal modalId={"modal5"} ProjectName={"Link shortener page"} ProjectLanguages={"html, css, js"} ProjectPreviewLink={"https://elide-link-shortener.netlify.app/"}
            ProjectPreviewLinkName={"elide-link-shortener.netlify.app"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/URL-Shortener"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/URL-Shortener"} ProjectImage1={collage}
            ProjectImage2={url2} ProjectImage3={url3}
            className="" />
          <MyModal modalId={"modal6"} ProjectName={"PiggyVest website clone"} ProjectLanguages={"html, css, bootstrap, js"} ProjectPreviewLink={"https://piggy-clone.netlify.app/"}
            ProjectPreviewLinkName={"piggy-clone.netlify.app"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/PiggyVest-Clone"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/PiggyVest-Clone"} ProjectImage1={collage2}
            ProjectImage2={piggyTop} ProjectImage3={piggyBottom}
            className="" />
          <MyModal modalId={"modal7"} ProjectName={"Food ordering app"} ProjectLanguages={"ReactJs, css"} ProjectPreviewLink={"https://lilies-react-food-app.netlify.app/"}
            ProjectPreviewLinkName={"lilies food app"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/react-food-app.git"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/react-food-app"} ProjectImage1={foodApp}
            ProjectImage2={foodApp2} ProjectImage3={foodApp3} ProjectInfoFirst={'My first ReactJS project (a pixel perfect project) built from a '} ProjectFigmaLink={'https://www.figma.com/file/djFiNRn2sxcCUjcWyFs9Y0/Lilies-Food-Place-(Community)-(Copy)-(Copy)?node-id=0%3A1'} figmatext={"figma link"} ProjectInfoSecond={"Some of its features are: Login and sign up pages, a dashboard that displays all food in the menu, a profile page with changeable profile picture and modals for orders and cart items listing."}
            className="" />
          <MyModal modalId={"modal8"} ProjectName={"SlimKhalid Test Website"} ProjectLanguages={"ReactJs, css"} ProjectPreviewLink={"https://quizzes.slimkhalid.com.ng"}
            ProjectPreviewLinkName={"quizzes.slimkhalid.com.ng"} ProjectGitHubLink={"https://github.com/ihemebiriegondu/slim-khalids-test-site.git"} ProjectGitHubLinkName={"github.com/ihemebiriegondu/slim-khalids-test-site.git"} ProjectImage1={generalSlimKhalid}
            ProjectImage2={slimreview} ProjectImage3={resultPageKhalid}
            className="" />
        </div>
      </div>
    </div>
  )
}

export default Projects