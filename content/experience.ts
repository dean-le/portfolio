import { Experience } from "@/types/content";

const experience: Experience[] = [
  {
    companyName: "TechList LLC",
    companyUrl: "https://techlist.com",
    title: "Senior Frontend Developer",
    date: "Nov 2022 - present",
    descriptions: [
      "Worked remotely with the US team and European team to build a Web3 and AI data intelligence platform. Developed product using Next.js with TailwindCSS",
      "Using graphQL and Hasura for database and backend API. Integrated with Aloglia to increase the searching experience for the end users. Using Vercel for deployment",
    ],
    tags: ["ReactJS", "NextJS", "TailwindCSS", "GraphQL", "Hasura"],
    externalLinks: [
      {
        text: "EdgeIn",
        url: "https://edgein.io",
      },
    ],
  },
  {
    companyName: "TranSwap",
    companyUrl: "https://www.transwap.com/",
    title: "Frontend Developer",
    date: "Oct 2020 - Sep 2022",
    descriptions: [
      "TranSwap is an application to help people transfer money worldwide online. It has a Front Office web app for users to manage and transfer their money. Come with a Back Office web app where TranSwap's staff can manage the business and help customers.",
      "I worked on both teams on the UI side. I have meetings regularly with my teammate from Singapore to discuss and clarify the requirements. We used ReactJs to build the application and React-query to fetch and manage data. We also used TypeScript in this project.",
      "We do function testing with Jest and Integration test with Cypress. Maintain and develop new features as well.",
    ],
    tags: ["ReactJS", "React-query", "Typescript", "Jest", "Cypress"],
  },
  {
    companyName: "Deliveree",
    companyUrl: "https://www.deliveree.com/",
    title: "Frontend Developer",
    date: "Mar 2020 - Oct 2020",
    descriptions: [
      "Deliveree is an application that allow the user to book a transport service. We builded a web app using ReactJS with Redux and integrated with Google Place API to collect data for the transport.",
      "I worked in the feature team and coordinated with the team to produce new features and enhancements. I also handled urgent requests and hotfix issues on production.",
    ],

    tags: ["ReactJS", "Redux", "Google Place API"],
  },
  {
    companyName: "FileString VN",
    companyUrl: "https://www.filestring.com/",
    title: "Fresher",
    date: "May 2018 - Mar 2020",
    descriptions: [
      "SiteOne is a web application in the construction area to help companies and users connect to each other and handle their work items.",
      " I worked in an agile team to deliver a web app for management in the constructor. Using ReactJS and Redux-saga to build the app. Configured Webpack for multiple portal apps. Maintained and developed new features and improvements",
    ],

    tags: ["ReactJS", "Redux-Saga", "Webpack"],
    externalLinks: [
      {
        text: "SiteOne Services",
        url: "https://siteoneservices.com/",
      },
    ],
  },
];

export default experience;
