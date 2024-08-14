import Image from 'next/image';
import Smash from '../../public/SuperSmashBros.svg';
import Pokémon from '../../public/Pokémon.svg';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Gamer 🎮</h1>
            <div className='flex flex-row gap-5'>
                <div className="flex flex-row max-w-xxl rounded overflow-hidden shadow-lg items-center">
                    <Image src={Smash} alt='Super Smash Bros. logo' loading='lazy'/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Super Smash Bros. Ultimate</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row max-w-xxl rounded overflow-hidden shadow-lg items-center">
                    <Image src={Pokémon} alt='Pokémon logo' loading='lazy' />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Pokémon Emerald</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
