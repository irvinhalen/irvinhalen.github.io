'use client'
import icon from '../../../public/Mario/Mario.svg';
import Mario1 from '../../../public/Mario/Mario1.jpg';
import setting from '../../../public/Mario/setting.png';
import music from '../../../public/Mario/setting-music.png';
import background from '../../../public/Mario/background.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function Mario() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const linkContainer = useRef<HTMLDivElement>(null);

    const playJingle = () => {
        if(!isPlaying) {
            setIsPlaying(true);
            var audio = new Audio('Mario/ground-theme-short.mp3');
            audio.play();
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
            });
        }
    }

    const updateImageSize = () => {
        if (imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        if (linkContainer.current) {
            linkContainer.current.style.width = `${width}px`;
            linkContainer.current.style.height = `${height}px`;
        }
        }
    };

    useEffect(() => {
        updateImageSize();
        window.addEventListener('resize', updateImageSize);
        return () => {
        window.removeEventListener('resize', updateImageSize);
        };
    }, []);

  return (
    <div className='flex flex-row gap-5 h-screen w-full'>
        <div className='absolute flex justify-center items-center h-full w-full overflow-hidden'>
            <Image
                src={background}
                alt="desk"
                loading="lazy"
                className="object-cover pointer-events-none"
            />
        </div>
        <div className='absolute flex justify-center items-center h-full w-full'>
            <Image
                src={isPlaying ? music: setting}
                alt="Super Mario Bros."
                loading="lazy"
                ref={imageRef}
                className="absolute pointer-events-none scale-75"
            />
            <div ref={linkContainer} className='relative'>
                <div className={`absolute ${isPlaying ? '': 'cursor-pointer'} left-[0%] right-[90.9%] top-[75%] bottom-[0%] bg-red-500 opacity-0 z-10`} onClick={playJingle} />
                <div id='question-block-1' className="absolute left-[27.3%] right-[63.6%] top-[75%] bottom-[0%] bg-red-400 opacity-0 z-10" />
                <div id='question-block-2' className="absolute left-[36.4%] right-[54.5%] top-[75%] bottom-[0%] bg-red-300 opacity-0 z-10" />
                <div id='question-block-3' className="absolute left-[45.5%] right-[45.4%] top-[75%] bottom-[0%] bg-red-200 opacity-0 z-10" />
                <div id='question-block-4' className="absolute left-[54.6%] right-[36.3%] top-[75%] bottom-[0%] bg-red-100 opacity-0 z-10" />
                <div id='chest-block' className="absolute left-[73.8%] right-[17%] top-[0%] bottom-[75%] bg-white opacity-0 z-10" />
            </div>
        </div>
        {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
            <Image src={Mario1} alt='Mario' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
        <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
            <Image src={icon} alt='Super Mario logo' loading='lazy' objectPosition='center' />
        </div> */}
        {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6">
            <Image src={Mario} alt='Super Mario logo' loading='lazy' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Super Mario</div>
                <p className="text-gray-700 text-base text-justify">
                    Always makes sounds based on Super Mario theme. Completed a fake copy of Super Mario Bros. 3 Super Mario Advance 4, Mario and Luigi Superstar Saga, Super Mario Odyssey 100%.
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default Mario;
