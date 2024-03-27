


function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
            <div className="absolute flex gap-10 items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   ">
                 {/* This is the first eye */}
                <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div className="flex items-center justify-center bg-black w-[10vw] h-[10vw]  rounded-full">
                        <div className=" bg-white w-1/5 h-1/5 rounded-full"></div>
                    </div>
                </div>
                 {/* This is the second eye */}
                <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div className="flex items-center justify-center bg-black w-[10vw] h-[10vw] rounded-full">
                    <div className=" bg-white w-1/5 h-1/5 rounded-full"></div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Eyes
