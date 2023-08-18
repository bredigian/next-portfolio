import Link from "next/link"

const Navigator = () => {
  return (
    <nav className="bg-gray-100 m-8 w-fit rounded-3xl">
      <ul className="h-full flex flex-col items-start gap-4 p-4 overflow-hidden">
        <li>
          <Link
            className="flex items-center gap-4 text-gray-200 text-base py-1 px-2 rounded-3xl duration-200 ease-in-out hover:text-white hover:bg-gray-100"
            href={"/"}
          >
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-gray-200 text-base py-1 px-2 rounded-3xl duration-200 ease-in-out hover:text-white hover:bg-gray-100"
            href={"/skills"}
          >
            <h3>Skills</h3>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-gray-200 text-base py-1 px-2 rounded-3xl duration-200 ease-in-out hover:text-white hover:bg-gray-100"
            href={"/projects"}
          >
            <h3>Projects</h3>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-4 text-gray-200 text-base py-1 px-2 rounded-3xl duration-200 ease-in-out hover:text-white hover:bg-gray-100"
            href={"/about"}
          >
            <h3>About</h3>
          </Link>
        </li>
      </ul>
      <ul className="h-full flex flex-col items-start"></ul>
    </nav>
  )
}

export default Navigator
