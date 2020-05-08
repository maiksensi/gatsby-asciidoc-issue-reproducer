import { graphql } from "gatsby"
import React from "react"

export default function About({ data }) {
  const about = data.asciidoc
  return (
    <>
      <h1>{about.document.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.html }} />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    asciidoc(fields: { slug: { eq: $slug } }) {
      html
      document {
        title
      }
    }
  }
`
