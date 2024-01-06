import "./Footer.css";
import ModeUI from "../../assets/ModeUILogo.svg";
import git from "../../assets/git.svg";
import linkedln from "../../assets/in.svg";
import discord from "../../assets/discord.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Container">
        <div className="row1">
          <img src={ModeUI} alt="ModeUI logo" />
          <p>
            Mode UI is a comprehensive design system that empowers designers and
            developers to create cohesive and visually stunning user interfaces
            across various platforms and devices
          </p>
        </div>
        <div className="row2">
          <ul className="MainMenu">
            <ul>
              <li>Company</li>
              <li>About us</li>
              <li>Pricing</li>
              <li>Contact us</li>
              <li>Features</li>
            </ul>
            <ul>
              <li>Product</li>
              <li>Figma design system</li>
              <li>Ios kit</li>
              <li>Android kit</li>
              <li>Wireframe</li>
            </ul>
            <ul>
              <li>Resources</li>
              <li>Templates</li>
              <li>Landing pages</li>
              <li>Documentation</li>
              <li>Comp library</li>
            </ul>
            <ul>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
              <li>Affiliate programme</li>
            </ul>
            <ul>
              <li>Support</li>
              <li>Help centre</li>
              <li>Raise ticket</li>
              <li>Report</li>
              <li>Refund</li>
            </ul>
          </ul>
        </div>
        <div className="row3">
          <div>
            <img src={git} alt="gtihub" />
            <img src={linkedln} alt="linkedln" />
            <img src={discord} alt="disord" />
          </div>
          <div>
            <p>© 2023 Mode UI Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
