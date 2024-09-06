import icon from '../../../public/Zelda/Zelda.svg';
    import Zelda1 from '../../../public/Zelda/Zelda1.jpg';
    import Zelda2 from '../../../public/Zelda/Zelda2.jpg';
import Image from 'next/image';

function Zelda() {
  return (
    <>
        <div className='flex flex-row gap-5 h-80 w-full'>
            <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
                <Image src={icon} alt='The Legend of Zelda logo' loading='lazy' objectPosition='center' />
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
    </>
  )
}

export default Zelda;
