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

  return (
    <Container>
      <NavBar>
        <HamBurgerMenu>K</HamBurgerMenu>
        <Heading className="projectHeading">Gradients.k</Heading>
        <Login>
          <a href="https://github.com/kartikd07/gradient.k" target="_blank">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </Login>
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
  height: max-content;
`;

// navbar and its styled components
const NavBar = styled.header`
  background-color: rgb(16, 11, 23);
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0%;
  @media (min-width: 768px) {
    height: 4rem;
  }
`;

const HamBurgerMenu = styled.span`
  /* transform: rotate(90deg); */
  margin: 10px;
  padding: 2px 14px;
  transform: scale(0.87);
  border-bottom: 1.2px solid white;
  border-right: 1.2px solid white;
  border-radius: 40%;
  font-size: 25px;
  cursor: pointer;
  @media (min-width: 768px) {
    visibility: hidden;
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
  margin: 10px 15px 0px 15px;
  padding: 3px 5px;
  > a {
    > svg {
      height: 45px;
      width: 45px;
      cursor: pointer;
      @media (min-width: 768px) {
        height: 55px;
        width: 55px;
      }
    }
  }
`;

// tabs-switcher and its styled components

const HomeSection = styled.section``;

const Tabs = styled.nav`
  background-color: rgb(16, 11, 23);
  width: 100%;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: fixed;
  top: 4rem;
  left: 0px;
  z-index: 100;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 22px;
    height: 2.4rem;
    justify-content: start;
    top: 3.8rem;
  }
  span {
    margin: 0px 5px;
    padding-bottom: 3px;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-radius: 1px;
    cursor: pointer;
    margin-top: 0.7rem;
    transition: 1000ms all ease;
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
  min-height: 40rem;
`;

export default HomePage;
