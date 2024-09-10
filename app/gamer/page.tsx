import Smash from './Smash/Smash';
import Pokémon from './Pokémon/Pokémon';
import Mario from './Mario/Mario';
import Zelda from './Zelda/Zelda';
import Minecraft from './Minecraft/Minecraft';
import { Metadata } from 'next';
import Lock from './Lock';
import Tutorial from './Tutorial';

export const metadata: Metadata = {
  title: 'Gamer'
};

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between gamer-container'>
            <Lock />
            <Tutorial />
            <Smash />
            <Pokémon />
            <Mario />
            <Zelda />
            <Minecraft />
        </main>
    );
}
