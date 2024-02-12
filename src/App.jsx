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

      <section className="main__section">
        <img
          src="../public/images/logo-mastercraft.svg"
          alt="logo"
          className="logo--icon"
        />
        <h2 className="heading">Mastercraft Bamboo Monitor Riser</h2>
        <p className="text">
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="btns__box">
          <button className="btn btn__main">Back this project</button>
          <button className="btn__bookmark">
            <img
              src="../public/images/icon-bookmark.svg"
              alt="bookmark icon"
              className="bookmark--icon"
            />
          </button>
        </div>
      </section>
    </div>
  );
}
