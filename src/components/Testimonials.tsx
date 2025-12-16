import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Testimonial } from "../types";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prev: number) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev: number) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-900 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container px-5 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm text-yellow-400 font-semibold tracking-wide uppercase mb-2">
            Testimonials
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h1>
        </motion.div>
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="overflow-hidden h-96"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center px-8 h-full flex flex-col justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400 shadow-lg"
                />
                <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-yellow-400">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_: Testimonial, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-yellow-400 w-8 h-3"
                    : "bg-gray-600 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
