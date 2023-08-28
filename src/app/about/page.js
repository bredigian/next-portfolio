"use client"

import ContactForm from "@/components/ContactForm"
import Image from "next/image"
import PageAnimate from "@/components/PageAnimate"
import Paragraph from "@/components/Paragraph"
import meImage from "@/assets/images/me.jpg"
import { motion } from "framer-motion"
import { social } from "@/constants/social"

const About = () => {
  return (
    <PageAnimate className="relative flex flex-wrap items-start justify-center xs:gap-8 xl:gap-16 w-full xs:p-8">
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
          className="xs:w-[280px] lg:w-[300px] rounded-3xl"
        />
      </motion.div>
      <div className="flex flex-col items-start gap-4 max-w-[500px]">
        <Paragraph delay={0.75}>
          This is me. An organized and responsible person, who is constantly
          learning, and also spends a large part of the day listening to music
          with headphones. I speak native Spanish and my level of English is
          basic. I am currently doing freelance work, but I am still looking to
          find a stable job, in which I can contribute all my skills to the work
          team and also learn from it.
        </Paragraph>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.25 }}
          className="flex flex-col items-start gap-2"
        >
          <h3 className="xs:text-base sm:text-lg xl:text-xl text-white">
            Contact me
          </h3>
          <ContactForm />
        </motion.div>
        <ul className="absolute flex flex-wrap gap-2 xs:bottom-[49px] xs:translate-x-[184px] sm:translate-x-[394px]">
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
    </PageAnimate>
  )
}

export default About
