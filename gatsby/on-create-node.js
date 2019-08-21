"use strict"
const { createFilePath } = require("gatsby-source-filesystem")
const kebabCase = require("lodash/kebabCase")

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    const { slug, template, tags } = node.frontmatter

    if (slug) {
      createNodeField({ node, name: "slug", value: slug })
    } else if (template) {
      createNodeField({ node, name: "slug", value: `/${template}${value}` })
    } else {
      createNodeField({ name: `slug`, node, value })
    }

    if (tags) {
      const tagSlugs = tags.map(tag => `/tag/${kebabCase(tag)}/`)
      createNodeField({ node, name: "tagSlugs", value: tagSlugs })
    }
  }
}

module.exports = onCreateNode
