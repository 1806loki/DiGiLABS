import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="Container">
        <div className="mesh-background">
          <p>Seamless experience </p>
          <h1>Unleashing the Next Generation of Card Solutions</h1>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <button>
            Unlock your Card
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-right">
                <path
                  id="Icons"
                  d="M4.66666 10.0001H16.3333M16.3333 10.0001L10.5 4.16675M16.3333 10.0001L10.5 15.8334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <p>*No credit card required</p>
      </div>
    </div>
  );
};

export default HeroSection;
