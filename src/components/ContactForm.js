import { Toaster, toast } from "sonner"

import Input from "./Input"

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
        className="text-sm col-span-2 rounded-lg bg-gray-100 text-gray-300 py-2 mt-4"
      >
        Submit
      </button>
      <Toaster />
    </form>
  )
}

export default ContactForm
