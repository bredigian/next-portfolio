"use client"

import { useEffect, useState } from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Navigator = () => {
  const path = usePathname()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
    <nav
      className={`${
        scrolled ? "bg-[#ffffff95]" : "bg-gray-100"
      } xs:sticky z-50 xs:top-4 sm:m-8 sm:w-min rounded-3xl duration-200 ease-in-out`}
    >
      <ul className="h-full flex xs:flex-row sm:flex-col xs:items-center sm:items-start xs:gap-2 xs:p-2 gap-4 p-4 overflow-hidden">
        {links.map((link) => {
          return (
            <li key={link.path} className="xs:w-fit sm:w-[100px]">
              <Link
                className={`flex xs:flex-col sm:flex-row justify-start items-center xs:gap-1 sm:gap-4 ${
                  path === link.path
                    ? `${
                        scrolled
                          ? "text-black font-bold"
                          : "text-yellow-primary"
                      } lg:hover:text-yellow-primary`
                    : `${
                        scrolled ? "text-black font-bold" : "text-gray-200"
                      } hover:text-white`
                } xs:text-xs sm:text-sm lg:text-base py-1 px-2 rounded-3xl duration-200 ease-in-out lg:hover:bg-gray-100`}
                href={link.path}
              >
                <h3 className="text-end">{link.label}</h3>
                {path === link.path && (
                  <motion.span
                    layoutId="active"
                    className={`w-1 h-1 ${
                      scrolled ? "bg-black" : "bg-yellow-primary"
                    } rounded-full`}
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
