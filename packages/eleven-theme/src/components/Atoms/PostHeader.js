import React from 'react'
import { connect } from "frontity"
import { PostTitle, PostHeaderContent, PostInnerData, SignUp } from './PostHeader.styled'

const PostHeader = ({title, post, handlePopUpEvent}) => {
  return (
    <PostTitle>
        <PostHeaderContent>
          {title}
          {post.categories[0] === 4 ?<PostInnerData><ion-icon name="calendar-outline" /><p>{post.acf.date}</p></PostInnerData>: null}
          {post.categories[0] === 4 ?<PostInnerData><ion-icon name="location-outline" /><p>{post.acf.location}</p></PostInnerData>: null}
        </PostHeaderContent>
        {/* {post.categories[0] === 4 && post.acf.calendry ? <SignUp onClick={handlePopUpEvent}>Jelentkezés</SignUp> : null} */}
    </PostTitle>
  )
}



export default connect(PostHeader)