import { useState } from "react";
import { Button, message } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [messaging, setMessage] = useState(false);

  const validateName = (name: string): boolean => {
    const rule = /^[a-zA-Z]{2,40} [a-zA-Z]{2,40}$/;
    return rule.test(name);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!name || !email || !query) {
      message.error("Please fill in all fields.");
      return;
    }
    if (!validateName(name)) {
      message.error("Please enter your correct name.");
      return;
    }
    if (!validateEmail(email)) {
      message.error("Please enter a valid email address.");
      return;
    }

    setMessage(true);
    setTimeout(() => {
      message.success("Form submitted successfully");
      setMessage(false);
      setEmail("");
      setQuery("");
    }, 1000);
  };

  return (
    <section id="contact" className="relative bg-yellow-300">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap font-roboto">
        <div className="container lg:w-2/5 lg:p-10 ">
          <div className="lg:text-4xl text-2xl font-bold pb-4">Let's get in touch</div>
          <div className="pb-10 flex flex-col">
            <div className="lg:text-2xl md:w-3/4 lg:w-full text-justify">
              I enjoy discussing new projects and design challlenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up
            </div>
            <div className="pt-10">
              <h2 className="font-bold text-2xl">Living In:</h2>
              <p className="text-lg">New Baneshwor-10, Kathmandu, Nepal</p>
            </div>
            <div className="pt-10">
              <h2 className="font-bold text-2xl">Call:</h2>
              <p className="text-lg">+977 980-867 2095</p>
            </div>
          </div>
          <div className="flex text-3xl gap-6">
            <div>
              <a href="">
                <TwitterOutlined className="hover:text-blue-500 hover:scale-125 cursor-pointer rounded" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/bibek68088/">
                <FacebookOutlined className="hover:text-blue-700 hover:scale-125 cursor-pointer rounded" />
              </a>
            </div>
            <div>
              <a href="">
              <InstagramOutlined className="hover:text-pink-500 hover:scale-125 cursor-pointer rounded" />
              </a>
            </div>
            <div>
              <a href="https://github.com/bibek68088">
                <GithubOutlined className="hover:text-white-300 hover:scale-125 cursor-pointer rounded" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/bibek-tamang-890721269/">
                <LinkedinOutlined className="hover:text-blue-700 hover:scale-125 cursor-pointer rounded" />
              </a>
            </div>
          </div>
        </div>
        <form
          name="contact"
          className="lg:w-1/3 md:w-2/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black"
            >
              How can I Help You?
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button
            type="primary"
            onClick={handleSubmit}
            loading={messaging}
            className="text-white bg-gray-700 border-0 focus:outline-none rounded text-lg h-10"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
