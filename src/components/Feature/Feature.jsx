import "./Feature.css";
import star from "../../assets/star.svg";
import mobile from "../../assets/mobile.png";
import credit from "../../assets/visa.svg";
import resize from "../../assets/resize.svg";

const Feature = () => {
  return (
    <div className="Feature">
      <div className="Container">
        <div className="top">
          <div className="subtitle">
            <h1>Elevating Card Programs with Cutting-Edge Technology</h1>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button>Compare all Pro features</button>
          </div>
          <div className="column">
            <ul>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="globe">
                    <path
                      id="Icons"
                      d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2"
                      stroke="#582066"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <h4>Globally Accepted</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="key">
                    <path
                      id="Icons"
                      d="M21 2L19 4M19 4L22 7L18.5 10.5L15.5 7.5M19 4L15.5 7.5M11.39 11.61C11.9063 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.027 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3354 18.2919 11.9291 18.9012 11.4161 19.4141C10.9032 19.9271 10.2939 20.3334 9.6233 20.6099C8.95268 20.8864 8.234 21.0275 7.50863 21.025C6.78327 21.0226 6.06554 20.8767 5.39679 20.5958C4.72804 20.3148 4.12147 19.9043 3.612 19.388C2.61013 18.3507 2.05576 16.9614 2.06829 15.5193C2.08082 14.0772 2.65925 12.6977 3.679 11.678C4.69874 10.6583 6.07821 10.0798 7.52029 10.0673C8.96238 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5"
                      stroke="#582066"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <h4>Biometric Integrated</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="lock">
                    <path
                      id="Icons"
                      d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z"
                      stroke="#582066"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <h4>Fully Secured</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="subtitle">
            <h1>Elevating Card Programs with Cutting-Edge Technology</h1>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button>Compare all Pro features</button>
          </div>
          <div className="column">
            <div className="left">
              <div className="phone">
                <img src={star} alt="star" />
                <div className="wand"></div>
                <img src={mobile} alt="mobile" />
              </div>
            </div>
            <div className="right">
              <div className="Container">
                <img src={star} alt="star" id="star" />
                <div className="Card">
                  <div id="visa">
                    <div className="row-1">
                      <div>
                        <h4>Spending</h4>
                        <p>
                          <img src={credit} alt="credit card" /> 9349 visa card
                        </p>
                      </div>
                      <div>
                        <img src={resize} alt="resize" />
                      </div>
                    </div>
                    <div className="row-2">
                      <div>
                        <h4>127.14</h4> <span>USD</span>
                      </div>
                      <div>
                        <p>vs last week</p>
                        <p>Last Purchased ( Feb 24 19:59 UTC-5 )</p>
                      </div>
                    </div>
                    <div className="row-3">
                      <div>
                        <p>400 USD</p>
                        <p>1000 USD</p>
                        <p>4000 USD</p>
                      </div>
                      <div className="percentage">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
