"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navigator() {
  const path = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const { replace } = useRouter()

  const spanishActive = params.get("lang")

  const handleLang = () => {
    if (spanishActive) params.delete("lang")
    else params.set("lang", "es")

    replace(`${path}?${params.toString()}`)
  }

  const links = [
    {
      label: spanishActive ? "Inicio" : "Home",
      path: "/",
    },
    {
      label: spanishActive ? "Habilidades" : "Skills",
      path: "/skills",
    },
    {
      label: spanishActive ? "Proyectos" : "Projects",
      path: "/projects",
    },
    {
      label: spanishActive ? "Acerca" : "About",
      path: "/about",
    },
  ]

  return (
    <nav className="xs:w-full z-50 sm:m-8 sm:w-min px-8 py-8 rounded-3xl duration-200 flex flex-col-reverse sm:flex-col gap-2 ease-in-out">
      <ul className="h-full w-full flex xs:flex-row xs:justify-between sm:flex-col xs:items-center sm:items-start xs:gap-2 gap-4 overflow-hidden">
        {links.map((link) => {
          const href = spanishActive
            ? `${link.path}?${params.toString()}`
            : link.path

          return (
            <li key={link.path} className="xs:w-fit sm:w-[140px]">
              <Link
                className={`${
                  link.path === path ? "text-yellow-primary" : "text-white"
                } flex xs:flex-col sm:flex-row justify-start items-center xs:gap-1 sm:gap-4 xs:text-xs sm:text-sm lg:text-base py-1 px-2 rounded-3xl duration-200 ease-in-out lg:hover:bg-gray-100`}
                href={href}
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
      <span
        onClick={handleLang}
        className="text-xs text-end opacity-30 underline sm:text-start sm:absolute sm:bottom-20 sm:opacity-100 sm:no-underline sm:hover:underline lg:text-base cursor-pointer"
      >
        {spanishActive ? "Cambiar a Inglés" : "Change to Spanish"}
      </span>
    </nav>
  )
}
