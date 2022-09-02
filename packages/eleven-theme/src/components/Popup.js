import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const Popup = () => {
  return (
    <PopUp>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdqApSpCIYpYHyJzsOkmBNQjaGyxN9JtTU_thDY-l2uyVWRpQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>
    </PopUp>
  )
}

const PopUp = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: calc(100% - 8rem);
    width: calc(100% - 1.5rem);
    max-width: 500px;

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 10px;

    z-index: 2;    
`

export default connect(Popup)