import React from "react"
import { connect, styled, Head } from "frontity"
import FeaturedMedia from "./featured_media"
import { useState } from 'react'
import Popup from "./Popup"
import PostHeader from "./Atoms/PostHeader"

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  console.log(state.source.get("/"));
  const post = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component;
  const [isPopUp, setIsPopUp] = useState(false);
  function handlePopUpEvent() {
    setIsPopUp(true);
  }

  return (
    <PostContent>
        <Head>
            <title>{post.title.rendered}</title>
            <meta name="description" content={post.excerpt.rendered} />
        </Head>
          {isPopUp? <Popup /> : null}
          {isPopUp? <Shadow onClick={() => setIsPopUp(false)} /> : null}
        <FeaturedMedia id={post.featured_media} />
        <PostHeader title={post.title.rendered} post={post} handlePopUpEvent={handlePopUpEvent} />
        <PostText>
          <Html2React html={post.content.rendered} />
        </PostText>
    </PostContent>
  )
}
const PostContent = styled.div`
  img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }
`
const PostText = styled.div`
  padding: 20px;
  padding-left: 30px;
  background-color: white;
`

const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.1;
  z-index: 1;
  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


export default connect(Post) 