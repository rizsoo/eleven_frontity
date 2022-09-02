const settings = {
  "name": "eleven-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org", 
      "title": "Test Frontity Blog", 
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
    "name": "eleven-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.elevenhungary.hu",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
