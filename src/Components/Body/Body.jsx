import React, { useRef, useState } from 'react';
import bg_2 from "../../assets/bg-2.jpg"
import lighting_1 from "../../assets/lighting-1.png"
import lighting_2 from "../../assets/lighting-2.png"
import eid from "../../assets/eid mubarak.png"
import cow from "../../assets/cow.png"
import goat_1 from "../../assets/goat 1.png"
import goat_2 from "../../assets/goat 2.png"
import audio from "../../assets/fireworks.mp3"

const Body = () => {
    const [visiblity, setVisblity] = useState(false);
    const audioRef = useRef(null);
    const handleVisible = () => {
        setVisblity(true);
        if(audioRef.current){
            audioRef.current.loop = true;
            audioRef.current.play();
        }
    }
    return (
        <div style={{ backgroundImage: `url(${bg_2})` }} className={`bg-cover bg-center w-screen h-screen relative overflow-x-hidden`}>
            <audio ref={audioRef} src={`${audio}`}></audio>
            <button onClick={handleVisible} className={`${visiblity ? "hidden" : "block"} h-13 md:h-15 w-40 md:w-50 bg-gradient-to-b from-amber-300 to-amber-50 rounded-full border-2 border-amber-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl font-bold`}>Show the card</button>
            <img className={`${visiblity ? "" : "-mt-100"} transition-all absolute h-60 md:h-100 left-1`} src={`${lighting_1}`} alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute h-60 md:h-80 -right-4 -top-8 rotate-40`}  src={`${lighting_2}`} alt="" />
            <img className={`${visiblity ? "block" : "hidden"} w-60 md:w-70 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center `} src={`${eid}`} alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute w-50 md:w-90 bottom-5 right-7 md:right-90`} src={`${cow}`} alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute w-30 md:w-50 bottom-3 md:bottom-0 right-25 md:right-130 z-10`} src={`${goat_1}`} alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute w-30 md:w-50 bottom-5 right-53 md:right-180`} src={`${goat_2}`} alt="" />
        </div>
    );
};

export default Body;