import AEC from '../assets/AEC.jpg';
import DAV from '../assets/DAV.jpg';
import TransitionUp from './TransitionUp';

export const Education = ({id}) => {
    return (
        <div id={id} className='mb-40'>
            <div className="flex flex-col text-cyan-500 items-center mt-50 mb-20 font-mono">
                <h1 className="text-4xl mb-2">My Education</h1>
                <h2 className="text-gray-400">A good Education is a foundation for a better Future</h2>
            </div>
            <div className=''>
                <div className = "flex flex-col items-center">
                    <TransitionUp>
                        <Card photo={AEC} 
                            title = "Bachelor of Technology in Computer Science"               
                            name="Asansol Engineering College"
                            year = "2022-2026"
                            status = "Pursuing"
                        ></Card>
                    </TransitionUp>
                    <TransitionUp>
                        <Card photo={DAV} 
                            title = "Senior School | Science | PCM "               
                            name="D.A.V. Public School"
                            year = "2022"
                            status = "Completed"
                        ></Card>
                    </TransitionUp>
                    <TransitionUp>
                        <Card photo={DAV} 
                            title = "Secondary School"               
                            name="D.A.V. Public School"
                            year = "2020"
                            status = "Completed"
                        ></Card>
                    </TransitionUp>
                </div>
            </div>
        </div>
    )
}

const Card = (
    {
        photo,
        title,
        name,
        year,
        status
    }
) => {
    return (
        <div className="flex lg:flex-row flex-col lg:items-center lg:w-250 md:w-180 sm:w-150 w-110 lg:h-40 bg-gray-700/60 rounded-xl border border-white shadow-cyan-500 hover:shadow-md hover:border-cyan-500 mb-10 hover:scale-105 transition-transform ">
            <div>
                <img src={photo} alt="School" className="lg:w-60 md:w-180 sm:w-150 w-110 h-40 rounded-l-lg"/>
            </div>
            <div className='text-white px-7 lg:py-0 py-5'>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>{title}</h1>
                <div className='md:text-xl sm:text-lg text-md text-cyan-500'>{name}</div>
                <div className='md:text-2xl sm:text-xl text-lg'>{year} | {status}</div>
            </div>
        </div>
    )
}