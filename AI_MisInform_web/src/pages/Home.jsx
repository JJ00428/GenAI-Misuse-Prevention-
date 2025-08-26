import { Citation } from "../components/Home/Citation";
import { Intro } from "../components/Home/Intro";
import { Plans } from "../components/Home/Plans";


export const Home = () => {
    return (
        <div className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth touch-manipulation">
            <Intro/>
            <Citation />
            <Plans/>
        </div>
    );
}