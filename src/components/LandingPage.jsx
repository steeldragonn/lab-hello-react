import "./style.css";
import nav from "../assets/linebar.png";
import ironhacklogo from "../assets/logopic.png";

export default function LandingPage() {
  return (
    <main>
      <div className="header-img">
        <img src={ironhacklogo} className="logo" />
        <img src={nav} className="nav" />
      </div>
      <div className="titlepart">
        <h2>Say hello to Reactjs</h2>
        <p1>
          You will learn how to use the most popular frontend library, and
          become a genius.
        </p1>
        <button>coolio!</button>
      </div>
    </main>
  );
}
