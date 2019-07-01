// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Import My Files
import { LeftArrow, RightArrow } from "./Icons";
import Span from "./Span";

// Style Components
const DateSelectBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 20px;
  user-select: none;
  pointer-events: ${props => (props.disalbed ? "none" : "auto")};
`;

const DateBtn = styled.button`
  background-color: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  padding: 5px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

const DateSelect = ({
  loading,
  year,
  month,
  dateCountPlus,
  dateCountMinor
}) => {
  return (
    <DateSelectBox disalbed={loading}>
      <DateBtn onClick={dateCountMinor}>
        <LeftArrow size={14} />
      </DateBtn>
      <Span
        text={`${year}년 ${month}월`}
        fontSize={22}
        marginValue={"auto 10px"}
      />
      <DateBtn onClick={dateCountPlus}>
        <RightArrow size={14} />
      </DateBtn>
    </DateSelectBox>
  );
};

DateSelect.propsTypes = {
  loading: PropTypes.bool.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  dateCountPlus: PropTypes.func.isRequired,
  dateCountMinor: PropTypes.func.isRequired
};

export default DateSelect;
