import { getAge } from "@/lib/utils"

const age = getAge(new Date(2002, 3, 21))

export const TEXT = {
  ENG: {
    Home: {
      TITLE: "Hi! I'm",
      SUBTITLE: `My name is Gianluca Bredice Vivarelli, I'm ${age} and I'm from Argentina`,
      DESCRIPTION:
        "I currently live in La Plata, in 2020 I started a systems-oriented university career and in March 2022 I began to take different courses and learn by myself different technologies oriented to web development.",
    },
    Skills: {
      TITLE: "Skills",
      SUBTITLE: "Technologies that I use every day for work",
    },
    Projects: {
      TITLE: "Experience",
      SUBTITLE:
        "Projects which helped me to reach the current level of experience",
      DEPLOY: "Deploy",
      NO_DEPLOY: "Coming soon...",
    },
    About: {
      DESCRIPTION:
        "This is me. An organized and responsible person, who is constantly learning, and also spends a large part of the day listening to music with headphones. I speak native Spanish and my level of English is basic. I am currently doing freelance work, but I am still looking to find a stable job, in which I can contribute all my skills to the work team and also learn from it.",
      LABEL: "Contact me",
      FORM: {
        NAME: "Name",
        EMAIL: "Email",
        MESSAGE: "Message",
        SUBMIT: "Submit",
      },
    },
  },
  ESP: {
    Home: {
      TITLE: "¡Hola! Soy",
      SUBTITLE: `Mi nombre es Gianluca Bredice Vivarelli, tengo ${age} años y soy de Argentina.`,
      DESCRIPTION:
        "Actualmente vivo en La Plata, inicié mi carrera orientada a sistemas en 2020 y a principios del 2022 emprendí camino como desarrollador web. Tomando diferentes cursos y estudiando de forma autonoma, fui aprendiendo y especializandome en las diferentes tecnologias que se utilizan hoy en día.",
    },
    Skills: {
      TITLE: "Habilidades",
      SUBTITLE: "Tecnologías que utilizo día a día para trabajar",
    },
    Projects: {
      TITLE: "Experiencia",
      SUBTITLE:
        "Proyectos los cuales me han ayudado y llevado al nivel actual de experiencia",
      DEPLOY: "Link",
      NO_DEPLOY: "Proximamente...",
    },
    About: {
      DESCRIPTION:
        "Este soy yo. Una persona organizada y responsable, quien esta constantemente aprendiendo, y además pasa gran parte del día escuchando música con auriculares. Mi idioma nativo es el Español y mi nivel de Inglés es básico. Actualmente estoy trabajando como freelancer, pero sigo buscando un trabajo estable, en el cual pueda aportar mis habilidades al equipo de trabajo y también aprender de ellos.",
      LABEL: "Contáctame",
      FORM: {
        NAME: "Nombre",
        EMAIL: "Email",
        MESSAGE: "Mensaje",
        SUBMIT: "Enviar",
      },
    },
  },
}
