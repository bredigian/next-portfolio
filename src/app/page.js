"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import Description from "@/components/Description"
import Image from "next/image"
import PageAnimate from "@/components/PageAnimate"
import Paragraph from "@/components/Paragraph"
import Subtitle from "@/components/Subtitle"
import Title from "@/components/Title"
import myImage from "@/assets/images/me.webp"

const Home = () => {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer",
  ]
  const [titleActive, setTitleActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleActive((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <PageAnimate className="flex flex-row flex-wrap items-center justify-center gap-8 w-full xs:pb-4 xs:px-8">
      <div className="flex flex-col items-start xs:gap-4 xl:gap-8 max-w-[800px]">
        <Description flexRow={true}>
          <Title delay={0.25}>{"Hi! I'm"}</Title>
          <AnimatePresence mode="wait">
            <Title key={titleActive} delay={0.25}>
              <motion.b className="text-yellow-primary">
                {titles[titleActive]}
              </motion.b>
            </Title>
          </AnimatePresence>
        </Description>
        <Subtitle
          delay={0.75}
        >{`My name is Gianluca Bredice, I'm 21 and I'm from Argentina`}</Subtitle>
        <Paragraph delay={0.75}>
          I currently live in La Plata, I studied a systems-oriented career for
          3 years but with the passage of time and other circumstances I
          realized that it is not what I thought. Thanks to that, in March 2022
          I began to take different courses and learn by myself different
          technologies oriented to web development.
        </Paragraph>
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
          alt="Gianluca Bredice"
        />
      </motion.div>
    </PageAnimate>
  )
}

export default Home
