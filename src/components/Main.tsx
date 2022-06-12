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
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>The College Dropout</h2>
            <p>
              The album was finally released in February 2004 — it sold 2.6
              million copies and made West a star. Titled The College Dropout,
              it broke the gangsta-rap mold, with themes including consumerism
              (he was critical of it back then), racism, higher education and
              his religious beliefs. On the single "Jesus Walks" he rapped,
              "They say you can rap about anything except for Jesus/That means
              guns, sex, lies, videotapes/But if I talk about God, my record
              won't get played." The College Dropout peaked at No. 2 on the
              Billboard Hot 200 chart, and West received 10 Grammy nominations,
              winning three awards including Best Rap Song for "Jesus Walks" and
              Best Rap Album. Shortly after the album was released, West founded
              his record label, GOOD music — an acronym for Getting Out Our
              Dreams — in conjunction with Sony BMG. He would put out music by
              John Legend, Big Sean, Common, Pusha-T and more.
            </p>
          </div>
          <iframe
            title="The College Dropout by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/4Uv86qWpGTxf7fU7lG5X6F?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Late" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>Late Registration</h2>
            <p>
              West spent a year and $2 million on his sophomore album, hiring an
              orchestra and working with the composer Jon Brion, who had never
              worked with a rapper before. West, the restless
              bourgeois-creative, wanted to "see how far he could expand" hip
              hop, he told the New York Times. The results were spectacular,
              yielding another three Grammy wins — Best Rap Album again, plus
              Best Rap Song for "Diamonds from Sierra Leone," and Best Rap Solo
              Performance for "Gold Digger." Late Registration debuted at No. 1
              on the Billboard Hot 200 — a feat West would repeat with every
              subsequent solo album release. <br></br>
              <br></br>"On Late Registration, the Louis Vuitton Don doesn't just
              set out to create pop music — he wants to be pop music," wrote Rob
              Sheffield in Rolling Stone's five-star review of the album. "So he
              steps up his lyrical game, shows off his epic production skills,
              reaches higher, pushes harder, and claims the whole world of music
              as hip hop turf."
            </p>
          </div>
          <iframe
            title="Late Registration by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/0Ds6i3h0F9RcYIKAD5Olum?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Graduation" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>Graduation</h2>
            <p>
              After touring with U2 in 2005-2006, West was inspired to make hip
              hop more anthemic, to be performed in stadiums and arenas. He
              began to draw influence from both rock 'n' roll (the Stones, Led
              Zeppelin, the Killers) and house music (which originated in his
              hometown of Chicago). This led to his third album, Graduation, on
              September 11, 2007. It dropped the same day as 50 Cent's album
              Curtis, in what was hyped as a battle for hip-hop's soul — the
              erudite showman versus the bullet-scarred street thug. But with
              Graduation's groundbreaking (for hip-hop) palette of layered
              electronic synthesizers, and sloganeering wordplay — "I'm like the
              fly Malcolm X/Buy any jeans necessary," he smirked on "Good
              Morning" — there could only be one winner. West's album sold
              957,000 copies in its first six days, going straight to No. 1.
              <br></br>
              <br></br>
              With the music industry beginning to wring its hands about the
              effect of the internet on its profit margins, West simply embraced
              the change with his video for the single "Can't Tell Me Nothing,"
              for which he hired the comedian Zach Galifianakis to lip-sync
              along to the lyrics on an alternate version, creating a viral
              sensation on YouTube.
            </p>
          </div>
          <iframe
            title="Graduation by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/4SZko61aMnmgvNhfhgTuD3?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-808" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>808s &#38; Heartbreak</h2>
            <p>
              Conceived in the wake of several distressing personal events for
              West, 808s &#38; Heartbreak marked a major musical departure from
              his previous rap records, instead featuring a sparse, electronic
              sound and vocals sung through an Auto-Tune processor. The
              production also abandons conventional hip hop sounds in favor of a
              minimalist sonic palette, with prominent use of the Roland TR-808
              drum machine. West's lyrics on the album explore themes of loss,
              alienated fame, and heartache, inspired by the breakup with his
              fiancée, his struggles with pop stardom, and the death of his
              mother.
            </p>
          </div>
          <iframe
            title="808s &#38; Heartbreak by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/5ykOQlHaE5ZRxMibfI75YW?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Twisted" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>My Beautiful Dark Twisted Fantasy</h2>
            <p>
              West returned to music in November 2010 with his fifth album —
              with paranoid celebrity and rampant consumption the dominant
              themes: it was a bombastic and towering monument to
              self-aggrandizement that sounded "like an instant greatest hits"
              according to Pitchfork. It was the best and worst of Kanye West
              rolled into one: a magnum opus that bordered on the delusional. It
              yielded four singles, including "Monster," on which West, Jay Z
              and Rick Ross were memorably battered into runners-up spots by a
              blistering guest verse from Nicki Minaj. West and his old sparring
              partner Jay Z then released a collaborative album, Watch the
              Throne in 2011 — it yielded seven singles including "Otis" and
              "Niggas in Paris"; and added three more Grammy wins to West's and
              Jay Z's respective hauls.
            </p>
          </div>
          <iframe
            title="My Beautiful Dark Twisted Fantasy by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/20r762YmB5HeofjMCiPMLv?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Yeezus" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>Yeezus</h2>
            <p>
              Anyone listening to West's sixth album, Yeezus, which came out in
              June 2013, would hear little evidence that the rapper was living
              an idyllic existence. Sonically the album was abrasive, raw and
              almost entirely melody-free — West had enlisted the producer Rick
              Rubin to make wholesale changes just days before the release.
              Lyrically, West sounded paranoid and narcissistic to the point of
              bathos, especially on "I Am a God," which contained the immortal
              line "Hurry up with my damn croissants."
              <br></br>
              <br></br>West claimed the album was an "attack on the commercial,"
              and certainly it contained little that was radio-friendly —
              barring the magnificent glam-rock-inspired single, "Black
              Skinhead" (the first of only two singles from the album). Yeezus
              remains the only West album to have sold fewer than 1 million
              copies in the US. Yet it was critically well received — not least
              by the rock legend Lou Reed, who told Rolling Stone that "Each
              track is like making a movie... The guy really, really, really is
              talented."
            </p>
          </div>
          <iframe
            title="Yeezus by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/7D2NdGvBHIavgLhmcwhluK?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Pablo" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>The Life of Pablo</h2>
            <p>
              There was more controversy in the run-up to his seventh album, The
              Life of Pablo. Before its release on February 14, 2016, West hit
              the headlines for a series of controversial tweets - including one
              that proclaimed Bill Cosby, on trial for drugging and raping
              women, to be innocent. He started a beef with the rapper Wiz
              Khalifa, whom he mistakenly believed to have criticized his wife,
              Kim Kardashian ("I am your OG and I will be respected as such,"
              West tweeted.). He also apologized to Michael Jordan for appearing
              to diss the basketball legend in his lyrics. And then the day
              after his album came out, West bizarrely urged his followers to
              lobby Facebook founder Mark Zuckerberg to invest $1 billion into
              West's "ideas." He also claimed to be $53 million in debt.
              <br></br>
              <br></br>
              The album itself was another change of direction, and another
              triumph. It covered a much broader sonic sweep than Yeezus,
              incorporating a vast array of sounds, styles and influences, from
              trap to gospel to Auto-Tune crooning, to avant-pop, classic soul
              and dancehall. Guest vocalists included Frank Ocean, Chance the
              Rapper, Rihanna, Desiigner and Kid Cudi. It became West's sixth
              solo album in succession to debut at No. 1 on the Billboard 200
              chart.
            </p>
          </div>
          <iframe
            title="The Life of Pablo by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/7gsWAHLeT0w7es6FofOXk1?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Ye" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>Ye</h2>
            <p>
              West produced Ye with Mike Dean, alongside numerous others.
              Succeeding the release of Pusha T's Daytona, the album was the
              second of five seven-track albums produced by West in what were
              referred to as the "Wyoming Sessions", which were set to be
              released weekly. It preceded the release of West's collaborative
              album with Kid Cudi, as Kids See Ghosts, titled Kids See Ghosts.
              The latter's release was succeeded by that of Nas' Nasir, and
              Teyana Taylor's K.T.S.E.. West held a listening party for Ye on
              May 31, 2018, which was livestreamed from Jackson Hole.
            </p>
          </div>
          <iframe
            title="Ye by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/2Ek1q2haOnxVqhvVKqMvJe?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Jesus" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>Jesus is King</h2>
            <p>
              Jesus Is King is the ninth studio album by American rapper Kanye
              West. It was released on October 25, 2019, through GOOD Music and
              distributed by Def Jam Recordings. The album follows a Christian
              theme, different from his usual work. West described it as "an
              expression of the gospel". It features guest appearances from
              Clipse, Ty Dolla Sign, Kenny G, Fred Hammond, Ant Clemons, and the
              Sunday Service Choir. Production is included from West, Federico
              Vindver, Angel Lopez, BoogzDaBeast, and Timbaland, among others.
              <br></br>
              <br></br>The final release of Jesus Is King was simultaneous with
              that of a concert film of the same name, which included a number
              of the tracks as part of the soundtrack. The singles "Follow God"
              and "Closed on Sunday" were both released in November 2019,
              charting in the top 20 of the US Billboard Hot 100. The album
              received mixed reviews from music critics, with a number of them
              drawing comparisons between it and West's previous solo album, Ye
              (2018). Some critics complimented the former's composition, while
              others expressed negative feelings towards the lyrics and the
              inconsistency of ideas.
            </p>
          </div>
          <iframe
            title="Jesus is King by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/0FgZKfoU2Br5sHOfvZKTI9?utm_source=generator"
            width="40%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      )}
      {view === "Music-Donda" && (
        <div className="individualAlbum">
          <div className="individualAlbumDescription">
            <h2>Donda</h2>
            <p>
              Donda is the tenth studio album by American rapper Kanye West,
              released through GOOD Music on August 29, 2021, with distribution
              handled by Def Jam Recordings, his last release with the label.
              West recorded much of the material at multiple locations in the
              summer of 2021, including Bighorn Mountain Ranch in Wyoming and
              Mercedes-Benz Stadium in Atlanta. It features guest vocals from
              the Sunday Service Choir, Jay-Z, Playboi Carti, Lil Baby, the
              Weeknd, Vory, Kid Cudi, DaBaby, Baby Keem, and Marilyn Manson,
              among various others; vocals from Chris Brown were also included
              prior to the album being updated. West, BoogzDaBeast, Dem Jointz,
              Mike Dean, and Ojivolta primarily helmed its production.
            </p>
          </div>
          <iframe
            title="Donda by Kanye West Spotify Playlist"
            src="https://open.spotify.com/embed/album/5CnpZV3q5BcESefcB3WJmz?utm_source=generator"
            width="40%"
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
