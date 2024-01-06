import "./LogoCloud.css";
import Nuxt from "../../assets/Nuxt.svg";
import miro from "../../assets/miro.svg";
import files from "../../assets/files.png";
import wise from "../../assets/wise.svg";
import dribble from "../../assets/dribble.svg";
import kinsta from "../../assets/kinsta.png";
import angellist from "../../assets/Angellist.svg";
import Behance from "../../assets/Behance.svg";

const LogoCloud = () => {
  return (
    <div className="LogoCloud">
      <div className="Container">
        <ul>
          <li className="logo">
            <img src={Nuxt} alt="nuxt logo" />
          </li>
          <li className="logo">
            <img src={miro} alt="miro logo" />
          </li>
          <li className="logo">
            <img src={files} alt="Lottie Files logo" />
          </li>
          <li className="logo">
            <img src={wise} alt="wise logo" />
          </li>
          <li className="logo">
            <img src={dribble} alt="" />
          </li>
          <li className="logo">
            <img src={kinsta} alt="" />
          </li>
          <li className="logo">
            <img src={angellist} alt="" />
          </li>
          <li className="logo">
            <img src={Behance} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogoCloud;
