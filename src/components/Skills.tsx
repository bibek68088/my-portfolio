import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            My Skills
          </h1>
          <p className="lg:text-xl font-poppins leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I enjoy diving and learning new things. I am working on a
            professional, visually sophisticated and technologically proficient,
            responsive and multi-functional creative websites.
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          {skills.map((skill) => (
            <div key={skill.title} className="w-full md:w-1/2 lg:w-[45%] mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-roboto font-medium text-black dark:text-white">
                  {skill.title}
                </span>
                <span className="text-md font-medium text-black dark:text-white">
                  {skill.progress}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-yellow-300 h-3.5 rounded-full"
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
