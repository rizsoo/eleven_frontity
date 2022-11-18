import React from "react"
import { connect, styled, Head } from "frontity"
import Link from "@frontity/components/link"
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
      <h4>Mi is az az ELEVEN?!</h4>
      <p>Sport és közösség. Programjainkra olyan fiatalokat várunk akik hajszolnák az adrenalint, szeretnek felnőttként is játszani és nyitottak különféle outdoor sportágak felé. Ha nincs elég motivációd, vagy éppen társaságod elmenni edzeni, vagy már régóta kipróbálnál egy ilyen sportot de nem volt kivel, akkor van egy jó hírünk, mi vagyunk a megoldás! Gyere velünk strandröpizni, hegyetmászni, falatmászni, bringázni, korizni, síelni, szörfözni, stb… és tedd mindezt úgy, hogy minden alklaommal új embereket ismersz meg, vagy éppen legjobb barátaidat hozod magaddal!</p>
      <Title>Csapatunk</Title>
      <Items>
        {res.filter(el => state.source[el.type][el.id].categories[0] === 9).map((item) => {
          const post = state.source[item.type][item.id]
          return (
              <EventItem key={item.id}>
                  <FeaturedMedia id={post.featured_media} />
                  <ItemText>
                    <Link key={item.id} link={post.link}><EventTitle>{post.title.rendered}</EventTitle></Link>
                    <Html2React html={post.excerpt.rendered} />
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
const ItemText = styled.div`
  width: 100%;
  padding: 13px 20px 13px 13px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
  height: 100%;
  background-color: white;
  p {
    letter-spacing: 0.5px;
    line-height: 1.1rem;
    margin: 0;
  }
  h4 {
    font-size: 1.5rem;
  }
  position: relative;
  @media (max-width: 800px) {
    gap: 10px;
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