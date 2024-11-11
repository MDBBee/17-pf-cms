import hero from './assets/undraw.svg';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, sint
          fugiat debitis magnam, alias quia, aperiam dolorem quas eius incidunt
          fuga. Nisi rerum, architecto cumque ipsum et dignissimos magni eius!
        </p>
      </div>
      <div className="img-container">
        <img src={hero} alt="Web image" className="img" />
      </div>
    </section>
  );
}
export default Hero;
