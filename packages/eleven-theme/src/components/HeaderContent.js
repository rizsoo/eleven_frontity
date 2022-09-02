import React from 'react'
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import { useState } from 'react'
import { isMobile } from 'react-device-detect';

const HeaderContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMobile);

  return (
    <Header>
      <SubHeader>
      <Link link="/"><Logo src={require("./img/logo_trans_2.png").default} /></Link>
      <HeaderTitle>
        <Link link="/"><h3>ELEVEN Sportclub</h3></Link>
          <p>Sport és közösség</p>
        </HeaderTitle>
      </SubHeader>
      <SubHeader>
        {isMobile && !isMenuOpen ? null : <Menu>
          <Link link="/esemenyek">Események</Link>
          <Link link="/sportok">Sportok</Link>
          <Link link="/rolunk">Rólunk</Link>
          <Link link="/kapcsolat">Kapcsolat</Link>
          {isMobile ? <SocialsMobile>
          <Facebook><Link target="_blank" link="https://www.facebook.com/elevensportclub"><ion-icon name="logo-facebook"></ion-icon></Link></Facebook>
          <Instagram><Link target="_blank" link="https://www.instagram.com/eleven.hungary/"><ion-icon name="logo-instagram"></ion-icon></Link></Instagram>
        </SocialsMobile> : null}
        </Menu>}
        <Socials>
          <Facebook><Link target="_blank" link="https://www.facebook.com/elevensportclub"><ion-icon name="logo-facebook"></ion-icon></Link></Facebook>
          <Instagram><Link target="_blank" link="https://www.instagram.com/eleven.hungary/"><ion-icon name="logo-instagram"></ion-icon></Link></Instagram>
        </Socials>
        {isMenuOpen ? <CloseMenu onClick={() => setIsMenuOpen(false)}><ion-icon name="close-circle-outline"></ion-icon></CloseMenu > : <OpenMenu onClick={() => setIsMenuOpen(true)}><ion-icon name="apps-outline"></ion-icon></OpenMenu> }
      </SubHeader>
            
    </Header>
  )
}
const HeaderTitle = styled.div`
  margin-left: 5px;
  h3 {
    font-size: 1.7rem;
    font-weight: 800;
    @media (max-width: 800px) {
      line-height: 25px;
      font-size: 2rem;
    }
  }
  p {
    color: #6d6d6d;
    font-weight: 500;
    @media (max-width: 800px) {
      margin-top: 5px;
    }
  }
  h3:hover{
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`
const Header = styled.div`
  width: calc(100% - 8rem);
  max-width: 95rem;
  padding: 12px 0;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 25px 0;
  justify-content: space-between;
  position: relative;
  @media (max-width: 800px) {
    width: calc(100% - 1.5rem);
  }
`;
const SubHeader = styled.div`
  display: flex;
  align-items: center;
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  font-weight: 800;
  margin-left: 35px;
  z-index: 1;
  & > a {
    margin-right: 1em;
    color: #1967B5;
    font-weight: 500;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    gap: 20px;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 30px;
    padding-top: 50px;
    a {
      font-weight: 800;
      color: black;
    }
    background-color: white;
  }
`
const OpenMenu = styled.div`
  ion-icon {
    font-size: 50px;
  }
  @media (min-width: 800px) {
    display: none;  
  }
`
const CloseMenu = styled.div`
  ion-icon {
    font-size: 50px !important;
  }
  @media (min-width: 800px) {
    display: none;
  }
`
const Socials = styled.div`
    width: auto;
    display: flex;
    @media (max-width: 800px) {
      display: none;
    }
`
const SocialsMobile = styled.div`
    width: auto;
    display: flex;
`
const Facebook = styled.div`
    ion-icon:hover {
      color: #0165E1 !important;
    }
`
const Instagram = styled.div`
    ion-icon:hover {
      color: #E1306C !important;
    }
`
const Logo = styled.img`
    max-height: 60px;
    @media (max-width: 800px) {
      max-height: 90px;
    }
`

export default connect(HeaderContent)