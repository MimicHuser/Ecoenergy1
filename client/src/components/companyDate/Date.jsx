import img from "../../assets/BackgroundImg.png";
import userImg from "../../assets/matue.jpg";
import solar from "../../assets/solarimg.jpg";
import eolica from "../../assets/eolica.jpg";

const InfoContents = [
  {
    id: 1,
    img: solar,
    name: "EcoEnergy",
    text: "Curso técnico de instalador de energia",
    views: "100",
    postDate: "3 dias atrás",
    user: {
      name: "Matheus",
      idade: 30,
      email: "Matheus@gmail.com",
      img: userImg,
    },
    videos: [
      {
        id: 1,
        img: img,
        name: "Algum tilulo aqui",
        text: "Descricao do video",
        url: "https://www.youtube.com/embed/4V-qXYhvT7E",
      },
      {
        id: 2,
        img: img,
        name: "Algum tilulo aqui Pt.2",
        text: "Descricao do video",
        url: "https://youtu.be/LUUpAH5bYmg?t=306",
      },
    ],
    cursos: [],
  },
  {
    id: 2,
    img: eolica,
    name: "EcoEnergy",
    text: "Curso técnico de torre para energia eólica ",
    views: "100",
    postDate: "3 dias atrás",
    user: {
      name: "Matheus",
      idade: 30,
      email: "Matheus@gmail.com",
      img: userImg,
    },
    videos: [
      {
        id: 1,
        img: img,
        name: "Algum tilulo aqui",
        text: "Descricao do video",
        url: "https://www.youtube.com/embed/4V-qXYhvT7E",
      },
      {
        id: 2,
        img: img,
        name: "Algum tilulo aqui Pt.2",
        text: "Descricao do video",
        url: "https://youtu.be/LUUpAH5bYmg?t=306",
      },
    ],
    cursos: [],
  },
];


export default InfoContents;
