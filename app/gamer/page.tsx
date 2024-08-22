import Image from 'next/image';
import Smash from '../../public/Smash/SuperSmashBros.svg';
    import Smash_64 from '../../public/Smash/64.jpg';
    import Smash_Melee from '../../public/Smash/Melee.jpg';
    import Smash_Brawl from '../../public/Smash/Brawl.jpg';
    import Smash_4 from '../../public/Smash/forNintendo3DS&forWiiU.jpg';
    import Smash_Ultimate from '../../public/Smash/Ultimate.jpg';
import Pokémon from '../../public/Pokémon/Pokémon.svg';
    import Emerald from '../../public/Pokémon/Emerald.png';
    import ORAS from '../../public/Pokémon/ORAS.png';
    import GO from '../../public/Pokémon/GO.png';
    import Reverse from '../../public/Pokémon/Reverse.jpg';
import Mario from '../../public/Mario/Mario.svg';
    import Mario1 from '../../public/Mario/Mario1.jpg';
import Zelda from '../../public/Zelda/Zelda.svg';
    import Zelda1 from '../../public/Zelda/Zelda1.jpg';
    import Zelda2 from '../../public/Zelda/Zelda2.jpg';
import Minecraft from '../../public/Minecraft/Minecraft.svg';
    import Minecraft1 from '../../public/Minecraft/Minecraft1.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gamer'
};

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col gap-5 items-center justify-between p-24">
            <div className='flex flex-row gap-5 h-64 w-full'>
                <div className='flip-card max-w w-1/3 rounded overflow-hidden shadow-lg relative'>
                    <div className="flex flex-row justify-center items-center h-full">
                        <Image src={Smash_Ultimate} alt='Smash' layout='fill' objectFit='cover' objectPosition='center' />
                    </div>
                </div>
                <div className="flex flex-row max-w rounded shadow-lg justify-center items-center h-full w-1/3 relative trigger">
                    <Image src={Smash} alt='Super Smash Bros. logo' loading='lazy' objectPosition='center' />
                    <div className='void absolute top-0 bottom-0 left-0 right-0' />
                </div>
                <div className='flip-card max-w w-1/3 rounded overflow-hidden shadow-lg relative'>
                    <div className="flex flex-row justify-center items-center h-full">
                        <Image src={Smash_4} alt='Smash' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' className='z-10' />
                    </div>
                </div>
                {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6 skew-x-3">
                    <Image src={Smash} alt='Super Smash Bros. logo' loading='lazy'/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Super Smash Bros.</div>
                        <p className="text-gray-700 text-base text-justify">
                            Super Smash Bros. is one of my favorite game series of all time. My journey with these games started from a fan game of all things, when my brother and I would play Super Smash Flash. Later on my cousins gave us several second hand games and consoles, one of them being the Wii Mini and a copy of Super Smash Bros. Brawl where I finally got a real taste of what this franchise had to offer, seeing Sonic in this game and the Subspace Emissary was mind blowing. When Smash for the Nintendo 3DS was close to releasing we played the demo version endlessly, we wouldn&apos;t even turn our 2DS and 3DS XL off because the demo had limited times of play, this is when I paid closer attention to guest characters and reveal trailers. I was able to play Super Smash Bros. for the Wii U in college because I &quot;arbor&quot; my friend&apos;s Wii U and his copy of the game, this is when I started to pay attention to the competitive scene and I had a lot of fun friendly and sweaty games with my friends. The first home console I officially owned was the Nintendo Switch, I saved 10 Peso Coins which reached around 4k, the rest I had to ask help from my mom since I was still in college (8 years), Super Smash Bros. Ultimate with ever fighter coming back and some new faces, we played this endlessly, I had a lot of friendly and sweaty games with my friends, I even joined a tournament in Cebu where I got 3rd place.
                        </p>
                    </div>
                </div> */}
            </div>
            <div className='flex flex-row gap-5 h-full w-full'>
                <div className='w-1/3 flex justify-center'>
                    <div className='flip-card h-72 w-52 relative'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <div className="flex flex-row justify-center items-center">
                                    <Image src={Emerald} layout='fill' alt='Emerald' objectFit='cover' objectPosition='center' />
                                </div>
                            </div>
                            <div className='flip-card-back overflow-hidden'>
                                <div className="flex flex-row justify-center items-center">
                                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='cover' objectPosition='center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 flex justify-center'>
                    <div className='flip-card h-72 w-52 relative'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <div className="flex flex-row justify-center items-center">
                                    <Image src={ORAS} layout='fill' alt='Emerald' objectFit='cover' objectPosition='center' />
                                </div>
                            </div>
                            <div className='flip-card-back rounded overflow-hidden'>
                                <div className="flex flex-row justify-center items-center">
                                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='cover' objectPosition='center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 flex justify-center'>
                    <div className='flip-card h-72 w-52 relative'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <div className="flex flex-row justify-center items-center">
                                    <Image src={GO} layout='fill' alt='Emerald' objectFit='cover' objectPosition='center' />
                                </div>
                            </div>
                            <div className='flip-card-back rounded overflow-hidden'>
                                <div className="flex flex-row justify-center items-center">
                                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='cover' objectPosition='center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6">
                    <Image src={Pokémon} alt='Pokémon logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Pokémon</div>
                        <p className="text-gray-700 text-base text-justify">
                            Pokémon Emerald, Pokémon Omega Ruby and Pokémon Alpha Sapphire (ORAS) with bro and we begged mum to get us a 2DS and a 3DS XL for our birthdays, Pokémon GO with my girl, brothers, friends (college time).
                        </p>
                    </div>
                </div> */}
            </div>
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
