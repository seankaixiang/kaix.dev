import React from "react"
// import { Link } from "gatsby"

import { Blob } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/projectList"
import Contact from "../components/contact"
import Image from "../components/image"

const IndexPage = () => (
  <Layout activePage="/">
    <SEO />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
      <div className="mt-12 lg:mt-0 max-w-3xl text-primary sm:text-left md:text-center lg:text-left">
        <h1 className="text-5xl sm:text-5xl font-medium">
          Hello.
        </h1>
        <h2 className="mt-6 text-2xl sm:text-3xl font-medium">
          It's me, Sean.
        </h2>
        <h3 className="mt-6 text-xl sm:text-2xl font-light">
          I’m a Full Stack software engineer living in Taipei for 7+ years. I primarily focus on Web Application and Mobile app with API.
        </h3>
      </div>
      <div className="relative">
        <Blob />
        <div className="absolute w-full h-full top-0 flex items-center justify-center">
          <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
            <Image />
          </div>
        </div>
      </div>
    </div>
    <ProjectList showHeading />
    <Contact />
  </Layout>
)

export default IndexPage
