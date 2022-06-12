import { useState, useRef, useEffect } from "react";
import commands from "../utils/interfaces";
import FocusLock from "react-focus-lock";

interface Quote {
  quote: string;
}

export default function Console(): JSX.Element {
  const [log, setLog] = useState<JSX.Element[]>([
    <p key="start">
      I am KanyeBot - type <b>help</b> to see a list of supported commands
    </p>,
  ]);
  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [quote, setQuote] = useState<string>("");
  const [triggerGetNewQuote, setTriggerGetNewQuote] = useState<boolean>(false);

  useEffect(() => {
    async function fetchQuote() {
      const rawQuoteData = await fetch("https://api.kanye.rest/");
      const jsonQuoteData: Quote = await rawQuoteData.json();
      setQuote(jsonQuoteData.quote);
    }
    fetchQuote();
  }, [triggerGetNewQuote]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [log]);

  const commandsResponses: commands[] = [
    {
      command: "help",
      response: (
        <p>
          supported commands:{" "}
          <b>
            wisdom, favourite film, best music video of all time, legal name,
            spirited away vs akira
          </b>
        </p>
      ),
    },

    {
      command: "best music video of all time",
      response: (
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=1z8gCZ7zpsQ&ab_channel=ArtisanNewsService"
            className="link"
          >
            Beyonce - Single Ladies
          </a>
        </p>
      ),
    },
    {
      command: "wisdom",
      response: (
        <p>
          {quote} <br></br>
          <br></br>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kanye.rest/"
            className="link"
          >
            Source
          </a>
        </p>
      ),
    },
    {
      command: "favourite film",
      response: (
        <p>
          Akira and There Will be Blood are equally my 2 favourite movies of all
          time.
          <br></br>
          <br></br>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pbs.twimg.com/media/DiafHdDWsAEkRgK.jpg"
            className="link"
          >
            Source
          </a>
        </p>
      ),
    },
    {
      command: "spirited away vs akira",
      response: (
        <p>
          No way Spirited Away is better than Akira... NOOO WAAAY... sorry was
          just looking at a youtube of top 10 anime films
          <br></br>
          <br></br>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://i.imgur.com/1T3BSmf.jpeg"
            className="link"
          >
            Source
          </a>
        </p>
      ),
    },
    {
      command: "legal name",
      response: (
        <p>
          In 2021, I changed my legal name from “Kanye Omari West” to simply
          “Ye”. In a 2018 interview, I said “I believe ‘ye’ is the most commonly
          used word in the Bible. In the Bible it means you. So, I’m you. I’m
          us. It’s us. It went from being Kanye, which means the only one, to
          just Ye.”
        </p>
      ),
    },
    {
      command: "ls",
      response: (
        <p>
          <b>Nice try!</b>
        </p>
      ),
    },
    {
      command: "cd",
      response: (
        <p>
          <b>Nice try!</b>
        </p>
      ),
    },
    {
      command: "git branch",
      response: (
        <p>
          <b>No branches here!</b>
        </p>
      ),
    },
  ];

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      createLogValue(input);
      setInput("");
    }
  };

  const createLogValue = (terminalInput: string) => {
    if (terminalInput.toLowerCase() === "wisdom")
      setTriggerGetNewQuote(!triggerGetNewQuote);
    const response = commandsResponses.find(
      (element) => element.command === terminalInput.toLowerCase()
    )?.response;
    response
      ? setLog([
          ...log,
          <p key={terminalInput}>→$ {terminalInput} </p>,
          response,
        ])
      : setLog([
          ...log,
          <p key={terminalInput}>→$ {terminalInput} </p>,
          <p key={terminalInput + "not found"}>
            Command not found, type <b>help</b> to see commands
          </p>,
        ]);
  };
  console.log(input);
  return (
    <div className="terminalContainer">
      <p className="topbar">
        KanyeBot <p className="minimise">- ◰ x</p>
      </p>
      <div className="terminal">
        {log}
        <p className="dollarInput">→$</p>
        <FocusLock className="inputWrapper">
          <input
            className="consoleInput"
            value={input}
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </FocusLock>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
