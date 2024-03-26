// import image from "../assets/images/image.jpg";
import styles from "./landing.module.scss";


function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-52 px-8">
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
            return (
                <div key={index} className="masker ">
                    <h1 className={`uppercase text-[6vw] tracking-tighter leading-[5.5vw] font-semibold`}>
                        {text}
                        {/* {index === 1 && <div> <img src={image } /></div>} */}
                    </h1>
                </div>
            )
        })}  
      </div>

      <div className="border-t-[1px]  border-zinc-400 mt-32 flex justify-between items-center py-4 px-8 ">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
            return (
                <h4 key={index} className="text-gray-900 text-sm font-normal tracking-tight leading-none" >
                    {item}
                </h4>
            )
        })}
        <div>
            <h4 className={`${styles.heading4} relative text-gray-900 text-sm px-[18px] 
                py-[6px] border-[1px] border-[#333] rounded-[50px] overflow-hidden`}>
                <a className={`${styles.atag} text-gray-900`}>Start project</a>
            </h4>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
