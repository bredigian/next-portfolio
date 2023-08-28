"use client"

const Description = ({ children, alignItems, flexRow }) => {
  return (
    <div
      className={`flex flex-col ${flexRow && "md:flex-row"} ${
        alignItems || "items-start"
      } xs:gap-2 sm:gap-4`}
    >
      {children}
    </div>
  )
}

export default Description
