// Import Modules
import React, { useState } from "react";
import styled from "styled-components";

// Import My files
import ListTitle from "./../Components/ListTitle";
import DateSelect from "./../Components/DateSelectBox";
import PostBlock from "./../Components/PostBlock";

// Style Components
const SeeOtherPost = styled.div`
  background-color: #f8f8f8;
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  min-height: 90vh;
  padding-top: 10px;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export default () => {
  return (
    <SeeOtherPost>
      <Container>
        <ListTitle title={"🏆 Best Daily 🏆"} />
        <section>
          <DateSelect
            loading={false}
            year={2019}
            month={6}
            dateCountPlus={() => console.log("Up")}
            dateCountMinor={() => console.log("Down")}
          />
          <PostBlock
            key={123}
            id={123}
            date={"2019 / 05 / 28"}
            author={"smfls"}
            title={"post.title"}
            content={"sdfa"}
            cover={""}
            likes={10}
          />
        </section>
      </Container>
    </SeeOtherPost>
  );
};
