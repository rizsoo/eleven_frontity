import React from "react"
import { connect, styled } from "frontity"
import FeaturedMedia from "./featured_media"
import { useEffect } from 'react'

const Team = ({ state, libraries, actions }) => {
  useEffect(() => {
    actions.source.fetch("/");
  }, []);
  const res = Object.values(state.source.post);
  const Html2React = libraries.html2react.Component;
  
  return (
    <>
      <Title>Mi is az az ELEVEN?!</Title>
        <Items>
        {res.filter(el => state.source[el.type][el.id].categories[0] === 10).map((i) => {
          const post = state.source[i.type][i.id]
          return (
              <HeaderItem key={i.id}>
                  <HeaderText>
                    <Html2React html={post.content.rendered} />
                  </HeaderText>
                  <FeaturedMedia id={post.featured_media} />
              </HeaderItem>
          )
        })}
        </Items>
      <Title>Csapatunk</Title>
      <Items>
        {res.filter(el => state.source[el.type][el.id].categories[0] === 9).map((item) => {
          const post = state.source[item.type][item.id]
          return (
              <EventItem key={item.id}>
                  <FeaturedMedia id={post.featured_media} />
                  <ItemText>
                    <EventTitle>{post.title.rendered}</EventTitle>
                    <Html2React html={(post.excerpt.rendered).substring(0, 50)} />
                  </ItemText>                
              </EventItem>
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
  font-size: 2rem;
  width: 100%;
  font-weight: 800;
  margin-top: 25px;
  @media (max-width: 800px) {
    margin-bottom: 25px;
  }
`
const HeaderText = styled.div`
  padding: 20px; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  p {
    letter-spacing: 0.5px;
    line-height: 1.1rem;
    margin: 0;
  }

`
const ItemText = styled.div`
  width: 100%;
  padding: 13px 20px 13px 13px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
  height: 100%;
  background-color: white;

  h4 {
    font-size: 1.5rem;
  }
  position: relative;
  @media (max-width: 800px) {
    gap: 10px;
  }
`
const HeaderItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 18px 0;
  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    max-width: 100%;
  }
  @media (max-width: 800px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`
const EventItem = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  @media (min-width: 800px) {
    min-height: 350px;
  }
  margin: 18px 0;
  height: 420px;

  font-size: 1.2em;
  color: steelblue;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
  img {
    min-width: 100%;
    min-height: 100% !important;
    object-fit: cover;
    max-width: 100%;
  }
  ion-icon {
    color: #6d6d6d;
    font-size: 18px;
  }
  @media (max-width: 800px) {
    grid-template-rows: 2fr 1fr;
    h4 {
        font-size: 2.2rem !important;
    }
  }
  @media (min-width: 800px) {
    width: calc(100% / 4 - 15px);
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

  padding-bottom: 5px;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 5px;
  }
`
const EventData = styled.div`
  p {
    color: #6d6d6d;
    font-size: 15px;
    margin: 0 !important;
  }
  display: flex;
  gap: 5px;
  text-align: left;
  padding-top: 5px;
  ion-icon {
    padding: 0;
  }
`

export default connect(Team)