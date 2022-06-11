import { useEffect, useState } from "react";
import Terminal from "./Terminal";

type ViewType = "Main" | "Bio" | "Music" | "KanyeBot";

interface Quote {
  quote: string;
}

export default function Main(): JSX.Element {
  const [quote, setQuote] = useState<string>("");
  const [view, setView] = useState<ViewType>("Main");
  useEffect(() => {
    async function fetchQuote() {
      const rawQuoteData = await fetch("https://api.kanye.rest/");
      const jsonQuoteData: Quote = await rawQuoteData.json();
      setQuote(jsonQuoteData.quote);
    }
    fetchQuote();
  }, []);
  return (
    <div>
      <div className="nav">
        <img
          alt="Kanye Head which links to main page"
          src="/images/Kanye-head.png"
          className="kanyeHeadImage"
          onClick={() => setView("Main")}
        ></img>
        <div className="navLinks">
          <h3 onClick={() => setView("Bio")}>Bio</h3>
          <h3 onClick={() => setView("Music")}>Music</h3>
          <h3 onClick={() => setView("KanyeBot")}>KanyeBot</h3>
        </div>
      </div>
      <h1>I am Cyber Kanye</h1>
      {view === "Main" && (
        <div>
          <p>"{quote}" - Kanye West</p>
        </div>
      )}
      {view === "Bio" && (
        <div>
          <p>
            Kanye West, legal name Ye, (born June 8, 1977, Atlanta, Georgia,
            U.S.), American producer, rapper, and fashion designer who parlayed
            his production success in the late 1990s and early 2000s into a
            career as a popular, critically acclaimed solo artist.
          </p>
          <img
            alt="Gif of Young Kanye West Winking"
            className="kanyeYoungImage"
            src="/images/KanyeYoung.gif"
          />
        </div>
      )}
      {view === "Music" && (
        <div>
          <img
            alt="Graduation by Kanye West"
            src="/images/Graduation(album).jpg"
          />
          <h4>Graduation</h4>
          <iframe
            title="Graduation by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "KanyeBot" && <Terminal />}
    </div>
  );
}
