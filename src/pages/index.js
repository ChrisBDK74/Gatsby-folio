import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";



const IndexPage = () => {
  return (
    <Layout pageTitle="Christian Bering">
      <p>UX Designer specializing in website audit and review.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ux-site-front.png"
      />
    </Layout>
  )
}

export default IndexPage;