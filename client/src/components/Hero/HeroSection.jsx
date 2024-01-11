const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__heading">
        <h1>
          Discover more than <span>1000+ jobs</span>
        </h1>
        <p>
          Explore Endless Opportunities: Your Dream Job Awaits Among 1000+
          Exciting Career Paths!
        </p>
      </div>
      <div className="hero__search">
        <input type="text" placeholder="Job title or keyword" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
      <div className="hero__ball1" />
      <div className="hero__ball2" />
    </section>
  );
};

export default HeroSection;
