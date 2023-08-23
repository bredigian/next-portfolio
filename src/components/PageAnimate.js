"use client"

import { AnimatePresence, motion } from "framer-motion"

const PageAnimate = ({ children, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageAnimate
