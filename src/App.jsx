export default function App() {
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
            <div className="bookmark">
              <button className="btn__bookmark">
                <img
                  src="../public/images/icon-bookmark.svg"
                  alt="bookmark icon"
                  className="bookmark--icon"
                />
              </button>
              <span>Bookmark</span>
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

          <div className="reward">
            <div className="reward__heading--box">
              <h4 className="reward__heading">Bamboo Stand</h4>
              <p className="pledge__heading">Pledge $25 or more</p>
            </div>
            <p className="text reward__text">
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you&apos;ll be
              added to a special Backer member list.
            </p>
            <div className="btn__left--box">
              <div className="left__box">
                <p className="reward__number">101</p>
                <p className="text">left</p>
              </div>
              <button className="btn btn__reward">Select Reward</button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
