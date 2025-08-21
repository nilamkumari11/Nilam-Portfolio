import ProfilePic from  '../assets/profile.jpg';
import TransitionWithScale from './TransitionWithScale';

export const About = ({id}) => {
    return (
        <TransitionWithScale>
            <div>
            
            <div id={id} className="text-center text-cyan-500 p-4 mb-2 font-mono">
                    <h2 className="text-4xl">About Me</h2>
                    
            </div>
            <div className="hover:border-cyan-500 hover:shadow-cyan-500 shadow-lg w-100 sm:w-140 md:w-200 lg:w-250 lg:h-120 md:h-140 sm:h-190 h-220 m-23 ml-7 sm:ml-13 md:ml-15 lg:ml-32 flex flex-col bg-gray-600/10 border rounded-xl font-mono py-10 md:py-17 px-4 md:px-10 text-white mb-50">
                <div className="flex flex-col md:flex-row items-center ">
                    <img 
                        src={ProfilePic} 
                        alt="My photo" 
                        className="w-60 h-60 rounded-full object-cover border-4 border-cyan-500 "
                    />
                    <div className="pl-2 sm:pl-4 md:pl-20 ">
                        <ul className="space-y-10">
                            <li className="flex items-start mt-8 md:mt-0">

                                <div className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>

                                </div>
                                <span className="flex-1">
                                    👋 Hello! I'm Nilam Kumari, a final year student at Asansol Engineering College, passionate about building scalable and efficient software solutions.
                                </span>
                            </li>
                            <li className="flex items-start">
                    
                                <div className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                    </svg>

                                </div>
                                <span className="flex-1">
                                    Specialized in Java programming and have hands-on experience developing full-stack web apps using the MERN stack.
                                </span>
                            </li>
                            <li className="flex items-start">
                        
                                <div className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mr-6" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                                    </svg>

                                </div>
                                <span className="flex-1">
                                    Over 400+ data structures and algorithm problems solved on LeetCode, enhancing my problem-solving skills.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mr-6" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>

                                </div>
                                <span className="flex-1">
                                    Excited to contribute to impactful projects at the intersection of technology and creativity.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        </TransitionWithScale>
    )
}