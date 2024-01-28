import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "JAVA" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Franco and I am a <span className="font-bold">highly ambitious</span>,
              <span className="font-bold">self-motivated</span>, and <span className="font-bold">driven</span>
              programmer based in Colonia, Uruguay.
            </p>
            <br />
            <p>
              I study at the Universidad Tecnologica in Fray Bentos, and I am in my 
              third year of my degree, with the objective of graduating with a bachelor&apos;s 
              degree.
            </p>
            <br />
            <p>
              I have a lot of hobbies but my favorites are playing video games, watching 
              movies, reading, and although it seems strange (or maybe not) I also have as 
              a hobby programming things of personal interest, in the process I have made use 
              of many different technologies and I would love to apply that knowledge in the work field.
            </p>
            <br />
            <p>
              I believe that <span className="font-bold text-teal-500">no one should stop pursuing their dreams </span>
              and that&apos;s why I like to help others achieve theirs as well.   🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:top-5 md:left-34 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection