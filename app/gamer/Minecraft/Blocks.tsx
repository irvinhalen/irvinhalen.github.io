'use client'
import dirt from '../../../public/Minecraft/dirt.png';
import stone from '../../../public/Minecraft/stone.png';
import Image from 'next/image';
import { RefObject } from 'react';

interface BlockProps {
    linkContainer: RefObject<HTMLDivElement>;
}

const Mine = (block:string) => {
    document.getElementById(block)?.remove();
}

function Blocks({linkContainer}: BlockProps) {
  return (
    <div>
      <div ref={linkContainer} className='relative'>
        <div id='block_1' className="dirt-block absolute left-0 right-[90%] bottom-[-10%] z-10" onClick={() => Mine('block_1')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_2' className="dirt-block absolute left-0 right-[90%] bottom-[10%] z-10" onClick={() => Mine('block_2')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_3' className="dirt-block absolute left-0 right-[90%] bottom-[30%] z-10" onClick={() => Mine('block_3')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_4' className="dirt-block absolute left-0 right-[90%] bottom-[50%] z-10" onClick={() => Mine('block_4')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_5' className="dirt-block absolute left-0 right-[90%] bottom-[70%] z-10" onClick={() => Mine('block_5')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_6' className="dirt-block absolute left-0 right-[90%] bottom-[90%] z-10" onClick={() => Mine('block_6')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_7' className="dirt-block absolute left-[10%] right-[80%] top-[-10%] z-10" onClick={() => Mine('block_7')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_8' className="dirt-block absolute left-[10%] right-[80%] top-[10%] z-10" onClick={() => Mine('block_8')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_9' className="dirt-block absolute left-[10%] right-[80%] top-[30%] z-10" onClick={() => Mine('block_9')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_10' className="dirt-block absolute left-[10%] right-[80%] top-[50%] z-10" onClick={() => Mine('block_10')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_11' className="dirt-block absolute left-[10%] right-[80%] top-[70%] z-10" onClick={() => Mine('block_11')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_12' className="dirt-block absolute left-[10%] right-[80%] top-[90%] z-10" onClick={() => Mine('block_12')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_13' className="stone-block absolute left-[15%] right-[65%] top-[-20.3%] z-10" onClick={() => Mine('block_13')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_14' className="stone-block absolute left-[15%] right-[65%] top-[-0.2%] z-10" onClick={() => Mine('block_14')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_15' className="dirt-block absolute left-[20%] right-[70%] top-[30%] z-10" onClick={() => Mine('block_15')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_16' className="dirt-block absolute left-[20%] right-[70%] top-[50%] z-10" onClick={() => Mine('block_16')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_17' className="dirt-block absolute left-[20%] right-[70%] top-[70%] z-10" onClick={() => Mine('block_17')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_18' className="dirt-block absolute left-[20%] right-[70%] top-[90%] z-10" onClick={() => Mine('block_18')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_19' className="stone-block absolute left-[24.9%] right-[55%] top-[-20.3%] z-10" onClick={() => Mine('block_19')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_20' className="stone-block absolute left-[24.9%] right-[55%] top-[-0.2%] z-10" onClick={() => Mine('block_20')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_21' className="dirt-block absolute left-[30%] right-[60%] top-[30%] z-10" onClick={() => Mine('block_21')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_22' className="stone-block absolute left-[25%] right-[55%] top-[39.9%] z-10" onClick={() => Mine('block_22')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_23' className="stone-block absolute left-[25%] right-[55%] top-[59.9%] z-10" onClick={() => Mine('block_23')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_24' className="stone-block absolute left-[25%] right-[55%] top-[79.9%] z-10" onClick={() => Mine('block_24')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_25' className="dirt-block absolute left-[40%] right-[50%] top-[-10%] z-10" onClick={() => Mine('block_25')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_26' className="dirt-block absolute left-[40%] right-[50%] top-[10%] z-10" onClick={() => Mine('block_26')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_27' className="stone-block absolute left-[34.9%] right-[45%] top-[19.8%] z-10" onClick={() => Mine('block_27')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_28' className="stone-block absolute left-[34.9%] right-[45%] top-[39.8%] z-10" onClick={() => Mine('block_28')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_N' className="stone-block absolute left-[34.9%] right-[45%] top-[59.8%] z-10" onClick={() => Mine('block_N')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_29' className="dirt-block absolute left-[40%] right-[50%] top-[90%] z-10" onClick={() => Mine('block_29')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_30' className="dirt-block absolute left-[50%] right-[40%] top-[-10%] z-10" onClick={() => Mine('block_30')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_31' className="dirt-block absolute left-[50%] right-[40%] top-[10%] z-10" onClick={() => Mine('block_31')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_32' className="stone-block absolute left-[45%] right-[34.9%] top-[19.8%] z-10" onClick={() => Mine('block_32')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_33' className="stone-block absolute left-[45%] right-[34.9%] top-[39.8%] z-10" onClick={() => Mine('block_33')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_34' className="stone-block absolute left-[45%] right-[34.9%] top-[59.8%] z-10" onClick={() => Mine('block_34')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_35' className="dirt-block absolute left-[50%] right-[40%] top-[90%] z-10" onClick={() => Mine('block_35')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_36' className="stone-block absolute left-[55%] right-[25%] top-[-20.3%] z-10" onClick={() => Mine('block_36')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_37' className="stone-block absolute left-[55%] right-[25%] top-[-0.2%] z-10" onClick={() => Mine('block_37')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_38' className="dirt-block absolute left-[60%] right-[30%] top-[30%] z-10" onClick={() => Mine('block_38')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_39' className="stone-block absolute left-[55%] right-[25%] top-[39.9%] z-10" onClick={() => Mine('block_39')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_40' className="stone-block absolute left-[55%] right-[25%] top-[59.9%] z-10" onClick={() => Mine('block_40')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_41' className="stone-block absolute left-[55%] right-[25%] top-[79.9%] z-10" onClick={() => Mine('block_41')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_42' className="stone-block absolute left-[65%] right-[14.9%] top-[-20.3%] z-10" onClick={() => Mine('block_42')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_43' className="stone-block absolute left-[65%] right-[14.9%] top-[-0.2%] z-10" onClick={() => Mine('block_43')}>
            <Image
                src={stone}
                alt="stone"
                loading="lazy"
                className="absolute right-0 scale-50"
            />
        </div>
        <div id='block_44' className="dirt-block absolute left-[70%] right-[20%] top-[30%] z-10" onClick={() => Mine('block_44')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_45' className="dirt-block absolute left-[70%] right-[20%] top-[50%] z-10" onClick={() => Mine('block_45')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_46' className="dirt-block absolute left-[70%] right-[20%] top-[70%] z-10" onClick={() => Mine('block_46')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_47' className="dirt-block absolute left-[70%] right-[20%] top-[90%] z-10" onClick={() => Mine('block_47')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_48' className="dirt-block absolute left-[80%] right-[10%] top-[-10%] z-10" onClick={() => Mine('block_48')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_49' className="dirt-block absolute left-[80%] right-[10%] top-[10%] z-10" onClick={() => Mine('block_49')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_50' className="dirt-block absolute left-[80%] right-[10%] top-[30%] z-10" onClick={() => Mine('block_50')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_51' className="dirt-block absolute left-[80%] right-[10%] top-[50%] z-10" onClick={() => Mine('block_51')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_52' className="dirt-block absolute left-[80%] right-[10%] top-[70%] z-10" onClick={() => Mine('block_52')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_53' className="dirt-block absolute left-[80%] right-[10%] top-[90%] z-10" onClick={() => Mine('block_53')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_54' className="dirt-block absolute left-[90%] right-0 bottom-[-10%] z-10" onClick={() => Mine('block_54')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_55' className="dirt-block absolute left-[90%] right-0 bottom-[10%] z-10" onClick={() => Mine('block_55')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_56' className="dirt-block absolute left-[90%] right-0 bottom-[30%] z-10" onClick={() => Mine('block_56')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_57' className="dirt-block absolute left-[90%] right-0 bottom-[50%] z-10" onClick={() => Mine('block_57')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_58' className="dirt-block absolute left-[90%] right-0 bottom-[70%] z-10" onClick={() => Mine('block_58')}>
            <Image
                src={dirt}
                alt="dirt"
                loading="lazy"
                className="object-fill"
            />
        </div>
        <div id='block_59' className="dirt-block absolute left-[90%] right-0 bottom-[90%] z-10" onClick={() => Mine('block_59')}>
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
