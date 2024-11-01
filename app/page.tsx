import Image from "next/image";
import background from '../public/Mii/desk.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-200'>
      <div className='relative h-screen w-screen flex items-center justify-center'>
        <Image
          src={background}
          alt="desk"
          loading="lazy"
          className="absolute top-0 right-0 bottom-0 left-0 object-contain pointer-events-none"
        />
          <Link
            href="/gamer"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[52%] right-[46%] top-[66%] bottom-[27%] bg-black"
          />
          <Link
            href="#"
            rel="noopener noreferrer"
            className="absolute left-[66%] right-[27%] top-[52%] bottom-[46%] bg-black"
          />
      </div>
    </main>
  );
}
