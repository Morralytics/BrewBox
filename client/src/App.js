import './App.css';
import './static/styles/style.css'

function App() {
  return (
    <>
      <header class="header">
        <div class="nav-box">
          <input id="toggle" type="checkbox" />
          <label for="toggle" class="hamburger">
            <div class="top-bun"></div>
            <div class="meat"></div>
            <div class="bottom-bun"></div>
          </label>
          <div class="nav">
            <div class="nav-wrapper">
              <div class="links">
                <ul>
                  <li><a href="">HOME</a></li>
                  <li><a href="">BREWS</a></li>
                  <li><a href="">ABOUT US</a></li>
                  <li><a href="">CONTACT US</a></li>
                  <li><a href="">LOGIN</a></li>
                  <li><button class="btn">CART</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="home">
          <div>
            <img class="homebackground" src="../images/homeBackground.png" />
          </div>
          <div class="title">
            <h1 class="heroTitle">
              BrewBox
            </h1>
          </div>
          <div class="subTitle">
            <p class="subHeroTitle">Brew life at home.</p>
          </div>
          <div>
            <img class="downarrow " src="../images/arrow_downward_FILL0_wght400_GRAD0_opsz48.png" />
            <div class="explore">Explore</div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
