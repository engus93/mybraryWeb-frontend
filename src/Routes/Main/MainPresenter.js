// Import Modules
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import BannerBook from "../../Components/BannerBook";
import Loader from "../../Components/Loader";
import ListTitle from "../../Components/ListTitle";
import {
  bestSeller,
  newBook,
  cook,
  travel,
  humanities,
  selfDevelopment
} from "./../../Styles/Variables";

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
}) => (
  <>
    {loading && <Loader />}
    {!loading && (
      <Main>
        <Helmet>
          <title>{`Main | MyBrary`}</title>
        </Helmet>
        <Wrapper>
          <section>
            <ListTitle title={bestSeller} moreLink={"bestSeller"} />
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
            <ListTitle title={newBook} moreLink={"newBook"} />
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
            <ListTitle title={cook} moreLink={"cook"} />
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
            <ListTitle title={travel} moreLink={"travel"} />
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
            <ListTitle title={humanities} moreLink={"humanities"} />
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
            <ListTitle title={selfDevelopment} moreLink={"self-development"} />
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
    )}
  </>
);
