import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Browse from "./Browse";

const HomePage = () => {
  const [bar1, setBar1] = useState("clicked");
  const [bar2, setBar2] = useState("un-clicked");
  const [activeBoard, setActiveBoard] = useState("active");
  const [activeBrowse, setActiveBrowse] = useState("in-active");

  const changeToBrowse = () => {
    setBar1("un-clicked");
    setBar2("clicked");
    setActiveBrowse("active");
    setActiveBoard("in-active");
  };
  const changeToBoard = () => {
    setBar1("clicked");
    setBar2("un-clicked");
    setActiveBoard("active");
    setActiveBrowse("in-active");
  };

  return (
    <Container>
      <NavBar>
        <HamBurgerMenu>III</HamBurgerMenu>
        <Heading>Gradients.k</Heading>
        <Login>K</Login>
      </NavBar>
      <HomeSection>
        <Tabs>
          <span className={bar1} onClick={changeToBoard}>
            Board
          </span>
          <span className={bar2} onClick={changeToBrowse}>
            Browse
          </span>
        </Tabs>
        <BoardContainer className={activeBoard}>
          <Board></Board>
        </BoardContainer>
        <BrowseContainer className={activeBrowse}>
          <Browse></Browse>
        </BrowseContainer>
      </HomeSection>
    </Container>
  );
};

// outside container
const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 100vh;
`;

// navbar and its styled components
const NavBar = styled.header`
  background-color: black;
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0%;
  @media (min-width: 768px) {
    height: 6.3vh;
  }
`;

const HamBurgerMenu = styled.span`
  transform: rotate(90deg);
  margin: 0px 15px;
  font-size: 25px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Heading = styled.div`
  font-size: 28px;
  position: relative;
  @media (min-width: 768px) {
    position: absolute;
    font-size: 35px;
    margin: 0px 55px;
  } ;
`;

const Login = styled.span`
  margin: 0px 15px;
  font-size: 18px;
  padding: 3px 5px;
  /* border-bottom: 1.5px solid white; */
  @media (min-width: 768px) {
    font-size: 27px;
  }
`;

// tabs-switcher and its styled components

const HomeSection = styled.section`
  position: relative;

  .in-active {
    display: none;
  }
  .active {
    display: flex;
  }
`;

const Tabs = styled.nav`
  background-color: black;
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: sticky;
  top: 6vh;
  left: 0px;
  z-index: 100;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 22px;
    height: 5vh;
    justify-content: start;
    position: sticky;
    top: 6.3vh;
    left: 0px;
    padding-bottom: 20px;
  }
  span {
    margin: 0px 5px;
    padding-bottom: 3px;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-bottom: 1.6px solid;
    border-radius: 1px;
    cursor: pointer;
    margin-top: 0.7rem;
  }
  > :first-of-type {
    margin-left: 0.5rem;
    @media (min-width: 768px) {
      margin-left: 4rem;
    }
  }
  .clicked {
    border-color: white;
    transition: 500ms all ease-in;
  }
  .un-clicked {
    transition: 800ms all ease-out;
    border-color: black;
  }
`;

const BoardContainer = styled.aside`
  background-color: red;
`;
const BrowseContainer = styled.aside`
  background-color: #454545;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

export default HomePage;
