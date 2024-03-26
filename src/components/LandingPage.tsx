

function LandingPage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => {
            return (
                <div className="masker ">
                    <h1 className="uppercase text-9xl tracking-tighter leading-none font-['Founders_Grotesk'] font-semibold">
                        We Create
                    </h1>
                </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default LandingPage
