'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import hyacinth from '../public/Mii/hyacinth.png';
import background from '../public/Mii/desk.jpg';
import lock from '../public/Mii/icons/lock.ico';
import key from '../public/Mii/icons/key.ico';
import disc from '../public/Mii/icons/disc.ico';
import folder from '../public/Mii/icons/folder.ico';
import exit from '../public/Mii/icons/exit.ico';
import book from '../public/Mii/book.png';
import mug from '../public/Mii/mug.png';
import glasses from '../public/Mii/glasses.png';

export default function Home() {
  const [onFolder, setOnFolder] = useState<boolean>(false);
  const [onLock, setOnLock] = useState<boolean>(false);
  const [onKey, setOnKey] = useState<boolean>(false);
  const [onDisc, setOnDisc] = useState<boolean>(false);
  const [onBlackground, setOnBlackground] = useState<boolean>(false);
  const [objectClicked, setObjectClicked] = useState<boolean>(false);
  const [objectName, setObjectName] = useState<string>('');
  const imageRef = useRef<HTMLImageElement>(null);
  const linkContainer = useRef<HTMLDivElement>(null);
  const voidRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-200'>
      <div className={`z-10 absolute top-0 bottom-0 left-0 right-0 h-svh w-svw bg-black invisible-transition ${onBlackground ? 'visible opacity-80':'invisible opacity-0'}`}>
        <div
            onClick={() => {
              setOnBlackground(false);
            }}
            className="z-30 select-none text-white text-5xl [text-shadow:_2px_2px_5px_rgb(80_80_80_/_80%)] cursor-pointer absolute top-[5%] right-[5%]"
        >
          ×
        </div>
      </div>
      <div className={`z-20 absolute flex flex-col items-center justify-center object-transition ${onBlackground && objectClicked && objectName === 'book' ? 'visible':' invisible scale-75'}`}>
        <div className="overflow-auto relative h-full w-full">
          <Image
            src={hyacinth}
            alt='hyacinth'
            loading="eager"
            height={250}
            className="absolute top-[25%] bottom-[75%] left-[60%] right-[40%] underline text-blue-500"
          />
          <Link
            href="https://github.com/irvinhalen"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[77%] bottom-[23%] left-[59%] right-[41%] underline text-blue-500 text-xs"
          >
            https://github.com/irvinhalen
          </Link>
          <Image
            src={book}
            alt='book'
            loading="eager"
            height={500}
          />
        </div>
      </div>
      <div className={`z-20 absolute flex flex-col items-center justify-center object-transition ${onBlackground && objectClicked && objectName === 'mug' ? 'visible':' invisible scale-75'}`}>
        <Image
          src={mug}
          alt='mug'
          loading="eager"
          height={500}
        />
      </div>
      <div className={`z-20 absolute flex flex-col items-center justify-center object-transition ${onBlackground && objectClicked && objectName === 'glasses' ? 'visible':' invisible scale-75'}`}>
        <Image
          src={glasses}
          alt='glasses'
          loading="eager"
          height={500}
        />
      </div>
      <div className={`z-10 flex items-center justify-center h-svh w-svw bg-white ${onDisc ? '':'hidden'}`}>
        <Image
            src={exit}
            alt="exit"
            loading="lazy"
            height={30}
            onClick={() => {
              const iframe = document.querySelector('iframe');
              if (iframe) {
                  const src = iframe.src;
                  iframe.src = '';
                  iframe.src = src;
              }
              setOnDisc(false);
            }}
            className="cursor-pointer absolute top-[5%] right-[5%]"
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D0ObHRGO5HY?si=za--4JdHMyDPX4DQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className='relative h-screen w-screen flex items-center justify-center'>
        <Image
          src={background}
          alt="desk"
          loading="lazy"
          ref={imageRef}
          className="absolute object-contain pointer-events-none"
        />
        <div ref={linkContainer} className='relative'>
          <div ref={voidRef} className={`absolute z-10 bg-black flex overflow-hidden void ${onLock ? 'bg-black':'invisible'}`} />
          <div className={`absolute left-[57.1%] right-[12.7%] top-[37.5%] bottom-[29.1%] bg-black flex overflow-auto ${onFolder ? 'bg-white':'bg-blue-300'}`}>
            <div className={`bg-white h-full w-full ${onKey ? '':'hidden'}`}>
              <div className="flex flex-row items-start justify-between p-5 gap-5 w-full h-full">
                <p className="text-black text-xs font-mono">
                  even a broken clock
                  <br />
                  is right twice a day
                </p>
                <Image
                  src={exit}
                  alt="exit"
                  loading="lazy"
                  height={30}
                  onClick={() => setOnKey(false)}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className={`flex flex-row items-start w-full p-5 ${onFolder ? 'justify-between':'justify-start'} ${onKey ? 'hidden':''}`}>
              {onFolder ? (
                <>
                  <div className="flex flex-col gap-2 items-center justify-center desktop-icon">
                    <Image
                      src={disc}
                      alt="disc"
                      loading="lazy"
                      height={25}
                      onClick={() => setOnDisc(true)}
                      className="cursor-pointer"
                    />
                    <p className="text-black text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] font-mono">
                      intro
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={exit}
                      alt="exit"
                      loading="lazy"
                      height={30}
                      onClick={() => setOnFolder(false)}
                      className="cursor-pointer"
                    />
                  </div>
                </>
              ):(
                <>
                  <div className="flex flex-col gap-2 items-center justify-center desktop-icon">
                    <Image
                      src={lock}
                      alt="lock"
                      loading="lazy"
                      height={25}
                      onClick={() => {
                        setOnLock(true);
                        setTimeout(() => {
                          if(voidRef.current) {
                            voidRef.current.classList.add('void-consume');
                          }
                        }, 500);
                        setTimeout(() => {
                          router.push('/gamer');
                        }, 1550);
                      }}
                      className="cursor-pointer"
                    />
                    <p className="text-white text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] font-mono">
                      lock
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-center desktop-icon">
                    <Image
                      src={key}
                      alt="key"
                      loading="lazy"
                      height={25}
                      onClick={() => setOnKey(true)}
                      className="cursor-pointer"
                    />
                    <p className="text-white text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] font-mono">
                      key
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-center desktop-icon">
                    <Image
                      src={folder}
                      alt="folder"
                      loading="lazy"
                      height={25}
                      onClick={() => setOnFolder(true)}
                      className="cursor-pointer"
                    />
                    <p className="text-white text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] font-mono">
                      corn
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="absolute cursor-pointer left-[9%] right-[64%] top-[65.5%] bottom-[23.5%] bg-black opacity-0"
            style={{ transform: 'skewX(45deg) skewY(-6deg)' }}
            onClick={() => {
              setOnBlackground(true);
              setObjectClicked(true);
              setObjectName('book');
            }}
          />
          <div
            className="absolute cursor-pointer left-[19.7%] right-[68.8%] top-[55.7%] bottom-[29.3%] bg-black opacity-0"
            onClick={() => {
              setOnBlackground(true);
              setObjectClicked(true);
              setObjectName('mug');
            }}
          />
          <div
            className="absolute cursor-pointer -skew-y-6 left-[24.3%] right-[60.6%] top-[79.4%] bottom-[13.5%] bg-black opacity-0"
            onClick={() => {
              setOnBlackground(true);
              setObjectClicked(true);
              setObjectName('glasses');
            }}
          />
        </div>
      </div>
    </main>
  );
}
