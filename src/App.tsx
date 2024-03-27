
import './App.css'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll';
import { useRef } from 'react';
import Cursor from "./components/StickyCursor/Index";
import styles from './page.module.scss';
import LandingPage from './components/LandingPage';
// import Marqueue from './components/Marqueue';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';


function App() {
  const stickyElement = useRef(null);
  return (
    <html >
      <body className={styles.main}>
        <SmoothScroll>
          <Cursor stickyElement={stickyElement} />
          <Navbar ref={stickyElement} />
          <LandingPage />
          {/* <Marqueue /> */}
          <About />
          <Eyes />
          <Featured />
        </SmoothScroll>
      </body>
    </html>
    
  )
}

export default App;
