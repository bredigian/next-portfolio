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
        input === "Message" || input === "Mensaje"
          ? "col-span-8"
          : input === "Name" || input === "Nombre"
          ? "col-span-3"
          : "col-span-5"
      } ${(input === "Message" || input === "Mensaje") && "mt-4"}`}
    >
      <label
        htmlFor={input}
        className={`text-gray-300 xs:text-xs sm:text-sm absolute duration-200 ease-in-out ${
          !translate
            ? "translate-x-2 translate-y-2 cursor-text"
            : "-translate-y-6"
        }`}
      >
        {input}
      </label>
      {input === "Message" || input === "Mensaje" ? (
        <textarea
          name={input}
          id={input}
          onFocus={translateLabel}
          onBlur={translateBackLabel}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="xs:text-xs sm:text-sm text-gray-200 bg-gray-100 w-full rounded-xl p-2 outline-none h-[150px] resize-none"
        ></textarea>
      ) : (
        <input
          onFocus={translateLabel}
          onBlur={translateBackLabel}
          type={`${input === "Name" || input === "Nombre" ? "text" : "email"}`}
          name={input}
          id={input}
          autoComplete={`${
            input === "Name" || input === "Nombre" ? "given-name" : "email"
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="xs:text-xs sm:text-sm text-gray-200 w-full bg-gray-100 rounded-xl p-2 outline-none"
        />
      )}
    </div>
  )
}

export default Input
