import { useState } from "react";
import Terminal from "./Terminal";

type ViewType =
  | "Main"
  | "Bio"
  | "Music"
  | "KanyeBot"
  | "Music-College"
  | "Music-Late"
  | "Music-Graduation"
  | "Music-808"
  | "Music-Twisted"
  | "Music-Yeezus"
  | "Music-Pablo"
  | "Music-Ye"
  | "Music-Jesus"
  | "Music-Donda";

export default function Main(): JSX.Element {
  const [view, setView] = useState<ViewType>("Main");
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
            <h1>
              I am <b className="blueText">Kanye West</b>
            </h1>
            <h2>
              {" "}
              Outspoken Grammy Award-winning rapper, record producer and fashion
              designer
            </h2>
            <h3>
              Read about my life, listen to my music <br></br> and talk to me on
              this website. <br></br>
            </h3>
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
            <br></br>
            <br></br>
            <b>Who Is Kanye West?</b>
            <br></br>
            <br></br>
            Kanye West initially made his mark on the music industry as a
            producer. He showcased his own abilities as a rapper with his 2004
            debut, College Dropout, and cemented his place atop the hip hop
            world with his chart-topping albums. The winner of nearly two dozen
            Grammy Awards, West is also known for his awards-show theatrics,
            forays into fashion and marriage to Kim Kardashian.
            <br></br>
            <br></br>
            <b>Kanye's Early Life</b>
            <br></br>
            <br></br>
            Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. His
            father, Ray, was a photojournalist for the Atlanta Journal newspaper
            and was also politically active in the Black Panthers; he later
            became a Christian counselor. West's mother, Donda, was a teacher
            who became a professor of English at Chicago State University, and
            eventually, her son's manager before she died at the age of 58 from
            heart disease after cosmetic surgery in 2007. Her passing would
            profoundly affect West musically as well as personally. Ray and
            Donda divorced amicably when West was three. After that he was
            raised on Chicago's middle-class South Shore neighborhood by his
            mother, and spent summers with his father. At the age of 10, West
            moved for a year with Donda to China, where she taught as part of a
            university-exchange program; he was the only foreigner in his class.
            After returning to Chicago, West was drawn to the South Side's
            hip-hop scene, and he befriended the DJ and producer No I.D., who
            became his mentor. West won a scholarship to study at Chicago's
            American Academy of Art — but dropped out of college altogether to
            pursue music.
            <br></br>
            <br></br>
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
          <div className="allAlbums">
            <div onClick={() => setView("Music-College")}>
              <img
                alt="The College Dropout"
                src="/images/albums/College_dropout_album.jpg"
              />
              <h2>The College Dropout</h2>
            </div>
            <div onClick={() => setView("Music-Late")}>
              <img
                alt="Late Registration"
                src="/images/albums/Late_registration_album.jpg"
              />
              <h2>Late Registration</h2>
            </div>
            <div onClick={() => setView("Music-Graduation")}>
              <img alt="Graduation" src="/images/albums/Graduation_album.jpg" />
              <h2>Graduation</h2>
            </div>
            <div onClick={() => setView("Music-808")}>
              <img
                alt="808s &#38; Heartbreak"
                src="/images/albums/808s_and_Heartbreak_album.png"
              />
              <h2>808s &#38; Heartbreak</h2>
            </div>
            <div onClick={() => setView("Music-Twisted")}>
              <img
                alt="My Beautiful Dark Twisted Fantasy"
                src="/images/albums/My_Beautiful_Dark_Twisted_Fantasy_album).jpg"
              />
              <h2>
                My Beautiful Dark <br></br> Twisted Fantasy
              </h2>
            </div>
            <div onClick={() => setView("Music-Yeezus")}>
              <img alt="Yeezus" src="/images/albums/Yeezus_album.jpg" />
              <h2>Yeezus</h2>
            </div>
            <div onClick={() => setView("Music-Pablo")}>
              <img
                alt="The Life of Pablo"
                src="/images/albums/The_life_of_pablo_album.jpg"
              />
              <h2> The Life of Pablo</h2>
            </div>
            <div onClick={() => setView("Music-Ye")}>
              <img alt="Ye" src="/images/albums/Ye_album.jpg" />
              <h2>Ye</h2>
            </div>
            <div onClick={() => setView("Music-Ye")}>
              <img
                alt="Jesus is King"
                src="/images/albums/Jesus_is_king_album.png"
              />
              <h2>Jesus is King</h2>
            </div>
            <div onClick={() => setView("Music-Donda")}>
              <img alt="Donda" src="/images/albums/Donda_album.png" />
              <h2>Donda</h2>
            </div>
          </div>
        </div>
      )}
      {view === "Music-College" && (
        <div>
          <img
            alt="The College Dropout"
            src="/images/albums/College_dropout_album.jpg"
          />
          <h4>The College Dropout</h4>
          <p>
            The album was finally released in February 2004 — it sold 2.6
            million copies and made West a star. Titled The College Dropout, it
            broke the gangsta-rap mold, with themes including consumerism (he
            was critical of it back then), racism, higher education and his
            religious beliefs. On the single "Jesus Walks" he rapped, "They say
            you can rap about anything except for Jesus/That means guns, sex,
            lies, videotapes/But if I talk about God, my record won't get
            played." The College Dropout peaked at No. 2 on the Billboard Hot
            200 chart, and West received 10 Grammy nominations, winning three
            awards including Best Rap Song for "Jesus Walks" and Best Rap Album.
            Shortly after the album was released, West founded his record label,
            GOOD music — an acronym for Getting Out Our Dreams — in conjunction
            with Sony BMG. He would put out music by John Legend, Big Sean,
            Common, Pusha-T and more.
          </p>
          <iframe
            title="The College Dropout by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/4Uv86qWpGTxf7fU7lG5X6F?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Late" && (
        <div>
          <img
            alt="Late Registration"
            src="/images/albums/Late_registration_album.jpg"
          />
          <h4>Late Registration</h4>
          <iframe
            title="Late Registration by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/0Ds6i3h0F9RcYIKAD5Olum?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
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
      {view === "Music-808" && (
        <div>
          <img
            alt="808s &#38; Heartbreak"
            src="/images/albums/808s_and_Heartbreak_album.png"
          />
          <h4>808s &#38; Heartbreak</h4>
          <iframe
            title="808s &#38; Heartbreak by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/5ykOQlHaE5ZRxMibfI75YW?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Twisted" && (
        <div>
          <img
            alt="My Beautiful Dark Twisted Fantasy"
            src="/images/albums/My_Beautiful_Dark_Twisted_Fantasy_album).jpg"
          />
          <h4>My Beautiful Dark Twisted Fantasy</h4>
          <iframe
            title="My Beautiful Dark Twisted Fantasy by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/20r762YmB5HeofjMCiPMLv?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Yeezus" && (
        <div>
          <img alt="Yeezus" src="/images/albums/Yeezus_album.jpg" />
          <h4>Yeezus</h4>
          <iframe
            title="Yeezus by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/7D2NdGvBHIavgLhmcwhluK?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Pablo" && (
        <div>
          <img
            alt="The Life of Pablo"
            src="/images/albums/The_life_of_pablo_album.jpg"
          />
          <h4>The Life of Pablo</h4>
          <iframe
            title="The Life of Pablo by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/7gsWAHLeT0w7es6FofOXk1?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Ye" && (
        <div>
          <img alt="Ye" src="/images/albums/Ye_album.jpg" />
          <h4>Ye</h4>
          <iframe
            title="Ye by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/2Ek1q2haOnxVqhvVKqMvJe?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Jesus" && (
        <div>
          <img
            alt="Jesus is King"
            src="/images/albums/Jesus_is_king_album.png"
          />
          <h4>Jesus is King</h4>
          <iframe
            title="Jesus is King by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/0FgZKfoU2Br5sHOfvZKTI9?utm_source=generator"
            width="30%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Donda" && (
        <div>
          <img alt="Donda" src="/images/albums/Donda_album.png" />
          <h4>Donda</h4>
          <iframe
            title="Donda by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/5CnpZV3q5BcESefcB3WJmz?utm_source=generator"
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
