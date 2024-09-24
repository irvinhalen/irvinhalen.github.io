'use client'
import React, { useState, useRef } from 'react';
import { scrollDown } from './controls';

function Lock() {
    const [password, setPassword] = useState<string>('');
    const lockscreen = useRef<HTMLDivElement>(null);

    const nextScreen = () => {
        return new Promise<void>((resolve) => {
            scrollDown();
            setTimeout(() => {
                resolve();
            }, 500);
        });
    };

    const unlock = async () => {
        if(password == '1010') {
            await nextScreen();
            if(lockscreen.current) {
                lockscreen.current.remove();
            }
        }else{
            setPassword('');
        }
    }

    return (
        <>
            <div id='lockscreen' ref={lockscreen} className='h-svh w-svw flex flex-col gap-5 justify-center items-center bg-black'>
                <input type='password' placeholder='Password' className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={password} onChange={event => setPassword(event.target.value)} />
                <button type='button' onClick={unlock} className='text-white border border-white hover:border-yellow-400 hover:text-yellow-400 font-large rounded-lg text-sm px-5 py-2.5'>Unlock</button>
            </div>
        </>
    )
}

export default Lock;
