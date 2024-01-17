
// import styles from "@/components/styles/raindrop.module.css"
import { useState, useEffect } from "react";
import Rain from "@/components/Rain";


const getRandomDrop =(max,min) =>{
  return Math.floor(Math.random() * (max - min +1)) + min;
}
const getrainslist =(numRaindrops, windowSize ) => {
  const rainslist = [];
  for (let i = 0; i < numRaindrops; i++) {
    const left = getRandomDrop(0, windowSize.width);
    const animationDelay = getRandomDrop(0, 2); // Adjust the delay as needed

    rainslist.push(
      <Rain key={i} left={left} animationDelay={animationDelay} />
    );
  }
}

const Raindrops = () => {
  // const [windowSize, setWindowSize] = useState({
  //   width: 0,
  //   height: 0,
  // });

  // useEffect(() => {
  //   const updateWindowSize = () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   // Initial window size
  //   updateWindowSize();
  //   window.addEventListener('resize', updateWindowSize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', updateWindowSize);
  //   };
  // },[])
  const numRaindrops = 1000; // Adjust the number of raindrops as needed
  // const rainslist = getrainslist(numRaindrops, windowSize)
  const rainslist = [];
  for (let i = 0; i < numRaindrops; i++) {
    const left = getRandomDrop(0, 600);
    const animationDelay = getRandomDrop(0, 2); // Adjust the delay as needed

    rainslist.push(
      <Rain key={i} left={left} animationDelay={animationDelay} />
    );
  }
  
  return (
    <div className="min-h-screen relative">
      {/* <Rainanimation/>
       */}
       {rainslist}
    </div>
  )
}

export default Raindrops
