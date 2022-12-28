import React from 'react';
import { useState, useEffect } from 'react';
import HeroSection from '../Components/Main/Main';
import About from '../Components/About/About';
import SpotifyWebApi from 'spotify-web-api-js';

function Home() {

  //Dark Mode configurations:
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]
  );

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700 dark:bg-black">
      <div className="bg-gray-200 dark:bg-black min-h-screen">

        <button className='bg-gray-200 p-2 rounded-2xl dark:bg-black' onClick={handleThemeSwitch}>
          ☾
        </button>

        <HeroSection />
        <About />      
        </div>
      
    </div>
  );
}
export default Home;
