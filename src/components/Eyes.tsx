


function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
            <div className="absolute flex gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2  ">
                 {/* This is the first eye */}
                <div className="relative w-[15vw] h-[15vw] rounded-full bg-white">
                    <div className="absolute bg-black w-[10vw] h-[10vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full"></div>
                </div>
                 {/* This is the second eye */}
                <div className="relative w-[15vw] h-[15vw] rounded-full bg-white">
                    <div className="absolute bg-black w-[10vw] h-[10vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full"></div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Eyes
