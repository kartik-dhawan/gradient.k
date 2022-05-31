import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { switchToBoard, switchToBrowse } from "../redux/reducers/utilitySlice";
import Board from "./Board";
import Browse from "./Browse";

const HomePage = () => {
  const board = useSelector((state) => state.utility.boardToggle);
  const browse = useSelector((state) => state.utility.browseToggle);
  const dispatch = useDispatch();
  console.log("board is: " + board);
  console.log("browse is: " + browse);

  return (
    <Container>
      <NavBar>
        <HamBurgerMenu>III</HamBurgerMenu>
        <Heading>Gradients.k</Heading>
        <Login>K</Login>
      </NavBar>
      <HomeSection>
        <Tabs>
          <span
            className={board ? "active" : "inactive"}
            onClick={() => dispatch(switchToBoard())}
          >
            Board
          </span>
          <span
            className={browse ? "active" : "inactive"}
            onClick={() => dispatch(switchToBrowse())}
          >
            Browse
          </span>
        </Tabs>
        {board ? (
          <Board></Board>
        ) : browse ? (
          <BrowseContainer>
            <Browse></Browse>
          </BrowseContainer>
        ) : (
          ""
        )}
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

const HomeSection = styled.section``;

const Tabs = styled.nav`
  background-color: black;
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: fixed;
  top: 6vh;
  left: 0px;
  z-index: 100;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 22px;
    height: 5vh;
    justify-content: start;
  }
  span {
    margin: 0px 5px;
    padding-bottom: 3px;
    font-weight: 500;
    letter-spacing: 0.5px;
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
`;

const BrowseContainer = styled.aside`
  background-color: #454545;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
`;

export default HomePage;
