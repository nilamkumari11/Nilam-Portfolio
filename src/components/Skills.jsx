import OrbitingItems from "./OrbitingItems";
import { Icons } from "./Icons";
import TransitionLeft from "./TransitionLeft";
import TransitionRight from "./TransitionRight";
import TransitionUp from "./TransitionUp";
import TransitionWithScale from "./TransitionWithScale";

export const Skills = ({id}) => {
  return (
    <>
      <div id={id} className="skills md:h-[700px]">
        <div className="heading text-center text-cyan-500 text-4xl m-auto justify-center items-center">
          <p>Skills</p>
        </div>
        <p className="text-gray-400 text-lg m-auto justify-center items-center text-center">
          I've experienced with
        </p>

        <div className="skillcontainer md:px-3 md:py-3 flex sm:flex-row flex-col m-auto items-center justify-center">
          <TransitionLeft>
            <div className="set1 text-gray-400 m-auto justify-center items-center text-center p-4 hidden sm:block">
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.react className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">React</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.tailwind className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">TailwindCss</p>
                </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.nodejs className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">NodeJs</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.c className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                    <p className="py-2">C</p>
                    </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.mongodb className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">MongoDB</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.github className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">Github</p>
                </div>
              </div>
            </div>
          </TransitionLeft>

          <TransitionUp>
            <div className="orbitcontainer text-cyan-500 m-auto w-[300px] justify-center">
              <OrbitingItems
                items={[
                  <Icons.github key="github" className="h-6 w-6" />,
                  <Icons.twitter key="twitter" className="h-6 w-6" />,
                  <Icons.react key="react" className="h-6 w-6" />,
                  <Icons.tailwind key="tailwind" className="h-6 w-6" />,
                  <Icons.html key="html" className="h-6 w-6" />,
                  <Icons.css key="css" className="h-6 w-6" />,
                  <Icons.git key="git" className="h-6 w-6" />,
                  <Icons.nodejs key="nodejs" className="h-6 w-6" />,
                  <Icons.javascript key="javascript" className="h-6 w-6" />
                ]}
                radius={50}
              />
            </div>
          </TransitionUp>

          <TransitionRight>
            <div className="set2 text-gray-400 m-auto justify-center items-center text-center p-4 hidden sm:block">
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.java className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">Java</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.express className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                    <p className="py-2">Express</p>
                </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.html className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">HTML</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.javascript className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">JavaScript</p>
                </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.mysql className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2">SQL</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.css className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                    <p className="py-2">CSS</p>
                </div>
              </div>
            </div>
          </TransitionRight>
          <TransitionWithScale>
            <div className="sm:hidden block flex">
                    <div className="set1 text-gray-400 m-auto justify-center items-center text-center p-4">
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.react className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
             
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.tailwind className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
 
                </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.nodejs className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                 
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.c className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
               
                    </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.mongodb className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
               
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.github className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
          
                </div>
              </div>
            </div>
                    <div className="set2 text-gray-400 m-auto justify-center items-center text-center p-4">
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.java className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
           
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.express className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                
                </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.html className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
            
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.javascript className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
            
                </div>
              </div>
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.mysql className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
              
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.css className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                
                </div>
              </div>
            </div>

            </div>
          </TransitionWithScale>
        </div>
      </div>

      {/* Skills currently learning */}
      <TransitionWithScale>
        <div className="skiils2 sm:mt-0 mt-10">
          <div className="heading text-center text-cyan-500 text-2xl m-auto justify-center items-center">
            <p>Skills</p>
          </div>
          <p className="text-gray-400 text-lg m-auto justify-center items-center text-center">
            I'm currently learning
          </p>

          <div className="skillcontainer md:px-3 md:py-3 flex m-auto items-center justify-center">
            <div className="set1 text-gray-400 m-auto justify-center items-center text-center p-4">
              <div className="flex m-2">
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.python className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2 hidden sm:block">Python</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out ">
                  <Icons.typescript className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2 hidden sm:block">Typescript</p>
                </div>
                <div className="html m-3 md:m-5 p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border justify-center items-center border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                  <Icons.springboot className=" text-cyan-500 m-auto justify-center items-center w-12 h-12" />
                  <p className="py-2 hidden sm:block">SpringBoot</p>
                </div>
                <div className="html  m-3 md:m-5  p-1 sm:px-3 sm:py-3 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.nextjs className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2 hidden sm:block'>NextJS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionWithScale>
    </>
  );
};
