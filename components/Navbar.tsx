"use client"
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

const PAGE_OFFSETS: Record<string, number> = {
    home: -100,
    about: -10,
    projects: -69,
  };

export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false)
  
    // Clases de fondo y color del texto basadas en el tema actual
    const navbarBgClass = currentTheme === "dark" ? "dark:bg-stone-900 bg-white" : "bg-white"
    const textColorClass =
      currentTheme === "dark" ? "text-neutral-100" : "text-neutral-900 hover:text-neutral-500"
  
    return (
      <header className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow ${navbarBgClass}`}>
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="home">
                <div className="container flex items-center space-x-2">
                  <h2 className={`text-2xl font-bold ${textColorClass}`}>Franco Cossatti</h2>
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
  
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={item.page}
                      className={`block lg:inline-block ${textColorClass}`}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={PAGE_OFFSETS[item.page] || -70}  // Usa el offset específico para la página o un valor predeterminado de -70
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiSunLine size={25} color="black" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                  >
                    <RiMoonFill size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }