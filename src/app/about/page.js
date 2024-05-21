"use client"

import ContactForm from "@/components/ContactForm"
import Image from "next/image"
import PageAnimate from "@/components/PageAnimate"
import Paragraph from "@/components/Paragraph"
import { TEXT } from "@/constants/texts"
import meImage from "@/assets/images/me.jpg"
import { motion } from "framer-motion"

const About = ({ searchParams }) => {
  const LANG = searchParams?.lang?.toLowerCase() === "es" ? TEXT.ESP : TEXT.ENG

  return (
    <PageAnimate className="sm:h-screen relative flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center xs:gap-8 xl:gap-16 w-full p-6 sm:overflow-auto">
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
        <Paragraph delay={0.75}>{LANG.About.DESCRIPTION}</Paragraph>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.25 }}
          className="flex flex-col items-start gap-2"
        >
          <h3 className="xs:text-base sm:text-lg xl:text-xl text-white">
            {LANG.About.LABEL}
          </h3>
          <ContactForm lang={LANG.About.FORM} cvLink={LANG.About.CV_LINK} />
        </motion.div>
      </div>
    </PageAnimate>
  )
}

export default About
