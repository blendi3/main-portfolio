export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "PatientPulse - Patient Management App",
    des: "A patient management system where users can book appointments and admins manage doctors and patient data securely.",
    img: "./assets/project1.jpg",
    iconLists: [
      "./assets/nextjs.svg",
      "./assets/react.svg",
      "./assets/typescript.svg",
      "./assets/sentry.svg",
      "./assets/appwrite.svg",
    ],
    link: "https://patient-pulse.vercel.app/",
  },
  {
    id: 2,
    title: "Payzen - Banking App",
    des: "A sleek banking app for managing accounts, transactions, and sending money with a clean and user-friendly interface.",
    img: "./assets/project2.jpg",
    iconLists: [
      "./assets/nextjs.svg",
      "./assets/react.svg",
      "./assets/tailwind.svg",
      "./assets/appwrite.svg",
    ],
    link: "https://payzen-bank.vercel.app/sign-in",
  },
  {
    id: 3,
    title: "BTSO - Taxi Booking Website",
    des: "A taxi booking platform with a sleek design, easy navigation, and smooth user experience.",
    img: "./assets/project3.jpg",
    iconLists: [
      "./assets/react.svg",
      "./assets/tailwind.svg",
      "./assets/framerMotion.svg",
    ],
    link: "https://bts-taxi.vercel.app/",
  },
  {
    id: 4,
    title: "Restaurant Showcase",
    des: "A visually appealing restaurant website displaying menu, ambiance, and online reservations.",
    img: "./assets/project4.jpg",
    iconLists: ["./assets/react.svg", "./assets/tailwind.svg"],
    link: "https://restaurant-showcase-demo.vercel.app/",
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Pabau Clinic Software",
    pos: "Software Developer",
    duration: "Sep 2023 - Apr 2024",
    title:
      "At Pabau Clinic Software, I worked as a Software Developer, focusing on front-end development with React and TypeScript. I contributed to building user-friendly interfaces and improving the user experience for clinic management software.",
  },
  {
    id: 2,
    name: "OCA Solutions",
    pos: "Front-end Developer",
    duration: "Mar 2023 - Sep 2023",
    title:
      "As a Front-end Developer at OCA Solutions, I implemented responsive web designs using React, enhancing the usability and performance of client applications.",
  },
  {
    id: 3,
    name: "Freelance",
    pos: "Front-end Developer",
    duration: "Jun 2022 - Present",
    title:
      "During my freelance work, I built and maintained web applications for various clients, leveraging technologies like HTML, CSS, JavaScript, and React to deliver high-quality solutions.",
  },
];
