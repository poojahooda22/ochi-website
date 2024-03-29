
import { useEffect, useState } from "react"

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth/2;
            const deltaY = mouseY - window.innerHeight/2;

            const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);

            setRotate(angle - 180);
        })
    })
  return (
    <div className="eyes w-full h-screen  overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
            <div className="absolute flex gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   ">
                 {/* This is the first eye */}
                <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                <div  className="relative bg-zinc-900 w-[10vw] h-[10vw]  rounded-full">
                        <div 
                        style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                            <div className=" bg-white w-6 h-6 rounded-full"></div>
                        </div>   
                    </div>
                </div>
                 {/* This is the second eye */}
                <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div  className="relative bg-zinc-900 w-[10vw] h-[10vw]  rounded-full">
                        <div 
                            style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} 
                            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                            <div className=" bg-white w-6 h-6 rounded-full"></div>
                        </div>   
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Eyes
