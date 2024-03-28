
import './App.css'
import Navbar from './components/Navbar/Index';


import styles from './page.module.scss';
import LandingPage from './components/LandingPage';
import Marqueue from './components/Marqueue';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import SmoothScroll from './components/SmoothScroll';
import Cursor from './components/Cursor';


function App() {
  return (
    <html >
      <body className={styles.main}>
        <SmoothScroll>
        <Cursor />
          <Navbar />
          <LandingPage />
          <Marqueue />
          <About />
          <Eyes />
          <Featured />
        </SmoothScroll>  
      </body>
    </html>
    
  )
}

export default App;
