import { Experience } from "./Experience";
import { FeatureSection } from "./FeatureSection";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";

export function Home() {

    return (
        <>
            <FeatureSection/>
            <Skills/>
            <Experience/>
            <Portfolio/>
        </>
    )

}