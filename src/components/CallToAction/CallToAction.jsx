import "./CallToAction.css";

import headphones from "../../assets/headphones.svg";
import visa from "../../assets/visa.svg";

const CallToAction = () => {
  return (
    <div className="CallToAction">
      <div className="Container">
        <h1>Unlock Limitless Possibilities with Our New Card Solutions</h1>
        <div>
          <button>
            Unlock your card <img src={visa} alt="visa" />
          </button>
          <button>
            Customer support <img src={headphones} alt="headphones" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
