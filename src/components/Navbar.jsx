import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return(
        <div className="fixed z-10 top-0 left-0 w-full px-8 py-2 h-18 flex items-center justify-between border-b border-cyan-500 rounded-b-3xl shadow-cyan-700 shadow-md bg-gray-600/40 backdrop-blur-sm">
            <h2 className="text-gray-400 text-4xl">{"<Nilam  Kumari />"}</h2>
            <div className="flex text-white text-md cursor-pointer p-4 gap-6">
                <a href="#home" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-center hidden lg:flex ">Home</a>
                <a href="#about"className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-center hidden lg:flex">About</a>
                <a href=""className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-center hidden lg:flex">Skills</a>
                <a href=""className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-center hidden lg:flex">Education</a>
                <a href=""className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-center hidden lg:flex">Projects</a>
                <a href=""className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-center hidden lg:flex">Contact</a>
                <button className={`block cursor-pointer lg:hidden ${
                    isOpen ? "text-cyan-400" : "text-white"
                }`} onClick={() =>{
                    setIsOpen(!isOpen)
                }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full right-4 mt-2 w-40 sm:w-45 rounded-lg bg-gray-600/40 backdrop-blur-2xl shadow-lg flex flex-col text-white p-4 gap-4 ">
                <a href="#home" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-left cursor-pointer">Home</a>
                <a href="#about" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-left cursor-pointer">About</a>
                <a href="#home" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-left cursor-pointer">Skills</a>
                <a href="#home" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-left cursor-pointer">Education</a>
                <a href="#home" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-left cursor-pointer">Projects</a>
                <a href="#home" className="hover:text-cyan-400 hover:scale-120 transition-transform duration-200 origin-left cursor-pointer">Contact</a>
                </div>
            )}
        </div>
    )
}