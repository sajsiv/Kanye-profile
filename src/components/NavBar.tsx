export default function NavBar(): JSX.Element {
  return (
    <div className="nav">
      <img
        alt="Kanye Head which links to main page"
        src="/images/Kanye-head.png"
        className="kanyeHeadImage"
      ></img>
      <div className="navLinks">
        <h3>Bio</h3>
        <h3>Music</h3>
        <h3>KanyeBot</h3>
      </div>
    </div>
  );
}
