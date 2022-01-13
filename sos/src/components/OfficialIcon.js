import { OfficialLink } from "../data/officialLink";
import { Images } from "../data/images";

const OfficialIcon = () => {
  return (
    <div className="flex justify-between max-w-200 mx-auto mt-16">
      <a href={OfficialLink.snapshot} target="_blank" rel="noreferrer">
        <img src={Images.icons.snapshot} alt="icon" />
      </a>
      <a href={OfficialLink.twitter} target="_blank" rel="noreferrer">
        <img src={Images.icons.twitter} alt="icon" />
      </a>
      <a href={OfficialLink.discord} target="_blank" rel="noreferrer">
        <img src={Images.icons.discord} alt="icon" />
      </a>
      <a href={OfficialLink.ehterscan} target="_blank" rel="noreferrer">
        <img src={Images.icons.ehterscan} alt="icon" />
      </a>
      <a href={OfficialLink.nortion} target="_blank" rel="noreferrer">
        <img src={Images.icons.nortion} alt="icon" />
      </a>
      <a href={OfficialLink.certik} target="_blank" rel="noreferrer">
        <img src={Images.icons.certik} alt="icon" />
      </a>
      <a href={OfficialLink.forum} target="_blank" rel="noreferrer">
        <img src={Images.icons.forum} alt="icon" />
      </a>
    </div>
  );
};

export default OfficialIcon;
