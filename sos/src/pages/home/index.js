import { useRef } from "react";

import Introduce from "../../components/introduce";
import Claim from "../../components/claim";
import Distribution from "../../components/distribution";
import Stake from "../../components/stake";
import Farm from "../../components/farm";
import ConnectWallet from "../../components/ConnectWallet";

const Home = () => {
  const claimSectionRef = useRef(null);
  const farmSectionRef = useRef(null);
  const stakeSectionRef = useRef(null);

  const scrollClick = (val) => {
    switch (val) {
      case "claim":
        claimSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "farm":
        farmSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "stake":
        stakeSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        claimSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Introduce scrollClick={scrollClick} />
      <div ref={claimSectionRef}>
        <Claim />
      </div>
      <Distribution />
      <div ref={stakeSectionRef}>
        <Stake />
      </div>
      <div ref={farmSectionRef}>
        <Farm />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Home;
