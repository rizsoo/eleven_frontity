import { styled } from "frontity"

export const HeaderTitle = styled.div`
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
export const Header = styled.div`
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
export const SubHeader = styled.div`
  display: flex;
  align-items: center;
`
export const Menu = styled.nav`
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
export const OpenMenu = styled.div`
  ion-icon {
    font-size: 50px;
  }
  @media (min-width: 800px) {
    display: none;  
  }
`
export const CloseMenu = styled.div`
  ion-icon {
    font-size: 50px !important;
  }
  @media (min-width: 800px) {
    display: none;
  }
`
export const Socials = styled.div`
    width: auto;
    display: flex;
    @media (max-width: 800px) {
      display: none;
    }
`
export const SocialsMobile = styled.div`
    width: auto;
    display: flex;
`
export const Facebook = styled.div`
    ion-icon:hover {
      color: #0165E1 !important;
    }
`
export const Instagram = styled.div`
    ion-icon:hover {
      color: #E1306C !important;
    }
`
export const Logo = styled.img`
    max-height: 60px;
    @media (max-width: 800px) {
      max-height: 90px;
    }
`
