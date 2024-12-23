'use client'
import icon from '../../../public/Minecraft/Minecraft.svg';
    import Minecraft1 from '../../../public/Minecraft/Minecraft1.jpg';
    import background from '../../../public/Minecraft/background.png';
    import paintings from '../../../public/Minecraft/paintings.png';
import Blocks from './Blocks'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function Minecraft() {
    const imageRef = useRef<HTMLImageElement>(null);
    const linkContainer = useRef<HTMLDivElement>(null);

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
                alt="dirt loading screen"
                loading="lazy"
                className="object-cover pointer-events-none"
            />
        </div>
        <div className='absolute flex justify-center items-center h-full w-full'>
            <Image
                src={paintings}
                alt="Minecraft custom paintings"
                loading="lazy"
                ref={imageRef}
                className="absolute pointer-events-none scale-50"
                style={{ filter: 'drop-shadow(0 0 50px rgb(0, 0, 0, 0.8))' }}
            />
            <Blocks linkContainer={linkContainer} />
        </div>
        {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
            <Image src={Minecraft1} alt='Minecraft' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
        <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
            <Image src={icon} alt='Minecraft logo' loading='lazy' objectPosition='center' />
        </div> */}
        {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6">
            <Image src={Minecraft} alt='Minecraft logo' loading='lazy' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Minecraft</div>
                <p className="text-gray-700 text-base text-justify">
                    Played with friends in the internet café, played online server, command block coding (creating maps). Minecraft Steve is my most wanted fighter for Smash.
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default Minecraft;
