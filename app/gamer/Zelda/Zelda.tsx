'use client';
import icon from '../../../public/Zelda/Zelda.svg';
import Zelda1 from '../../../public/Zelda/Zelda1.jpg';
import Zelda2 from '../../../public/Zelda/Zelda2.jpg';
import Zelda3 from '../../../public/Zelda/Zelda3.jpg'
import Ganondork from '../../../public/Zelda/Ganondork.jpg'
import Image from 'next/image';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { useEffect, useState } from 'react';

function Zelda() {
    const [imgIndex, setImgIndex] = useState(0);
    const [disableRightArrow, setDisableRightArrow] = useState(false);
    const [disableLeftArrow, setDisableLeftArrow] = useState(false);
    const imgArray:Array<StaticImageData> = [Zelda1, Zelda2, Zelda3, Ganondork];

    useEffect(() => {
        if(imgIndex === (imgArray.length - 1)) {
            setDisableRightArrow(true);
        } else {
            setDisableRightArrow(false);
        }
        if(imgIndex === 0) {
            setDisableLeftArrow(true);
        } else {
            setDisableLeftArrow(false);
        }
    }, [imgIndex]);

    const showNextImg = () => {
        setImgIndex(index => {
            if(index === (imgArray.length - 1)) return index;
            return index + 1;
        });
    }

    const showPrevImg = () => {
        setImgIndex(index => {
            if(index === 0) return index;
            return index - 1;
        });
    }

  return (
    <>
        {/* <div className='flex flex-row gap-5 h-80 w-full'>
            <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
                <Image src={icon} alt='The Legend of Zelda logo' loading='lazy' objectPosition='center' />
            </div>
            <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
                <Image src={Zelda1} alt='Zelda' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
            </div>
            <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6">
                <Image src={Zelda} alt='The Legend of Zelda logo' loading='lazy' />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Legend of Zelda</div>
                    <p className="text-gray-700 text-base text-justify">
                        Multiplayer Triforce Heroes , Link Between Worlds 100%, BotW & TotK hyped with late friend.
                    </p>
                </div>
            </div>
        </div> */}
        <div className='relative flex items-center justify-center h-svh w-svw rounded overflow-hidden'>
            <div className='relative carousel-wrapper z-10'>
                <div className='carousel'>
                    {imgArray.map((src, index) => (
                        <div key={index} className='min-w-full m-auto'>
                            <Image
                                src={src}
                                alt='template'
                                loading='lazy'
                                className='carousel_photo'
                                style={{ transform: `translate(${ -100 * ( imgIndex * 2 ) }%) scale(${imgIndex === index ? 1 : 0.7})`, opacity: `${imgIndex === index ? 1:0}` }}
                            />
                        </div>
                    ))}
                    <div className={`carousel_button-next ${disableRightArrow ? 'disable-arrow':''}`} onClick={showNextImg} />
                    <div className={`carousel_button-prev ${disableLeftArrow ? 'disable-arrow':''}`} onClick={showPrevImg} />
                </div>
            </div>
            <div className='video-container'>
                <video muted autoPlay loop>
                    <source src='/Zelda/SheikahSlate.mp4' type='video/mp4' />
                    A video of the Sheikah Slate.
                </video>
            </div>
        </div>
    </>
  )
}

export default Zelda;
