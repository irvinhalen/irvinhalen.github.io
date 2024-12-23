'use client'
import dirt from '../../../public/Minecraft/dirt.png';
import stone from '../../../public/Minecraft/stone.png';
import Image from 'next/image';
import { RefObject } from 'react';

interface BlockProps {
    linkContainer: RefObject<HTMLDivElement>;
}

function Blocks({linkContainer}: BlockProps) {
  return (
    <div>
      <div ref={linkContainer} className='relative'>
        <div className="dirt-block absolute left-0 right-[90%] bottom-[-10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-0 right-[90%] bottom-[10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-0 right-[90%] bottom-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-0 right-[90%] bottom-[50%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-0 right-[90%] bottom-[70%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-0 right-[90%] bottom-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[10%] right-[80%] top-[-10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[10%] right-[80%] top-[10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[10%] right-[80%] top-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[10%] right-[80%] top-[50%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[10%] right-[80%] top-[70%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[10%] right-[80%] top-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[15%] right-[65%] top-[-20.3%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[15%] right-[65%] top-[-0.2%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[20%] right-[70%] top-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[20%] right-[70%] top-[50%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[20%] right-[70%] top-[70%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[20%] right-[70%] top-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[24.9%] right-[55%] top-[-20.3%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[24.9%] right-[55%] top-[-0.2%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[30%] right-[60%] top-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[25%] right-[55%] top-[39.9%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[25%] right-[55%] top-[59.9%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[25%] right-[55%] top-[79.9%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[40%] right-[50%] top-[-10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[40%] right-[50%] top-[10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[34.9%] right-[45%] top-[19.8%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[34.9%] right-[45%] top-[39.8%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[34.9%] right-[45%] top-[59.8%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[40%] right-[50%] top-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[50%] right-[40%] top-[-10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[50%] right-[40%] top-[10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[45%] right-[34.9%] top-[19.8%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[45%] right-[34.9%] top-[39.8%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[45%] right-[34.9%] top-[59.8%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[50%] right-[40%] top-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[55%] right-[25%] top-[-20.3%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[55%] right-[25%] top-[-0.2%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[60%] right-[30%] top-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="stone-block absolute left-[55%] right-[25%] top-[39.9%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[55%] right-[25%] top-[59.9%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[55%] right-[25%] top-[79.9%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[65%] right-[14.9%] top-[-20.3%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="stone-block absolute left-[65%] right-[14.9%] top-[-0.2%] z-10">
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div className="dirt-block absolute left-[70%] right-[20%] top-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[70%] right-[20%] top-[50%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[70%] right-[20%] top-[70%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[70%] right-[20%] top-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[80%] right-[10%] top-[-10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[80%] right-[10%] top-[10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[80%] right-[10%] top-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[80%] right-[10%] top-[50%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[80%] right-[10%] top-[70%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[80%] right-[10%] top-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[90%] right-0 bottom-[-10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[90%] right-0 bottom-[10%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[90%] right-0 bottom-[30%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[90%] right-0 bottom-[50%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[90%] right-0 bottom-[70%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div className="dirt-block absolute left-[90%] right-0 bottom-[90%] z-10">
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
    </div>
    </div>
  )
}

export default Blocks;
