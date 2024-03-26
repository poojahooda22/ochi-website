
import './App.css'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll';
import { useRef } from 'react';
import Cursor from "./components/StickyCursor/Index";
import styles from './page.module.scss';


function App() {
  const stickyElement = useRef(null);
  return (
    <html >
      <body className={styles.main}>
        <SmoothScroll>
          <Cursor stickyElement={stickyElement} />
          <Navbar ref={stickyElement} />
        </SmoothScroll>
      </body>
    </html>
    
  )
}

export default App;
