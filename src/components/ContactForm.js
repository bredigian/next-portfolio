import Input from "./Input"

const ContactForm = () => {
  const dataInputs = ["Name", "Email", "Message"]
  return (
    <form className="grid grid-cols-8 gap-4 w-full py-4">
      {dataInputs.map((input, index) => {
        return <Input key={input + index} input={input} />
      })}
    </form>
  )
}

export default ContactForm
