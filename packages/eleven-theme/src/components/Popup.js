import React from "react"
import { connect, styled } from "frontity"

const Popup = ({libraries, post}) => {
  const Html2React = libraries.html2react.Component;
  return (
    <PopUp>
        <Html2React html={
          `<!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url=${post.acf.calendly} style="min-width:100%;height:630px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <!-- Calendly inline widget end -->`
          } />
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdqApSpCIYpYHyJzsOkmBNQjaGyxN9JtTU_thDY-l2uyVWRpQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe> */}
    </PopUp>
  )
}

const PopUp = styled.div`
    position: fixed;
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