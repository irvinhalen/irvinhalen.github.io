'use client'
import icon from '../../../public/Minecraft/Minecraft.svg';
    import Minecraft1 from '../../../public/Minecraft/Minecraft1.jpg';
    import background from '../../../public/Minecraft/background.png';
    import paintings from '../../../public/Minecraft/paintings.png';
    import dirt from '../../../public/Minecraft/dirt.png';
    import stone from '../../../public/Minecraft/stone.png';
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
            <div ref={linkContainer} className='relative'>
                <div className="dirt-block absolute left-0 right-[90%] bottom-[-10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-0 right-[90%] bottom-[10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-0 right-[90%] bottom-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-0 right-[90%] bottom-[50%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-0 right-[90%] bottom-[70%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-0 right-[90%] bottom-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[10%] right-[80%] top-[-10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[10%] right-[80%] top-[10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[10%] right-[80%] top-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[10%] right-[80%] top-[50%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[10%] right-[80%] top-[70%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[10%] right-[80%] top-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[15%] right-[65%] top-[-20.3%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[15%] right-[65%] top-[-0.2%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[20%] right-[70%] top-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[20%] right-[70%] top-[50%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[20%] right-[70%] top-[70%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[20%] right-[70%] top-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[24.9%] right-[55%] top-[-20.3%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[24.9%] right-[55%] top-[-0.2%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[30%] right-[60%] top-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[25%] right-[55%] top-[39.9%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[25%] right-[55%] top-[59.9%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[25%] right-[55%] top-[79.9%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[40%] right-[50%] top-[-10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[40%] right-[50%] top-[10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[34.9%] right-[45%] top-[19.8%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[34.9%] right-[45%] top-[39.8%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[34.9%] right-[45%] top-[59.8%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[40%] right-[50%] top-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[50%] right-[40%] top-[-10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[50%] right-[40%] top-[10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[45%] right-[34.9%] top-[19.8%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[45%] right-[34.9%] top-[39.8%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[45%] right-[34.9%] top-[59.8%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[50%] right-[40%] top-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[55%] right-[25%] top-[-20.3%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[55%] right-[25%] top-[-0.2%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[60%] right-[30%] top-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="stone-block absolute left-[55%] right-[25%] top-[39.9%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[55%] right-[25%] top-[59.9%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[55%] right-[25%] top-[79.9%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[65%] right-[14.9%] top-[-20.3%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="stone-block absolute left-[65%] right-[14.9%] top-[-0.2%] z-10">
                    <Image
                        src={stone}
                        alt="stone"
                        loading="lazy"
                        className="absolute right-0 scale-50"
                    />
                </div>
                <div className="dirt-block absolute left-[70%] right-[20%] top-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[70%] right-[20%] top-[50%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[70%] right-[20%] top-[70%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[70%] right-[20%] top-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[80%] right-[10%] top-[-10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[80%] right-[10%] top-[10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[80%] right-[10%] top-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[80%] right-[10%] top-[50%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[80%] right-[10%] top-[70%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[80%] right-[10%] top-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[90%] right-0 bottom-[-10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[90%] right-0 bottom-[10%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[90%] right-0 bottom-[30%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[90%] right-0 bottom-[50%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[90%] right-0 bottom-[70%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
                <div className="dirt-block absolute left-[90%] right-0 bottom-[90%] z-10">
                    <Image
                        src={dirt}
                        alt="dirt"
                        loading="lazy"
                        className="object-fill"
                    />
                </div>
            </div>
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
                    Played with friends in the internet café, played online server, command block coding (creating maps). Minecraft Steve is my most wanted fighter 
    for Smash.
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default Minecraft;
