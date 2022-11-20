import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Switch from "@frontity/components/switch"

import Loading from "./loading";
import Error from "./error"
import NearbyEvents from "./NearbyEvents"
import Post from "./post"
import Page from "./page"
import HeaderContent from "./HeaderContent";
import Sports from "./sports";
import Events from "./events";
import Team from "./team";

export const portfolioHand = {
  pattern: "/portfolio",
  func: async ({ route, params, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "/",
      params: {
          per_page: 100,
          _embed: true
        }
    });

    const items = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {
      isPortfolioType: true,
      items: items.items,
      items
    });
    
  }
};

const Root = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link)

    return (
    <>
        <Head>
            <title>ELEVEN Sportclub</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <meta
            name="description"
            content="Sport és közösség"
            />
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
        </Head>
        <Global
            styles={css`
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            html {
              }
            body {
                background-color: #f5efe0;
                background-size: cover;
                background-position: 0px -400px;
                font-family: 'Inter', sans-serif;
                letter-spacing: -0.0415625em;
            }
            ion-icon {
                font-size: 25px;
                padding-left: 5px; 
                color: black;
            }
            a {
              color: black;
              text-decoration: none;
            }
            `}
        />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent />
    </Header>
    <Main>
        <Switch>
            <Loading when={data.isFetching} />
            <NearbyEvents when={data.isArchive} />
            <Sports when={data.isSports} />
            <Events when={data.isEvents} />
            <Team when={data.isTeam} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Error when={data.isError} />
        </Switch>
    </Main>
    </>
  )
}
const Header = styled.header`
  background-color: white;
`;

const Main = styled.main`
  width: calc(100% - 8rem);
  max-width: 75rem;
  padding: 0;
  margin: auto;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 1.2em;
    line-height: 1.4rem;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  @media (max-width: 800px) {
    width: calc(100% - 1.5rem);
  }
`;


export default connect(Root)