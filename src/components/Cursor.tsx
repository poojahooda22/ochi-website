import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

function Cursor() {

    const [mouseposition, setMousePosition] = useState({x: 0, y: 0});
    console.log(mouseposition);

   useEffect(() => {
    const mouseMove = e => {
        console.log(e);
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
        window.removeEventListener("mousemove", mouseMove);
    }

   }, []);

   

  return (
    <motion.div 
        className="h-[16px] w-[16px] bg-[#111] rounded-full"
        
        
    
    >
      
    </motion.div>
  )
}

export default Cursor
