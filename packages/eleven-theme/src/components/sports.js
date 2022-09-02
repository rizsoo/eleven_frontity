import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "./featured_media"

const Sports = ({ state, libraries }) => {
  const data = state.source.get("/");
  const Html2React = libraries.html2react.Component;
  console.log(data);
  return (
    <>
      <Title>Sportolási lehetőségek</Title>
      <Items>
        {data.items.filter(el => state.source[el.type][el.id].categories[0] === 6).map((item) => {
          const post = state.source[item.type][item.id]
          return (
              <Item key={item.id}>
                  <FeaturedMedia id={post.featured_media} />
                  <ItemText>
                  <Link key={item.id} link={post.link}><EventTitle>{post.title.rendered}</EventTitle></Link>
                  {/* <Html2React html={post.excerpt.rendered} /> */}
                  </ItemText>                
              </Item>
          )
        })}
      </Items>
      </>
  )
}

const Title = styled.h4`
  display: block;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  font-weight: 800;
  margin-top: 25px;
  @media (max-width: 800px) {
    margin-bottom: 25px;
  }
`
const ItemText = styled.div`
  width: 100%;
  padding: 13px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 10px;
  height: 100%;
  background-color: white;

  position: relative;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  
  font-size: 1.2em;
  color: steelblue;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
  img {
    min-width: 100%;
    min-height: 180px !important;
    object-fit: cover;
  }
  ion-icon {
    color: #6d6d6d;
    font-size: 18px;
  }
  @media (max-width: 800px) {
    img {
      max-height: 110px !important;
    }
  }
  @media (min-width: 800px) {
    margin: 20px 0;
    height: 250px;
    width: calc(100% / 3 - 10px);
  }
`
const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 100rem;
  h4 {
    color: #242424;
  }
  p {
    font-size: 14px;
    color: black;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const EventTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.138888889;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 5px;
  }
`

export default connect(Sports)