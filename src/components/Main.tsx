import { useEffect, useState } from "react";
import Terminal from "./Terminal";

type ViewType = "Main" | "Bio" | "Music" | "KanyeBot" | "Music-Graduation";

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
          src="/images/Kanye-head-removebg.png"
          className="kanyeHeadImage"
          onClick={() => setView("Main")}
        ></img>
        <div className="navLinks">
          <h3 onClick={() => setView("Bio")}>Bio</h3>
          <h3 onClick={() => setView("Music")}>Music</h3>
          <h3 onClick={() => setView("KanyeBot")}>KanyeBot</h3>
        </div>
      </div>
      {view === "Main" && (
        <div className="mainDiv">
          <div className="mainText">
            <h1>I am Kanye West.</h1>
            <h2>Artist, Musician, Fashionista.</h2>
            <h3>
              Read about my life, listen to my music <br></br> and talk to me on
              this website. <br></br>
            </h3>
            <h4>"{quote}" - Ye</h4>
          </div>
          <img
            className="fullKanyePic"
            alt="Full Kanye Pic"
            src="/images/FullKanye-removebg.png"
          />
        </div>
      )}
      {view === "Bio" && (
        <div className="bioContainer">
          <p className="bioText">
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
          <div>
            <img
              alt="The College Dropout"
              src="/images/albums/College_dropout_album.jpg"
            />
            <h2>The College Dropout</h2>
          </div>
          <div>
            <img
              alt="Late Registration"
              src="/images/albums/Late_registration_album.jpg"
            />
            <h2>Late Registration</h2>
          </div>
          <div>
            <img
              onClick={() => setView("Music-Graduation")}
              alt="Graduation"
              src="/images/albums/Graduation_album.jpg"
            />
            <h2>Graduation</h2>
          </div>
          <div>
            <img
              alt="808s &#38; Heartbreak"
              src="/images/albums/808s_and_Heartbreak_album.png"
            />
            <h2>808s &#38; Heartbreak</h2>
          </div>
          <div>
            <img
              alt="My Beautiful Dark Twisted Fantasy"
              src="/images/albums/My_Beautiful_Dark_Twisted_Fantasy_album).jpg"
            />
            <h2>My Beautiful Dark Twisted Fantasy</h2>
          </div>
          <div>
            <img alt="Yeezus" src="/images/albums/Yeezus_album.png" />
            <h2>Yeezus</h2>
          </div>
          <div>
            <img
              alt="The Life of Pablo"
              src="/images/albums/The_life_of_pablo_album.jpg"
            />
            <h2> The Life of Pablo</h2>
          </div>
          <div>
            <img alt="Ye" src="/images/albums/Ye_album.jpg" />
            <h2>Ye</h2>
          </div>
          <div>
            <img
              alt="Jesus is King"
              src="/images/albums/Jesus_is_king_album.png"
            />
            <h2>Jesus is King</h2>
          </div>
          <div>
            <img alt="Donda" src="/images/albums/Donda_album.png" />
            <h2>Donda</h2>
          </div>
        </div>
      )}
      {view === "Music-Graduation" && (
        <div>
          <img
            alt="Graduation by Kanye West"
            src="/images/albums/Graduation_album.jpg"
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
