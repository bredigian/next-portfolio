"use client"

import { useState } from "react"

const Input = ({ input }) => {
  const [translate, setTranslate] = useState(false)
  const [value, setValue] = useState("")

  const translateLabel = () => {
    setTranslate(true)
  }

  const translateBackLabel = () => {
    if (value === "") {
      setTranslate(false)
    }
  }

  return (
    <div
      className={`relative flex flex-col ${
        input === "Message"
          ? "col-span-8"
          : input === "Name"
          ? "col-span-3"
          : "col-span-5"
      } ${input === "Message" && "mt-4"}`}
    >
      <label
        htmlFor={input}
        className={`text-gray-300 text-sm absolute duration-200 ease-in-out ${
          !translate ? "translate-x-2 translate-y-2" : "-translate-y-6"
        }`}
      >
        {input}
      </label>
      {input === "Message" ? (
        <textarea
          onFocus={translateLabel}
          onBlur={translateBackLabel}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-sm text-gray-200 bg-gray-100 w-full rounded-xl p-2 outline-none h-[150px] resize-none"
        ></textarea>
      ) : (
        <input
          onFocus={translateLabel}
          onBlur={translateBackLabel}
          type="text"
          name={input}
          id={input}
          autoComplete={`${input === "Name" ? "given-name" : "email"}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-sm text-gray-200 w-full bg-gray-100 rounded-xl p-2 outline-none"
        />
      )}
    </div>
  )
}

export default Input
