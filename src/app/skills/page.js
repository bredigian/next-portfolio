"use client"

import Description from "@/components/Description"
import PageAnimate from "@/components/PageAnimate"
import Paragraph from "@/components/Paragraph"
import React from "react"
import { TEXT } from "@/constants/texts"
import Title from "@/components/Title"
import { motion } from "framer-motion"
import { skills } from "@/constants/skills"

const Skills = ({ searchParams }) => {
  const LANG = searchParams?.lang?.toLowerCase() === "es" ? TEXT.ESP : TEXT.ENG

  return (
    <PageAnimate className="flex xs:flex-col md:flex-row xs:items-center justify-center gap-4 w-full p-6">
      <Description alignItems={"items-center"} flexRow={false}>
        <Title delay={0.25}>{LANG.Skills.TITLE}</Title>
        <Paragraph delay={0.75}>{LANG.Skills.SUBTITLE}</Paragraph>
      </Description>
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
              className={`flex flex-col justify-center items-center p-2 gap-2 rounded-3xl xs:w-[80px] xs:h-[100px] lg:w-[100px] lg:h-[120px] hover:scale-105 duration-200 ease-in-out cursor-default`}
            >
              {skill.icon}
              <p
                className={`xs:text-xs lg:text-sm ${
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
    </PageAnimate>
  )
}

export default Skills
