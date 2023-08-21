import { FaAws, FaNodeJs, FaReact } from "react-icons/fa6"
import {
  SiExpress,
  SiMysql,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "react-icons/si"

import { BsGit } from "react-icons/bs"
import { TbBrandNextjs } from "react-icons/tb"

export const skills = [
  {
    name: "React",
    icon: <FaReact size={50} color="#ffffff" />,
    backgroundColor: "#0c9fcb",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs size={50} color="#000000" />,
    backgroundColor: "#ffffff",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={50} color="#ffffff" />,
    backgroundColor: "#49abb4",
  },
  {
    name: "Redux",
    icon: <SiRedux size={50} color="#ffffff" />,
    backgroundColor: "#764abb",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs size={50} color="#ffffff" />,
    backgroundColor: "#24b45d",
  },
  {
    name: "Express",
    icon: <SiExpress size={50} color="#000000" />,
    backgroundColor: "#ffffff",
  },
  {
    name: "Vite",
    icon: <SiVite size={50} color="#ffffff" />,
    backgroundColor: "#8b73ff",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={50} color="#ffffff" />,
    backgroundColor: "#005f8b",
  },
  {
    name: "Postman",
    icon: <SiPostman size={50} color="#ffffff" />,
    backgroundColor: "#ff6c38",
  },
  {
    name: "AWS",
    icon: <FaAws size={50} color="#ffffff" />,
    backgroundColor: "#1f3243",
  },
  {
    name: "Git",
    icon: <BsGit size={50} color="#ffffff" />,
    backgroundColor: "#f05134",
  },
]
