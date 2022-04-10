// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/admin/ScrollToTop';
import { BaseOptionChartStyle } from './components/admin/charts/BaseOptionChart';
import { useEffect } from 'react';

import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route ,Routes} from "react-router-dom";
function App() {

  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        reject(e)
      })
      document.body.appendChild(script)
      document.body.removeChild(script)
    })
  }
  
   useEffect(() => {
      loadScript(`${process.env.PUBLIC_URL}assets/js/plugin.min.js`)
      setTimeout(() => {
        setTimeout(() => {
        }, 500)
        loadScript(`${process.env.PUBLIC_URL}assets/js/main.js`)
      }, 200)
    }, [])
  return (
   
/*This is the home template*/
<div>
<Navbar/> 
<Home/> 
<Footer/>
</div>
 
 /*To activate the admin template uncomment this piece of code*/
   /*
   <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>*/

  );
}

export default App;
