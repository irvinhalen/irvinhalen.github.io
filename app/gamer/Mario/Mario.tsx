import icon from '../../../public/Mario/Mario.svg';
    import Mario1 from '../../../public/Mario/Mario1.jpg';
import Image from 'next/image';

function Mario() {
  return (
    <div className='flex flex-row gap-5 h-screen w-full'>
        <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-4/5 relative">
            <Image src={Mario1} alt='Mario' loading='lazy' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
        <div className="flex flex-row max-w rounded overflow-hidden shadow-lg justify-center items-center w-1/5 relative">
            <Image src={icon} alt='Super Mario logo' loading='lazy' objectPosition='center' />
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
  )
}

export default Mario;
