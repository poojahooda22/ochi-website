import image from '../assets/images/about.jpg'
import styles from './about.module.scss';


function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"
    className="w-full py-20 px-8 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
        <h1 className=" sm:w-3/4 text-[7vw] leading-[7vw] sm:text-[3.5vw] sm:leading-[3.5vw] tracking-tight">
            Ochi is a strategic partner for fast-grow­ing tech<br />
            businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas,
            and hire great peo­ple.
        </h1>

        <div className="w-full border-t-[1px] mt-24 border-gray-600 flex justify-between ">
            <div className='mt-8 w-1/5  '>
                <h2 className='text-5xl mb-6'>Our approach</h2>
                <div className='w-2/5'>
                    <h4 
                        className={`${styles.heading4} relative border-[1px] border-black text-[1vw] py-[8px]  
                        px-[10px] text-wrap text-center 
                        bg-[#101112] text-[#fff]
                        rounded-[50px] overflow-hidden`}
                    >
                        <a className={`${styles.atag} font-normal` }>Read More</a>
                    </h4>
                </div>
            </div>
            <div className='mt-8 w-1/2 h-[60vh]  '>
                <img src={image} className='w-[100%] h-[100%] object-cover rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default About
