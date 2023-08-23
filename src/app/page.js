"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import Image from "next/image"
import PageAnimate from "@/components/PageAnimate"
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
    <PageAnimate className="flex flex-row flex-wrap items-center justify-center gap-8 w-full">
      <div className="flex flex-col items-start gap-8 max-w-[800px]">
        <div className="flex items-center gap-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="text-6xl text-white"
          >
            Hi! I'm
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.h1
              key={titleActive}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="text-6xl text-white"
            >
              <motion.b className="text-yellow-primary">
                {titles[titleActive]}
              </motion.b>
            </motion.h1>
          </AnimatePresence>
        </div>
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          className="text-2xl text-gray-300"
        >{`My name is Gianluca Bredice, I'm 21 and I'm from Argentina`}</motion.h6>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          className="text-justify text-base text-gray-300"
        >
          I currently live in La Plata, I studied a systems-oriented career for
          3 years but with the passage of time and other circumstances I
          realized that it is not what I thought. Thanks to that, in March 2022
          I began to take different courses and learn by myself different
          technologies oriented to web development.
        </motion.p>
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
          className="rounded-3xl"
          priority
          width={200}
          src={myImage}
          alt="Gianluca Bredice"
        />
      </motion.div>
    </PageAnimate>
  )
}

export default Home
