import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import TagList from "../components/tag-list"
import SEO from "../components/seo"

export default function BlogTemplate(props) {
  const post = props.data.markdownRemark.frontmatter
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <article>
        <header>
          <h1 style={{ margin: `0 0 8px` }}>{post.title}</h1>
          <p style={{ fontSize: `14px`, fontStyle: `italic` }}>{post.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <TagList tags={post.tags.map(tag => ({ label: tag }))} />
        <hr />
      </article>

      <Paging>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Paging>
    </Layout>
  )
}

const Paging = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
