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
    <PageAnimate className="sm:h-screen relative flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center xs:gap-8 xl:gap-16 w-full xs:px-8 xs:pb-4 sm:pt-4 sm:overflow-auto">
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
          alt="Gianluca Bredice Vivarelli"
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
      </div>
    </PageAnimate>
  )
}

export default About
