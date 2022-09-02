import React from "react"
import { connect, styled, Head } from "frontity"
import FeaturedMedia from "./featured_media"
import { useState } from 'react'
import Popup from "./Popup"


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
        <PostTitle>
          <div>
          {post.title.rendered}
          {post.categories[0] === 4 ?<PostInnerData><ion-icon name="calendar-outline" /><p>{post.acf.date}</p></PostInnerData>: null}
          {post.categories[0] === 4 ?<PostInnerData><ion-icon name="location-outline" /><p>{post.acf.location}</p></PostInnerData>: null}
          </div>
          {post.categories[0] === 4 ? <SignUp onClick={handlePopUpEvent}>Jelentkezés</SignUp> : null}</PostTitle>
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
const PostTitle = styled.div`
  background-color: white;
  margin: 0.4em 0;
  padding: 0.5em;
  border-left: 4px solid #55C1FF;;
  font-size: 2rem;
  font-weight: 800;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > p {
    margin: 0;
  }
`
const SignUp = styled.h4`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  width: fit-content;
  
  font-weight: 500 !important;
  background-color: #1967B5;
  padding: 9px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `
const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.1;
  z-index: 1;
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const PostInnerData = styled.div`
  p {
    color: #6d6d6d;
    font-weight: 400;
    font-size: 14px;
    margin: 0 !important;
  }
  ion-icon {
    color: #6d6d6d;
    font-size: 14px;
  }
  display: flex;
  gap: 5px;
`

export default connect(Post) 