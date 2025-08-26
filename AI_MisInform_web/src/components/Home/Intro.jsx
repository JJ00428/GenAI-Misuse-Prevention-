export const Intro = () => {
    return (
        <div className="relative min-h-screen snap-start flex flex-col items-center justify-center px-4">
            <h1 className="text-7xl font-bold title-glow mb-4 ">SpotAI</h1>
            <p className="text-lg text-glow mb-8 text-center max-w-2xl">
                A spot of light in the dark world of AI-generated misinformation.
            </p>
            <div className="space-x-6 align-items-center text-center">
                <p className="pb-10">SpotAI is a complete solution created to cater to the needs for all internet users -AI or non-AI users. It offers prevetative and detective methods to combat AI misinformation.</p>
                <a className="button-class " href="#citation">Why use SpotAI</a>
                <a className="button-class" href="#pricing">Plans & Pricing</a>
            </div>
        </div>
    );
}