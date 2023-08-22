import Input from "./Input"

const ContactForm = ({ handleSubmit }) => {
  const dataInputs = ["Name", "Email", "Message"]
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-8 gap-4 w-full py-4"
    >
      {dataInputs.map((input, index) => {
        return <Input key={input + index} input={input} />
      })}
      <button
        type="submit"
        className="text-sm col-span-2 rounded-lg bg-gray-100 text-gray-300 py-2 mt-4"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
