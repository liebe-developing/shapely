import {
  Project1,
  Project10,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
  testimonialAvatar1,
  testimonialAvatar2,
  colorlib,
  html,
  css,
  facebook,
  bootstrap,
  adobe,
  less,
  sass,
} from "../assets";

const ProjectsData = [
  { title: "Project #1", img: Project1 },
  { title: "Project #2", img: Project2 },
  { title: "Project #3", img: Project3 },
  { title: "Project #4", img: Project4 },
  { title: "Project #5", img: Project5 },
  { title: "Project #6", img: Project6 },
  { title: "Project #7", img: Project7 },
  { title: "Project #8", img: Project8 },
  { title: "Project #9", img: Project9 },
  { title: "Project #10", img: Project10 },
];

const TestimonialData = [
  {
    img: testimonialAvatar1,
    name: "Aigars Silkalns",
    opinion:
      "Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.",
  },
  {
    img: testimonialAvatar2,
    name: "John Doe",
    opinion:
      "Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.",
  },
];

const ClientsData = [
  { name: "colorlib", img: colorlib },
  { name: "html", img: html },
  { name: "css", img: css },
  { name: "facebook", img: facebook },
  { name: "bootstrap", img: bootstrap },
  { name: "adobe", img: adobe },
  { name: "less", img: less },
  { name: "sass", img: sass },
];

export { ProjectsData, TestimonialData, ClientsData };
