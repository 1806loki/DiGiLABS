/* eslint-disable react/no-unescaped-entities */
import "./Testimonial.css";
import wise from "../../assets/wise.svg";
import avatar from "../../assets/avatar.svg";
import rating from "../../assets/rating.svg";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="Container">
        <div className="Row">
          <img src={wise} alt="wise" />
          <p className="testi">
            I had the pleasure of experiencing the next generation of card
            solutions with this incredible product. It's refreshing to see such
            innovation in the financial industry.
          </p>
          <div className="profile">
            <img src={avatar} alt="avatar" className="avatar" />
            <p className="name">Nick Babich</p>
            <p className="profession">Lead Designer</p>
            <div className="stars">
              <img src={rating} alt="rating" />
              <img src={rating} alt="rating" />
              <img src={rating} alt="rating" />
              <img src={rating} alt="rating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
