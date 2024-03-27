import image from '../assets/images/about.jpg'

function About() {
  return (
    <div className="w-full py-20 px-8 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
        <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech 
        businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas,
        and hire great peo­ple.
        </h1>

        <div className="w-full border-t-[1px] mt-24 border-gray-600 flex justify-between">
            <div>
                <h2>Our approach</h2>
                <div>
                    <h4 className="">
                        <a className="">Read More</a>
                    </h4>
                </div>
            </div>
            <div>
                <img src={image} />
            </div>
        </div>
    </div>
  )
}

export default About
