"use client"

import ContactForm from "@/components/ContactForm"
import Image from "next/image"
import meImage from "@/assets/images/me.jpg"
import { motion } from "framer-motion"
import { social } from "@/constants/social"

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <main className="relative flex flex-wrap items-start justify-center gap-16 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.25,
        }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src={meImage}
          alt="Gianluca Bredice"
          width={300}
          className="rounded-3xl"
        />
      </motion.div>
      <div className="flex flex-col items-start gap-4 max-w-[500px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          className="text-gray-300 text-sm text-justify"
        >
          I consider myself an organized and responsible person, who is
          constantly learning. I speak native Spanish and my level of English is
          basic. I am currently doing freelance work, but I am still looking to
          find a stable job, in which I can contribute all my skills to the work
          team and also learn from it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.25 }}
          className="flex flex-col items-start gap-2"
        >
          <h3 className="text-xl text-white">Contact me</h3>
          <ContactForm handleSubmit={handleSubmit} />
        </motion.div>
        <ul className="absolute flex flex-wrap gap-2 bottom-5 translate-x-[394px]">
          {social.map((item, index) => {
            const delay = 1.75 + index * 0.1
            return (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay }}
                key={item.name}
                className="text-gray-300 hover:text-white duration-200 ease-in-out"
              >
                <a href={item.url} target="_blank">
                  {item.icon}
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default About
