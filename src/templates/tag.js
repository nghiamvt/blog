import React from "react"
import Layout from "../components/layout"
import TagList from "../components/tag-list"
import { useTagList } from "../hooks"

const TagsListTemplate = () => {
  const tags = useTagList().map(tag => ({
    label: tag.fieldValue,
    count: tag.totalCount,
  }))

  return (
    <Layout>
      <TagList tags={tags} />
    </Layout>
  )
}

export default TagsListTemplate
