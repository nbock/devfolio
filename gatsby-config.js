module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://nolanbock.com`,
    // Your Name
    name: 'Nolan Bock',
    // Main Site Title
    title: `Nolan Bock | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer interested in robotics. I'm looking for internships and co-ops for Summer 2021!`,
    // Optional: Twitter account handle
    author: `@nbock05`,
    // Optional: Github account URL
    github: `https://github.com/nbock`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nbock/`,
    // Content of the About Me section
    about: `I'm pursuing a master's degree in computer science at Northeastern University with a concentration in artificial intelligence and robotics. I'm a graduate teaching assistant, research assistant within the college of computer sciences and I work in simulation for MIT Driverless, MIT's student led autonomous racing team.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Ping Bot',
        description:
          'Mobile robot that searches for sounds and drops a pin on a map to indicate them.',
        link: 'https://github.com/nbock/cs5335-nm',
      },
      {
        name: 'Minehunter',
        description:
          'AI Minesweeper solver that solves 9x9 and 16x16 boards. Formualted as a constraint satisfaction problem',
        link: 'https://github.com/nbock/dragons',
      },
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Khoury College of Computer Sciences',
        description: 'Teaching Assistant, January 2020 - Present',
        link: 'https://www.khoury.northeastern.edu/',
      },
      {
        name: 'MIT Driverless',
        description: 'Software Engineer, September 2020 - Present',
        link: 'http://driverless.mit.edu/',
      },
      {
        name: 'Paradigm Hyperloop',
        description: 'Software Engineer, September 2020 - Present',
        link: 'https://paradigmhyperloop.com/',
      },
      {
        name: 'The Helping Hands Lab',
        description: 'Research Assistant, September 2020 - Present',
        link: 'https://www2.ccs.neu.edu/research/helpinghands/',
      },
    ],

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C++, C, JavaScript, Java, Python, React, Ruby on Rails, Node.js, Bash, SQL, CSS, HTML',
      },
      {
        name: 'Systems',
        description: 'Linux, Windows, MacOS',
      },
      {
        name: 'Other',
        description:
          'Robotic Operating System, Gazebo, Ubuntu, OMPL, Docker, Amazon Web Services (AWS), Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
