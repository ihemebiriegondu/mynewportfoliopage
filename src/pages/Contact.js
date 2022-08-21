import React from 'react'
import SocialIcons from '../components/SocialIcons'

import { MdEmail } from 'react-icons/md'
import { ImPhone, ImLocation2 } from 'react-icons/im'

import '../CSS/contact.css'
import MyForm from '../components/MyForm';

function Contact() {
  return (
    <div className='mainContact'>
      <div className='col-12 mainContactDiv'>
        <h3 className='text-center display-3 fw-normal'>GET IN TOUCH</h3>
        <div className='col-11 m-auto'>
          <h5 className='mb-5 fs-5 text-center'>Do you have a project you'd like to work on? Feel free to contact me</h5>
          <div className='row'>
            <div className='col-md-5 d-flex flex-column'>
              <div className='shadow skillsAndabout py-3 px-3 mb-5'>
                <SocialIcons SocialIconContainerClass={'contact-social-icons-container'} SocialIconClass={'contact-social-icons'} />
              </div>
              <div className='shadow skillsAndabout py-3 px-3 mb-5'>
                <div className='mb-4'>
                  <a href='mailto:ihemebiriegondu@gmail.com' className='text-decoration-none contact-icons'><MdEmail className='me-3 fs-3 mb-1' style={{ color: '#93f9c8' }} />ihemebiriegondu@gmail</a>
                </div>
                <div className='mb-4'>
                  <a href='tel:+2347050286131' className='text-decoration-none contact-icons'><ImPhone className='me-3 fs-4 mb-1' style={{ color: '#93f9c8' }} />+234 705 028 6131</a>
                </div>
                <div>
                  <a href='https://goo.gl/maps/qbAsc8uDP7aNPLcY8' target={'_blank'} rel="noreferrer" className='text-decoration-none contact-icons d-block'><ImLocation2 className='me-3 fs-4 mb-1' style={{ color: '#93f9c8' }} />Lagos</a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-7 m-auto ps-md-5'>
              <MyForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact