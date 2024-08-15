import Image from 'next/image';
import Smash from '../../public/SuperSmashBros.svg';
import Pokémon from '../../public/Pokémon.svg';
import Mario from '../../public/Mario.svg';
import Zelda from '../../public/Zelda.svg';
import Minecraft from '../../public/Minecraft.svg';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col gap-5 items-center justify-between p-24">
            <div className="flex flex-row rounded overflow-hidden shadow-lg items-center">
                <Image src={Smash} alt='Super Smash Bros. logo' loading='lazy'/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Super Smash Bros.</div>
                    <p className="text-gray-700 text-base">
                        Talk about Super Smash Bros. being a crossover of your favorite characters and game series. Started from a fan game (Super Smash Flash), second hand Brawl from cousins, for the Nintendo 3DS (playing the demo and buying the game), for the Wii U from a friend (arbor), Ultimate with your first owned console, the Nintendo Switch.
                    </p>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center">
                    <Image src={Pokémon} alt='Pokémon logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Pokémon</div>
                        <p className="text-gray-700 text-base">
                            Pokémon Emerald, Pokémon Omega Ruby and Pokémon Alpha Sapphire (ORAS) with bro, Pokémon GO with my girl, brothers, friends (college time).
                        </p>
                    </div>
                </div>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center">
                    <Image src={Mario} alt='Super Mario logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Super Mario</div>
                        <p className="text-gray-700 text-base">
                            Always makes sounds based on Super Mario theme. Completed a fake copy of Super Mario Bros. 3 Super Mario Advance 4, Mario and Luigi Superstar Saga, Super Mario Odyssey.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center">
                    <Image src={Zelda} alt='The Legend of Zelda logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Legend of Zelda</div>
                        <p className="text-gray-700 text-base">
                            BotW & TotK hyped with late friend.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center">
                    <Image src={Minecraft} alt='Minecraft logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Minecraft</div>
                        <p className="text-gray-700 text-base">
                            Played with friends in the internet café, played online server, command block coding (creating maps). Minecraft Steve is my most wanted fighter for Smash.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
