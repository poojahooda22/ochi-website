import image from "../assets/images/image.jpg";
import styles from "./landing.module.scss";
import {motion} from "framer-motion";


function LandingPage() {
  return (
    <div 
        data-scroll data-scroll-speed="-.3"  className="w-full h-screen pt-1"
    >
      <div className="textstructure mt-[12vh] px-8">
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
            return (
                <div key={index} className="masker ">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && 
                        (<motion.div 
                            initial={{width: 0}} 
                            animate={{width: "6vw"}} 
                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                            className="mr-[1vw] w-[7vw] h-[5vw] rounded-md relative bg-slate-700"
                            > 
                                <img src={image} className="h-[100%] w-[100%] object-fit" /> 
                        </motion.div>)
                        }
                        <h1 className={` uppercase text-[8vw] font-[Roboto] tracking-normal leading-[6vw] font-bold`}>
                            {text}    
                        </h1>
                    </div>
                </div>
            )
        })}  
      </div>

      <div className="border-t-[1px]  border-zinc-400 mt-[18vh] flex justify-between items-center py-4 px-8 ">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
            return (
                <h4 key={index} className="text-gray-900 text-[1.2vw] font-normal tracking-tight leading-none" >
                    {item}
                </h4>
            )
        })}
        <div>
            <h4 className={`${styles.heading4} relative text-gray-900 text-[.7vw] px-[18px] 
                py-[8px] border-[1px] border-[#111] rounded-[50px] overflow-hidden`}>
                <a className={`${styles.atag} text-gray-900`}>Start project</a>
            </h4>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
