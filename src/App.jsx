import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Bamboo Stand",
    pledge: "$25",
    text: `You get an ergonomic stand made of natural bamboo. You&apos;ve helped us launch our promotional campaign, and you&apos;ll be added to a special Backer member list.`,
    left: 101,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    pledge: "$75",
    text: `You get a Black Special Edition computer stand and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.`,
    left: 64,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    pledge: "$200",
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 0,
  },
];

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="wrapper">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src="../public/images/logo.svg" alt="logo" />
          </div>
          <div className="hamburger">HAM</div>
        </nav>
      </header>

      <section className="main__content">
        <div className="cta__section section__wrapper">
          <img
            src="../public/images/logo-mastercraft.svg"
            alt="logo"
            className="logo--icon"
          />
          <h2 className="heading--cta">Mastercraft Bamboo Monitor Riser</h2>
          <p className="text text--cta">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="btns__box">
            <button className="btn btn__main">Back this project</button>
            <div className="checkbox-wrapper">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                />
                <div className="label-container">
                  <svg
                    width="56"
                    height="56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <circle cx="28" cy="28" r="28" />
                      <path d="M23 19v18l5-5.058L33 37V19z" />
                    </g>
                  </svg>
                  <p>{isChecked ? "Bookmarked" : "Bookmark"}</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <section className="stats__section section__wrapper">
          <div className="stats">
            <div className="stats__box">
              <p className="number__big">$89,914</p>
              <p className="text">of $100,000 backed</p>
            </div>
            <span className="border"></span>
            <div className="stats__box">
              <p className="number__big">5,007</p>
              <p className="text">total backers</p>
            </div>
            <span className="border"></span>
            <div className="stats__box">
              <p className="number__big">56</p>
              <p className="text">days left</p>
            </div>
          </div>

          <div className="stats__line">
            <span className="green"></span>
          </div>
        </section>

        <section className="about__section section__wrapper">
          <div className="about__text-box">
            <h3 className="about__heading">About this project</h3>
            <p className="text about__text">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
              <br />
              <br /> Featuring artisan craftsmanship, the simplicity of design
              creates extra desk space below your computer to allow notepads,
              pens, and USB sticks to be stored under the stand.
            </p>
          </div>

          {data.map((reward) => (
            <div
              className={reward.left === 0 ? "reward outofstock" : "reward"}
              key={reward.id}
            >
              <div className="reward__heading--box">
                <h4 className="reward__heading">{reward.title}</h4>
                <p className="pledge__heading">
                  Pledge {reward.pledge} or more
                </p>
              </div>
              <p className="text reward__text">{reward.text}</p>
              <div className="btn__left--box">
                <div className="left__box">
                  <p className="reward__number">{reward.left}</p>
                  <p className="text">left</p>
                </div>
                <button
                  className={
                    reward.left === 0
                      ? "btn__reward btn__outofstock"
                      : "btn btn__reward"
                  }
                >
                  {reward.left === 0 ? "Out of stock" : "Select Reward"}
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
