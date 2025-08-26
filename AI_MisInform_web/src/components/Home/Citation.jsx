export const Citation = () => {
  const cites = [
    {"string": "\"Deepfakes of celebrities including Taylor Swift, Selena Gomez and Elon Musk have been created to promote everything from kitchenware to crypto scams\"",
     "style": {position: "relative", top: "10%", left: "2%", width: "100%", fontSize: "20px", pointerEvents: "none"}},
    {"string":"\"I was really creeped out. I saw my face saying something in a different language. Then when I went and translated it, this was all stuff I would never say in my life\"",
     "style": {position: "relative", top: "30%", left: "2%", width: "100%", fontSize: "20px", pointerEvents: "none"}},
    {"string": "\"I honestly don’t know how we can be more discerning as a society to tell what is real or what is fake\"",
     "style": {position: "relative", top: "50%", left: "2%", width: "100%", fontSize: "20px", pointerEvents: "none"}},
    {"string":"\"The wrong prompts can lead to disastrous results\"",
     "style": {position: "relative", top: "70%", left: "2%", width: "100%", fontSize: "20px", pointerEvents: "none"}},
    {"string":"\"I don't know what's real and what's not anymore\"",
     "style": {position: "relative", top: "90%", left: "2%", width: "100%", fontSize: "20px", pointerEvents: "none"}},
  ];


  return (
    <div className="relative min-h-screen snap-start flex flex-col items-center justify-center px-4" id="citation">
        <h2 className="text-5xl font-bold title-glow mb-4">Why use SpotAI?</h2>
      {cites.map((cite, idx) => (
        <span
          key={idx}
          className={`text-glow font-semibold`}
          style={cite.style}
        >
          {cite.string}
        </span>
      ))}
    </div>
  );
};
