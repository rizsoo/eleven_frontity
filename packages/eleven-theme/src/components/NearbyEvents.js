import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "./featured_media"
import Popup from "./Popup"
import { useState } from 'react'

const NearbyEvents = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component;
  const [isPopUp, setIsPopUp] = useState(false);
  function handlePopUpEvent() {
    setIsPopUp(true);
  }
  console.log(data.items);

  return (
    <>
      <Title>Közelgő események</Title>
      {isPopUp? <Popup /> : null}
      {isPopUp? <Shadow onClick={() => setIsPopUp(false)} /> : null}
      <Items>
        {data.items.filter(el => state.source[el.type][el.id].categories[0] === 4).slice(0, 4).map((item) => {
          const post = state.source[item.type][item.id]

          return (
              <Item key={item.id}>
                  <FeaturedMedia id={post.featured_media} />
                  <ItemText>
                  <Link key={item.id} link={post.link}><EventTitle>{post.title.rendered}</EventTitle></Link>
                  <Html2React html={post.excerpt.rendered} />
                  <Data><ion-icon name="calendar-outline" /><p>{post.acf.date}</p></Data>
                  <Data><ion-icon name="location-outline" /><p>{post.acf.location}</p></Data>
                  <SignUp onClick={handlePopUpEvent}>Jelentkezés</SignUp>
                  </ItemText>                
              </Item>
          )
        })}
      </Items>
      <Link link={"/esemenyek/"} ><More>További eseményeink...</More></Link>
    </>
  )
}
const Data = styled.div`
  p {
    color: #6d6d6d;
    font-size: 15px;
    margin: 0 !important;
  }
  display: flex;
  gap: 5px;
`
const Title = styled.h4`
  display: block;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  font-weight: 800;
  margin-top: 25px;
`
const ItemText = styled.div`
  width: 100%;
  padding: 13px;
  
  display: flex;
  flex-direction: column;
  
  gap: 10px;
  height: 100%;
  background-color: white;

  position: relative;
  @media (min-width: 800px) {
    padding-right: 20px;
  }
  @media (max-width: 800px) {
    padding-bottom: 45px;
  }
`
const Item = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  margin: 20px 0;
  font-size: 1.2em;
  color: steelblue;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
  img {
    min-width: 50%;
    max-height: 250px !important;
    object-fit: cover;
  }
  ion-icon {
    color: #6d6d6d;
    font-size: 18px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`
const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100rem;
  h4 {
    color: #242424;
  }
  p {
    font-size: 14px;
    color: black;
  }
`
const EventTitle = styled.h4`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.138888889;
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 5px;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
const SignUp = styled.h4`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #1967B5 !important;
  cursor: pointer;
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
const More = styled.h3`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 20px;
`

export default connect(NearbyEvents)