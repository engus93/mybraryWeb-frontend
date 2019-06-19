// Import Modules
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Import My Files
import BannerBook from "../../Components/BannerBook";
import Loader from "../../Components/Loader";

// Style Components
const Main = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Wrapper = styled.div`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const MainBanner = styled(Slider)`
  border: ${props => props.theme.boxBorder};
`;

const MainCategory = styled.div`
  height: 300px;
  background-color: #ddd;
`;

export default ({ sliderSetting, loading, ListBook }) => {
  if (loading) {
    return (
      <Main>
        <Wrapper>
          <Loader />
        </Wrapper>
      </Main>
    );
  } else if (!loading) {
    return (
      <Main>
        <Wrapper>
          <MainBanner {...sliderSetting}>
            {true &&
              ListBook.map(item => {
                return (
                  <BannerBook
                    key={item.itemId}
                    id={item.itemId}
                    title={item.title}
                    image={item.cover}
                    author={item.author}
                  />
                );
              })}
          </MainBanner>
          <MainCategory />
          <MainCategory />
          <MainCategory />
        </Wrapper>
      </Main>
    );
  }
  return null;
};
