import image from "../assets/images/image.jpg";
import styles from "./landing.module.scss";


function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-8">
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
            return (
                <div key={index} className="masker ">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && 
                        (<div className="mr-4 w-[6vw] h-[4.3vw] relative -top-[0vw]"> 
                            <img src={image} className="h-[100%] w-[100%] object-fit" /> 
                        </div>)
                        }
                        <h1 className={` h-full uppercase text-[6vw] tracking-tighter leading-[5.5vw] font-bold`}>
                            {text}    
                        </h1>
                    </div>
                </div>
            )
        })}  
      </div>

      <div className="border-t-[1px]  border-zinc-400 mt-40 flex justify-between items-center py-4 px-8 ">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
            return (
                <h4 key={index} className="text-gray-900 text-[14px] font-normal tracking-tight leading-none" >
                    {item}
                </h4>
            )
        })}
        <div>
            <h4 className={`${styles.heading4} relative text-gray-900 text-[14px] px-[18px] 
                py-[6px] border-[1px] border-[#333] rounded-[50px] overflow-hidden`}>
                <a className={`${styles.atag} text-gray-900`}>Start project</a>
            </h4>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
