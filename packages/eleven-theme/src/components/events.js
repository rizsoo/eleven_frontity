import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "./featured_media"
import { useEffect } from 'react'

const Events = ({ state, libraries, actions }) => {
  useEffect(() => {
    actions.source.fetch("/");
  }, []);
  const res = Object.values(state.source.post);
  const Html2React = libraries.html2react.Component;
  
  return (
    <>
      <Title>Összes eseményünk</Title>
      <Items>
        {res.filter(el => state.source[el.type][el.id].categories[0] === 4).map((item) => {
          const post = state.source[item.type][item.id]
          return (
              <EventItem key={item.id}>
                  <FeaturedMedia id={post.featured_media} />
                  <ItemText>
                    <div>
                    <Link key={item.id} link={post.link}><EventTitle>{post.title.rendered}</EventTitle></Link>
                    <Html2React html={post.excerpt.rendered} />
                    </div>
                  
                  <div>
                  <EventData><ion-icon name="calendar-outline" /><p>{post.acf.date}</p></EventData>
                  <EventData><ion-icon name="location-outline" /><p>{post.acf.location}</p></EventData>
                  </div>
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
  width: 100%;
  font-weight: 800;
  margin-top: 25px;
  @media (max-width: 800px) {
    margin-bottom: 25px;
  }
`
const ItemText = styled.div`
  width: 100%;
  padding: 13px 20px 13px 13px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  gap: 10px;
  height: 100%;
  background-color: white;

  position: relative;
`
const EventItem = styled.div`
  display: grid;
  //flex-direction: column;
  grid-template-rows: 1fr 1fr;
  justify-content: flex-end;
  @media (min-width: 800px) {
    min-height: 350px;
    p {
      margin: 0px !important;
    }
  }
  margin: 18px 0;
  font-size: 1.2em;
  color: steelblue;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
  img {
    min-width: 100%;
    min-height: 135px !important;
    object-fit: cover;
  }
  ion-icon {
    color: #6d6d6d;
    font-size: 18px;
  }
  @media (max-width: 800px) {
    img {
      max-height: 200px !important;
    }
  }
  @media (min-width: 800px) {
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

export default connect(Events)