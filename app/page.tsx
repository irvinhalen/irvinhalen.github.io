'use client'
import Image from "next/image";
import background from '../public/Mii/desk.jpg';
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
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
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-200'>
      <div className='relative h-screen w-screen flex items-center justify-center'>
        <Image
          src={background}
          alt="desk"
          loading="lazy"
          ref={imageRef}
          className="absolute object-contain pointer-events-none"
        />
        <div ref={linkContainer} className='relative'>
          <Link
            href="https://github.com/irvinhalen"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[19.7%] right-[68.8%] top-[55.7%] bottom-[29.3%] bg-black opacity-0"
          />
          <Link
            href="/gamer"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -skew-y-6 left-[24.3%] right-[60.6%] top-[79.4%] bottom-[13.5%] bg-black opacity-0"
          />
        </div>
      </div>
    </main>
  );
}
