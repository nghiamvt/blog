import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostList from "../components/post-list"

export default function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const tag = props.pageContext.tag
  const totalCount = props.data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`

  return (
    <Layout location={props.location} title={siteTitle}>
      <h3>{tagHeader}</h3>
      <PostList posts={posts} />
      <p style={{ textAlign: `center` }}>
        <Link to="/tags/">Browse all tags</Link>
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
