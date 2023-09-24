import "./styles.css";
import gitLogo from "../../assets/logos/github-mark-white.png";
import LinkLogo from "../../assets/logos/LI-In-Bug.png";
import Icon from "../icons";

export default function () {
  return (
    <ul id="icons">
      <Icon
        href="https://www.codewars.com/users/Willlasbury"
        src="https://www.codewars.com/packs/assets/logo.f607a0fb.svg"
        alt="CodeWars logo"
      />
      <Icon
        href="https://github.com/Willlasbury"
        src={gitLogo}
        alt="Github logo"
      />
      <Icon
        href="https://www.linkedin.com/in/william-asbury-2613a824b/"
        src={LinkLogo}
        alt="LinkedIn logo"
      />
    </ul>
  );
}
