import React from 'react'
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import { useState } from 'react'
import { isMobile } from 'react-device-detect';
import { Header, Logo, HeaderTitle, SubHeader, OpenMenu, CloseMenu, Menu, Facebook, Instagram, SocialsMobile, Socials } from './HeaderContent.styled';

const HeaderContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Header>
      <SubHeader>
      <Link link="/"><Logo src={require("./img/eleven_logo_kicsi.png").default} /></Link>
      <HeaderTitle>
        <Link link="/"><h3>ELEVEN Sportclub</h3></Link>
          <p>Sport és közösség</p>
        </HeaderTitle>
      </SubHeader>
      <SubHeader>
        {isMobile && !isMenuOpen ? null : <Menu onClick={() => setIsMenuOpen(false)}>
          <CloseMenu><ion-icon name="close-circle-outline"></ion-icon></CloseMenu >
          <Link link="/esemenyek">Események</Link>
          <Link link="/sportok">Sportok</Link>
          <Link link="/szolgaltatasok">Szolgáltatások</Link>
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
        {isMenuOpen ? null : <OpenMenu onClick={() => setIsMenuOpen(true)}><ion-icon name="compass-outline"></ion-icon></OpenMenu>}
      </SubHeader>
            
    </Header>
  )
}

export default connect(HeaderContent)