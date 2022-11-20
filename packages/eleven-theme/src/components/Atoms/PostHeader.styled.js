import { styled } from "frontity"

export const PostTitle = styled.div`
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
export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const SignUp = styled.h4`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  width: fit-content;
  
  font-weight: 500 !important;
  background-color: #1967B5;
  padding: 9px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media (max-width: 800px) {
    margin-top: 15px;
  }
  `
export const PostInnerData = styled.div`
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
  gap: 15px;
`