// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react-js.svg"
import jsIcon from "./images/javascript.svg"
import typescriptIcon from "./images/typescript.svg"
import pythonIcon from "./images/python.svg"
import postgresqlIcon from './images/postgresql.svg'
import nodeIcon from './images/node.svg'
import twitterIcon from './images/twitter.svg'
// Social Icon
import githubIcon from "./images/github.svg"
import facebookIcon from "./images/facebook.svg"
import linkedinIcon from "./images/linkedin.svg"

// my pic
import ira from "./images/ira.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Irina",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products and",
    //Line 3 For Header
    "experience",
  ],
  //   Header Paragraph

  //Contact Email
  contactEmail: "irinavzaytseva@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Gotmynews", //Project Title - Add Your Project Title Here
      para:
        "App that creates weekly newsletters from Reddit based on topics selected by user.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://gotmynews.herokuapp.com/",
    },
    {
      title: "Jobly", //Project Title - Add Your Project Title Here
      para:
        "This is a mock job search app.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",

      //Project URL - Add Your Project Url Here
      url: "https://labored-word.surge.sh",
    },
    {
      title: "Chess", //Project Title - Add Your Project Title Here
      para:
        "Play live chess game against a top chess computer.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://sparkling-view.surge.sh",
    },

  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My name is Irina Zaytseva and I am software developer. Love to create new projects and keep up-to-date with the latest technologies.",
  aboutParaTwo:
    "I have an experience of building Web applications with JavaScript / React.js / Node.js / Express.js / Python / Flask and some other libraries and frameworks.",
  aboutParaThree:
  "My experience in sales and marketing helped me develop soft skills such as active listening / patience / adaptability / teamwork / stress management / critical thinking / and problem-solving which I believe are an important part of my toolbox as a software developer.",
  aboutParaFour:
  "I’m enthusiastic about growing and gaining new skills on my development journey.",
  aboutImage:
  ira,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon
    },
    {
      img: cssIcon
    },
    {
      img: jsIcon
    },
    {
      img: reactIcon
      
    },
    {
      img: typescriptIcon
    },
    {
      img: pythonIcon
    },
    {
      img: postgresqlIcon
    },
    {
      img: nodeIcon
    },

  ],

  // End Skills Section --------------------------


  //   Contact Section --------------

  contactSubHeading: "Please feel free to contact me!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/irinazay" },
    {
      img: facebookIcon,
      url: "https://www.facebook.com/irina.zaytseva.16",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/zaytsevairina/",
    },
    {
      img: twitterIcon,
      url: "https://twitter.com/Irinazaytseva15",
    },

  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
