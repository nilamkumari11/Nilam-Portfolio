import LetterTyped from "./LetterTyped"
import { Socials } from "./Socials";
import { useEffect, useState } from "react";
import TransitionWithScale from "./TransitionWithScale";


export const Home = ({ id }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Delay to trigger animation after mount
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
            <div id={id} className={`flex mb-100 md:mb-60 transition-all duration-1000 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div><Socials></Socials></div>
            <div className="absolute z--1 top-30 left-17 sm:left-35 md:left-50 lg:left-60 h-110 w-78 sm:w-100 md:w-150 lg:w-200 flex flex-col p-4">
                <h2 className="m-1 p-1 text-gray-400 text-2xl">Hey, I'm</h2>
                <h2 className="m-1 p-1 text-cyan-500 text-3xl md:text-5xl">Nilam Kumari</h2>
                <div className="designation m-1 p-1 text-cyan-500 text-xl md:text-3xl font-mono">
                    <LetterTyped
                        strings={[
                        "< Web Developer />",
                        "< Frontend Developer />",
                        "< Fullstack Developer />",
                        "< Coder />",
                        "< Learner />"
                        ]}
                        charDelay={100} 
                        pause={1500} 
                    />
                </div>
                <div className="m-2 p-2 ml-1 pl-1 text-gray-400 text-md sm:text-lg md:text-xl text-justify font-mono">
                    <p>
                        I’m a final year B.Tech student in Computer Science and Engineering with a strong passion for web development. I aspire to become a full-time web developer, with a particular interest in full-stack development. I enjoy creating simple, user-friendly applications and learning new technologies. I also have a keen interest in problem-solving and enjoy applying my coding skills to tackle real-world challenges.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 m-1 p-1 items-center justify-center md:justify-start">
                    <a
                                href="mailto:nilamkumari2k4@gmail.com"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-50 hover:scale-110 transition-transform duration-200 ease-in-out"
                    >  
                        <span className="font-mono">Hire me</span>
                    </a>
                    <a
                                href="https://drive.google.com/file/d/1eEWX6_gJRzlIN3SBVg7nHbOl8YCKKQ05/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-gray-800 rounded w-50 hover:scale-110 transition-transform duration-200 ease-in-out"
                    >  
                        <span className="font-mono">View Resume</span>
                    </a>
                </div>
            </div>
        </div>

    )
}