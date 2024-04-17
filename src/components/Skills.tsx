import { skills } from "../data";

const Skills = () => {
  const onButtonClick = () => {
    const cvUrl = "MIS_report.pdf"; // Change this to the local path of your CV file
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = 'MIS_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Download initaited");
  };
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
            <div key={skill.title} className="w-full lg:w-[45%] mb-4">
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
        {/**download cv */}
        <div className="flex justify-center p-20">
          <button onClick={onButtonClick} className="border-2 border-black cursor-pointer font-poppins font-medium hover:bg-gray-500 hover:text-white ease-in-out 2xl:p-4 xl:p-6 lg:p-4 p-2 shadow-xl ">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
