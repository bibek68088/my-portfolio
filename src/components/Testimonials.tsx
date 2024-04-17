import { useEffect, useState } from "react";
import { testimonials } from "../data";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="testimonials" className="pt-10">
      <div className="px-5 py-10 bg-gray-400 mx-auto text-center">
        <div className="pt-20">
          <h2 className="text-lg bg-yellow-300 2xl:w-[10%] xl:w-[12%] md:w-[22%] w-2/3  p-1 mx-auto">
            Client Testimonials
          </h2>
          <h1 className="lg:text-5xl text-2xl text-white font-medium title-font text-black pt-4 mb-12">
            What Some of my Clients Say
          </h1>
        </div>
        <div className="justify-center mx-auto md:p-10 ">
          <div className="relative h-[450px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 h-full w-full p-8 rounded transition-all duration-500 ease-in-out ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="leading-relaxed text-white lg:w-[70%] mx-auto lg:text-2xl md:text-xl text-sm  md:mb-6">
                  "{testimonial.quote}"
                </p>
                <img
                  src={testimonial.image}
                  alt="client-image"
                  className="w-20 m-2 mx-auto rounded-full"
                />
                <div className="flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font text-xl font-poppins font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-white text-lg font-poppins text-sm">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute flex justify-between text-white lg:text-4xl md:text-3xl text-2xl inset-x-0 md:left-5 md:right-5 left-3 right-3 xl:left-60 xl:right-60 opacity-[60%] -translate-y-80"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <LeftCircleOutlined
              className={`hover:cursor-pointer hover:scale-125 `}
              onClick={prevSlide}
            />
            <RightCircleOutlined
              className={`hover:cursor-pointer  hover:scale-125 `}
              onClick={nextSlide}
            />
          </div>
          <div className='flex justify-center'>
                    {testimonials.map((_testimonial, slideIndex:any) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <div
                                style={{ width: '15px', height: '15px', backgroundColor: currentIndex === slideIndex ? 'yellow' : 'gray', marginRight: slideIndex !== testimonials.length - 1 ? '20px' : '0' }}
                                className='rounded-full'
                            ></div>
                        </div>
                    ))}
                </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
