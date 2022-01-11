import { jarallax, jarallaxElement } from "jarallax";
import { useEffect } from "react";

import { Images } from "../../data/images";
import SocialIcons from "../OfficialIcon";
import { Title, Text, Button } from "../Styled";

const Introduce = ({ scrollClick }) => {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      imgSrc: Images.introduce,
    });
    jarallaxElement();
    return () => {
      jarallax(document.querySelectorAll(".jarallax"), "destroy");
    };
  });

  return (
    <div data-jarallax data-speed="0.2" className="jarallax">
      <div className="py-48 px-5">
        <Title className="text-center">{"Introducing $SOS"}</Title>
        <Text className="mt-10 text-center">
          {
            "The token for the largest NFT community, to pay tribute, to protect, to promote..."
          }
        </Text>
        <div className="grid xs:grid-cols-3 grid-cols-1 mt-12 max-w-2xl mx-auto">
          <Button
            onClick={() => {
              scrollClick("claim");
            }}
            width="200"
            height="56"
            className="mx-auto"
          >
            {"Initiate Claim"}
          </Button>
          <Button
            onClick={() => {
              scrollClick("farm");
            }}
            width="200"
            height="56"
            className="mx-auto xs:my-0 my-5"
          >
            {"Farm"}
          </Button>
          <Button
            onClick={() => {
              scrollClick("stake");
            }}
            width="200"
            height="56"
            className="mx-auto"
          >
            {"Stake"}
          </Button>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Introduce;
