import React from "react"
import { connect, styled } from "frontity"

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component
  return (
    <div>
      <PageTitle>{page.title.rendered}</PageTitle>
      <PageContent>
        <Html2React html={page.content.rendered} />
      </PageContent>
    </div>
  )
}
const PageTitle = styled.h2`
  padding: 20px;
  background-color: white;
  border-left: 3px #FFCD00 solid;
`
const PageContent = styled.div`
  background-color: white;
  padding: 15px;
  img {
    max-height: 400px;
    height: 100%;
    width: auto;
    padding: 20px;
    margin: 0 auto !important;
  }
`

export default connect(Page) 