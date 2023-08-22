import { Toaster, toast } from "sonner"

import Input from "./Input"

const ContactForm = () => {
  const dataInputs = ["Name", "Email", "Message"]

  const handleSubmit = async (formData) => {
    const form = {
      name: formData.get("Name"),
      email: formData.get("Email"),
      message: formData.get("Message"),
    }
    const response = fetch("../api/contact", {
      method: "POST",
      body: JSON.stringify(form),
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
    <form action={handleSubmit} className="grid grid-cols-8 gap-4 w-full py-4">
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
