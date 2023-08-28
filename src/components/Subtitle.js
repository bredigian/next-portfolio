"use client"

import { motion } from "framer-motion"

const Subtitle = ({ children, delay }) => {
  return (
    <motion.h6
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      className="xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300"
    >
      {children}
    </motion.h6>
  )
}

export default Subtitle
