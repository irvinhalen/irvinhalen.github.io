'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { scrollDown } from './controls';
import exit from '../../public/Mii/icons/exit.ico';

function Lock() {
    const [password, setPassword] = useState<string>('');
    const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
    const lockScreen = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        lockScreen.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const nextScreen = () => {
        return new Promise<void>((resolve) => {
            scrollDown();
            setTimeout(() => {
                resolve();
            }, 700);
        });
    };

    const unlock = async () => {
        if(password == process.env.NEXT_PUBLIC_GAMER_PASSWORD) {
            setIsUnlocked(true);
            await nextScreen();
            if(lockScreen.current) {
                lockScreen.current.remove();
            }
        }else{
            setPassword('');
        }
    }

    return (
        <>
            <Image
                src={exit}
                alt="exit"
                loading="lazy"
                height={30}
                onClick={() => router.push('/')}
                className={`cursor-pointer absolute top-[5%] right-[5%] ${isUnlocked ? 'hidden':''}`}
            />
            <div ref={lockScreen} className='h-svh w-svw flex flex-col gap-5 justify-center items-center bg-black'>
                <input type='number' placeholder='Password' className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={password} onChange={event => setPassword(event.target.value)} />
                <button type='button' onClick={unlock} className='text-white border border-white hover:border-yellow-400 hover:text-yellow-400 font-large rounded-lg text-sm px-5 py-2.5'>Unlock</button>
            </div>
        </>
    )
}

export default Lock;
