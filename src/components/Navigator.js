"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Navigator = () => {
  const path = usePathname()

  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Skills",
      path: "/skills",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "About",
      path: "/about",
    },
  ]

  return (
    <nav className="bg-gray-100 m-8 w-min rounded-3xl">
      <ul className="h-full flex flex-col items-start gap-4 p-4 overflow-hidden">
        {links.map((link) => {
          return (
            <li key={link.path} className="w-[100px]">
              <Link
                className={`flex justify-start items-center gap-4 ${
                  path === link.path
                    ? "text-yellow-primary hover:text-yellow-primary"
                    : "text-gray-200 hover:text-white"
                } text-base py-1 px-2 rounded-3xl duration-200 ease-in-out hover:bg-gray-100`}
                href={link.path}
              >
                <h3 className="text-end">{link.label}</h3>
                {path === link.path && (
                  <motion.span
                    layoutId="active"
                    className="w-1 h-1 bg-yellow-primary rounded-full"
                  ></motion.span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigator
