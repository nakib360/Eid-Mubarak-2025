import React, { useRef, useState } from 'react';

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
        <div className='bg-[url("src/assets/bg-2.jpg")] bg-cover bg-center w-screen h-screen relative overflow-x-hidden'>
            <audio ref={audioRef} src="src/assets/fireworks.mp3"></audio>
            <button onClick={handleVisible} className={`${visiblity ? "hidden" : "block"} h-13 md:h-15 w-40 md:w-50 bg-gradient-to-b from-amber-300 to-amber-50 rounded-full border-2 border-amber-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl font-bold`}>Show the card</button>
            <img className={`${visiblity ? "" : "-mt-100"} transition-all absolute h-60 md:h-100 left-1`} src="src/assets/lighting-1.png" alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute h-60 md:h-80 -right-4 -top-8 rotate-40`}  src="src/assets/lighting-2.png" alt="" />
            <img className={`${visiblity ? "block" : "hidden"} w-60 md:w-70 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center `}src="src/assets/eid mubarak.png" alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute w-50 md:w-90 bottom-5 right-7 md:right-90`} src="src/assets/cow.png" alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute w-30 md:w-50 bottom-3 md:bottom-0 right-25 md:right-130 z-10`} src="src/assets/goat 1.png" alt="" />
            <img className={`${visiblity ? "block" : "hidden"} absolute w-30 md:w-50 bottom-5 right-53 md:right-180`} src="src/assets/goat 2.png" alt="" />
        </div>
    );
};

export default Body;