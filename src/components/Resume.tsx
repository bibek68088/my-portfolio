import { educations, experiences } from "../data";

const Resume = () => {
  return (
    <div className="container px-5 py-10 mx-auto flex flex-col justify-center pb-5 ">
      <div className="flex flex-col gap-3 pb-12">
        <h2 className="lg:text-2xl font-roboto text-black bg-yellow-300 p-2 lg:w-[10%] w-[35%] rounded-sm">Know More</h2>
        <h1 className="text-4xl font-poppins">My Resume</h1>
        <p className="lg:text-2xl lg:w-4/3 w-11/12 font-roboto ">
          I enjoy every step of the design process, from discussion
          and collaboration to concept and execution
        </p>
      </div>
      <div className="lg:flex justify-between gap-20">
        <div>
          <h1 className="lg:text-4xl text-2xl text-black pb-7 font-poppins">My Education</h1>
          {educations.map((education: any) => (
            <div className="flex gap-3 border-l border-yellow-300">
              <div className="pl-5">
                <div className="flex justify-between pt-5 font-mono text-black">
                  <div>
                    <h2 className="lg:text-3xl font-poppins font-medium text-md pb-1">{education.title}</h2>
                    <p className="lg:text-xl font-roboto font-light text-sm">{education.sub}</p>
                  </div>
                  <div>
                    <p className="lg:text-xl text-xs">
                    {education.duration}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="border-b border-dotted pb-5 font-roboto">{education.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 lg:pt-0 md:pt-0">
          <h1 className="lg:text-4xl text-2xl text-black pb-7">My Experience</h1>
          {experiences.map((experience: any) => (
            <div className="flex gap-3 border-l border-yellow-300">
              <div className="pl-5">
                <div className="flex justify-between pt-5 font-mono text-black">
                  <div>
                    <h2 className="lg:text-3xl font-poppins font-medium text-md pb-1">{experience.title}</h2>
                    <p className="lg:text-xl font-roboto font-light text-sm">{experience.sub}</p>
                  </div>
                  <div>
                    <p className="lg:text-xl text-xs">
                    {experience.duration}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="border-b border-dotted pb-5 font-roboto">{experience.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
