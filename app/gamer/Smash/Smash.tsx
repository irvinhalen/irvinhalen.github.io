'use client';
import icon from '../../../public/Smash/SuperSmashBros.svg';
    import Smash_64 from '../../../public/Smash/64.jpg';
    import Smash_Melee from '../../../public/Smash/Melee.jpg';
    import Smash_Brawl from '../../../public/Smash/Brawl.jpg';
    import Smash_4 from '../../../public/Smash/forNintendo3DS&forWiiU.jpg';
    import Smash_Ultimate from '../../../public/Smash/Ultimate.jpg';
import Image from 'next/image';
import { useEffect } from 'react';

function Smash() {
    useEffect(() => {
        const allCards = document.querySelectorAll('.smash-card');

        window.addEventListener('mousemove', (event) => {
            allCards.forEach((e) => {
                const blob = e.querySelector('.blob');
                const fblob = e.querySelector('.fake-blob');

                const rec = fblob?.getBoundingClientRect();
                if(rec) {
                    blob?.animate(
                        [{
                            transform: `translate(${event.clientX - rec.left - (rec.width / 2)}px,${event.clientY - rec.top - (rec.height / 2)}px)`
                        }],
                        {
                            duration: 300,
                            fill: 'forwards'
                        }
                    )
                }
            });
        });
    }, [])

  return (
    <div className='h-svh w-svw flex flex-col justify-center items-center gap-5 p-12 bg-black overflow-hidden'>
        <div className='flex flex-row gap-5 w-full'>
            <div className='smash-card max-w w-1/2 h-fit rounded relative'>
                <div className="smash-card-content">
                    <Image src={Smash_Ultimate} alt='Super Smash Bros. Ultimate' loading='lazy' layout='responsive' className='smash-img' />
                </div>
                <div className='blob' />
                <div className='fake-blob' />
            </div>
            {/* <div className="flex flex-row max-w rounded shadow-lg justify-center items-center h-full w-1/3 relative">
                <Image src={Smash} alt='Super Smash Bros. logo' loading='lazy' objectPosition='center' />
            </div> */}
            <div className='smash-card max-w w-1/2 rounded overflow-hidden relative'>
                <div className="smash-card-content overflow-hidden">
                    <Image src={Smash_4} alt='Super Smash Bros. for Nintendo 3DS/Wii U' loading='lazy' layout='responsive' className='smash-img' />
                </div>
                <div className='blob' />
                <div className='fake-blob' />
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
        <div className='flex flex-row gap-5 w-full'>
            <div className='smash-card max-w w-1/3 rounded overflow-hidden relative'>
                <div className="smash-card-content flex h-full overflow-hidden">
                    <Image src={Smash_Brawl} alt='Super Smash Bros. Brawl' layout='responsive' />
                </div>
                <div className='blob' />
                <div className='fake-blob' />
            </div>
            <div className='smash-card max-w w-1/3 rounded overflow-hidden relative'>
                <div className="smash-card-content flex h-full overflow-hidden">
                    <Image src={Smash_Melee} alt='Super Smash Bros. Melee' layout='responsive' />
                </div>
                <div className='blob' />
                <div className='fake-blob' />
            </div>
            <div className='smash-card max-w w-1/3 rounded overflow-hidden relative'>
                <div className="smash-card-content flex h-full overflow-hidden">
                    <Image src={Smash_64} alt='Super Smash Bros. 64' layout='responsive' />
                </div>
                <div className='blob' />
                <div className='fake-blob' />
            </div>
        </div>
    </div>
  )
}

export default Smash;
