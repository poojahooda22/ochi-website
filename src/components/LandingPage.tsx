// import image from "../assets/images/image.jpg";

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-52 px-16">
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

      <div className="bottom mb-16">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
            return (
                <h4>
                    {item}
                </h4>
            )
        })}
      </div>
    </div>
  )
}

export default LandingPage
