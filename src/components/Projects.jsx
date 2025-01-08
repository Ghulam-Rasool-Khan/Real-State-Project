
import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets"
import {motion} from "framer-motion"

function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    function updatesCardsToShow() {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length)
      } else {
        setCardsToShow(1)
      }
    }

    updatesCardsToShow();

    window.addEventListener('resize', updatesCardsToShow)
    return () => window.removeEventListener('resize', updatesCardsToShow)
    
  }, [])

  function nextProject() {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % projectsData.length)
    console.log(currentIndex)
  }

  function previousProject() {
    setCurrentIndex((previousIndex) => previousIndex === 0 ? projectsData.length - 1 : previousIndex - 1)
    console.log(currentIndex)
  }


  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>


      {/* slider button */}


      <div className="flex justify-end items-center mb-8">
        <button onClick={previousProject}
          className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className=" overflow-hidden">
        <div className={`flex gap-10 md:gap-2 transition-transform duration-1000 ease-in-out px-5 md:px-0`}
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
          }}>
          
          {projectsData.map((project, index) => {
            return (
              <div key={index} className="border border-gray-300 relative shrink-0 w-[100%] sm:w-[25%]">
                <img src={project.image} alt="project.title" className="w-full h-auto mb-14"/>
                <div className=" absolute left-0 right-0 bottom-5 flex justify-center ">
                  <div className="border border-gray-300 inline-block bg-white w-3/4 px-4 shadow-xl rounded">
                    <h2 className="text-xl font-medium text-gray-800">
                      {project.title} 
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="px-1">|</span> {project.location}
                    </p>
                  </div>
                </div>
            </div>
            )  
          })}
        </div>
      </motion.div>
      

      


    </div>
  )
}
export default Projects;