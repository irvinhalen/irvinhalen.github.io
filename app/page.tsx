import Image from "next/image";
import background from '../public/Mii/desk.jpg';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-200'>
      <h1>Coming Soon! 💫</h1>
      {/* <div className='relative h-screen w-screen flex items-center justify-center'>
        <Image
          src={background}
          alt="desk"
          loading="lazy"
          className="absolute top-0 right-0 bottom-0 left-0 object-contain pointer-events-none"
        />
        <a
          href="#"
          className="absolute left-[52%] right-[46%] top-[66%] bottom-[27%] bg-black"
        >
        </a>
      </div> */}
    </main>
  );
}
