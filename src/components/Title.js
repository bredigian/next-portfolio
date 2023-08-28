"use client"

import { motion } from "framer-motion"

const Title = ({ children, delay }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className="xs:text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl text-white"
    >
      {children}
    </motion.h1>
  )
}

export default Title
