import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import styles from './page.module.scss';
import LandingPage from './components/LandingPage';
import Marqueue from './components/Marqueue';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className={styles.main}> 
        <Navbar />
        <LandingPage />
        <Marqueue />
        <About />
        <Eyes />
        <Featured />
    </div>
  );
}

export default App;
