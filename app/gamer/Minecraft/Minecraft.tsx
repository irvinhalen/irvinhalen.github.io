import icon from '../../../public/Minecraft/Minecraft.svg';
    import Minecraft1 from '../../../public/Minecraft/Minecraft1.jpg';
import Image from 'next/image';

function Minecraft() {
  return (
    <div className='flex flex-row gap-5 h-screen w-full'>
        <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
            <Image src={Minecraft1} alt='Minecraft' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
        <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
            <Image src={icon} alt='Minecraft logo' loading='lazy' objectPosition='center' />
        </div>
        {/* <div className="flex flex-row max-w rounded overflow-hidden shadow-lg items-center w-3/6">
            <Image src={Minecraft} alt='Minecraft logo' loading='lazy' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Minecraft</div>
                <p className="text-gray-700 text-base text-justify">
                    Played with friends in the internet café, played online server, command block coding (creating maps). Minecraft Steve is my most wanted fighter 
    for Smash.
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default Minecraft;
