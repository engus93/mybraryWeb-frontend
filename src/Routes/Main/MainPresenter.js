// Import Modules
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Import My Files
import BannerBook from "../../Components/BannerBook";
import Loader from "../../Components/Loader";
import ListTitle from "../../Components/ListTitle";

// Style Components
const Main = styled.div`
  background-color: ${props => props.theme.whiteBG};
  padding-bottom: 40px;
`;

const Wrapper = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default ({
  bestSellerSlider,
  categorySlider,
  loading,
  MainListBook
}) => {
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
          <section>
            <ListTitle
              title={`🏆 ${new Date().getFullYear()}년 ${new Date().getMonth() +
                1}월 베스트셀러 🏆`}
              moreLink={"bestSeller"}
            />
            <Slider {...bestSellerSlider}>
              {MainListBook.slice(0, 10).map(item => {
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
            </Slider>
          </section>
          <section>
            <ListTitle
              title={`🎁 ${new Date().getFullYear()}년 ${new Date().getMonth() +
                1}월 신작 🎁`}
              moreLink={"newBook"}
            />
            <Slider {...categorySlider}>
              {MainListBook.slice(10, 19).map(item => {
                return (
                  <BannerBook
                    key={item.itemId}
                    id={item.itemId}
                    title={item.title}
                    image={item.cover}
                    author={item.author}
                    size={"sm"}
                  />
                );
              })}
            </Slider>
          </section>

          <section>
            <ListTitle title={`🥗 오늘 뭐 먹지? 🍣`} moreLink={"Cook"} />
            <Slider {...categorySlider}>
              {MainListBook.slice(20, 29).map(item => {
                return (
                  <BannerBook
                    key={item.itemId}
                    id={item.itemId}
                    title={item.title}
                    image={item.cover}
                    author={item.author}
                    size={"sm"}
                  />
                );
              })}
            </Slider>
          </section>
          <section>
            <ListTitle title={`🚄 여행을 떠나요~ 🛬`} moreLink={"travel"} />
            <Slider {...categorySlider}>
              {MainListBook.slice(30, 39).map(item => {
                return (
                  <BannerBook
                    key={item.itemId}
                    id={item.itemId}
                    title={item.title}
                    image={item.cover}
                    author={item.author}
                    size={"sm"}
                  />
                );
              })}
            </Slider>
          </section>
          <section>
            <ListTitle title={`🧘🏻‍♂️ 마음의 평화 🧘🏻‍♀️`} moreLink={"humanities"} />
            <Slider {...categorySlider}>
              {true &&
                MainListBook.slice(40, 49).map(item => {
                  return (
                    <BannerBook
                      key={item.itemId}
                      id={item.itemId}
                      title={item.title}
                      image={item.cover}
                      author={item.author}
                      size={"sm"}
                    />
                  );
                })}
            </Slider>
          </section>
          <section>
            <ListTitle title={`👨🏻‍💻 어제보다는 오늘 더! 👩🏻‍💻`} moreLink={"self"} />
            <Slider {...categorySlider}>
              {true &&
                MainListBook.slice(50, 59).map(item => {
                  return (
                    <BannerBook
                      key={item.itemId}
                      id={item.itemId}
                      title={item.title}
                      image={item.cover}
                      author={item.author}
                      size={"sm"}
                    />
                  );
                })}
            </Slider>
          </section>
        </Wrapper>
      </Main>
    );
  }
  return null;
};
