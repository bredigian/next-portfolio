"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import Description from "@/components/Description"
import Image from "next/image"
import PageAnimate from "@/components/PageAnimate"
import Paragraph from "@/components/Paragraph"
import Subtitle from "@/components/Subtitle"
import { TEXT } from "@/constants/texts"
import Title from "@/components/Title"
import myImage from "@/assets/images/me.webp"

const Home = ({ searchParams }) => {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ]
  const [titleActive, setTitleActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleActive((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const LANG = searchParams?.lang?.toLowerCase() === "es" ? TEXT.ESP : TEXT.ENG

  return (
    <PageAnimate className="flex flex-row flex-wrap items-center justify-center gap-8 w-full p-6">
      <div className="flex flex-col items-start xs:gap-4 xl:gap-8 md:min-w-[615px] xl:min-w-[800px]">
        <div className="flex flex-col md:flex-row md:items-center items-start gap-2 xl:min-w-[873px]">
          <Title delay={0.25}>{LANG.Home.TITLE}</Title>
          <AnimatePresence mode="wait">
            <Title key={titleActive} delay={0.25}>
              <motion.b className="text-yellow-primary">
                {titles[titleActive]}
              </motion.b>
            </Title>
          </AnimatePresence>
        </div>
        <Subtitle delay={0.75}>{LANG.Home.SUBTITLE}</Subtitle>
        <Paragraph delay={0.75}>{LANG.Home.DESCRIPTION}</Paragraph>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 1.25,
        }}
      >
        <Image
          className="xs:w-[150px] lg:w-[200px] rounded-3xl"
          priority
          src={myImage}
          alt="Gianluca Bredice Vivarelli"
        />
      </motion.div>
    </PageAnimate>
  )
}

export default Home
