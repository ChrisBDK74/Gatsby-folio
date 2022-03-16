import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';



const WorksPage = ({ data }) => {
    return (
        <Layout pageTitle="Works">
                {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/works/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
            ))
          }
            
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`

export default WorksPage;