import React from 'react'
import ServicesPage from './(pages)/services/page'
import AboutPage from './(pages)/about/page'
import ContactPage from './contact/page'

const page = () => {
  return (
    <div>
      <ServicesPage/>
      <AboutPage/>
      <ContactPage/>
    </div>
  )
}

export default page
