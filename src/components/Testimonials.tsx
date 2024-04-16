import { UserIcon } from "@heroicons/react/16/solid"
import { BiTerminal } from "react-icons/bi"
import { testimonials } from "../data"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UserIcon className="w-10 inline-block mb-4"/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white bg-opacity-40 p-8 rounded">
                <BiTerminal className="block w-8 text-black mb-4"/>
                <p className="leading-relaxed mb-6 ">
                  {testimonial.quote}
                </p>
                <div className="inline-flex items-center">
                  <img src={testimonial.image} alt="testimonial" className="w-14 rounded-sm flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-black text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials