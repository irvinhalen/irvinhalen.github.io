import icon from '../../../public/Pokémon/Pokémon.svg';
    import Emerald from '../../../public/Pokémon/Emerald.png';
    import ORAS from '../../../public/Pokémon/ORAS.png';
    import GO from '../../../public/Pokémon/GO.png';
    import MysteryDungeon from '../../../public/Pokémon/MysteryDungeon.png';
    import Reverse from '../../../public/Pokémon/Reverse.png';
import Image from 'next/image';

function Pokémon() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
        <div className='h-svh w-full flex justify-center'>
            <div className='flip-card w-full relative'>
                <div className='flip-card-inner'>
                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='contain' objectPosition='center' className='flip-card-front' />
                    <Image src={Emerald} layout='fill' alt='Emerald' objectFit='contain' objectPosition='center' className='flip-card-back overflow-hidden' />
                </div>
            </div>
        </div>
        <div className='h-svh w-full flex justify-center'>
            <div className='flip-card w-full relative'>
                <div className='flip-card-inner'>
                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='contain' objectPosition='center' className='flip-card-front' />
                    <Image src={ORAS} layout='fill' alt='Delta Emerald' objectFit='contain' objectPosition='center' className='flip-card-back overflow-hidden' />
                </div>
            </div>
        </div>
        <div className='h-svh w-full flex justify-center'>
            <div className='flip-card w-full relative'>
                <div className='flip-card-inner'>
                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='contain' objectPosition='center' className='flip-card-front' />
                    <Image src={GO} layout='fill' alt='GO' objectFit='contain' objectPosition='center' className='flip-card-back overflow-hidden' />
                </div>
            </div>
        </div>
        <div className='h-svh w-full flex justify-center'>
            <div className='flip-card w-full relative'>
                <div className='flip-card-inner'>
                    <Image src={Reverse} layout='fill' alt='back side of a Pokémon card' objectFit='contain' objectPosition='center' className='flip-card-front' />
                    <Image src={MysteryDungeon} layout='fill' alt='Mystery Dungeon' objectFit='contain' objectPosition='center' className='flip-card-back overflow-hidden' />
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
  )
}

export default Pokémon;
