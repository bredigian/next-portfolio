"use client"

import { motion } from "framer-motion"

const Paragraph = ({ children, delay }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      className="text-justify xs:text-sm lg:text-base md:max-w-[500px] lg:max-w-max text-gray-300"
    >
      {children}
    </motion.p>
  )
}

export default Paragraph
