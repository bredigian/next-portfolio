"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import myImage from "@/assets/images/me.webp"

const Home = () => {
  return (
    <main className="flex flex-row flex-wrap items-end justify-center gap-8 w-full">
      <div className="flex flex-col items-start gap-8 max-w-[800px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="text-6xl text-white"
        >
          Hi! I'm
          <b className="bg-gray-100 text-[#ffffff95] py-1 px-3 rounded-3xl">
            FullStack Developer
          </b>
        </motion.h1>
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
          I am a proactive, organized and responsible person, with good
          interpersonal relationships. I always have the best disposition to
          carry out my work. I am looking for a job where I can continue
          learning, and at the same time share my experience and knowledge with
          the work team.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.25,
          delay: 1.25,
          bounce: 0.6,
          type: "spring",
        }}
      >
        <Image
          className="rounded-3xl"
          priority
          width={280}
          src={myImage}
          alt="Gianluca Bredice"
        />
      </motion.div>
    </main>
  )
}

export default Home
