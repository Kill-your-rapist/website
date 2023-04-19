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
            <div className="flex w-full flex-col items-center justify-center gap-4 md:max-w-[60vw]">
                <Image src={BarnInfluence} alt="Barn Influence" />

                <span className="text-gray-800">
                    We do not support the actual act of killing, Kill your local
                    rapist is not more than a metaphor to remind the people that
                    no means no. We do not take credit for any type of behaviour
                    of our customers.
                </span>
            </div>
        </main>
    );
}
