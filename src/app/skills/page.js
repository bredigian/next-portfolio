"use client"

import React from "react"
import { motion } from "framer-motion"
import { skills } from "@/constants/skills"

const Skills = () => {
  return (
    <main className="flex flex-wrap justify-center items-center mx-auto gap-4 w-full">
      <div className="flex flex-col items-center gap-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="text-6xl text-white"
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          className="text-base text-gray-300"
        >
          Technologies that I use every day for work
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-[700px]">
        {skills.map((skill, index) => {
          const delay = 1.25 + index * 0.1
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: delay }}
              key={skill.name}
              style={{
                backgroundColor: skill.backgroundColor,
              }}
              className={`flex flex-col justify-center items-center p-2 gap-2 rounded-3xl w-[100px] h-[120px] hover:scale-105 duration-200 ease-in-out`}
            >
              {skill.icon}
              <p
                className={`text-sm ${
                  skill.backgroundColor === "#ffffff"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </main>
  )
}

export default Skills
