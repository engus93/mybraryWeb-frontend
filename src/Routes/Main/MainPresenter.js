// Import Modules
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Import My Files
import BannerBook from "../../Components/BannerBook";

// Style Components
const Main = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Wrapper = styled.div`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
`;

const MainBanner = styled(Slider)`
  border: ${props => props.theme.boxBorder};
`;

const MainCategory = styled.div`
  height: 300px;
  background-color: #ddd;
`;

export default () => {
  const sliderSetting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Main>
      <Wrapper>
        <MainBanner {...sliderSetting}>
          <BannerBook />
          <BannerBook />
          <BannerBook />
          <BannerBook />
          <BannerBook />
        </MainBanner>
        <MainCategory />
        <MainCategory />
        <MainCategory />
      </Wrapper>
    </Main>
  );
};
