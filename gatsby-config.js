const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'd0e2u8d0q9v4',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
