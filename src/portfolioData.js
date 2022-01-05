/* this file contains all the objects ,
 one object or an array for each container (section) */

const colorContainerData = {
  fontIcon: "fas fa-cog",
  paragraphOne: `Choose your favorite color`,
  paragraphTwo: `default color`,
};

const defaultColor = {
  defaultColor: "#2ecc71",
};

const colorList = [
  { id: 1, color: "#fb7813" },
  { id: 2, color: "#f54291" },
  { id: 3, color: "#0779e4" },
  { id: 4, color: "#efa8e4" },
  { id: 5, color: "#fd5e53" },
];

const navbarLinks = [
  { id: 1, navigateTo: "#about", label__span__title: "About" },
  { id: 2, navigateTo: "#projects", label__span__title: "Projects" },
  { id: 3, navigateTo: "#skills", label__span__title: "Skills" },
  { id: 4, navigateTo: "#resume", label__span__title: "Resume" },
  { id: 5, navigateTo: "#contact", label__span__title: "Contact" },
];

const logoData = [
  {
    id: 1,
    name__ariaLabel: "KABI GADAL",
    first__word: "Kabi",
    inspan: "Gadal",
  },
];

const headerInfo = {
  name: "I'm Kabi",
  job: "A Full Stack Web developer",
  resumeLink: require("./download/fw10_199_Kabi_Gadal.pdf"),
  fontIcon: "fas fa-download",
  AnchorText: "download resume",

};
const headerImage = {
  headerImage_src: require("./images/myPhoto1.jpeg"),
};
const projectsData = [
    {
    id: 1,
    liveDemo: "https://pepperfry-client.vercel.app/",
    projectName: "Pepperfry Clone",
    imgURL: require("./images/pepperfry_1.jfif"),
    liveDemoText: "Live Demo",
    project__info:
      "Pepperfry is an Indian online marketplace for furniture and home decor which is made by 4 members during the Construct week of Masai. We have tried to make the same site which we have got from our design team with the technology stacks which we have learned so far. ",
    tech_stack:"ReactJs | CSS | Redux | Node Js | MongoDB | Mongoose | Express | Axios",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/vcow10kar/pepperfry-client",
    filter__word: "bootstrap",
  },
  {
    id: 2,
    liveDemo: "https://my-faasos.herokuapp.com/",
    projectName: "Fassos Clone",
    imgURL: require("./images/fassos_image.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Fassos clone is made during Masai School's Construct week, and this clone is made by the group of 4 members including me. We have tried to implement all the necessay features and I have worked on  Sign-in/Sign-up features in this project.",
    tech_stack:"EJS | CSS | JavaScript | Node Js | MongoDB | Mongoose | Express | Axios",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/kirankumar-medikurthy/fasso-s_project-Unit-3-",
    filter__word: "bootstrap",
  },
  {
    id: 3,
    liveDemo: "https://unruffled-goldstine-46dac2.netlify.app/",
    projectName: "Purplle Clone",
    imgURL: require("./images/purple_image.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Purplle is the clone which is an individual project made in the Construct week. Here I have implemented a Sign-in/Sign-up, Product filter option, sliding images, updating cart items, quantity and total prices, discount apply box and logic, detail holding inputs and payments.A complete flow of an E-Commerce website. ",
    tech_stack:"HTML | CSS | JavaScript",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/KabiGadal/Purplle-Chone/tree/master",
    filter__word: "bootstrap",
  },
   {
    id: 4,
    liveDemo: "https://sad-mccarthy-81520f.netlify.app",
    projectName: "Shopperstop Clone",
    imgURL: require("./images/shopperstop_image.png"),
    liveDemoText: "Live Demo",
    project__info:
      "Shopper-Stop Clone is an E-Commerce project which is made by 4 members. The design is based on Shoppers-Stop.com. We tried to implement different features from original website like product filters, slideshows, updating carts, sign in and sign up, dropdown list etc.",
		tech_stack: " HTML | CSS | JavaScript ",
    sourceCodeText: "Source Code",
    sourceURL: "https://github.com/KabiGadal/ShopperStop_Clone/tree/master",
    filter__word: "bootstrap",
  },
  // {
  //   id: 4,
  //   liveDemo: "https://my-faasos.herokuapp.com/",
  //   projectName: "Fassos Clone",
  //   imgURL: require("./images/fassos_image.png"),
  //   liveDemoText: "Live Demo",
  //   project__info:
  //     "Purplle Clone is a Project where you can select a product, add the product to the cart and do a payment.Then design is based on the original website Purplle.com. I have tried to implement different features from the originall website like Sign In, Sign Up,Product Filter, Slideshow, Updating Cart etc.",
  //   sourceCodeText: "Source Code",
  //   sourceURL: "https://github.com/kirankumar-medikurthy/fasso-s_project-Unit-3",
  //   filter__word: "bootstrap",
  // },
  // {
  //   id: 5,
  //   liveDemo: "https://dalaotravel.netlify.app/",
  //   projectName: "mountain travel",
  //   imgURL: require("./images/travel.png"),
  //   liveDemoText: "Live Demo",
  //   project__info:
  //     "I designed and built a responsive page for a travel agency and it is built using HTML CSS Bootstrap and JavaScript.",
  //   sourceCodeText: "Source Code",
  //   sourceURL: "https://github.com/AhmadDalao/Mountain-Travel ",
  //   filter__word: "bootstrap",
  // },
  // {
  //   id: 6,
  //   liveDemo: "https://axit-dalao.netlify.app/",
  //   projectName: "AXIT",
  //   imgURL: require("./images/axit.png"),
  //   liveDemoText: "Live Demo",
  //   project__info:
  //     "I built a responsive landing page for a startup, Technologies used HTML5 CSS3 Bootstrap jQuery.",
  //   sourceCodeText: "Source Code",
  //   filter__word: "bootstrap",
  // },
  // {
  //   id: 8,
  //   liveDemo: "https://github.com/AhmadDalao/MemoryGame ",
  //   projectName: "memory game",
  //   imgURL: require("./images/memory.png"),
  //   liveDemoText: "Live Demo",
  //   project__info:
  //     "This is a complete browser-based card matching game. Built using HTML CSS Bootstrap and JavasScript",
  //   sourceCodeText: "Source Code",
  //   sourceURL: "https://github.com/AhmadDalao/MemoryGame",
  //   filter__word: "javaScript",
  // },
];

const portfolioSection = {
  title: "projects",
  paragraph: `Here are some of my projects. You can check the projects out using
          live preview, and most of these projects are open source code feel
          free to take a copy of your own. I would love to receive your feedback
          about my work through an email or contact section.`,
};

const portfolioList = [
  // { id: 1, filtering: ".all", list__word: "All", active: "custom__active" },
  // { id: 2, filtering: ".bootstrap", list__word: "Bootstrap", active: "" },
  // { id: 3, filtering: ".javaScript", list__word: "JavaScript", active: "" },
];
const SkillsSection = {
  id: "skills",
  title: "Skills",
  // skillsImage: require("./images/skills.png"),
};

const SkillsImages = [
  {
    id: 1,
    imgURL: require("./images/html_5.png"),
    skillName: "HTML",
  },
  {
    id: 2,
    imgURL: require("./images/css.svg"),
    skillName: "CSS",
  },
  {
    id: 3,
    imgURL: require("./images/javascript.svg"),
    skillName: "JavaScript",
  },
  {
    id: 4,
    imgURL: require("./images/reactjs.svg"),
    skillName: "React",
  },
  {
    id: 5,
    imgURL: require("./images/redux.svg"),
    skillName: "Redux",
  },
  {
    id: 6,
    imgURL: require("./images/expressjs.svg"),
    skillName: "ExpressJS",
  },
  {
    id: 7,
    imgURL: require("./images/nodeJs.svg"),
    skillName: "NodeJS",
  },
  {
    id: 8,
    imgURL: require("./images/mongodb.png"),
    skillName: "MongoDB",
  },
  {
    id: 9,
    imgURL: require("./images/gitHub.png"),
    skillName: "Git",
  },
];

const AboutSection = {
  id: "about",
  title: "about me",
  paragraph: `✨ I'm a Full Stack Web Developer 👨🏻‍💻 who loves building and developing applications and websites. I'd love to combine my passion for programming and learning with my software engineering skills to continue building 🧑‍💻 more personalized applications and websites for people.`,
  paragraph2: `I have a passion to learn everything new ❤, contributing to the progress of mankind, and show creativity and possibilities in everything I do ✨.`,
};
const AboutServices = {
  // title: "services",
};

const servicesData = [
  // {
  //   id: 1,
  //   serviceName: "Web development",
  //   serviceImg: require("./images/undraw_version_control_9bpv.svg"),
  //   serviceDescription:
  //     "I can build your ideal website from scratch with the newest technologies.",
  // },
  // {
  //   id: 2,
  //   serviceName: "GRAPHIC DESIGN",
  //   serviceImg: require("./images/undraw_design_notes_8dmv.svg"),
  //   serviceDescription:
  //     "I can design your website and make it beautiful to right fit your test.",
  // },
  // {
  //   id: 3,
  //   serviceName: "UX & UI DESIGN",
  //   serviceImg: require("./images/undraw_design_tools_42tf.svg"),
  //   serviceDescription:
  //     "I can make the user interface and experience more appealing to users.",
  // },
  // {
  //   id: 4,
  //   serviceName: "SEO",
  //   serviceImg: require("./images/undraw_file_searching_duff.svg"),
  //   serviceDescription: "Can make your website appears on top when searching.",
  // },
];

const resumeData = {
  id: "resume",
  resumeInfo: ` If you would like to learn more about me or have PDF copy of my resume
          please feel free to click the download button, The resume provides
          detailed information about me and more contact information.`,
  resumeAnchorText: "Download Resume",
  resumeAnchorSee:  "Resume",
  resumeURL: require("./download/fw10_199_Kabi_Gadal.pdf"),
};

const contactData = {
  id: "contacts",
  contactText: "contact me",
  submitButton: "Submit",
  inputName: "Your name",
  inputEmail: "Email",
  inputSubject: "Subject",
  textArea: "message",
};

const FooterData = {
   id: "contact",
  FooterText: "find me on",
};

const footerSocialData = [
  {
    id: 1,
    socialName: "twitter",
    socialImg: "fab fa-twitter",
    socialURL: "https://twitter.com/GadalKabi/",
  },
  {
    id: 2,
    socialName: "Linkedin",
    socialImg: "fab fa-linkedin",
    socialURL: "https://www.linkedin.com/in/kabi-gadal-394957215/",
  },
  {
    id: 3,
    socialName: "Github",
    socialImg: "fab fa-github",
    socialURL: "https://github.com/KabiGadal",
  },
  // {
  //   id: 4,
  //   socialName: "stackoverflow",
  //   socialImg: "fab fa-stack-overflow",
  //   socialURL: "https://stackoverflow.com/users/9283958/ahmad-dalao",
  // },
];

const copyright = {
  first__word: "gadalkabi@gmail.com"
  // second__word: "KabiGadal 2021",
};

export {
  defaultColor,
  colorContainerData,
  colorList,
  navbarLinks,
  logoData,
  headerInfo,
  headerImage,
  projectsData,
  portfolioList,
  portfolioSection,
  SkillsImages,
  SkillsSection,
  AboutSection,
  AboutServices,
  servicesData,
  resumeData,
  contactData,
  FooterData,
  footerSocialData,
  copyright,
};
