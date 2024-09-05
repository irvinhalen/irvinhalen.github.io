import Smash from './Smash/Smash';
import Pokémon from './Pokémon/Pokémon';
import Mario from '../../public/Mario/Mario.svg';
    import Mario1 from '../../public/Mario/Mario1.jpg';
import Zelda from '../../public/Zelda/Zelda.svg';
    import Zelda1 from '../../public/Zelda/Zelda1.jpg';
    import Zelda2 from '../../public/Zelda/Zelda2.jpg';
import Minecraft from '../../public/Minecraft/Minecraft.svg';
    import Minecraft1 from '../../public/Minecraft/Minecraft1.jpg';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gamer'
};

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col gap-5 items-center justify-between p-24">
            <Smash />
            <Pokémon />
            <div className='flex flex-row gap-5 h-80 w-full'>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
                    <Image src={Mario1} alt='Mario' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
                    <Image src={Mario} alt='Super Mario logo' loading='lazy' objectPosition='center' />
                </div>
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
            <div className='flex flex-row gap-5 h-80 w-full'>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
                    <Image src={Zelda} alt='The Legend of Zelda logo' loading='lazy' objectPosition='center' />
                </div>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
                    <Image src={Zelda1} alt='Zelda' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6">
                    <Image src={Zelda} alt='The Legend of Zelda logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Legend of Zelda</div>
                        <p className="text-gray-700 text-base text-justify">
                            Multiplayer Triforce Heroes , Link Between Worlds 100%, BotW & TotK hyped with late friend.
                        </p>
                    </div>
                </div> */}
            </div>
            <div className='w-full rounded overflow-hidden'>
                <video muted autoPlay loop>
                    <source src='/Zelda/SheikahSlate.mp4' type='video/mp4' />
                    A video of the Sheikah Slate.
                </video>
            </div>
            <div className='flex flex-row gap-5 h-80 w-full'>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
                    <Image src={Minecraft1} alt='Minecraft' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
                    <Image src={Minecraft} alt='Minecraft logo' loading='lazy' objectPosition='center' />
                </div>
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
        </main>
    );
}
