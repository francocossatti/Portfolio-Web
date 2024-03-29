"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 mt-6 md:mt-2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&apos;m Franco!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&apos;m a{" "}
            <span className="font-semibold text-teal-600">
              Programmer{" "}
            </span>
            based in Nueva Palmira, Colonia. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-6}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      {/* Ajusta la clase del contenedor para mover la flecha hacia arriba */}
      <div className="flex flex-row items-center text-center justify-center md:mt-[-9rem] sm:mt-[-6rem]">
        {/* Usa clases para ocultar la flecha en dispositivos móviles */}
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true} 
          offset={-10}
          duration={500}
          className="md:inline-block" // Oculta en dispositivos móviles
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection;