"use client"

import PageAnimate from "@/components/PageAnimate"
import Paragraph from "@/components/Paragraph"
import Title from "@/components/Title"
import { motion } from "framer-motion"
import { projects } from "@/constants/projects"

const Projects = () => {
  return (
    <PageAnimate className="sm:h-screen flex flex-col items-center md:justify-center xs:gap-4 lg:gap-6 w-full mx-auto xs:px-8 xs:pb-4 sm:pt-4 sm:overflow-auto">
      <Title delay={0.25}>Experience</Title>
      <Paragraph delay={0.75}>
        Projects which helped me to reach the current level of experience
      </Paragraph>
      <div className="flex flex-wrap items-center justify-center max-w-[1000px] gap-4">
        {projects
          .sort((a, b) => {
            return b.date - a.date
          })
          .map((project, index) => {
            const delay = 1.25 + index * 0.1
            const dateFormatted = project.date
              .toString()
              .split(" ")
              .slice(1, 4)
              .join(" ")
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay }}
                key={project.name}
                className="flex flex-row items-center justify-between bg-gray-100 w-full h-[120px] max-w-[400px] rounded-3xl overflow-hidden"
              >
                <span className="bg-yellow-primary h-full w-[40px]"></span>
                <div className="flex flex-col items-start p-4 gap-2 text-gray-300 hover:text-white duration-200 ease-in-out max-w-[360px]">
                  <h1 className="xs:text-sm lg:text-base">{project.name}</h1>
                  <p className="text-xs">{project.description}</p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-xs">{dateFormatted}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-xs hover:underline"
                    >
                      Deploy
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
      </div>
    </PageAnimate>
  )
}

export default Projects
