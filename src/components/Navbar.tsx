import { ArrowRightIcon } from "@heroicons/react/16/solid"

const Navbar = () => {
  return (
    <header className="bg-white md:sticky top-0 z-10 border">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-meddium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Portfolio
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center gap-7">
          <a href="#projects" className="hover:text-blue-500">
            Past Work
          </a>
          <a href="#skills" className="hover:text-blue-500">
            Skills
          </a>
          <a href="#testimonials" className="hover:text-blue-500">
            Testimonials
          </a>
        </nav>
        <a href="#contact"
        className="inline-flex items-center text-white bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-base mt-4 md:mt-0">
          Say Hello
          <ArrowRightIcon className="w-4 h-4 ml-1"/>
        </a>
      </div>
    </header>
  )
}

export default Navbar