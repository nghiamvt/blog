const path = require("path")
const _get = require("lodash/get")
const createTagPages = require("./create-tag-pages.js")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const { edges } = result.data.allMarkdownRemark

  edges.forEach((edge, index) => {
    const template = _get(edge, "node.frontmatter.template")
    if (template === "post") {
      const previous = index === edges.length - 1 ? null : edges[index + 1].node
      const next = index === 0 ? null : edges[index - 1].node
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/templates/post.js"),
        context: {
          slug: edge.node.fields.slug,
          previous,
          next,
        },
      })
    }
  })

  await createTagPages(graphql, actions)
}

module.exports = createPages
