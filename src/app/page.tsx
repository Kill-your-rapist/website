import Image from 'next/image';
import BarnInfluence from '../../public/barn-influence.svg';
import KillYourRapist from './components/kill-your-rapist';
import './page.scss';

export default function Home() {
    return (
        <main>
            <div className="flex h-[80vh] items-center justify-center">
                <KillYourRapist />
            </div>
            <div className="flex w-full items-center justify-center">
                <Image src={BarnInfluence} alt="Barn Influence" />
            </div>
        </main>
    );
}
