import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Bannar from './components/Bannar.jsx'
import Work from './components/Work.jsx'
import OurWork from './components/OurWork.jsx'
import Features from './components/Features.jsx'
import Testimonial from './components/Testimonial.jsx'
import FAQ from './components/FAQ.jsx'
import ContactForm from './components/ContactForm.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'
import About from './Pages/About.jsx'
import FeaturePage from './Pages/FeaturePage.jsx'
import Pricing from './Pages/Pricing.jsx'
import BlogPage from './Pages/BlogPage.jsx'
import ContactUs from './Pages/ContactUs.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import WorkPage from './Pages/WorkPage.jsx'
import ReadBlog  from './Pages/ReadBlog.jsx'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Bannar />
          <Work />
          <OurWork />
          <Features />
          <Testimonial />
          <FAQ />
          <ContactForm />
          <Blog />
          <Footer />
        </>
      )
    },
    {
      path: "/About",
      element: (
        <> <NavBar />
          <About />
          <Footer />

        </>

      )
    },
    {
      path: "/FeaturePage",
      element: (
        <>
          <NavBar />
          <FeaturePage />
          <FAQ />
          <Footer />
        </>
      )
    },
    {
      path: "/Pricing",
      element: (
        <>
          <NavBar />
          <Pricing />
          <FAQ />
          <Footer />
        </>
      )
    },
    {
      path: "/BlogPage",
      element: (
        <>
          <NavBar />
          <BlogPage />
          <Footer />
        </>
      )
    },
    {
      path: "/ContactUs",
      element: (
        <>
          <NavBar />
          <ContactUs />
          <Footer />
        </>
      )
    },
    {
      path: "/PrivacyPolicy",
      element: (
        <>
          <NavBar />
          <PrivacyPolicy />
          <Footer />
        </>
      )
    },
    {
      path: "/WorkPage",
      element: (
        <>
          <NavBar />
          <WorkPage />
          <Footer />
        </>
      )
    },
     {
      path: "/ReadBlog",
      element: (
        <>
          <NavBar />
          <ReadBlog />
          <Footer />
        </>
      )
    },



  ])

  return (
    <>
      <RouterProvider router={router} />;


    </>
  )
}

export default App
