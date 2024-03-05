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
    <nav className="xs:w-full z-50 sm:m-8 sm:w-min px-8 py-8 rounded-3xl duration-200 ease-in-out">
      <ul className="h-full w-full flex xs:flex-row xs:justify-between sm:flex-col xs:items-center sm:items-start xs:gap-2 gap-4 overflow-hidden">
        {links.map((link) => {
          return (
            <li key={link.path} className="xs:w-fit sm:w-[100px]">
              <Link
                className={`${
                  link.path === path ? "text-yellow-primary" : "text-white"
                } flex xs:flex-col sm:flex-row justify-start items-center xs:gap-1 sm:gap-4 xs:text-xs sm:text-sm lg:text-base py-1 px-2 rounded-3xl duration-200 ease-in-out lg:hover:bg-gray-100`}
                href={link.path}
              >
                <h3 className="text-end">{link.label}</h3>
                {path === link.path && (
                  <motion.span
                    layoutId="active"
                    className={`w-1 h-1 bg-yellow-primary rounded-full`}
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
