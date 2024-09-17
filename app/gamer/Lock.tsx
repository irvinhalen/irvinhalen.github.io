'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { scrollUp, scrollDown } from './controls';

function Lock() {
    const [password, setPassword] = useState<string>('');
    const [isScrolling, setIsScrolling] = useState(false);
    const [controlLock, setControlLock] = useState(true);
    const lockscreen = useRef<HTMLDivElement>(null);

    const handleKeyUp = useCallback((event:KeyboardEvent) => {
        if (!isScrolling) {
            if (event.key === 'ArrowUp') {
                scrollUp();
            } else if (event.key === 'ArrowDown') {
                scrollDown();
            }
            setIsScrolling(true);
            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    }, [isScrolling]);

    useEffect(() => {
        if(!controlLock) {
            window.addEventListener('keyup', handleKeyUp);
        }
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp, controlLock]);

    const unlockScroll = () => {
        return new Promise<void>((resolve) => {
            scrollDown();
            setTimeout(() => {
                resolve();
            }, 500);
        });
    };

    const unlock = async () => {
        if(password == '1010') {
            setControlLock(false);
            await unlockScroll();
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
                <input type='password' placeholder='Unlock' className='text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={password} onChange={event => setPassword(event.target.value)} />
                <button type='button' onClick={unlock} className='text-white bg-gray-800 hover:bg-gray-900 font-large rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Start</button>
            </div>
        </>
    )
}

export default Lock;
