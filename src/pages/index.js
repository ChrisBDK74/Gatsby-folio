import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";



const IndexPage = () => {
  return (
    <Layout pageTitle="">
      
      <StaticImage
        alt="Main page logo imagery "
        src="../images/ux-site-front.png"
      />
      <section>
        This is a new section with loads of content!
      </section>
    </Layout>
  )
}

export default IndexPage;