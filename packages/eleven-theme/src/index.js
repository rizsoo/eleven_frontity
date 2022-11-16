import Root from "./components"
import link from "@frontity/html2react/processors/link";

const elevenTheme = {
  name: "eleven-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
    source: {
      data: {
        "/sportok/": {
          isSports: true,
          isReady: true
        },
        "/esemenyek/": {
          isEvents: true,
          isReady: true
        },
        "/rolunk/": {
          isTeam: true,
          isReady: true
        }
      },
    },  
  },
  actions: {
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  },
}

export default elevenTheme