// Import Modules
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";

// Import My Files
import { DownArrow, Person, OtherPosts, LogOut, DropHamburger } from "./Icons";
import Span from "./Span";
import { Library } from "./Icons";
import { useMutation } from "react-apollo-hooks";
import useInput from "../Hooks/useInput";
import Input from "./Input";
import { Home } from "./Icons";

// Style Components
const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #eee;
`;

const HeaderWrapper = styled.div`
  width: 1054px;
  height: 100%;
  margin: 0 auto;
  padding: 7px 12px;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1054px) {
    width: 100%;
  }
`;

const LogoLink = styled(Link)`
  font-size: 20px;
  color: white;
  font-weight: 600;
  margin-right: 10px;
  width: 100px;
  @media (max-width: 425px) {
    display: none;
  }
`;

const SearchInput = styled(Input)`
  width: 50%;
  @media (max-width: 425px) {
    width: 70%;
  }
`;

const MyInfoBox = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: flex-end;
  cursor: pointer;
  margin-left: 10px;
`;

const UserName = styled(Span)`
  color: white;
  margin-right: 5px;
  margin-bottom: 2px;
  font-weight: 600;
`;

const ClickMenu = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 425px) {
    display: none;
  }
`;

const DropMenuResponsive = styled(DropHamburger)`
  display: none;
  @media (max-width: 425px) {
    display: block;
  }
`;

const DropMenu = styled.div`
  position: absolute;
  background-color: ${props => props.theme.mainColorBG};
  box-shadow: ${props => props.theme.boxShadow};
  top: 2em;
  left: -12px;
  right: 0px;
  display: ${({ showing }) => (showing ? "block" : "none")};
  @media (max-width: 425px) {
    left: -85px;
  }
`;

const HomeMenu = styled(Home)`
  display: none;
  margin-right: 10px;
  @media (max-width: 425px) {
    display: block;
  }
`;

const MenuCategoty = styled.div`
  padding: 5px;
  font-weight: 600;
  border-bottom: 1px #eee solid;
  text-align: left;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
`;

const LogoutBtn = styled.button`
  background-color: transparent;
  width: 100%;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

// Apollo Client
const ME = gql`
  {
    me {
      username
    }
  }
`;

const LOG_OUT = gql`
  mutation userLogOut {
    userLogOut @client
  }
`;

export default () => {
  // My Info Query
  const {
    data: { me }
  } = useQuery(ME);

  // Variables
  const searchBar = useInput("");

  // Drop Box Click Function
  const [drop, setDrop] = useState(false);

  const dropMenuBox = useRef();

  // Click Drop Menu
  const clickDropMenu = event => {
    const { path } = event;
    const checkCurrent = path.find(target => {
      return target === dropMenuBox.current;
    });
    if (checkCurrent) {
      setDrop(!drop);
    } else {
      setDrop(false);
    }
  };

  // Add Event Listener
  useEffect(() => {
    document.addEventListener("click", clickDropMenu);
    return () => {
      document.removeEventListener("click", clickDropMenu);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drop]);

  // Log Out Mutation
  const logOut = useMutation(LOG_OUT);

  return (
    <Header>
      <HeaderWrapper>
        <Link to="/">
          <HomeMenu fill={"white"} />
        </Link>
        <LogoLink to="/">MYBRARY</LogoLink>
        <SearchInput placeholder={"Search"} {...searchBar} />
        <MyInfoBox ref={dropMenuBox}>
          <ClickMenu>
            {me && me.username ? (
              <UserName fontSize={14} text={me.username} />
            ) : (
              <UserName fontSize={14} text={"Loading.."} />
            )}
            <DownArrow size={12} fill={"white"} />
          </ClickMenu>
          <DropMenuResponsive fill={"white"} />
          <DropMenu showing={drop}>
            <MenuCategoty>
              <MenuLink to={"/myPage"}>
                <Person size={14} />
                <Span text={"My Page"} marginValue={"0 0 0 7px"} />
              </MenuLink>
            </MenuCategoty>
            <MenuCategoty>
              <MenuLink to={"/seeMyPost"}>
                <Library size={14} />
                <Span text={"Mybrary"} marginValue={"0 0 0 7px"} />
              </MenuLink>
            </MenuCategoty>
            <MenuCategoty>
              <MenuLink to={"/seeAllPost"}>
                <OtherPosts size={14} />
                <Span text={"Other Posts"} marginValue={"0 0 0 7px"} />
              </MenuLink>
            </MenuCategoty>
            <MenuCategoty>
              <LogoutBtn onClick={logOut}>
                <LogOut size={14} />
                <Span text={"Log Out"} marginValue={"0 0 0 7px"} />
              </LogoutBtn>
            </MenuCategoty>
          </DropMenu>
        </MyInfoBox>
      </HeaderWrapper>
    </Header>
  );
};
