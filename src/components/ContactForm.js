import { Toaster, toast } from "sonner"

import Input from "./Input"
import { motion } from "framer-motion"
import { social } from "@/constants/social"

const ContactForm = () => {
  const dataInputs = ["Name", "Email", "Message"]

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: e.target.Name.value,
      email: e.target.Email.value,
      message: e.target.Message.value,
    }

    const response = fetch("../api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    toast.promise(response, {
      loading: "Sending...",
      success: "Email sent successfully",
      error: "Error sending email",
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-8 gap-4 w-full py-4"
    >
      {dataInputs.map((input) => {
        return <Input key={input} input={input} />
      })}
      <button
        type="submit"
        className="xs:text-xs sm:text-sm col-span-2 rounded-lg bg-gray-100 text-gray-300 py-2 mt-4"
      >
        Submit
      </button>
      <ul className="self-end -translate-y-[2px] justify-end col-span-6 flex flex-wrap gap-2">
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
      <Toaster />
    </form>
  )
}

export default ContactForm
