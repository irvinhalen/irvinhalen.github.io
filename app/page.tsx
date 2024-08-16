import Image from "next/image";
import Smash from '../public/SuperSmashBros.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Howdy! 🤠</h1>
      <div className="flex flex-row rounded overflow-hidden shadow-lg items-center">
          <Image src={Smash} alt='Card Sample' loading='lazy' />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Card Sample</div>
              <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
          </div>
      </div>
    </main>
  );
}
